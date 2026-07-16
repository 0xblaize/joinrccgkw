"use client";

// Tiny localStorage-backed store for portal activity (check-ins, form
// submissions, giving history). Prototype only: no server, no real data.
// Components read via the useStore hook which re-renders on any change.

import { useSyncExternalStore } from "react";

const KEY = "kw_portal_store_v1";

export type CheckIn = {
  id: string;
  service: string; // "Sunday Service" | "Bible Study" | ...
  at: string; // ISO string
};

export type Submission = {
  id: string;
  kind:
    | "testimony"
    | "prayer"
    | "pastoral"
    | "welfare"
    | "workforce"
    | "lifegroup";
  at: string;
  // free-form payload, shape depends on kind
  data: Record<string, unknown>;
};

export type Gift = {
  id: string;
  category: string;
  categoryId: string;
  amount: number;
  method: "online" | "transfer";
  at: string;
  reference: string;
};

export type StoreShape = {
  checkIns: CheckIn[];
  submissions: Submission[];
  gifts: Gift[];
};

const EMPTY: StoreShape = { checkIns: [], submissions: [], gifts: [] };

// ---- low level read/write ------------------------------------------------

function read(): StoreShape {
  if (typeof window === "undefined") return EMPTY;
  try {
    const raw = window.localStorage.getItem(KEY);
    if (!raw) return EMPTY;
    const parsed = JSON.parse(raw) as Partial<StoreShape>;
    return {
      checkIns: parsed.checkIns ?? [],
      submissions: parsed.submissions ?? [],
      gifts: parsed.gifts ?? [],
    };
  } catch {
    return EMPTY;
  }
}

const listeners = new Set<() => void>();
let cache: StoreShape | null = null;

function emit() {
  cache = read();
  listeners.forEach((l) => l());
}

function write(next: StoreShape) {
  if (typeof window === "undefined") return;
  window.localStorage.setItem(KEY, JSON.stringify(next));
  emit();
}

function subscribe(cb: () => void) {
  listeners.add(cb);
  const onStorage = (e: StorageEvent) => {
    if (e.key === KEY) emit();
  };
  window.addEventListener("storage", onStorage);
  return () => {
    listeners.delete(cb);
    window.removeEventListener("storage", onStorage);
  };
}

function getSnapshot(): StoreShape {
  if (cache === null) cache = read();
  return cache;
}

// Stable server snapshot to satisfy useSyncExternalStore during SSR.
function getServerSnapshot(): StoreShape {
  return EMPTY;
}

// ---- id helper (no Math.random / Date.now dependence for determinism in
// SSR is not required here since these run only from user events) ----------

let counter = 0;
function makeId(prefix: string) {
  counter += 1;
  const t =
    typeof performance !== "undefined" && performance.now
      ? Math.floor(performance.now())
      : 0;
  return `${prefix}_${t}_${counter}`;
}

// ---- public actions ------------------------------------------------------

export function addCheckIn(service: string): CheckIn {
  const s = read();
  const entry: CheckIn = {
    id: makeId("chk"),
    service,
    at: new Date().toISOString(),
  };
  write({ ...s, checkIns: [entry, ...s.checkIns] });
  return entry;
}

// True if the member already checked in for `service` today.
export function hasCheckedInToday(service: string): boolean {
  const s = read();
  const today = new Date().toDateString();
  return s.checkIns.some(
    (c) => c.service === service && new Date(c.at).toDateString() === today
  );
}

export function addSubmission(
  kind: Submission["kind"],
  data: Record<string, unknown>
): Submission {
  const s = read();
  const entry: Submission = {
    id: makeId(kind),
    kind,
    at: new Date().toISOString(),
    data,
  };
  write({ ...s, submissions: [entry, ...s.submissions] });
  return entry;
}

export function addGift(gift: Omit<Gift, "id" | "at">): Gift {
  const s = read();
  const entry: Gift = {
    ...gift,
    id: makeId("gift"),
    at: new Date().toISOString(),
  };
  write({ ...s, gifts: [entry, ...s.gifts] });
  return entry;
}

// ---- hook ----------------------------------------------------------------

export function useStore(): StoreShape {
  return useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
}

export function totalGiven(gifts: Gift[]): number {
  return gifts.reduce((sum, g) => sum + g.amount, 0);
}
