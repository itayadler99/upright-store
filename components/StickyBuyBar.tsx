"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { offer } from "@/lib/content";
import { money } from "@/lib/cart";

export default function StickyBuyBar() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 700);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className={`fixed inset-x-0 bottom-0 z-50 border-t border-line bg-oat/95 backdrop-blur-md transition-transform duration-300 md:hidden ${
        show ? "translate-y-0" : "translate-y-full"
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-3">
        <div>
          <p className="text-sm font-medium text-ink">The UPRIGHT Kit</p>
          <p className="text-xs text-muted">
            From {money(offer.subscribe.monthly)} · save {offer.saves}
          </p>
        </div>
        <Link
          href="/kit"
          className="rounded-full bg-ink px-6 py-3 text-sm font-medium text-oat"
        >
          {offer.cta}
        </Link>
      </div>
    </div>
  );
}
