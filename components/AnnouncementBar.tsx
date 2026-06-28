import { announcements } from "@/lib/content";

export default function AnnouncementBar() {
  const row = [...announcements, ...announcements];
  return (
    <div className="bg-ink text-oat overflow-hidden">
      <div className="flex w-max animate-marquee whitespace-nowrap py-2.5">
        {row.map((a, i) => (
          <span
            key={i}
            className="mx-6 text-[11px] uppercase tracking-[0.22em] text-oat/85"
          >
            {a}
            <span className="ml-12 text-clay/70">·</span>
          </span>
        ))}
      </div>
    </div>
  );
}
