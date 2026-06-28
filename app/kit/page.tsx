import AnnouncementBar from "@/components/AnnouncementBar";
import Nav from "@/components/Nav";
import OfferCard from "@/components/OfferCard";
import Benefits from "@/components/Benefits";
import HowItWorks from "@/components/HowItWorks";
import Testimonials from "@/components/Testimonials";
import Guarantee from "@/components/Guarantee";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import { images } from "@/lib/images";
import { offer } from "@/lib/content";
import { Star } from "@/lib/icons";

export const metadata = {
  title: "The UPRIGHT Kit — Daily Support for Your Standing Day",
};

export default function KitPage() {
  return (
    <>
      <AnnouncementBar />
      <Nav />
      <main>
        <section className="mx-auto max-w-6xl px-5 py-10 md:py-14">
          <div className="grid gap-10 md:grid-cols-2 md:gap-12">
            {/* gallery */}
            <div className="space-y-4">
              <div
                className="aspect-square w-full rounded-3xl shadow-lg"
                style={{ background: images.product.gradient }}
                role="img"
                aria-label={images.product.label}
              />
              <div className="grid grid-cols-2 gap-4">
                <div
                  className="aspect-[4/3] rounded-2xl"
                  style={{ background: images.socks.gradient }}
                  role="img"
                  aria-label={images.socks.label}
                />
                <div
                  className="aspect-[4/3] rounded-2xl"
                  style={{ background: images.minerals.gradient }}
                  role="img"
                  aria-label={images.minerals.label}
                />
              </div>
            </div>

            {/* offer */}
            <div>
              <div className="mb-4 flex items-center gap-3">
                <div className="flex text-clay">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} />
                  ))}
                </div>
                <span className="text-sm text-muted">
                  Loved by 4,000+ steadier mornings · Saves ${offer.saves}
                </span>
              </div>
              <OfferCard />
            </div>
          </div>
        </section>

        <Benefits />
        <HowItWorks />
        <Testimonials />
        <Guarantee />
        <FAQ />
      </main>
      <Footer />
    </>
  );
}
