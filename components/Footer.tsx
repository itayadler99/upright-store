import Link from "next/link";
import { brand, footer } from "@/lib/content";

export default function Footer() {
  return (
    <footer className="mt-auto border-t border-line bg-sand/40">
      <div className="mx-auto max-w-6xl px-5 py-14">
        <div className="flex flex-col items-start justify-between gap-8 md:flex-row">
          <div className="max-w-sm">
            <p className="font-serif text-2xl text-ink">{brand.name}</p>
            <p className="mt-2 text-sm text-deep">{brand.tagline}</p>
          </div>
          <nav className="flex flex-wrap gap-x-8 gap-y-3 text-sm text-deep">
            {footer.links.map((l) => (
              <Link key={l} href="/kit" className="hover:text-ink">
                {l}
              </Link>
            ))}
          </nav>
        </div>
        <p className="mt-10 max-w-3xl text-xs leading-relaxed text-muted">
          {footer.disclaimer}
        </p>
        <p className="mt-6 text-xs text-muted">
          © {new Date().getFullYear()} {brand.name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
