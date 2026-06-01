import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import SearchBar from "@/components/SearchBar";
import FeaturedProperties from "@/components/FeaturedProperties";
import HowItWorks from "@/components/HowItWorks";
import Neighborhoods from "@/components/Neighborhoods";
import StatsCounter from "@/components/StatsCounter";
import Testimonials from "@/components/Testimonials";
import CTABanner from "@/components/CTABanner";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import CustomCursor from "@/components/CustomCursor";
import { createClient } from "@/lib/supabase/server";
import { DBProperty, DBNeighborhood, DBTestimonial } from "@/lib/supabase/types";

async function getData() {
  const supabase = createClient();

  const [{ data: properties }, { data: neighborhoods }, { data: testimonials }] =
    await Promise.all([
      supabase.from("properties").select("*").order("id"),
      supabase.from("neighborhoods").select("*").order("id"),
      supabase.from("testimonials").select("*").order("id"),
    ]);

  return {
    properties: (properties as DBProperty[]) ?? [],
    neighborhoods: (neighborhoods as DBNeighborhood[]) ?? [],
    testimonials: (testimonials as DBTestimonial[]) ?? [],
  };
}

export default async function HomePage() {
  const { properties, neighborhoods, testimonials } = await getData();

  return (
    <>
      <CustomCursor />
      <Navbar />
      <main>
        <Hero />
        <SearchBar />
        <FeaturedProperties properties={properties} />
        <HowItWorks />
        <Neighborhoods neighborhoods={neighborhoods} />
        <StatsCounter />
        <Testimonials testimonials={testimonials} />
        <CTABanner />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
