import { testimonials } from "@/lib/content";
import { Star } from "@/lib/icons";

export default function Testimonials() {
  return (
    <section id="reviews" className="bg-sand/60 py-20">
      <div className="mx-auto max-w-6xl px-5">
        <div className="mx-auto max-w-2xl text-center">
          <div className="flex justify-center text-clay">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} className="h-5 w-5" />
            ))}
          </div>
          <h2 className="mt-4 font-serif text-3xl text-ink md:text-4xl">
            Steadier mornings, in their words
          </h2>
          <p className="mt-3 text-deep">
            Real routines from people who got tired of bracing every time they
            stood up.
          </p>
        </div>

        <div className="mt-12 columns-1 gap-5 sm:columns-2 lg:columns-3">
          {testimonials.map((t) => (
            <figure
              key={t.name}
              className="mb-5 break-inside-avoid rounded-2xl bg-oat p-6 shadow-sm ring-1 ring-line/70"
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
  );
}
