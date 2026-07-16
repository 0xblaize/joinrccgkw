"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { AuthProvider, useAuth } from "./_lib/auth";
import { ToastProvider } from "./_components/Toast";
import TabBar from "./_components/TabBar";

function Guard({ children }: { children: React.ReactNode }) {
  const { user, ready } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (ready && !user) router.replace("/login");
  }, [ready, user, router]);

  if (!ready) {
    return (
      <div className="min-h-screen grid place-items-center bg-black">
        <div className="font-display text-2xl tracking-wider text-white/30 animate-pulse">
          KW
        </div>
      </div>
    );
  }

  if (!user) return null; // redirecting

  return <>{children}</>;
}

export default function PortalLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <AuthProvider>
      <ToastProvider>
        <Guard>
          <div className="min-h-screen bg-black">
            <div className="mx-auto max-w-lg px-4 sm:px-5 pt-6 content-pad-b">
              {children}
            </div>
            <TabBar />
          </div>
        </Guard>
      </ToastProvider>
    </AuthProvider>
  );
}
