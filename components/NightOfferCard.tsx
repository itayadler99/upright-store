"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { nightOffer as offer, nightBump as orderBump } from "@/lib/night";
import { useCart, money } from "@/lib/cart";
import { Check, Plus, Star } from "@/lib/icons";

export default function NightOfferCard() {
  const router = useRouter();
  const { add, clear } = useCart();
  const [subscribe, setSubscribe] = useState(true);
  const [bump, setBump] = useState(false);

  const kitPrice = subscribe ? offer.subscribe.monthly : offer.price;
  const total = kitPrice + (bump ? orderBump.price : 0);

  const handleCheckout = () => {
    clear();
    add({
      id: subscribe ? "night-kit-sub" : "night-kit-once",
      name: subscribe
        ? "UPRIGHT Night Kit — Subscribe & Save"
        : "UPRIGHT Night Kit — One-time",
      price: kitPrice,
      qty: 1,
      recurring: subscribe,
    });
    if (bump) {
      add({
        id: "bump-night-cream",
        name: "Extra jar of magnesium cream",
        price: orderBump.price,
        qty: 1,
      });
    }
    router.push("/checkout");
  };

  return (
    <div className="rounded-3xl bg-oat p-6 shadow-xl ring-1 ring-line md:p-8">
      <div className="flex items-center justify-between">
        <span className="rounded-full bg-sage/20 px-3 py-1 text-xs font-medium uppercase tracking-wider text-sage">
          {offer.badge}
        </span>
        <div className="flex items-center gap-1 text-clay">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star key={i} />
          ))}
          <span className="ml-1 text-xs text-muted">Early access</span>
        </div>
      </div>

      <h2 className="mt-4 font-serif text-2xl text-ink md:text-3xl">
        {offer.title}
      </h2>
      <p className="mt-2 text-sm text-deep">{offer.subtitle}</p>

      <ul className="mt-5 space-y-2.5">
        {offer.includes.map((i) => (
          <li key={i} className="flex items-start gap-2.5 text-sm text-ink">
            <Check className="mt-0.5 h-5 w-5 shrink-0 text-sage" />
            {i}
          </li>
        ))}
      </ul>

      {/* purchase option toggle */}
      <div className="mt-7 grid gap-3">
        <button
          onClick={() => setSubscribe(true)}
          className={`flex items-center justify-between rounded-2xl border p-4 text-left transition ${
            subscribe
              ? "border-ink bg-sand/60 ring-1 ring-ink"
              : "border-line bg-oat hover:border-taupe"
          }`}
        >
          <div>
            <p className="flex items-center gap-2 font-medium text-ink">
              {offer.subscribe.label}
              <span className="rounded-full bg-sage/20 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-sage">
                Save {offer.subscribe.discountPct}%
              </span>
            </p>
            <p className="mt-0.5 text-xs text-muted">{offer.subscribe.note}</p>
          </div>
          <div className="text-right">
            <p className="font-serif text-xl text-ink">
              {money(offer.subscribe.monthly)}
            </p>
            <p className="text-xs text-muted line-through">
              {money(offer.subscribe.monthlyCompare)}
            </p>
          </div>
        </button>

        <button
          onClick={() => setSubscribe(false)}
          className={`flex items-center justify-between rounded-2xl border p-4 text-left transition ${
            !subscribe
              ? "border-ink bg-sand/60 ring-1 ring-ink"
              : "border-line bg-oat hover:border-taupe"
          }`}
        >
          <div>
            <p className="font-medium text-ink">{offer.oneTimeLabel}</p>
            <p className="mt-0.5 text-xs text-muted">
              Full kit, pay once. No subscription.
            </p>
          </div>
          <div className="text-right">
            <p className="font-serif text-xl text-ink">{money(offer.price)}</p>
            <p className="text-xs text-muted line-through">
              {money(offer.compareAt)}
            </p>
          </div>
        </button>
      </div>

      {/* order bump */}
      <label
        className={`mt-4 flex cursor-pointer items-start gap-3 rounded-2xl border-2 border-dashed p-4 transition ${
          bump ? "border-sage bg-sage/10" : "border-line bg-sand/30"
        }`}
      >
        <input
          type="checkbox"
          checked={bump}
          onChange={(e) => setBump(e.target.checked)}
          className="mt-1 h-4 w-4 accent-sage"
        />
        <div className="flex-1">
          <p className="flex items-center gap-2 text-sm font-semibold text-ink">
            <Plus className="h-4 w-4 text-sage" />
            {orderBump.title} — {money(orderBump.price)}
            <span className="text-xs text-muted line-through">
              {money(orderBump.compareAt)}
            </span>
          </p>
          <p className="mt-1 text-xs text-deep">{orderBump.body}</p>
        </div>
      </label>

      <button
        onClick={handleCheckout}
        className="mt-6 w-full rounded-full bg-ink py-4 text-base font-medium text-oat transition hover:bg-deep"
      >
        {offer.cta} — {money(total)}
      </button>
      <p className="mt-3 text-center text-xs text-muted">{offer.shipNote}</p>
    </div>
  );
}
