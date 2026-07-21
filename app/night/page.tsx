import Link from "next/link";
import AnnouncementBar from "@/components/AnnouncementBar";
import Nav from "@/components/Nav";
import NightOfferCard from "@/components/NightOfferCard";
import Footer from "@/components/Footer";
import { Icon, Star } from "@/lib/icons";
import {
  nightHero,
  nightBenefits,
  nightSteps,
  nightTestimonials,
  nightFaqs,
  nightImage,
  nightImageCream,
  nightImageWraps,
} from "@/lib/night";

export const metadata = {
  title: "The UPRIGHT Night Kit — Calm Legs, Quiet Evenings",
  description:
    "Gentle foot compression and a magnesium massage ritual for legs that won't settle down at night.",
};

const benefitIcons = ["compression", "minerals", "comfort", "steady"];

function slot(img: { gradient: string; label: string }) {
  return { background: img.gradient };
}

export default function NightPage() {
  return (
    <>
      <AnnouncementBar />
      <Nav />
      <main>
        {/* hero + offer */}
        <section className="mx-auto max-w-6xl px-5 py-10 md:py-14">
          <div className="grid gap-10 md:grid-cols-2 md:gap-12">
            <div className="space-y-4">
              <div
                className="aspect-square w-full rounded-3xl shadow-lg"
                style={slot(nightImage)}
                role="img"
                aria-label={nightImage.label}
              />
              <div className="grid grid-cols-2 gap-4">
                <div
                  className="aspect-[4/3] rounded-2xl"
                  style={slot(nightImageWraps)}
                  role="img"
                  aria-label={nightImageWraps.label}
                />
                <div
                  className="aspect-[4/3] rounded-2xl"
                  style={slot(nightImageCream)}
                  role="img"
                  aria-label={nightImageCream.label}
                />
              </div>
            </div>

            <div>
              <p className="text-xs uppercase tracking-[0.28em] text-taupe">
                {nightHero.eyebrow}
              </p>
              <h1 className="mt-3 font-serif text-3xl leading-tight text-ink md:text-4xl">
                {nightHero.headline}
              </h1>
              <p className="mt-4 text-deep">{nightHero.sub}</p>
              <div className="mt-6">
                <NightOfferCard />
              </div>
            </div>
          </div>
        </section>

        {/* benefits */}
        <section className="bg-sand/60 py-20">
          <div className="mx-auto max-w-6xl px-5">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="font-serif text-3xl text-ink md:text-4xl">
                Two gentle levers. One quieter night.
              </h2>
              <p className="mt-4 text-deep">
                The Night Kit pairs soft foot compression with a magnesium
                massage ritual — the two simplest ways to help restless legs
                wind down with you.
              </p>
            </div>
            <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {nightBenefits.map((b, i) => (
                <div
                  key={b.title}
                  className="rounded-2xl bg-oat p-6 shadow-sm ring-1 ring-line/70"
                >
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-sand text-deep">
                    <Icon name={benefitIcons[i]} className="h-6 w-6" />
                  </div>
                  <h3 className="mt-4 font-serif text-xl text-ink">{b.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-deep">
                    {b.body}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* how it works */}
        <section className="py-20">
          <div className="mx-auto max-w-6xl px-5">
            <div className="mx-auto max-w-2xl text-center">
              <p className="text-xs uppercase tracking-[0.28em] text-taupe">
                The evening ritual
              </p>
              <h2 className="mt-3 font-serif text-3xl text-ink md:text-4xl">
                {nightSteps.heading}
              </h2>
            </div>
            <div className="mt-14 grid gap-8 md:grid-cols-3">
              {nightSteps.steps.map((s) => (
                <div key={s.n} className="relative">
                  <span className="font-serif text-5xl text-clay/50">{s.n}</span>
                  <h3 className="mt-3 font-serif text-2xl text-ink">
                    {s.title}
                  </h3>
                  <p className="mt-2 leading-relaxed text-deep">{s.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* testimonials */}
        <section className="bg-sand/60 py-20">
          <div className="mx-auto max-w-6xl px-5">
            <div className="mx-auto max-w-2xl text-center">
              <div className="flex justify-center text-clay">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-5 w-5" />
                ))}
              </div>
              <h2 className="mt-4 font-serif text-3xl text-ink md:text-4xl">
                Quieter evenings, in their words
              </h2>
            </div>
            <div className="mt-12 grid gap-5 lg:grid-cols-3">
              {nightTestimonials.map((t) => (
                <figure
                  key={t.name}
                  className="rounded-2xl bg-oat p-6 shadow-sm ring-1 ring-line/70"
                >
                  <div className="flex text-clay">
                    {Array.from({ length: t.stars }).map((_, i) => (
                      <Star key={i} />
                    ))}
                  </div>
                  <blockquote className="mt-3 leading-relaxed text-ink">
                    “{t.quote}”
                  </blockquote>
                  <figcaption className="mt-4 text-sm">
                    <span className="font-medium text-ink">{t.name}</span>
                    <span className="text-muted"> — {t.detail}</span>
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>

        {/* guarantee */}
        <section className="py-20">
          <div className="mx-auto max-w-3xl px-5">
            <div className="rounded-3xl bg-ink px-8 py-12 text-center text-oat shadow-xl md:px-14">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full border border-clay/40 font-serif text-2xl text-clay">
                30
              </div>
              <h2 className="mt-6 font-serif text-3xl text-oat">
                The 30-day comfort guarantee
              </h2>
              <p className="mx-auto mt-4 max-w-xl leading-relaxed text-oat/80">
                Give the Night Kit a real try for 30 days. If your evenings
                don't feel calmer and more comfortable, reach out — we'll make
                it right. No drama, no fine print.
              </p>
              <Link
                href="/night"
                className="mt-8 inline-block rounded-full bg-oat px-7 py-3.5 font-medium text-ink transition hover:bg-sand"
              >
                Start my calmer evenings
              </Link>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" className="py-20">
          <div className="mx-auto max-w-3xl px-5">
            <h2 className="text-center font-serif text-3xl text-ink md:text-4xl">
              Questions, answered
            </h2>
            <div className="mt-10 divide-y divide-line rounded-2xl bg-oat ring-1 ring-line/70">
              {nightFaqs.map((f) => (
                <div key={f.q} className="px-6 py-5">
                  <p className="font-medium text-ink">{f.q}</p>
                  <p className="mt-2 leading-relaxed text-deep">{f.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* cross-sell to day kit */}
        <section className="pb-20">
          <div className="mx-auto max-w-3xl px-5 text-center">
            <p className="text-deep">
              Days feel unsteady too?{" "}
              <Link href="/kit" className="font-medium text-ink underline">
                Meet the original UPRIGHT Kit
              </Link>{" "}
              — daily support for your standing day.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
