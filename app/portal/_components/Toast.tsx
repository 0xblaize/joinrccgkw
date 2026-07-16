"use client";

import {
  createContext,
  useCallback,
  useContext,
  useRef,
  useState,
} from "react";
import { CheckIcon } from "./icons";

type Toast = { id: number; message: string };

const ToastContext = createContext<(message: string) => void>(() => {});

export function ToastProvider({ children }: { children: React.ReactNode }) {
  const [toasts, setToasts] = useState<Toast[]>([]);
  const idRef = useRef(0);

  const show = useCallback((message: string) => {
    idRef.current += 1;
    const id = idRef.current;
    setToasts((t) => [...t, { id, message }]);
    window.setTimeout(() => {
      setToasts((t) => t.filter((x) => x.id !== id));
    }, 3200);
  }, []);

  return (
    <ToastContext.Provider value={show}>
      {children}
      <div className="fixed left-1/2 z-[80] flex flex-col items-center gap-2 bottom-24 sm:bottom-10 w-full max-w-sm px-4 -translate-x-1/2 pointer-events-none">
        {toasts.map((t) => (
          <div
            key={t.id}
            className="animate-toast-in pointer-events-auto w-full flex items-center gap-3 rounded-full glass px-4 py-3 shadow-lg"
          >
            <span className="tile tile-rose w-6 h-6 shrink-0">
              <CheckIcon width={15} height={15} />
            </span>
            <span className="text-sm text-white/90">{t.message}</span>
          </div>
        ))}
      </div>
    </ToastContext.Provider>
  );
}

export function useToast() {
  return useContext(ToastContext);
}
