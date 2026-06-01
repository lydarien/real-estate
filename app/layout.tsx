import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata: Metadata = {
  title: "ESTATE — Luxury Real Estate",
  description: "Discover extraordinary properties in the world's most desirable neighborhoods. Curated luxury real estate for discerning buyers.",
  keywords: "luxury real estate, property, homes, villas, penthouses, condos",
  openGraph: {
    title: "ESTATE — Luxury Real Estate",
    description: "Discover extraordinary properties in the world's most desirable neighborhoods.",
    type: "website",
    images: [
      {
        url: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1200&q=80",
        width: 1200,
        height: 630,
        alt: "ESTATE Luxury Real Estate",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "ESTATE — Luxury Real Estate",
    description: "Discover extraordinary properties in the world's most desirable neighborhoods.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={poppins.variable}>
      <body className={`${poppins.className} bg-warm-white antialiased`}>
        {children}
      </body>
    </html>
  );
}
