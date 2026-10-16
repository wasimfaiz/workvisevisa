"use client";

import { useState } from "react";
import {
  FaCircleCheck,
  FaCircleExclamation,
  FaPaperPlane,
  FaShieldHalved,
  FaClock,
} from "react-icons/fa6";

interface BranchConsultationFormProps {
  branchName?: string;
  sourceTag?: string;
}

export default function BranchConsultationForm({
  branchName = "Patna Branch (Varma Centre)",
  sourceTag = "Patna Branch Landing Page",
}: BranchConsultationFormProps) {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    country: "Saudi Arabia",
    occupation: "",
    consultationMode: "In-Person Visit at Varma Centre",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [serverError, setServerError] = useState("");

  const validate = () => {
    const errs: Record<string, string> = {};
    const trimmedName = formData.name.trim();
    if (!trimmedName || trimmedName.length < 2) {
      errs.name = "Please enter your full name.";
    } else if (!/^[a-zA-Z\s]+$/.test(trimmedName)) {
      errs.name = "Name can only contain alphabets and spaces (no numbers).";
    }
    const digitsOnly = formData.phone.replace(/\D/g, "");
    if (!formData.phone.trim() || digitsOnly.length < 10) {
      errs.phone = "Please enter a valid 10-digit mobile or WhatsApp number.";
    }
    if (!formData.occupation.trim()) {
      errs.occupation = "Please enter your trade or skill (e.g., Electrician, Driver).";
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setLoading(true);
    setServerError("");

    try {
      const res = await fetch("/api/inquiries", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.name.trim(),
          phone: formData.phone.trim(),
          country: formData.country,
          occupation: `${formData.occupation.trim()} [Mode: ${formData.consultationMode}]`,
          source: sourceTag,
        }),
      });

      const result = await res.json();
      if (res.ok && result.success) {
        setSubmitted(true);
      } else {
        setServerError(result.message || "Unable to submit inquiry. Please try again or message on WhatsApp.");
      }
    } catch {
      setServerError("Network error. Please try again or contact us directly on WhatsApp.");
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    let finalVal = value;
    if (name === "name") {
      finalVal = value.replace(/[^a-zA-Z\s]/g, "");
    } else if (name === "phone") {
      finalVal = value.replace(/[^0-9]/g, "").slice(0, 10);
    }
    setFormData((prev) => ({ ...prev, [name]: finalVal }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
    if (serverError) setServerError("");
  };

  if (submitted) {
    return (
      <div className="w-full max-w-xl mx-auto rounded-3xl border border-emerald-300 bg-emerald-50/60 p-8 sm:p-10 text-center shadow-lg">
        <div className="w-16 h-16 rounded-full bg-emerald-600 text-white flex items-center justify-center mx-auto mb-4 shadow-md">
          <FaCircleCheck className="w-8 h-8" />
        </div>
        <h3 className="text-2xl font-black text-slate-900 mb-2">
          Consultation Request Confirmed!
        </h3>
        <p className="text-slate-600 text-sm leading-relaxed font-medium mb-6">
          Thank you, <strong>{formData.name}</strong>. Our senior counselor from the <strong>{branchName}</strong> will call you on <strong>{formData.phone}</strong> within 24 hours to review your visa eligibility.
        </p>
        <button
          onClick={() => {
            setFormData({
              name: "",
              phone: "",
              country: "Saudi Arabia",
              occupation: "",
              consultationMode: "In-Person Visit at Varma Centre",
            });
            setSubmitted(false);
          }}
          className="inline-flex items-center gap-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-white px-5 py-2.5 text-xs font-bold transition-all shadow-sm cursor-pointer"
        >
          Book Another Appointment
        </button>
      </div>
    );
  }

  return (
    <div className="w-full max-w-xl mx-auto rounded-3xl border border-slate-200 bg-white p-6 sm:p-9 shadow-xl">
      <div className="flex items-center justify-between pb-4 mb-6 border-b border-slate-100">
        <div>
          <span className="text-xs font-bold text-emerald-600 uppercase tracking-wider block">
            Direct Branch Desk
          </span>
          <h3 className="text-xl font-black text-slate-900">
            Book In-Person Consultation
          </h3>
        </div>
        <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 text-xs font-bold border border-emerald-200">
          <FaClock className="w-3 h-3 text-emerald-600" />
          <span>Response &lt; 24h</span>
        </div>
      </div>

      {serverError && (
        <div className="mb-5 p-3.5 rounded-xl bg-red-50 border border-red-200 text-xs font-semibold text-red-600 flex items-center gap-2">
          <FaCircleExclamation className="w-4 h-4 shrink-0" />
          <span>{serverError}</span>
        </div>
      )}

      <form onSubmit={handleSubmit} noValidate className="space-y-4">
        {/* Full Name */}
        <div>
          <label
            htmlFor="patna-name"
            className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5"
          >
            Full Name <span className="text-red-500">*</span>
          </label>
          <input
            id="patna-name"
            name="name"
            type="text"
            placeholder="e.g., Ramesh Kumar"
            value={formData.name}
            onChange={handleChange}
            className={`w-full rounded-xl border px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 bg-slate-50/70 focus:bg-white focus:outline-none focus:ring-2 transition-all ${
              errors.name
                ? "border-red-400 focus:ring-red-400/30"
                : "border-slate-200 focus:border-emerald-500 focus:ring-emerald-500/20"
            }`}
          />
          {errors.name && (
            <p className="mt-1 text-xs text-red-500 font-medium">{errors.name}</p>
          )}
        </div>

        {/* WhatsApp Phone */}
        <div>
          <label
            htmlFor="patna-phone"
            className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5"
          >
            Mobile / WhatsApp Number <span className="text-red-500">*</span>
          </label>
          <input
            id="patna-phone"
            name="phone"
            type="tel"
            inputMode="numeric"
            placeholder="e.g., 9876543210"
            value={formData.phone}
            onChange={handleChange}
            className={`w-full rounded-xl border px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 bg-slate-50/70 focus:bg-white focus:outline-none focus:ring-2 transition-all ${
              errors.phone
                ? "border-red-400 focus:ring-red-400/30"
                : "border-slate-200 focus:border-emerald-500 focus:ring-emerald-500/20"
            }`}
          />
          {errors.phone && (
            <p className="mt-1 text-xs text-red-500 font-medium">{errors.phone}</p>
          )}
        </div>

        {/* Trade / Occupation */}
        <div>
          <label
            htmlFor="patna-occupation"
            className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5"
          >
            Your Trade or Skill <span className="text-red-500">*</span>
          </label>
          <input
            id="patna-occupation"
            name="occupation"
            type="text"
            placeholder="e.g., Building Electrician, Heavy Driver, Welder, Helper"
            value={formData.occupation}
            onChange={handleChange}
            className={`w-full rounded-xl border px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 bg-slate-50/70 focus:bg-white focus:outline-none focus:ring-2 transition-all ${
              errors.occupation
                ? "border-red-400 focus:ring-red-400/30"
                : "border-slate-200 focus:border-emerald-500 focus:ring-emerald-500/20"
            }`}
          />
          {errors.occupation && (
            <p className="mt-1 text-xs text-red-500 font-medium">{errors.occupation}</p>
          )}
        </div>

        {/* Country & Consultation Mode Grid */}
        <div className="grid sm:grid-cols-2 gap-4">
          <div>
            <label
              htmlFor="patna-country"
              className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5"
            >
              Target Destination
            </label>
            <select
              id="patna-country"
              name="country"
              value={formData.country}
              onChange={handleChange}
              className="w-full rounded-xl border border-slate-200 bg-slate-50/70 px-3.5 py-3 text-sm text-slate-900 focus:bg-white focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 focus:outline-none"
            >
              <optgroup label="GCC Gulf Nations">
                <option value="Saudi Arabia">Saudi Arabia (NEOM/Riyadh)</option>
                <option value="United Arab Emirates (Dubai)">UAE (Dubai/Abu Dhabi)</option>
                <option value="Qatar">Qatar</option>
                <option value="Kuwait">Kuwait</option>
                <option value="Oman">Oman</option>
                <option value="Bahrain">Bahrain</option>
              </optgroup>
              <optgroup label="Europe &amp; Schengen">
                <option value="Poland">Poland</option>
                <option value="Croatia">Croatia</option>
                <option value="Romania">Romania</option>
                <option value="Hungary">Hungary</option>
              </optgroup>
            </select>
          </div>

          <div>
            <label
              htmlFor="patna-mode"
              className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5"
            >
              Preferred Mode
            </label>
            <select
              id="patna-mode"
              name="consultationMode"
              value={formData.consultationMode}
              onChange={handleChange}
              className="w-full rounded-xl border border-slate-200 bg-slate-50/70 px-3.5 py-3 text-sm text-slate-900 focus:bg-white focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 focus:outline-none"
            >
              <option value="In-Person Visit at Varma Centre">
                In-Person Visit (Varma Centre)
              </option>
              <option value="Online WhatsApp Consultation">
                Online WhatsApp Consultation
              </option>
            </select>
          </div>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={loading}
          className="w-full mt-3 flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white font-bold text-sm py-3.5 shadow-md shadow-emerald-600/20 hover:shadow-emerald-600/35 transition-all cursor-pointer disabled:opacity-70"
        >
          {loading ? (
            <span>Submitting Details...</span>
          ) : (
            <>
              <FaPaperPlane className="w-3.5 h-3.5" />
              <span>Confirm Consultation Appointment</span>
            </>
          )}
        </button>

        {/* Privacy Note */}
        <p className="text-[11px] text-slate-500 text-center flex items-center justify-center gap-1.5 pt-2">
          <FaShieldHalved className="text-emerald-600 w-3 h-3" />
          <span>100% Confidential · Direct Case Manager Support · No Spam</span>
        </p>
      </form>
    </div>
  );
}
