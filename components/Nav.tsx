import Link from "next/link";
import { brand } from "@/lib/content";

export default function Nav() {
  return (
    <header className="sticky top-0 z-40 border-b border-line/70 bg-oat/85 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
        <Link
          href="/"
          className="font-serif text-2xl tracking-tight text-ink"
        >
          {brand.name}
        </Link>
        <nav className="hidden items-center gap-8 text-sm text-deep md:flex">
          <Link href="/#how" className="hover:text-ink">How it works</Link>
          <Link href="/#reviews" className="hover:text-ink">Reviews</Link>
          <Link href="/#faq" className="hover:text-ink">FAQ</Link>
        </nav>
        <Link
          href="/kit"
          className="rounded-full bg-ink px-5 py-2.5 text-sm font-medium text-oat transition hover:bg-deep"
        >
          Shop the kit
        </Link>
      </div>
    </header>
  );
}
