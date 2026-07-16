"use client";

import { useState } from "react";
import PageHeader from "../_components/PageHeader";
import ActionCard from "../_components/ActionCard";
import Sheet from "../_components/Sheet";
import Field from "../_components/Field";
import { useToast } from "../_components/Toast";
import { addSubmission } from "../_lib/store";
import { DEPARTMENTS, LIFE_GROUPS } from "../_lib/data";
import {
  StarIcon,
  PrayIcon,
  CalendarChatIcon,
  ShieldIcon,
  BriefcaseIcon,
  PinIcon,
  ChevronRight,
} from "../_components/icons";

type Active =
  | null
  | "testimony"
  | "prayer"
  | "pastoral"
  | "welfare"
  | "workforce"
  | "lifegroup";

export default function ConnectPage() {
  const toast = useToast();
  const [active, setActive] = useState<Active>(null);
  const close = () => setActive(null);

  // ---- shared field state ----
  const [text, setText] = useState("");
  const [isPublic, setIsPublic] = useState(false);
  const [urgency, setUrgency] = useState("Normal");
  const [meetingType, setMeetingType] = useState("General");
  const [preferred, setPreferred] = useState("");
  const [welfareType, setWelfareType] = useState("Financial assistance");
  const [dept, setDept] = useState<string | null>(null);
  const [phone, setPhone] = useState("");

  const reset = () => {
    setText("");
    setIsPublic(false);
    setUrgency("Normal");
    setMeetingType("General");
    setPreferred("");
    setWelfareType("Financial assistance");
    setDept(null);
    setPhone("");
  };

  const submit = (
    kind: Exclude<Active, null>,
    data: Record<string, unknown>,
    message: string
  ) => {
    addSubmission(kind, data);
    close();
    reset();
    toast(message);
  };

  return (
    <div>
      <PageHeader
        eyebrow="Connect"
        title="People and Care"
        description="The lifeline between you and the church. Share, request prayer, or take your next step."
      />

      <div className="grid lg:grid-cols-2 gap-x-8 gap-y-7">
        {/* Testimonies & Prayer */}
        <section>
          <h2 className="eyebrow mb-3">Testimonies and Prayer</h2>
          <div className="space-y-2.5">
            <ActionCard
              icon={<StarIcon width={20} height={20} />}
              title="Share a Testimony"
              description="Tell the family what God has done."
              onClick={() => setActive("testimony")}
            />
            <ActionCard
              icon={<PrayIcon width={20} height={20} />}
              title="Prayer Request"
              description="Send a prayer point to the intercessory team."
              onClick={() => setActive("prayer")}
            />
          </div>
        </section>

        {/* Pastoral care */}
        <section>
          <h2 className="eyebrow mb-3">Pastoral Care and Meetings</h2>
          <div className="space-y-2.5">
            <ActionCard
              icon={<CalendarChatIcon width={20} height={20} />}
              title="Book a Pastoral Meeting"
              description="Counseling, marital advice, or a general meeting."
              onClick={() => setActive("pastoral")}
            />
          </div>
        </section>

        {/* Welfare — featured confidential card */}
        <section>
          <h2 className="eyebrow mb-3">Welfare and Support</h2>
          <button
            onClick={() => setActive("welfare")}
            className="gold-card w-full text-left p-5 flex items-center gap-4 group"
          >
            <span className="tile tile-gold w-12 h-12 shrink-0">
              <ShieldIcon width={24} height={24} />
            </span>
            <span className="flex-1">
              <span className="block font-display text-lg">Welfare Request</span>
              <span className="block text-xs text-white/60 mt-0.5">
                Confidential help: finance, food bank, hospital visit.
              </span>
            </span>
            <ChevronRight
              width={20}
              height={20}
              className="text-white/40 group-hover:translate-x-1 transition-transform"
            />
          </button>
        </section>

        {/* Next steps */}
        <section>
          <h2 className="eyebrow mb-3">Next Steps</h2>
          <div className="space-y-2.5">
            <ActionCard
              icon={<BriefcaseIcon width={20} height={20} />}
              title="Join a Workforce"
              description="Serve in Choir, Media, Ushers, Kings Kids and more."
              onClick={() => setActive("workforce")}
            />
            <ActionCard
              icon={<PinIcon width={20} height={20} />}
              title="Find a Life Group"
              description="Mid-week house fellowships near you."
              onClick={() => setActive("lifegroup")}
            />
          </div>
        </section>
      </div>

      {/* ---------------- Testimony ---------------- */}
      <Sheet
        open={active === "testimony"}
        onClose={close}
        title="Share a Testimony"
        subtitle="Give God the glory. Your words encourage the whole family."
      >
        <div className="space-y-4">
          <Field label="Your testimony">
            <textarea
              className="field"
              rows={5}
              placeholder="What has God done for you?"
              value={text}
              onChange={(e) => setText(e.target.value)}
            />
          </Field>
          <button
            type="button"
            onClick={() => setIsPublic((v) => !v)}
            className="w-full flex items-center justify-between surface p-4 text-left"
          >
            <span>
              <span className="block text-sm font-medium">
                Share publicly
              </span>
              <span className="block text-xs text-white/50 mt-0.5">
                {isPublic
                  ? "Visible on the testimony wall."
                  : "Kept private between you and the pastors."}
              </span>
            </span>
            <Toggle on={isPublic} />
          </button>
          <button
            disabled={!text.trim()}
            onClick={() =>
              submit(
                "testimony",
                { text, public: isPublic },
                isPublic
                  ? "Testimony shared. Thank you for the glory!"
                  : "Testimony received privately. Amen!"
              )
            }
            className="btn-grad w-full h-12 rounded-full text-sm font-medium disabled:opacity-50"
          >
            Submit Testimony
          </button>
        </div>
      </Sheet>

      {/* ---------------- Prayer ---------------- */}
      <Sheet
        open={active === "prayer"}
        onClose={close}
        title="Prayer Request"
        subtitle="Our intercessory team stands with you."
      >
        <div className="space-y-4">
          <Field label="Prayer point">
            <textarea
              className="field"
              rows={4}
              placeholder="How can we pray with you?"
              value={text}
              onChange={(e) => setText(e.target.value)}
            />
          </Field>
          <Field label="Urgency">
            <select
              className="field"
              value={urgency}
              onChange={(e) => setUrgency(e.target.value)}
            >
              <option>Normal</option>
              <option>Urgent</option>
              <option>Emergency</option>
            </select>
          </Field>
          <button
            disabled={!text.trim()}
            onClick={() =>
              submit(
                "prayer",
                { text, urgency },
                "Prayer request sent. We are praying with you."
              )
            }
            className="btn-grad w-full h-12 rounded-full text-sm font-medium disabled:opacity-50"
          >
            Send Prayer Request
          </button>
        </div>
      </Sheet>

      {/* ---------------- Pastoral ---------------- */}
      <Sheet
        open={active === "pastoral"}
        onClose={close}
        title="Book a Pastoral Meeting"
        subtitle="Request time with a pastor. We will confirm by phone or email."
      >
        <div className="space-y-4">
          <Field label="Type of meeting">
            <select
              className="field"
              value={meetingType}
              onChange={(e) => setMeetingType(e.target.value)}
            >
              <option>General</option>
              <option>Counseling</option>
              <option>Marital advice</option>
              <option>Prayer and deliverance</option>
              <option>New member follow-up</option>
            </select>
          </Field>
          <Field label="Preferred date or time" hint="For example: Saturday morning, or next week evenings.">
            <input
              className="field"
              placeholder="When suits you?"
              value={preferred}
              onChange={(e) => setPreferred(e.target.value)}
            />
          </Field>
          <Field label="Phone number">
            <input
              className="field"
              type="tel"
              placeholder="+234"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </Field>
          <Field label="Anything we should know">
            <textarea
              className="field"
              rows={3}
              placeholder="Optional"
              value={text}
              onChange={(e) => setText(e.target.value)}
            />
          </Field>
          <button
            disabled={!preferred.trim() || !phone.trim()}
            onClick={() =>
              submit(
                "pastoral",
                { meetingType, preferred, phone, notes: text },
                "Meeting request sent. A pastor will reach out to you."
              )
            }
            className="btn-grad w-full h-12 rounded-full text-sm font-medium disabled:opacity-50"
          >
            Request Meeting
          </button>
        </div>
      </Sheet>

      {/* ---------------- Welfare (confidential) ---------------- */}
      <Sheet
        open={active === "welfare"}
        onClose={close}
        title="Welfare Request"
        subtitle="Confidential. This routes securely to the Welfare Department only."
      >
        <div className="space-y-4">
          <div className="confidential px-4 py-3 flex items-start gap-3">
            <ShieldIcon
              width={18}
              height={18}
              className="text-[color:var(--burgundy-2)] mt-0.5 shrink-0"
            />
            <p className="text-xs text-white/70 leading-relaxed">
              Your request is private. It is not shared publicly and is seen
              only by the welfare team.
            </p>
          </div>
          <Field label="Type of support">
            <select
              className="field"
              value={welfareType}
              onChange={(e) => setWelfareType(e.target.value)}
            >
              <option>Financial assistance</option>
              <option>Food bank support</option>
              <option>Hospital visitation</option>
              <option>Bereavement support</option>
              <option>Other</option>
            </select>
          </Field>
          <Field label="Details">
            <textarea
              className="field"
              rows={4}
              placeholder="Share what you are comfortable sharing."
              value={text}
              onChange={(e) => setText(e.target.value)}
            />
          </Field>
          <Field label="Best contact number">
            <input
              className="field"
              type="tel"
              placeholder="+234"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </Field>
          <button
            disabled={!text.trim() || !phone.trim()}
            onClick={() =>
              submit(
                "welfare",
                { welfareType, details: text, phone },
                "Welfare request sent privately. The team will contact you."
              )
            }
            className="btn-grad w-full h-12 rounded-full text-sm font-medium disabled:opacity-50"
          >
            Send Confidential Request
          </button>
        </div>
      </Sheet>

      {/* ---------------- Workforce ---------------- */}
      <Sheet
        open={active === "workforce"}
        onClose={close}
        title="Join a Workforce"
        subtitle="Browse departments and apply to serve."
      >
        <div className="space-y-3">
          {DEPARTMENTS.map((d) => {
            const selected = dept === d.id;
            return (
              <button
                key={d.id}
                onClick={() => setDept(selected ? null : d.id)}
                className={`w-full text-left p-4 rounded-2xl border transition-colors ${
                  selected
                    ? "border-[color:var(--burgundy-2)] bg-[color:var(--burgundy)]/10"
                    : "border-[color:var(--hair)] hover:border-[color:var(--hair-strong)]"
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium">{d.name}</span>
                  {selected && (
                    <span className="chip chip-active">Selected</span>
                  )}
                </div>
                <p className="text-xs text-white/50 mt-1">{d.blurb}</p>
                <p className="text-xs text-white/35 mt-1">Needs: {d.needs}</p>
              </button>
            );
          })}
          <button
            disabled={!dept}
            onClick={() => {
              const chosen = DEPARTMENTS.find((d) => d.id === dept);
              submit(
                "workforce",
                { department: chosen?.name },
                `Application sent to ${chosen?.name}. Welcome aboard!`
              );
            }}
            className="btn-grad w-full h-12 rounded-full text-sm font-medium disabled:opacity-50 mt-1"
          >
            Apply to Serve
          </button>
        </div>
      </Sheet>

      {/* ---------------- Life group ---------------- */}
      <Sheet
        open={active === "lifegroup"}
        onClose={close}
        title="Find a Life Group"
        subtitle="Mid-week house fellowships across Ile-Ife."
      >
        <div className="space-y-3">
          {LIFE_GROUPS.map((g) => {
            const selected = dept === g.id;
            return (
              <button
                key={g.id}
                onClick={() => setDept(selected ? null : g.id)}
                className={`w-full text-left p-4 rounded-2xl border transition-colors ${
                  selected
                    ? "border-[color:var(--burgundy-2)] bg-[color:var(--burgundy)]/10"
                    : "border-[color:var(--hair)] hover:border-[color:var(--hair-strong)]"
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium">{g.name}</span>
                  <span className="text-xs text-white/40">{g.area}</span>
                </div>
                <p className="text-xs text-white/50 mt-1">
                  {g.host} • {g.day}s at {g.time}
                </p>
              </button>
            );
          })}
          <button
            disabled={!dept}
            onClick={() => {
              const chosen = LIFE_GROUPS.find((g) => g.id === dept);
              submit(
                "lifegroup",
                { group: chosen?.name, area: chosen?.area },
                `Request sent to ${chosen?.name}. They will welcome you soon.`
              );
            }}
            className="btn-grad w-full h-12 rounded-full text-sm font-medium disabled:opacity-50 mt-1"
          >
            Request to Join
          </button>
        </div>
      </Sheet>
    </div>
  );
}

function Toggle({ on }: { on: boolean }) {
  return (
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
  );
}
