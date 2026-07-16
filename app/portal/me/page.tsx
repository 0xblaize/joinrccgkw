"use client";

import { useRouter } from "next/navigation";
import PageHeader from "../_components/PageHeader";
import { useAuth } from "../_lib/auth";
import { useStore } from "../_lib/store";
import { celebration, formatDateTime, MONTHS } from "../_lib/format";
import {
  BellIcon,
  LogoutIcon,
  CheckIcon,
  SparkIcon,
} from "../_components/icons";

export default function MePage() {
  const router = useRouter();
  const { user, logout, updateSettings } = useAuth();
  const store = useStore();

  if (!user) return null;

  const initials = (user.firstName[0] ?? "") + (user.lastName[0] ?? "");

  const signOut = () => {
    logout();
    router.replace("/login");
  };

  const settings = user.settings;

  return (
    <div>
      <PageHeader eyebrow="Profile" title="Me" />

      {/* Identity hero */}
      <div className="hero-card p-6 sm:p-8 mb-6 animate-rise">
        <div className="flex items-center gap-5">
          <div className="grid place-items-center w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-white/15 backdrop-blur-sm border border-white/25 font-display text-2xl sm:text-3xl uppercase shrink-0">
            {initials}
          </div>
          <div className="min-w-0">
            <h2 className="font-display font-semibold text-2xl sm:text-3xl truncate">
              {user.firstName} {user.lastName}
            </h2>
            <p className="text-sm text-white/60 mt-1 truncate">{user.email}</p>
            <span className="chip mt-3 bg-white/15 border-white/25 text-white">
              {user.role}
            </span>
          </div>
        </div>
      </div>

      <div className="grid lg:grid-cols-2 gap-x-8 gap-y-6">
        {/* Left column */}
        <div className="space-y-6">
          {/* Celebration */}
          <section>
            <h2 className="eyebrow mb-3">Celebration</h2>
            <div className="gold-card p-5 flex items-center gap-4">
              <span className="tile tile-gold w-12 h-12 shrink-0">
                <SparkIcon width={24} height={24} />
              </span>
              <div>
                <div className="text-sm font-medium">Birthday</div>
                <div className="text-sm text-white/60 mt-0.5">
                  {celebration(user.birthMonth, user.birthDay)}
                </div>
              </div>
            </div>
          </section>

          {/* Settings */}
          <section>
            <h2 className="eyebrow mb-3">Notifications</h2>
            <div className="glass divide-hair">
              <SettingRow
                title="Email me the weekly bulletin"
                on={settings.weeklyBulletin}
                onToggle={() =>
                  updateSettings({ weeklyBulletin: !settings.weeklyBulletin })
                }
              />
              <SettingRow
                title="Event reminders"
                on={settings.eventReminders}
                onToggle={() =>
                  updateSettings({ eventReminders: !settings.eventReminders })
                }
              />
              <SettingRow
                title="Prayer chain updates"
                on={settings.prayerUpdates}
                onToggle={() =>
                  updateSettings({ prayerUpdates: !settings.prayerUpdates })
                }
              />
            </div>
          </section>
        </div>

        {/* Right column: activity */}
        <section>
          <div className="flex items-center justify-between mb-3">
            <h2 className="eyebrow">Activity History</h2>
            {store.checkIns.length > 0 && (
              <span className="text-xs text-white/40 tabular">
                {store.checkIns.length} check-in
                {store.checkIns.length === 1 ? "" : "s"}
              </span>
            )}
          </div>
          {store.checkIns.length === 0 ? (
            <div className="glass p-6 text-center">
              <p className="text-sm text-white/50">
                No check-ins yet. Sign attendance on Sunday to start your
                history.
              </p>
            </div>
          ) : (
            <div className="glass divide-hair">
              {store.checkIns.slice(0, 8).map((c) => (
                <div key={c.id} className="flex items-center gap-4 p-4">
                  <span className="tile tile-rose w-9 h-9 shrink-0">
                    <CheckIcon width={17} height={17} />
                  </span>
                  <div className="flex-1 min-w-0">
                    <div className="text-sm font-medium">{c.service}</div>
                    <div className="text-xs text-white/45 mt-0.5">
                      {formatDateTime(c.at)}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </section>
      </div>

      {/* Sign out */}
      <button
        onClick={signOut}
        className="btn-ghost w-full h-12 rounded-full text-sm font-medium flex items-center justify-center gap-2 mt-8 max-w-sm mx-auto"
      >
        <LogoutIcon width={18} height={18} /> Sign Out
      </button>

      <p className="text-center text-xs text-white/30 pt-4">
        RCCG Kings World, Ile-Ife • Member since{" "}
        {MONTHS[new Date(user.createdAt).getMonth()]}{" "}
        {new Date(user.createdAt).getFullYear()}
      </p>
    </div>
  );
}

function SettingRow({
  title,
  on,
  onToggle,
}: {
  title: string;
  on: boolean;
  onToggle: () => void;
}) {
  return (
    <button
      onClick={onToggle}
      className="w-full flex items-center justify-between gap-4 p-4 text-left"
    >
      <span className="flex items-center gap-3">
        <BellIcon width={18} height={18} className="text-white/40 shrink-0" />
        <span className="text-sm">{title}</span>
      </span>
      <span
        className={`shrink-0 relative w-11 h-6 rounded-full transition-colors ${
          on
            ? "bg-gradient-to-r from-[color:var(--burgundy-2)] to-[color:var(--rose)]"
            : "bg-white/15"
        }`}
      >
        <span
          className={`absolute top-0.5 left-0.5 w-5 h-5 rounded-full bg-white transition-transform ${
            on ? "translate-x-5" : ""
          }`}
        />
      </span>
    </button>
  );
}
