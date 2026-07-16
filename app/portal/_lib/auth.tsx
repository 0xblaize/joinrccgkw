"use client";

// Prototype auth: users live in localStorage, "sessions" are just the current
// user id. No hashing, no server. Good enough to demo the whole portal flow
// and trivially swappable for a real backend later.

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";

const USERS_KEY = "kw_portal_users_v1";
const SESSION_KEY = "kw_portal_session_v1";

export type Role = "Member" | "Worker" | "Admin";

export type Settings = {
  weeklyBulletin: boolean;
  eventReminders: boolean;
  prayerUpdates: boolean;
};

export type User = {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  password: string; // prototype only, do not do this in production
  birthMonth: number; // 1-12
  birthDay: number; // 1-31
  role: Role;
  createdAt: string;
  settings: Settings;
};

export type PublicUser = Omit<User, "password">;

const DEFAULT_SETTINGS: Settings = {
  weeklyBulletin: true,
  eventReminders: true,
  prayerUpdates: false,
};

// A seeded demo account so the app is explorable without signing up.
const DEMO_USER: User = {
  id: "demo",
  firstName: "David",
  lastName: "Kingsley",
  email: "member@kingsworld.org",
  password: "kingsworld",
  birthMonth: 5,
  birthDay: 12,
  role: "Worker",
  createdAt: "2025-01-01T00:00:00.000Z",
  settings: DEFAULT_SETTINGS,
};

function readUsers(): User[] {
  if (typeof window === "undefined") return [DEMO_USER];
  try {
    const raw = window.localStorage.getItem(USERS_KEY);
    if (!raw) return [DEMO_USER];
    const parsed = JSON.parse(raw) as User[];
    // Ensure demo user always exists.
    if (!parsed.some((u) => u.id === DEMO_USER.id)) parsed.push(DEMO_USER);
    return parsed;
  } catch {
    return [DEMO_USER];
  }
}

function writeUsers(users: User[]) {
  if (typeof window === "undefined") return;
  window.localStorage.setItem(USERS_KEY, JSON.stringify(users));
}

function strip(u: User): PublicUser {
  const { password: _pw, ...rest } = u;
  void _pw;
  return rest;
}

type AuthValue = {
  user: PublicUser | null;
  ready: boolean;
  login: (email: string, password: string) => { ok: boolean; error?: string };
  signUp: (input: {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    birthMonth: number;
    birthDay: number;
  }) => { ok: boolean; error?: string };
  logout: () => void;
  updateSettings: (patch: Partial<Settings>) => void;
};

const AuthContext = createContext<AuthValue | null>(null);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<PublicUser | null>(null);
  const [ready, setReady] = useState(false);

  // Hydrate the session from localStorage on mount (external-system sync).
  /* eslint-disable react-hooks/set-state-in-effect */
  useEffect(() => {
    try {
      const sid = window.localStorage.getItem(SESSION_KEY);
      if (sid) {
        const found = readUsers().find((u) => u.id === sid);
        if (found) setUser(strip(found));
      }
    } catch {
      // ignore
    }
    setReady(true);
  }, []);
  /* eslint-enable react-hooks/set-state-in-effect */

  const login = useCallback((email: string, password: string) => {
    const users = readUsers();
    const found = users.find(
      (u) => u.email.toLowerCase() === email.trim().toLowerCase()
    );
    if (!found) return { ok: false, error: "No account found for that email." };
    if (found.password !== password)
      return { ok: false, error: "Incorrect password. Please try again." };
    window.localStorage.setItem(SESSION_KEY, found.id);
    setUser(strip(found));
    return { ok: true };
  }, []);

  const signUp = useCallback<AuthValue["signUp"]>((input) => {
    const email = input.email.trim().toLowerCase();
    const users = readUsers();
    if (users.some((u) => u.email.toLowerCase() === email))
      return { ok: false, error: "An account with that email already exists." };

    const id = `u_${users.length + 1}_${email.replace(/[^a-z0-9]/gi, "").slice(0, 8)}`;
    const newUser: User = {
      id,
      firstName: input.firstName.trim(),
      lastName: input.lastName.trim(),
      email,
      password: input.password,
      birthMonth: input.birthMonth,
      birthDay: input.birthDay,
      role: "Member",
      createdAt: new Date().toISOString(),
      settings: DEFAULT_SETTINGS,
    };
    writeUsers([...users, newUser]);
    window.localStorage.setItem(SESSION_KEY, id);
    setUser(strip(newUser));
    return { ok: true };
  }, []);

  const logout = useCallback(() => {
    window.localStorage.removeItem(SESSION_KEY);
    setUser(null);
  }, []);

  const updateSettings = useCallback(
    (patch: Partial<Settings>) => {
      if (!user) return;
      const users = readUsers();
      const next = users.map((u) =>
        u.id === user.id ? { ...u, settings: { ...u.settings, ...patch } } : u
      );
      writeUsers(next);
      const updated = next.find((u) => u.id === user.id);
      if (updated) setUser(strip(updated));
    },
    [user]
  );

  const value = useMemo<AuthValue>(
    () => ({ user, ready, login, signUp, logout, updateSettings }),
    [user, ready, login, signUp, logout, updateSettings]
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("useAuth must be used within AuthProvider");
  return ctx;
}
