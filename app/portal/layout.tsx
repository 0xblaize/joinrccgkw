"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { AuthProvider, useAuth } from "./_lib/auth";
import { ToastProvider } from "./_components/Toast";
import TabBar from "./_components/TabBar";
import TopBar from "./_components/TopBar";

function Guard({ children }: { children: React.ReactNode }) {
  const { user, ready } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (ready && !user) router.replace("/login");
  }, [ready, user, router]);

  if (!ready) {
    return (
      <div className="relative min-h-screen grid place-items-center">
        <div className="portal-ambient" aria-hidden />
        <div className="relative grid place-items-center w-16 h-16 rounded-2xl tile-rose font-display text-2xl tracking-wider animate-float">
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
          <div className="relative min-h-screen">
            <div className="portal-ambient" aria-hidden />
            <div className="relative z-10">
              <TopBar />
              <div className="mx-auto w-full max-w-lg lg:max-w-6xl px-4 sm:px-6 lg:px-10 pt-6 lg:pt-8 content-pad-b">
                {children}
              </div>
            </div>
            <TabBar />
          </div>
        </Guard>
      </ToastProvider>
    </AuthProvider>
  );
}
