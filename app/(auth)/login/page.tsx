"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { useAuth } from "../../portal/_lib/auth";
import { MONTHS, daysInMonth } from "../../portal/_lib/format";

type Mode = "login" | "signup";

export default function LoginPage() {
  const router = useRouter();
  const { user, ready, login, signUp } = useAuth();
  const [mode, setMode] = useState<Mode>("login");
  const [error, setError] = useState<string | null>(null);
  const [busy, setBusy] = useState(false);

  // login fields
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // signup fields
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [month, setMonth] = useState("");
  const [day, setDay] = useState("");

  // If already signed in, go straight to the portal.
  useEffect(() => {
    if (ready && user) router.replace("/portal");
  }, [ready, user, router]);

  const switchMode = (m: Mode) => {
    setMode(m);
    setError(null);
  };

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setBusy(true);

    if (mode === "login") {
      const res = login(email, password);
      if (!res.ok) {
        setError(res.error ?? "Could not sign in.");
        setBusy(false);
        return;
      }
      router.replace("/portal");
      return;
    }

    // signup validation
    if (!firstName.trim() || !lastName.trim()) {
      setError("Please enter your first and last name.");
      setBusy(false);
      return;
    }
    if (!email.trim() || !password) {
      setError("Please enter an email and password.");
      setBusy(false);
      return;
    }
    if (password.length < 6) {
      setError("Password should be at least 6 characters.");
      setBusy(false);
      return;
    }
    if (!month || !day) {
      setError("Please choose your birthday month and day.");
      setBusy(false);
      return;
    }

    const res = signUp({
      firstName,
      lastName,
      email,
      password,
      birthMonth: Number(month),
      birthDay: Number(day),
    });
    if (!res.ok) {
      setError(res.error ?? "Could not create your account.");
      setBusy(false);
      return;
    }
    router.replace("/portal");
  };

  const dayCount = month ? daysInMonth(Number(month)) : 31;

  return (
    <main className="relative min-h-screen flex flex-col">
      <div className="portal-ambient" />
      {/* Top bar */}
      <header className="relative z-10 px-5 sm:px-8 h-16 flex items-center justify-between">
        <Link
          href="/"
          className="tile tile-rose w-10 h-10 font-display font-bold text-lg tracking-wider"
          aria-label="Kings World home"
        >
          KW
        </Link>
        <Link
          href="/"
          className="text-sm text-white/50 hover:text-white transition-colors link-underline"
        >
          Back to site
        </Link>
      </header>

      <div className="relative z-10 flex-1 flex items-center justify-center px-5 py-10">
        <div className="w-full max-w-md animate-rise">
          <div className="text-center mb-8">
            <div className="eyebrow-burgundy mb-3">Kings World</div>
            <h1 className="font-display font-semibold text-3xl sm:text-4xl leading-tight">
              {mode === "login" ? "Welcome back." : "Join the family."}
            </h1>
            <p className="mt-3 text-sm text-white/55 leading-relaxed">
              {mode === "login"
                ? "Sign in to check in, give, and stay connected."
                : "Create your account. There is a seat for you this Sunday."}
            </p>
          </div>

          {/* Mode toggle */}
          <div className="glass p-1 rounded-full grid grid-cols-2 mb-6">
            <button
              type="button"
              onClick={() => switchMode("login")}
              className={`h-11 rounded-full text-sm font-medium transition-all ${
                mode === "login"
                  ? "btn-grad"
                  : "text-white/60 hover:text-white"
              }`}
            >
              Existing Member
            </button>
            <button
              type="button"
              onClick={() => switchMode("signup")}
              className={`h-11 rounded-full text-sm font-medium transition-all ${
                mode === "signup"
                  ? "btn-grad"
                  : "text-white/60 hover:text-white"
              }`}
            >
              New Member
            </button>
          </div>

          <form onSubmit={onSubmit} className="glass p-6 space-y-4">
            {mode === "signup" && (
              <div className="grid grid-cols-2 gap-3">
                <label className="block">
                  <span className="label">First name</span>
                  <input
                    className="field"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    placeholder="David"
                    autoComplete="given-name"
                  />
                </label>
                <label className="block">
                  <span className="label">Last name</span>
                  <input
                    className="field"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    placeholder="Kingsley"
                    autoComplete="family-name"
                  />
                </label>
              </div>
            )}

            <label className="block">
              <span className="label">Email</span>
              <input
                type="email"
                className="field"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@email.com"
                autoComplete="email"
              />
            </label>

            <label className="block">
              <span className="label">Password</span>
              <input
                type="password"
                className="field"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder={mode === "signup" ? "At least 6 characters" : "••••••••"}
                autoComplete={mode === "login" ? "current-password" : "new-password"}
              />
            </label>

            {mode === "signup" && (
              <div>
                <span className="label">Birthday</span>
                <div className="grid grid-cols-2 gap-3">
                  <select
                    className="field"
                    value={month}
                    onChange={(e) => {
                      setMonth(e.target.value);
                      // keep day valid if month shrinks
                      if (day && Number(day) > daysInMonth(Number(e.target.value))) {
                        setDay("");
                      }
                    }}
                    aria-label="Birth month"
                  >
                    <option value="">Month</option>
                    {MONTHS.map((m, i) => (
                      <option key={m} value={i + 1}>
                        {m}
                      </option>
                    ))}
                  </select>
                  <select
                    className="field"
                    value={day}
                    onChange={(e) => setDay(e.target.value)}
                    aria-label="Birth day"
                  >
                    <option value="">Day</option>
                    {Array.from({ length: dayCount }, (_, i) => i + 1).map((d) => (
                      <option key={d} value={d}>
                        {d}
                      </option>
                    ))}
                  </select>
                </div>
                <span className="mt-1.5 block text-xs text-white/40">
                  We only ask for month and day, never the year.
                </span>
              </div>
            )}

            {error && (
              <div className="text-sm text-[color:var(--burgundy-2)] bg-[color:var(--burgundy)]/10 border border-[color:var(--burgundy)]/30 rounded-lg px-3 py-2">
                {error}
              </div>
            )}

            <button
              type="submit"
              disabled={busy}
              className="btn-grad w-full h-12 rounded-full text-sm font-medium disabled:opacity-60"
            >
              {mode === "login" ? "Sign In" : "Create Account"}
            </button>

            {mode === "login" && (
              <p className="text-center text-xs text-white/40 pt-1">
                Try the demo: member@kingsworld.org / kingsworld
              </p>
            )}
          </form>

          <p className="text-center text-sm text-white/50 mt-6">
            {mode === "login" ? (
              <>
                New to Kings World?{" "}
                <button
                  onClick={() => switchMode("signup")}
                  className="text-white hover:text-[color:var(--burgundy-2)] transition-colors font-medium"
                >
                  Create an account
                </button>
              </>
            ) : (
              <>
                Already a member?{" "}
                <button
                  onClick={() => switchMode("login")}
                  className="text-white hover:text-[color:var(--burgundy-2)] transition-colors font-medium"
                >
                  Sign in
                </button>
              </>
            )}
          </p>
        </div>
      </div>
    </main>
  );
}
