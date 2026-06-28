import Link from "next/link";
import { hero } from "@/lib/content";
import { images, slotStyle } from "@/lib/images";
import { Star } from "@/lib/icons";

export default function Hero() {
  const img = images.hero;
  return (
    <section className="mx-auto max-w-6xl px-5 pt-12 pb-16 md:pt-20">
      <div className="grid items-center gap-10 md:grid-cols-2 md:gap-14">
        <div>
          <p className="mb-4 text-xs uppercase tracking-[0.28em] text-taupe">
            {hero.eyebrow}
          </p>
          <h1 className="font-serif text-4xl leading-[1.08] text-ink md:text-[3.4rem]">
            {hero.headline}
          </h1>
          <p className="mt-6 max-w-md text-lg leading-relaxed text-deep">
            {hero.sub}
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Link
              href="/kit"
              className="rounded-full bg-ink px-7 py-3.5 text-base font-medium text-oat shadow-sm transition hover:bg-deep"
            >
              {hero.ctaPrimary}
            </Link>
            <Link
              href="/#how"
              className="rounded-full border border-line px-7 py-3.5 text-base font-medium text-ink transition hover:bg-sand"
            >
              {hero.ctaSecondary}
            </Link>
          </div>

          <div className="mt-8 flex items-center gap-4">
            <div className="flex text-clay">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} />
              ))}
            </div>
            <p className="text-sm text-muted">
              {hero.trust.join(" · ")}
            </p>
          </div>
        </div>

        <div className="relative">
          <div
            className="aspect-[4/5] w-full rounded-3xl shadow-xl"
            style={slotStyle(img)}
            role="img"
            aria-label={img.label}
          />
          <div className="absolute -bottom-5 left-5 rounded-2xl bg-oat/95 px-5 py-3 shadow-lg ring-1 ring-line">
            <p className="text-xs uppercase tracking-widest text-taupe">Steadier by</p>
            <p className="font-serif text-2xl text-ink">the afternoon</p>
          </div>
        </div>
      </div>
    </section>
  );
}
