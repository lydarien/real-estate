import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

// Types matching the DB schema
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
