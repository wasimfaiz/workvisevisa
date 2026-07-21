"use client";

import { useState } from "react";
import { motion } from "motion/react";
import {
  FaPaperPlane,
  FaCircleCheck,
  FaCircleExclamation,
  FaWandMagicSparkles,
  FaShieldHalved,
  FaClock,
  FaPhoneVolume,
} from "react-icons/fa6";
import { targetCountryOptions } from "@/lib/data";

interface FormData {
  name: string;
  phone: string;
  country: string;
  occupation: string;
}
interface FormErrors {
  name?: string;
  phone?: string;
  country?: string;
  occupation?: string;
}

export default function ConsultationForm() {
  const [data, setData] = useState<FormData>({
    name: "",
    phone: "",
    country: "",
    occupation: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState(false);

  const validate = (): boolean => {
    const errs: FormErrors = {};
    if (!data.name.trim() || data.name.trim().length < 2)
      errs.name = "Please enter your full name.";
    if (!data.phone.trim() || !/^[+]?[\d\s()-]{7,18}$/.test(data.phone.trim()))
      errs.phone = "Please enter a valid phone number.";
    if (!data.country) errs.country = "Please select a target country.";
    if (!data.occupation.trim() || data.occupation.trim().length < 2)
      errs.occupation = "Please enter your current occupation.";
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) setSubmitted(true);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setData((d) => ({ ...d, [name]: value }));
    if (errors[name as keyof FormErrors])
      setErrors((prev) => ({ ...prev, [name]: undefined }));
  };

  if (submitted) {
    return (
      <section id="consultation" className="relative py-24 md:py-32 bg-slate-50">
        <div className="relative z-10 mx-auto max-w-xl px-4 text-center">
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.4 }}
            className="rounded-3xl border border-emerald-200 bg-white p-10 shadow-xl"
          >
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-emerald-100 text-emerald-600 mx-auto mb-5 border border-emerald-200">
              <FaCircleCheck className="w-8 h-8" />
            </div>
            <h3 className="text-3xl font-display font-bold text-slate-900 mb-3">
              Consultation Booked!
            </h3>
            <p className="text-slate-600 text-base leading-relaxed font-medium">
              Our lead immigration specialist will reach out to you on WhatsApp / Phone within <strong>24 hours</strong> to review your eligibility.
            </p>
          </motion.div>
        </div>
      </section>
    );
  }

  const fieldClass = (field: keyof FormErrors) =>
    `w-full rounded-xl border bg-slate-50 px-4 py-3.5 text-sm text-slate-900 placeholder:text-slate-400 outline-none transition-all duration-200 focus:ring-2 focus:ring-emerald-500/30 focus:border-emerald-500 ${
      errors[field]
        ? "border-red-400 focus:border-red-500"
        : "border-slate-200"
    }`;

  return (
    <section
      id="consultation"
      className="relative py-24 md:py-32 overflow-hidden bg-slate-50"
    >
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
          {/* Left copy */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-emerald-800 mb-4 shadow-sm">
              <FaWandMagicSparkles className="w-3.5 h-3.5 text-amber-600" /> Start Your Journey
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-extrabold text-slate-900 leading-tight tracking-tight">
              Ready to Secure Your
              <br />
              <span className="gradient-text-gold">Overseas Work Visa?</span>
            </h2>
            <p className="mt-5 text-lg text-slate-600 leading-relaxed max-w-lg font-medium">
              Book a free 30-minute 1-on-1 strategy call with our licensed experts. We&rsquo;ll evaluate your eligibility and map out a clear path forward.
            </p>

            <div className="mt-8 space-y-4">
              {[
                { icon: FaShieldHalved, title: "100% Confidential & No Upfront Obligations", sub: "Your data is strictly protected." },
                { icon: FaClock, title: "Fast 24-Hour Profile Assessment", sub: "Get direct feedback on your visa eligibility score." },
                { icon: FaPhoneVolume, title: "Direct Call with Licensed Advisor", sub: "No sales agents — talk directly to case managers." },
              ].map(({ icon: Icon, title, sub }) => (
                <div
                  key={title}
                  className="flex items-start gap-4 rounded-2xl border border-slate-200/90 bg-white p-4 shadow-sm transition-colors hover:border-emerald-500/40"
                >
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-700">
                    <Icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-slate-900">{title}</h4>
                    <p className="text-xs text-slate-500 mt-0.5">{sub}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right form card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <form
              onSubmit={handleSubmit}
              noValidate
              className="relative rounded-3xl border border-slate-200/90 bg-white shadow-xl overflow-hidden p-8 sm:p-10"
            >
              <div className="flex items-center justify-between mb-8 pb-4 border-b border-slate-100">
                <div>
                  <h3 className="text-xl font-display font-bold text-slate-900">
                    Book Free Consultation
                  </h3>
                  <p className="text-xs text-emerald-700 mt-0.5 font-bold">
                    ⚡ Free 30-Min Session · Response within 24h
                  </p>
                </div>
                <span className="flex h-3 w-3 rounded-full bg-emerald-500 animate-pulse" />
              </div>

              <div className="space-y-5">
                <div>
                  <label htmlFor="form-name" className="mb-2 block text-xs font-bold uppercase tracking-wider text-slate-700">
                    Full Name
                  </label>
                  <input
                    id="form-name"
                    name="name"
                    type="text"
                    placeholder="e.g. Rahul Mehta"
                    value={data.name}
                    onChange={handleChange}
                    className={fieldClass("name")}
                  />
                  {errors.name && (
                    <p className="mt-1 flex items-center gap-1 text-xs text-red-500">
                      <FaCircleExclamation className="w-3.5 h-3.5" /> {errors.name}
                    </p>
                  )}
                </div>

                <div>
                  <label htmlFor="form-phone" className="mb-2 block text-xs font-bold uppercase tracking-wider text-slate-700">
                    Phone / WhatsApp Number
                  </label>
                  <input
                    id="form-phone"
                    name="phone"
                    type="tel"
                    placeholder="+91 98765 43210"
                    value={data.phone}
                    onChange={handleChange}
                    className={fieldClass("phone")}
                  />
                  {errors.phone && (
                    <p className="mt-1 flex items-center gap-1 text-xs text-red-500">
                      <FaCircleExclamation className="w-3.5 h-3.5" /> {errors.phone}
                    </p>
                  )}
                </div>

                <div>
                  <label htmlFor="form-country" className="mb-2 block text-xs font-bold uppercase tracking-wider text-slate-700">
                    Target Destination
                  </label>
                  <select
                    id="form-country"
                    name="country"
                    value={data.country}
                    onChange={handleChange}
                    className={`${fieldClass("country")} ${!data.country ? "text-slate-400" : "text-slate-900"} appearance-none`}
                    style={{
                      backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%23059669' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3e%3c/svg%3e")`,
                      backgroundPosition: "right 14px center",
                      backgroundRepeat: "no-repeat",
                      backgroundSize: "20px",
                    }}
                  >
                    <option value="" disabled>Select target country</option>
                    {targetCountryOptions.map((c) => (
                      <option key={c} value={c} className="bg-white text-slate-900">
                        {c}
                      </option>
                    ))}
                  </select>
                  {errors.country && (
                    <p className="mt-1 flex items-center gap-1 text-xs text-red-500">
                      <FaCircleExclamation className="w-3.5 h-3.5" /> {errors.country}
                    </p>
                  )}
                </div>

                <div>
                  <label htmlFor="form-occupation" className="mb-2 block text-xs font-bold uppercase tracking-wider text-slate-700">
                    Current Occupation / Industry
                  </label>
                  <input
                    id="form-occupation"
                    name="occupation"
                    type="text"
                    placeholder="e.g. Senior Software Engineer / Staff Nurse"
                    value={data.occupation}
                    onChange={handleChange}
                    className={fieldClass("occupation")}
                  />
                  {errors.occupation && (
                    <p className="mt-1 flex items-center gap-1 text-xs text-red-500">
                      <FaCircleExclamation className="w-3.5 h-3.5" /> {errors.occupation}
                    </p>
                  )}
                </div>
              </div>

              <button
                type="submit"
                className="mt-8 flex w-full items-center justify-center gap-2.5 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 py-4.5 text-base font-extrabold text-white shadow-lg shadow-amber-500/25 hover:shadow-xl hover:shadow-amber-500/35 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 cursor-pointer"
              >
                <FaPaperPlane className="w-4 h-4" />
                Reserve Free Consultation Slot
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
