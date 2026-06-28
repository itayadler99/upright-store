import Link from "next/link";
import { guarantee } from "@/lib/content";

export default function Guarantee() {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-3xl px-5">
        <div className="rounded-3xl bg-ink px-8 py-12 text-center text-oat shadow-xl md:px-14">
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full border border-clay/40 font-serif text-2xl text-clay">
            30
          </div>
          <h2 className="mt-6 font-serif text-3xl text-oat">{guarantee.title}</h2>
          <p className="mx-auto mt-4 max-w-xl leading-relaxed text-oat/80">
            {guarantee.body}
          </p>
          <Link
            href="/kit"
            className="mt-8 inline-block rounded-full bg-oat px-7 py-3.5 font-medium text-ink transition hover:bg-sand"
          >
            Start my steadier routine
          </Link>
        </div>
      </div>
    </section>
  );
}
