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

  const initials =
    (user.firstName[0] ?? "") + (user.lastName[0] ?? "");

  const signOut = () => {
    logout();
    router.replace("/login");
  };

  const settings = user.settings;

  return (
    <div className="space-y-7">
      <PageHeader eyebrow="Profile" title="Me" />

      {/* Identity card */}
      <div className="surface p-6 text-center">
        <div className="grid place-items-center w-20 h-20 rounded-full bg-[color:var(--burgundy)] mx-auto font-display text-2xl uppercase">
          {initials}
        </div>
        <h2 className="font-display text-2xl mt-4">
          {user.firstName} {user.lastName}
        </h2>
        <p className="text-sm text-white/50 mt-1">{user.email}</p>
        <span className="chip chip-active mt-3">{user.role}</span>
      </div>

      {/* Celebration */}
      <section>
        <h2 className="eyebrow mb-3">Celebration</h2>
        <div className="surface p-5 flex items-center gap-4">
          <span className="grid place-items-center w-12 h-12 rounded-xl bg-white/[0.05] text-[color:var(--burgundy-2)] shrink-0">
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

      {/* Activity history */}
      <section>
        <h2 className="eyebrow mb-3">Activity History</h2>
        {store.checkIns.length === 0 ? (
          <div className="surface p-6 text-center">
            <p className="text-sm text-white/50">
              No check-ins yet. Sign attendance on Sunday to start your history.
            </p>
          </div>
        ) : (
          <div className="surface divide-y divide-[color:var(--hair)]">
            {store.checkIns.slice(0, 8).map((c) => (
              <div key={c.id} className="flex items-center gap-4 p-4">
                <span className="grid place-items-center w-9 h-9 rounded-full bg-white/[0.05] text-[color:var(--burgundy-2)] shrink-0">
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

      {/* Settings */}
      <section>
        <h2 className="eyebrow mb-3">Settings</h2>
        <div className="surface divide-y divide-[color:var(--hair)]">
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

      {/* Sign out */}
      <button
        onClick={signOut}
        className="btn-ghost w-full h-12 rounded-full text-sm font-medium flex items-center justify-center gap-2"
      >
        <LogoutIcon width={18} height={18} /> Sign Out
      </button>

      <p className="text-center text-xs text-white/30 pt-2">
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
          on ? "bg-[color:var(--burgundy)]" : "bg-white/15"
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
