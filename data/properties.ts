export interface Property {
  id: number;
  title: string;
  price: number;
  location: string;
  city: string;
  bedrooms: number;
  bathrooms: number;
  sqft: number;
  type: "Villa" | "Penthouse" | "Modern House" | "Condo" | "Townhouse";
  featured: boolean;
  imageUrl: string;
  neighborhood: string;
}

export const properties: Property[] = [
  {
    id: 1,
    title: "The Meridian Penthouse",
    price: 4850000,
    location: "12 Skyline Avenue",
    city: "New York",
    bedrooms: 4,
    bathrooms: 3,
    sqft: 4200,
    type: "Penthouse",
    featured: true,
    imageUrl: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80",
    neighborhood: "Uptown District",
  },
  {
    id: 2,
    title: "Riverside Haven Villa",
    price: 3200000,
    location: "8 Willow Lane",
    city: "Miami",
    bedrooms: 5,
    bathrooms: 4,
    sqft: 6800,
    type: "Villa",
    featured: true,
    imageUrl: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=800&q=80",
    neighborhood: "Riverside Heights",
  },
  {
    id: 3,
    title: "The Marina Residence",
    price: 2100000,
    location: "4 Harbor Point",
    city: "San Francisco",
    bedrooms: 3,
    bathrooms: 2,
    sqft: 2900,
    type: "Condo",
    featured: true,
    imageUrl: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&q=80",
    neighborhood: "The Marina",
  },
  {
    id: 4,
    title: "Lakeview Modern Estate",
    price: 1875000,
    location: "22 Crystal Drive",
    city: "Chicago",
    bedrooms: 4,
    bathrooms: 3,
    sqft: 3600,
    type: "Modern House",
    featured: false,
    imageUrl: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=800&q=80",
    neighborhood: "Lakeview",
  },
  {
    id: 5,
    title: "Heritage Quarter Townhouse",
    price: 1250000,
    location: "7 Cobblestone Row",
    city: "Boston",
    bedrooms: 3,
    bathrooms: 2,
    sqft: 2400,
    type: "Townhouse",
    featured: false,
    imageUrl: "https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=800&q=80",
    neighborhood: "Heritage Quarter",
  },
  {
    id: 6,
    title: "Azure Sky Penthouse",
    price: 5500000,
    location: "1 Pinnacle Tower",
    city: "Los Angeles",
    bedrooms: 5,
    bathrooms: 5,
    sqft: 5100,
    type: "Penthouse",
    featured: true,
    imageUrl: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80",
    neighborhood: "Uptown District",
  },
  {
    id: 7,
    title: "The Marina Cove",
    price: 980000,
    location: "15 Waterfront Blvd",
    city: "Seattle",
    bedrooms: 2,
    bathrooms: 2,
    sqft: 1800,
    type: "Condo",
    featured: false,
    imageUrl: "https://images.unsplash.com/photo-1493809842364-78817add7ffb?w=800&q=80",
    neighborhood: "The Marina",
  },
  {
    id: 8,
    title: "Riverside Grand Villa",
    price: 4100000,
    location: "3 Crestwood Hills",
    city: "Beverly Hills",
    bedrooms: 6,
    bathrooms: 5,
    sqft: 7400,
    type: "Villa",
    featured: false,
    imageUrl: "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=800&q=80",
    neighborhood: "Riverside Heights",
  },
];

export const neighborhoods = [
  {
    name: "Riverside Heights",
    avgPrice: 3650000,
    listings: 24,
    imageUrl: "https://images.unsplash.com/photo-1449844908441-8829872d2607?w=800&q=80",
  },
  {
    name: "The Marina",
    avgPrice: 1540000,
    listings: 18,
    imageUrl: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&q=80",
  },
  {
    name: "Uptown District",
    avgPrice: 5175000,
    listings: 12,
    imageUrl: "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=800&q=80",
  },
  {
    name: "Lakeview",
    avgPrice: 1875000,
    listings: 31,
    imageUrl: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80",
  },
  {
    name: "Heritage Quarter",
    avgPrice: 1300000,
    listings: 45,
    imageUrl: "https://images.unsplash.com/photo-1514565131-fce0801e6785?w=800&q=80",
  },
];

export const testimonials = [
  {
    id: 1,
    name: "Alexandra Chen",
    location: "New York, NY",
    rating: 5,
    text: "ESTATE transformed our home search entirely. The team's attention to detail and understanding of exactly what we needed was extraordinary. We found our dream penthouse in just three weeks.",
    imageUrl: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&q=80",
  },
  {
    id: 2,
    name: "James Whitmore",
    location: "Miami, FL",
    rating: 5,
    text: "An unparalleled experience from start to finish. The level of professionalism and market knowledge they brought was something I hadn't encountered with any other agency. Truly best-in-class.",
    imageUrl: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&q=80",
  },
  {
    id: 3,
    name: "Sofia Reyes",
    location: "Beverly Hills, CA",
    rating: 5,
    text: "Working with ESTATE was a revelation. They understand that buying a luxury home is about lifestyle, not just square footage. They matched us with a property that exceeded every expectation.",
    imageUrl: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&q=80",
  },
];
