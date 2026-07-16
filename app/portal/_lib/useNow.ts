"use client";

import { useEffect, useState } from "react";

// Returns the current Date, but only after the component has mounted on the
// client. During SSR / first paint it returns null so day-dependent UI can
// render a stable placeholder and avoid hydration mismatches.
export function useNow(): Date | null {
  const [now, setNow] = useState<Date | null>(null);
  useEffect(() => {
    // Sync with the client clock only after mount so SSR and first paint stay
    // deterministic. This is external-system synchronization, not derived state.
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setNow(new Date());
  }, []);
  return now;
}
