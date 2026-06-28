"use client";

import Link from "next/link";
import { useState } from "react";
import { useCart, money } from "@/lib/cart";
import { brand, postPurchaseUpsell } from "@/lib/content";
import { Check } from "@/lib/icons";

type Stage = "form" | "upsell" | "done";

export default function CheckoutPage() {
  const { items, subtotal, add, clear } = useCart();
  const [stage, setStage] = useState<Stage>("form");

  const shipping = subtotal >= 150 ? 0 : 0; // free shipping shown; flat-free for launch
  const total = subtotal + shipping;

  if (stage === "upsell") {
    return (
      <CenterShell>
        <div className="rounded-3xl bg-oat p-8 shadow-xl ring-1 ring-line">
          <p className="text-xs uppercase tracking-[0.28em] text-taupe">
            {postPurchaseUpsell.eyebrow}
          </p>
          <h1 className="mt-3 font-serif text-3xl text-ink">
            {postPurchaseUpsell.title}
          </h1>
          <p className="mt-3 leading-relaxed text-deep">
            {postPurchaseUpsell.body}
          </p>
          <div className="mt-5 flex items-baseline gap-3">
            <span className="font-serif text-3xl text-ink">
              {money(postPurchaseUpsell.price)}
            </span>
            <span className="text-muted line-through">
              {money(postPurchaseUpsell.compareAt)}
            </span>
          </div>
          <button
            onClick={() => {
              add({
                id: "upsell-socks",
                name: "Second pair of support socks",
                price: postPurchaseUpsell.price,
                qty: 1,
              });
              setStage("done");
            }}
            className="mt-7 w-full rounded-full bg-ink py-4 font-medium text-oat transition hover:bg-deep"
          >
            {postPurchaseUpsell.cta}
          </button>
          <button
            onClick={() => setStage("done")}
            className="mt-3 w-full text-sm text-muted underline-offset-4 hover:underline"
          >
            {postPurchaseUpsell.decline}
          </button>
        </div>
      </CenterShell>
    );
  }

  if (stage === "done") {
    return (
      <CenterShell>
        <div className="rounded-3xl bg-oat p-10 text-center shadow-xl ring-1 ring-line">
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-sage/20 text-sage">
            <Check className="h-8 w-8" />
          </div>
          <h1 className="mt-6 font-serif text-3xl text-ink">
            Your order is confirmed
          </h1>
          <p className="mx-auto mt-3 max-w-md leading-relaxed text-deep">
            Thank you. Your UPRIGHT routine is on its way — ships in 1–2 business
            days. Here&apos;s to steadier mornings.
          </p>
          <Link
            href="/"
            onClick={() => clear()}
            className="mt-8 inline-block rounded-full bg-ink px-7 py-3.5 font-medium text-oat hover:bg-deep"
          >
            Back to {brand.name}
          </Link>
        </div>
      </CenterShell>
    );
  }

  return (
    <CenterShell wide>
      <div className="grid gap-8 lg:grid-cols-[1.4fr_1fr]">
        {/* payment form (Stripe-connect stub) */}
        <div className="rounded-3xl bg-oat p-7 shadow-xl ring-1 ring-line md:p-9">
          <Link href="/kit" className="text-sm text-muted hover:text-ink">
            ← Back to kit
          </Link>
          <h1 className="mt-4 font-serif text-3xl text-ink">Checkout</h1>

          <form
            onSubmit={(e) => {
              e.preventDefault();
              setStage("upsell");
            }}
            className="mt-6 space-y-4"
          >
            <Field label="Email" type="email" placeholder="you@email.com" required />
            <div className="grid grid-cols-2 gap-4">
              <Field label="First name" placeholder="Jordan" required />
              <Field label="Last name" placeholder="Lee" required />
            </div>
            <Field label="Address" placeholder="123 Main St" required />
            <div className="grid grid-cols-3 gap-4">
              <Field label="City" placeholder="Austin" required />
              <Field label="State" placeholder="TX" required />
              <Field label="ZIP" placeholder="78701" required />
            </div>

            <div className="rounded-2xl border border-dashed border-line bg-sand/30 p-4">
              <p className="text-sm font-medium text-ink">Payment</p>
              <p className="mt-1 text-xs text-muted">
                Payment processing connects at launch (Stripe / Shopify
                Payments). This demo skips live card capture.
              </p>
              <div className="mt-3 h-11 rounded-xl bg-oat ring-1 ring-line" />
            </div>

            <button
              type="submit"
              disabled={items.length === 0}
              className="w-full rounded-full bg-ink py-4 font-medium text-oat transition hover:bg-deep disabled:opacity-40"
            >
              {items.length === 0
                ? "Your cart is empty"
                : `Place order — ${money(total)}`}
            </button>
            <p className="text-center text-xs text-muted">
              30-day comfort guarantee · Secure checkout
            </p>
          </form>
        </div>

        {/* order summary */}
        <div className="h-fit rounded-3xl bg-sand/50 p-7 ring-1 ring-line">
          <h2 className="font-serif text-2xl text-ink">Order summary</h2>
          <ul className="mt-5 space-y-4">
            {items.length === 0 && (
              <li className="text-sm text-muted">
                Nothing here yet.{" "}
                <Link href="/kit" className="text-ink underline">
                  Add the kit
                </Link>
                .
              </li>
            )}
            {items.map((i) => (
              <li key={i.id} className="flex justify-between gap-4 text-sm">
                <span className="text-ink">
                  {i.name}
                  {i.recurring && (
                    <span className="ml-2 rounded-full bg-sage/20 px-2 py-0.5 text-[10px] uppercase tracking-wide text-sage">
                      Monthly
                    </span>
                  )}
                  {i.qty > 1 && (
                    <span className="text-muted"> × {i.qty}</span>
                  )}
                </span>
                <span className="text-ink">{money(i.price * i.qty)}</span>
              </li>
            ))}
          </ul>
          <div className="mt-6 space-y-2 border-t border-line pt-4 text-sm">
            <Row label="Subtotal" value={money(subtotal)} />
            <Row label="Shipping" value="Free" />
            <div className="flex justify-between border-t border-line pt-3 text-base font-medium text-ink">
              <span>Total</span>
              <span>{money(total)}</span>
            </div>
          </div>
        </div>
      </div>
    </CenterShell>
  );
}

function CenterShell({
  children,
  wide,
}: {
  children: React.ReactNode;
  wide?: boolean;
}) {
  return (
    <main className="flex min-h-screen items-center justify-center bg-oat px-5 py-12">
      <div className={wide ? "w-full max-w-5xl" : "w-full max-w-md"}>
        <Link
          href="/"
          className="mb-6 block text-center font-serif text-2xl text-ink"
        >
          {brand.name}
        </Link>
        {children}
      </div>
    </main>
  );
}

function Field({
  label,
  ...props
}: { label: string } & React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <label className="block">
      <span className="text-sm text-deep">{label}</span>
      <input
        {...props}
        className="mt-1 w-full rounded-xl border border-line bg-oat px-4 py-3 text-ink outline-none ring-ink/10 transition focus:border-taupe focus:ring-2"
      />
    </label>
  );
}

function Row({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex justify-between text-deep">
      <span>{label}</span>
      <span>{value}</span>
    </div>
  );
}
