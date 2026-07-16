"use client";

import { useState } from "react";
import PageHeader from "../_components/PageHeader";
import Sheet from "../_components/Sheet";
import { useToast } from "../_components/Toast";
import { useStore, addGift, totalGiven } from "../_lib/store";
import { useAuth } from "../_lib/auth";
import {
  GIVING_CATEGORIES,
  AMOUNT_PRESETS,
  BANK_DETAILS,
} from "../_lib/data";
import { naira, formatDate } from "../_lib/format";
import {
  GiftBoxIcon,
  ShieldIcon,
  CopyIcon,
  CheckIcon,
  ChevronRight,
  DocIcon,
} from "../_components/icons";

export default function GivePage() {
  const toast = useToast();
  const store = useStore();
  const { user } = useAuth();

  const [catId, setCatId] = useState<string | null>(null);
  const [amount, setAmount] = useState<number | "">("");
  const [confirm, setConfirm] = useState<null | {
    category: string;
    amount: number;
  }>(null);
  const [historyOpen, setHistoryOpen] = useState(false);
  const [copied, setCopied] = useState(false);

  const category = GIVING_CATEGORIES.find((c) => c.id === catId) ?? null;
  const total = totalGiven(store.gifts);

  const openGive = () => {
    if (!category || !amount || amount <= 0) return;
    setConfirm({ category: category.name, amount: Number(amount) });
  };

  const completeOnline = () => {
    if (!confirm || !category) return;
    const ref = `KW${(store.gifts.length + 1).toString().padStart(4, "0")}`;
    addGift({
      category: confirm.category,
      categoryId: category.id,
      amount: confirm.amount,
      method: "online",
      reference: ref,
    });
    setConfirm(null);
    setCatId(null);
    setAmount("");
    toast(`Thank you! ${naira(confirm.amount)} ${confirm.category} received.`);
  };

  const copyAccount = async () => {
    try {
      await navigator.clipboard.writeText(BANK_DETAILS.accountNumber);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1800);
    } catch {
      // ignore
    }
  };

  return (
    <div>
      <PageHeader
        eyebrow="Give"
        title="Giving Hub"
        description="A secure place for all your contributions. Thank you for partnering with the vision."
      />

      {/* Hero total */}
      <div className="gold-card p-6 sm:p-7 mb-6 animate-rise flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <div className="eyebrow text-gold-gradient">Your total giving</div>
          <div className="font-display font-semibold text-4xl sm:text-5xl tabular mt-1">
            {naira(total)}
          </div>
          <div className="text-sm text-white/55 mt-1">
            {store.gifts.length} record{store.gifts.length === 1 ? "" : "s"} this
            year
          </div>
        </div>
        <button
          onClick={() => setHistoryOpen(true)}
          className="chip chip-gold h-10 px-4 self-start sm:self-auto"
        >
          <DocIcon width={15} height={15} /> Giving history
        </button>
      </div>

      <div className="grid lg:grid-cols-2 gap-x-8 gap-y-6">
        {/* Left: make a gift */}
        <div>
          {/* Trust strip */}
          <div className="glass p-4 flex items-center gap-3 mb-5">
            <span className="tile w-9 h-9 shrink-0">
              <ShieldIcon width={18} height={18} />
            </span>
            <p className="text-xs text-white/60 leading-relaxed">
              Payments are processed securely by Paystack. Your details are
              never stored on your device.
            </p>
          </div>

          {/* Category selection */}
          <h2 className="eyebrow mb-3">Choose a Category</h2>
          <div className="grid grid-cols-2 gap-3 mb-6">
            {GIVING_CATEGORIES.map((c) => {
              const selected = catId === c.id;
              return (
                <button
                  key={c.id}
                  onClick={() => setCatId(c.id)}
                  className={`text-left p-4 rounded-2xl border transition-all ${
                    selected
                      ? "border-[color:var(--burgundy-2)] bg-white/[0.03]"
                      : "border-[color:var(--hair)] bg-white/[0.02] hover:border-[color:var(--hair-strong)]"
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium">{c.name}</span>
                    {selected && (
                      <span className="grid place-items-center w-5 h-5 rounded-full bg-[color:var(--burgundy)] text-white">
                        <CheckIcon width={13} height={13} />
                      </span>
                    )}
                  </div>
                  <p className="text-[11px] text-gold-gradient mt-1">
                    {c.scripture}
                  </p>
                  <p className="text-xs text-white/45 mt-1 leading-snug">
                    {c.blurb}
                  </p>
                </button>
              );
            })}
          </div>

          {/* Amount */}
          <h2 className="eyebrow mb-3">Amount</h2>
          <div className="grid grid-cols-3 gap-2 mb-3">
            {AMOUNT_PRESETS.map((a) => (
              <button
                key={a}
                onClick={() => setAmount(a)}
                className={`h-12 rounded-xl text-sm font-medium tabular transition-all border ${
                  amount === a
                    ? "btn-grad border-transparent"
                    : "border-[color:var(--hair-strong)] bg-white/[0.02] text-white/80 hover:bg-white/5"
                }`}
              >
                {naira(a)}
              </button>
            ))}
          </div>
          <div className="relative mb-5">
            <span className="absolute left-4 top-1/2 -translate-y-1/2 text-white/40 tabular">
              ₦
            </span>
            <input
              type="number"
              inputMode="numeric"
              min={0}
              className="field pl-9 tabular"
              placeholder="Enter another amount"
              value={amount}
              onChange={(e) =>
                setAmount(e.target.value === "" ? "" : Number(e.target.value))
              }
            />
          </div>

          <button
            onClick={openGive}
            disabled={!category || !amount || Number(amount) <= 0}
            className="btn-grad w-full h-14 rounded-full text-sm font-medium flex items-center justify-center gap-2 disabled:opacity-50"
          >
            <GiftBoxIcon width={19} height={19} />
            {category && amount
              ? `Give ${naira(Number(amount))} — ${category.name}`
              : "Give Online"}
          </button>
        </div>

        {/* Right: bank transfer + history */}
        <div>
          <h2 className="eyebrow mb-3">Prefer a Bank Transfer?</h2>
          <div className="glass p-5 space-y-3">
            <Row label="Bank" value={BANK_DETAILS.bankName} />
            <Row label="Account name" value={BANK_DETAILS.accountName} />
            <div className="flex items-center justify-between gap-3">
              <div className="min-w-0">
                <div className="text-xs text-white/45">Account number</div>
                <div className="text-lg font-medium tabular tracking-wide">
                  {BANK_DETAILS.accountNumber}
                </div>
              </div>
              <button
                onClick={copyAccount}
                className="chip hover:border-white/40 transition-colors shrink-0"
              >
                {copied ? (
                  <>
                    <CheckIcon width={14} height={14} /> Copied
                  </>
                ) : (
                  <>
                    <CopyIcon width={14} height={14} /> Copy
                  </>
                )}
              </button>
            </div>
            <p className="text-xs text-white/40 pt-3 border-t border-[color:var(--hair)]">
              {BANK_DETAILS.reference}
            </p>
          </div>

          <button
            onClick={() => setHistoryOpen(true)}
            className="card-tap w-full flex items-center gap-4 p-4 mt-4"
          >
            <span className="tile w-11 h-11 shrink-0">
              <DocIcon width={22} height={22} />
            </span>
            <span className="flex-1 text-left">
              <span className="block text-sm font-medium">Giving History</span>
              <span className="block text-xs text-white/50 mt-0.5">
                {store.gifts.length} record
                {store.gifts.length === 1 ? "" : "s"} • {naira(total)} total
              </span>
            </span>
            <ChevronRight width={18} height={18} className="text-white/30" />
          </button>

          <div className="gold-card p-5 mt-4 flex items-start gap-3">
            <span className="tile tile-gold w-10 h-10 shrink-0">
              <GiftBoxIcon width={20} height={20} />
            </span>
            <p className="text-sm text-white/70 leading-relaxed">
              Every gift is sown into the vision of Kings World. Receipts for
              tax and giving statements can be generated any time.
            </p>
          </div>
        </div>
      </div>

      {/* ---- Online give confirm ---- */}
      <Sheet
        open={confirm != null}
        onClose={() => setConfirm(null)}
        title="Confirm your gift"
        subtitle="This is a demo checkout. No real payment is taken."
      >
        {confirm && (
          <div className="space-y-5">
            <div className="hero-card p-6 text-center">
              <div className="eyebrow text-white/70 mb-1">{confirm.category}</div>
              <div className="font-display font-semibold text-4xl tabular">
                {naira(confirm.amount)}
              </div>
            </div>
            <div className="glass p-4 space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-white/50">Giver</span>
                <span>
                  {user?.firstName} {user?.lastName}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-white/50">Method</span>
                <span>Card / Paystack (demo)</span>
              </div>
            </div>
            <button
              onClick={completeOnline}
              className="btn-grad w-full h-12 rounded-full text-sm font-medium flex items-center justify-center gap-2"
            >
              <CheckIcon width={18} height={18} /> Pay {naira(confirm.amount)}
            </button>
            <p className="text-center text-xs text-white/35">
              Secured by Paystack • Malachi 3:10
            </p>
          </div>
        )}
      </Sheet>

      {/* ---- History sheet ---- */}
      <Sheet
        open={historyOpen}
        onClose={() => setHistoryOpen(false)}
        title="Giving History"
        subtitle="Your private giving ledger."
      >
        <div className="space-y-4">
          <div className="gold-card p-5 flex items-center justify-between">
            <div>
              <div className="eyebrow text-gold-gradient">Total given</div>
              <div className="font-display font-semibold text-3xl tabular mt-1">
                {naira(total)}
              </div>
            </div>
            <button
              onClick={() =>
                toast("Giving receipt generated and emailed to you.")
              }
              className="btn-ghost h-10 px-4 rounded-full text-xs font-medium"
            >
              Generate Receipt
            </button>
          </div>

          {store.gifts.length === 0 ? (
            <p className="text-center text-sm text-white/40 py-8">
              No giving records yet. Your contributions will appear here.
            </p>
          ) : (
            <div className="glass divide-hair">
              {store.gifts.map((g) => (
                <div
                  key={g.id}
                  className="flex items-center justify-between gap-3 p-4"
                >
                  <div className="min-w-0">
                    <div className="text-sm font-medium truncate">
                      {g.category}
                    </div>
                    <div className="text-xs text-white/45 mt-0.5">
                      {formatDate(g.at)} • {g.reference} •{" "}
                      {g.method === "online" ? "Online" : "Transfer"}
                    </div>
                  </div>
                  <div className="font-medium tabular shrink-0">
                    {naira(g.amount)}
                  </div>
                </div>
              ))}
            </div>
          )}
          <p className="text-xs text-white/35 text-center">
            Receipts can be used for end-of-year tax and giving statements.
          </p>
        </div>
      </Sheet>
    </div>
  );
}

function Row({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-center justify-between gap-3">
      <span className="text-xs text-white/45">{label}</span>
      <span className="text-sm text-right">{value}</span>
    </div>
  );
}
