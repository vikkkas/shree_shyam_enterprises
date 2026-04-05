import Hero from "@/components/Hero";
import MarqueeTicker from "@/components/MarqueeTicker";
import AboutSection from "@/components/AboutSection";
import ProductsSection from "@/components/ProductsSection";
import Process from "@/components/Process";
import WhyUs from "@/components/WhyUs";
import Testimonials from "@/components/Testimonials";
import CTAStrip from "@/components/CTAStrip";

export default function HomePage() {
  return (
    <>
      <Hero />
      <MarqueeTicker />
      <AboutSection />
      <ProductsSection featured={true} />
      <Process />
      <WhyUs />
      <Testimonials />
      <CTAStrip />
    </>
  );
}
