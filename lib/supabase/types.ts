export interface DBProperty {
  id: number
  title: string
  price: number
  location: string
  city: string
  bedrooms: number
  bathrooms: number
  sqft: number
  type: 'Villa' | 'Penthouse' | 'Modern House' | 'Condo' | 'Townhouse'
  featured: boolean
  image_url: string
  neighborhood: string
  created_at: string
}

export interface DBNeighborhood {
  id: number
  name: string
  avg_price: number
  listings: number
  image_url: string
}

export interface DBTestimonial {
  id: number
  name: string
  location: string
  rating: number
  text: string
  image_url: string
}

export interface DBContactInquiry {
  id?: number
  full_name: string
  email: string
  phone?: string
  message: string
  property_interest?: string
  created_at?: string
}

export interface DBNewsletterSubscriber {
  id?: number
  email: string
  created_at?: string
}

export interface DBPropertyInquiry {
  id?: number
  property_id: number
  full_name: string
  email: string
  phone?: string
  message?: string
  created_at?: string
}
