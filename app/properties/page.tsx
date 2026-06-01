import { Suspense } from "react";
import PropertiesContent from "./PropertiesContent";
import CustomCursor from "@/components/CustomCursor";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function PropertiesPage() {
  return (
    <>
      <CustomCursor />
      <Navbar />
      <Suspense fallback={<PropertiesSkeleton />}>
        <PropertiesContent />
      </Suspense>
      <Footer />
    </>
  );
}

function PropertiesSkeleton() {
  return (
    <main>
      <section className="bg-navy pt-32 pb-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="h-12 w-64 bg-white/10 rounded-xl animate-pulse mb-4" />
          <div className="h-6 w-96 bg-white/10 rounded-xl animate-pulse" />
        </div>
      </section>
      <section className="bg-warm-white py-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {Array.from({ length: 6 }).map((_, i) => (
            <div key={i} className="h-80 bg-navy/5 rounded-2xl animate-pulse" />
          ))}
        </div>
      </section>
    </main>
  );
}
