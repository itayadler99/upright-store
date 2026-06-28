import { howItWorks } from "@/lib/content";

export default function HowItWorks() {
  return (
    <section id="how" className="py-20">
      <div className="mx-auto max-w-6xl px-5">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs uppercase tracking-[0.28em] text-taupe">
            The ritual
          </p>
          <h2 className="mt-3 font-serif text-3xl text-ink md:text-4xl">
            {howItWorks.heading}
          </h2>
        </div>

        <div className="mt-14 grid gap-8 md:grid-cols-3">
          {howItWorks.steps.map((s) => (
            <div key={s.n} className="relative">
              <span className="font-serif text-5xl text-clay/50">{s.n}</span>
              <h3 className="mt-3 font-serif text-2xl text-ink">{s.title}</h3>
              <p className="mt-2 leading-relaxed text-deep">{s.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
