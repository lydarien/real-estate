import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import SearchBar from "@/components/SearchBar";
import FeaturedProperties from "@/components/FeaturedProperties";
import HowItWorks from "@/components/HowItWorks";
import Neighborhoods from "@/components/Neighborhoods";
import StatsCounter from "@/components/StatsCounter";
import Testimonials from "@/components/Testimonials";
import CTABanner from "@/components/CTABanner";
import Footer from "@/components/Footer";
import CustomCursor from "@/components/CustomCursor";

export default function HomePage() {
  return (
    <>
      <CustomCursor />
      <Navbar />
      <main>
        <Hero />
        <SearchBar />
        <FeaturedProperties />
        <HowItWorks />
        <Neighborhoods />
        <StatsCounter />
        <Testimonials />
        <CTABanner />
      </main>
      <Footer />
    </>
  );
}
