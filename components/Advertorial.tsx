import Link from "next/link";
import { advertorial } from "@/lib/content";
import { images, slotStyle } from "@/lib/images";

export default function Advertorial() {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-3xl px-5">
        <p className="text-xs uppercase tracking-[0.28em] text-taupe">
          {advertorial.kicker}
        </p>
        <h2 className="mt-4 font-serif text-3xl leading-tight text-ink md:text-[2.6rem]">
          {advertorial.title}
        </h2>
        <p className="mt-5 text-lg leading-relaxed text-deep">
          {advertorial.lede}
        </p>

        <div
          className="my-10 aspect-[16/9] w-full rounded-3xl shadow-lg"
          style={slotStyle(images.lifestyle)}
          role="img"
          aria-label={images.lifestyle.label}
        />

        <div className="space-y-9">
          {advertorial.body.map((b) => (
            <div key={b.h}>
              <h3 className="font-serif text-2xl text-ink">{b.h}</h3>
              <p className="mt-2 leading-relaxed text-deep">{b.p}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link
            href="/kit"
            className="inline-block rounded-full bg-ink px-8 py-4 text-base font-medium text-oat transition hover:bg-deep"
          >
            {advertorial.cta}
          </Link>
        </div>
      </div>
    </section>
  );
}
