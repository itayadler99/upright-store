import AnnouncementBar from "@/components/AnnouncementBar";
import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Benefits from "@/components/Benefits";
import Advertorial from "@/components/Advertorial";
import HowItWorks from "@/components/HowItWorks";
import Testimonials from "@/components/Testimonials";
import Guarantee from "@/components/Guarantee";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import StickyBuyBar from "@/components/StickyBuyBar";

export default function Home() {
  return (
    <>
      <AnnouncementBar />
      <Nav />
      <main>
        <Hero />
        <Benefits />
        <Advertorial />
        <HowItWorks />
        <Testimonials />
        <Guarantee />
        <FAQ />
      </main>
      <Footer />
      <StickyBuyBar />
    </>
  );
}
