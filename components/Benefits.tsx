import { benefits } from "@/lib/content";
import { Icon } from "@/lib/icons";

export default function Benefits() {
  return (
    <section className="bg-sand/60 py-20">
      <div className="mx-auto max-w-6xl px-5">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-serif text-3xl text-ink md:text-4xl">
            Two gentle levers. One steadier day.
          </h2>
          <p className="mt-4 text-deep">
            UPRIGHT pairs graduated compression with a daily mineral ritual — the
            two simplest ways to feel more supported on your feet.
          </p>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {benefits.map((b) => (
            <div
              key={b.title}
              className="rounded-2xl bg-oat p-6 shadow-sm ring-1 ring-line/70"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-sand text-deep">
                <Icon name={b.icon} className="h-6 w-6" />
              </div>
              <h3 className="mt-4 font-serif text-xl text-ink">{b.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-deep">{b.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
