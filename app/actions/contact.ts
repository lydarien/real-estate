"use server";

import { createClient } from "@/lib/supabase/server";

export interface ContactFormData {
  full_name: string;
  email: string;
  phone?: string;
  message: string;
  property_interest?: string;
}

export async function submitContactInquiry(data: ContactFormData) {
  const supabase = createClient();

  const { error } = await supabase.from("contact_inquiries").insert({
    full_name: data.full_name,
    email: data.email,
    phone: data.phone || null,
    message: data.message,
    property_interest: data.property_interest || null,
  });

  if (error) {
    return { success: false, error: error.message };
  }

  return { success: true };
}
