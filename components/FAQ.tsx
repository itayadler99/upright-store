"use client";

import { useState } from "react";
import { faqs } from "@/lib/content";
import { ChevronDown } from "@/lib/icons";

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section id="faq" className="py-20">
      <div className="mx-auto max-w-3xl px-5">
        <h2 className="text-center font-serif text-3xl text-ink md:text-4xl">
          Questions, answered
        </h2>
        <div className="mt-10 divide-y divide-line rounded-2xl bg-oat ring-1 ring-line/70">
          {faqs.map((f, i) => {
            const isOpen = open === i;
            return (
              <div key={f.q} className="px-6">
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="flex w-full items-center justify-between gap-4 py-5 text-left"
                  aria-expanded={isOpen}
                >
                  <span className="font-medium text-ink">{f.q}</span>
                  <ChevronDown
                    className={`h-5 w-5 shrink-0 text-taupe transition-transform ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>
                <div
                  className={`grid transition-all duration-300 ${
                    isOpen
                      ? "grid-rows-[1fr] pb-5 opacity-100"
                      : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden text-deep leading-relaxed">
                    {f.a}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
