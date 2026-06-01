"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { submitContactInquiry } from "@/app/actions/contact";

const propertyTypes = ["Any Type", "Villa", "Penthouse", "Modern House", "Condo", "Townhouse"];

export default function ContactSection() {
  const [form, setForm] = useState({
    full_name: "",
    email: "",
    phone: "",
    message: "",
    property_interest: "Any Type",
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    setStatus("idle");
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.full_name || !form.email || !form.message) return;
    setStatus("loading");

    const result = await submitContactInquiry({
      full_name: form.full_name,
      email: form.email,
      phone: form.phone,
      message: form.message,
      property_interest: form.property_interest !== "Any Type" ? form.property_interest : undefined,
    });

    if (result.success) {
      setStatus("success");
      setForm({ full_name: "", email: "", phone: "", message: "", property_interest: "Any Type" });
    } else {
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="bg-warm-white py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left — Info */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="h-px w-10 bg-espresso" />
              <span className="text-espresso font-poppins text-sm font-semibold tracking-[0.25em] uppercase">
                Get In Touch
              </span>
            </div>
            <h2 className="font-poppins font-bold text-4xl md:text-5xl text-navy leading-tight mb-6">
              Talk to an
              <br />
              Advisor
            </h2>
            <p className="text-navy/55 font-poppins leading-relaxed mb-10 max-w-sm">
              Our expert advisors are ready to guide you through every step of finding your perfect property. No pressure, just honest advice.
            </p>

            <div className="flex flex-col gap-5">
              {[
                { icon: "📍", label: "Visit Us", value: "123 Park Avenue, New York, NY 10017" },
                { icon: "📞", label: "Call Us", value: "+1 (212) 555-0198" },
                { icon: "✉️", label: "Email Us", value: "hello@estate.com" },
              ].map((item) => (
                <div key={item.label} className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-blue-tint rounded-xl flex items-center justify-center shrink-0 text-lg">
                    {item.icon}
                  </div>
                  <div>
                    <div className="font-poppins font-semibold text-navy text-sm">{item.label}</div>
                    <div className="font-poppins text-navy/50 text-sm mt-0.5">{item.value}</div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right — Form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            {status === "success" ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-white rounded-2xl p-10 shadow-xl text-center"
              >
                <div className="w-16 h-16 bg-blue-tint rounded-full flex items-center justify-center mx-auto mb-4 text-3xl">
                  ✓
                </div>
                <h3 className="font-poppins font-bold text-navy text-2xl mb-3">Message Sent!</h3>
                <p className="text-navy/50 font-poppins">
                  Thanks for reaching out. One of our advisors will contact you within 24 hours.
                </p>
                <button
                  onClick={() => setStatus("idle")}
                  className="mt-6 text-espresso font-poppins font-semibold text-sm hover:underline"
                >
                  Send another message
                </button>
              </motion.div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="bg-white rounded-2xl p-8 shadow-xl flex flex-col gap-5"
                noValidate
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="flex flex-col gap-1.5">
                    <label className="font-poppins text-xs font-semibold text-navy/50 uppercase tracking-widest">
                      Full Name <span className="text-espresso">*</span>
                    </label>
                    <input
                      type="text"
                      name="full_name"
                      value={form.full_name}
                      onChange={handleChange}
                      required
                      placeholder="Lydarien Kirkendoll"
                      className="border border-navy/10 rounded-xl px-4 py-3 font-poppins text-sm text-navy placeholder-navy/25 outline-none focus:border-espresso transition-colors duration-200"
                    />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label className="font-poppins text-xs font-semibold text-navy/50 uppercase tracking-widest">
                      Email <span className="text-espresso">*</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      required
                      placeholder="you@example.com"
                      className="border border-navy/10 rounded-xl px-4 py-3 font-poppins text-sm text-navy placeholder-navy/25 outline-none focus:border-espresso transition-colors duration-200"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="flex flex-col gap-1.5">
                    <label className="font-poppins text-xs font-semibold text-navy/50 uppercase tracking-widest">
                      Phone
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={form.phone}
                      onChange={handleChange}
                      placeholder="+1 (555) 000-0000"
                      className="border border-navy/10 rounded-xl px-4 py-3 font-poppins text-sm text-navy placeholder-navy/25 outline-none focus:border-espresso transition-colors duration-200"
                    />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label className="font-poppins text-xs font-semibold text-navy/50 uppercase tracking-widest">
                      Interested In
                    </label>
                    <select
                      name="property_interest"
                      value={form.property_interest}
                      onChange={handleChange}
                      className="border border-navy/10 rounded-xl px-4 py-3 font-poppins text-sm text-navy outline-none focus:border-espresso transition-colors duration-200 cursor-pointer bg-white"
                    >
                      {propertyTypes.map((t) => <option key={t}>{t}</option>)}
                    </select>
                  </div>
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="font-poppins text-xs font-semibold text-navy/50 uppercase tracking-widest">
                    Message <span className="text-espresso">*</span>
                  </label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    required
                    rows={4}
                    placeholder="Tell us what you're looking for..."
                    className="border border-navy/10 rounded-xl px-4 py-3 font-poppins text-sm text-navy placeholder-navy/25 outline-none focus:border-espresso transition-colors duration-200 resize-none"
                  />
                </div>

                {status === "error" && (
                  <p className="text-red-500 font-poppins text-sm">Something went wrong. Please try again.</p>
                )}

                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.99 }}
                  disabled={status === "loading"}
                  className="bg-navy text-white font-poppins font-semibold py-4 rounded-xl text-sm tracking-wide hover:bg-navy/90 transition-colors duration-300 disabled:opacity-70 flex items-center justify-center gap-2"
                >
                  {status === "loading" ? (
                    <>
                      <svg className="animate-spin w-4 h-4" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                      </svg>
                      Sending...
                    </>
                  ) : (
                    "Send Message"
                  )}
                </motion.button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
