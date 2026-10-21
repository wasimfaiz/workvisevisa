"use client";

/* ================================================================
   app/partner/login/page.tsx — WorkWise Visa B2B Partner Portal Login
   Dedicated authentication page for field sourcing agents, agencies,
   and recruitment associates.
   ================================================================ */

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import {
  Handshake,
  ShieldCheck,
  Lock,
  User,
  Eye,
  EyeOff,
  ArrowRight,
  Sparkles,
  CheckCircle2,
  AlertCircle,
  Phone,
  MessageSquare,
  Building2,
  FileCheck,
  TrendingUp,
} from "lucide-react";

export default function PartnerLoginPage() {
  const router = useRouter();

  const [identifier, setIdentifier] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [checkingAuth, setCheckingAuth] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // If already logged in as partner, redirect to dashboard
  useEffect(() => {
    async function checkExistingSession() {
      try {
        const res = await fetch("/api/partner/auth/me", { cache: "no-store" });
        if (res.ok) {
          const data = await res.json();
          if (data.success && data.partner) {
            router.replace("/partner/dashboard");
            return;
          }
        }
      } catch {
        // Not authenticated, stay on login page
      } finally {
        setCheckingAuth(false);
      }
    }
    checkExistingSession();
  }, [router]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    const cleanId = identifier.trim();
    const cleanPass = password.trim();

    if (!cleanId) {
      setError("Please enter your Partner Code, Registered Phone, or Email.");
      return;
    }
    if (!cleanPass) {
      setError("Please enter your password.");
      return;
    }

    setLoading(true);

    try {
      const res = await fetch("/api/partner/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ identifier: cleanId, password: cleanPass }),
      });

      const data = await res.json();

      if (res.ok && data.success) {
        // Successfully logged in
        router.replace("/partner/dashboard");
      } else {
        setError(data.message || "Invalid credentials. Please verify your login details.");
      }
    } catch {
      setError("Unable to connect to login service. Please check your internet connection.");
    } finally {
      setLoading(false);
    }
  };

  if (checkingAuth) {
    return (
      <div className="min-h-screen bg-slate-950 flex flex-col items-center justify-center text-white">
        <div className="w-12 h-12 border-4 border-emerald-500 border-t-transparent rounded-full animate-spin mb-4" />
        <p className="text-slate-400 text-sm font-medium">Verifying partner session...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-emerald-950 flex flex-col justify-between text-slate-100 antialiased selection:bg-emerald-500 selection:text-white">
      {/* Top Navbar */}
      <header className="border-b border-white/10 backdrop-blur-md bg-slate-950/60 sticky top-0 z-30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 group">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-emerald-600 to-teal-400 flex items-center justify-center shadow-lg shadow-emerald-500/20 group-hover:scale-105 transition-transform">
              <Handshake className="w-5 h-5 text-white" />
            </div>
            <div>
              <span className="font-black text-lg tracking-tight text-white">WorkWise</span>
              <span className="font-extrabold text-xs text-emerald-400 block -mt-1 tracking-wider uppercase">
                B2B Partner Portal
              </span>
            </div>
          </Link>

          <div className="flex items-center gap-3">
            <a
              href="https://wa.me/919999999999?text=Hello%20WorkWise%20Visa%20Team,%20I%20need%20assistance%20with%20my%20B2B%20Partner%20Portal%20credentials."
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-emerald-400 hover:text-emerald-300 text-xs font-semibold border border-emerald-500/30 transition-all"
            >
              <MessageSquare className="w-3.5 h-3.5" />
              <span>Partner Helpdesk</span>
            </a>
          </div>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-16 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left Column: Partner Value Proposition */}
        <div className="lg:col-span-7 space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-bold tracking-wide uppercase">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Official Sourcing Partner Channel</span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight leading-tight">
            Grow Your Candidate <br />
            <span className="bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400 bg-clip-text text-transparent">
              Mobilization & Commissions
            </span>
          </h1>

          <p className="text-slate-300 text-base md:text-lg max-w-xl leading-relaxed">
            Welcome to the dedicated WorkWise Visa Sourcing Portal. Access active employer demands across Dubai, Saudi Arabia, Qatar, and Europe, submit candidate dossiers directly, and track pipeline progress live.
          </p>

          {/* Feature Highlights Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
            <div className="p-4 rounded-2xl bg-white/5 border border-white/10 hover:border-emerald-500/40 transition-colors">
              <div className="w-10 h-10 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center mb-3">
                <Building2 className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-white text-sm">Direct Employer Demands</h3>
              <p className="text-slate-400 text-xs mt-1">
                Verified high-volume requirements for civil, MEP, transport & hospitality trades.
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-white/5 border border-white/10 hover:border-emerald-500/40 transition-colors">
              <div className="w-10 h-10 rounded-xl bg-teal-500/20 text-teal-400 flex items-center justify-center mb-3">
                <TrendingUp className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-white text-sm">Real-time Stage Tracking</h3>
              <p className="text-slate-400 text-xs mt-1">
                From Trade Test & Medical to Visa Stamping and Flight PNR, view live milestones.
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-white/5 border border-white/10 hover:border-emerald-500/40 transition-colors">
              <div className="w-10 h-10 rounded-xl bg-cyan-500/20 text-cyan-400 flex items-center justify-center mb-3">
                <FileCheck className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-white text-sm">Transparent Commission</h3>
              <p className="text-slate-400 text-xs mt-1">
                Accurate referral payout ledger per candidate with approved settlement receipts.
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-white/5 border border-white/10 hover:border-emerald-500/40 transition-colors">
              <div className="w-10 h-10 rounded-xl bg-blue-500/20 text-blue-400 flex items-center justify-center mb-3">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-white text-sm">MoU & KYC Protected</h3>
              <p className="text-slate-400 text-xs mt-1">
                Legally backed partner agreement ensuring your agency sourcing rights are protected.
              </p>
            </div>
          </div>
        </div>

        {/* Right Column: Sleek Partner Login Card */}
        <div className="lg:col-span-5">
          <div className="bg-slate-900/90 border border-white/15 rounded-3xl p-6 sm:p-8 shadow-2xl backdrop-blur-xl relative overflow-hidden">
            {/* Top Accent Gradient Line */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-emerald-500 via-teal-400 to-cyan-500" />

            <div className="mb-6">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold uppercase tracking-wider text-emerald-400">
                  Partner Sign In
                </span>
                <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded text-[10px] font-extrabold bg-emerald-500/15 text-emerald-300 border border-emerald-500/30">
                  Secure Gateway
                </span>
              </div>
              <h2 className="text-2xl font-black text-white mt-1">Access Your Dashboard</h2>
              <p className="text-slate-400 text-xs mt-1">
                Enter your Partner Code, registered mobile, or email address.
              </p>
            </div>

            {error && (
              <div className="mb-5 p-3.5 rounded-xl bg-rose-500/10 border border-rose-500/30 flex items-start gap-2.5 text-rose-300 text-xs">
                <AlertCircle className="w-4 h-4 flex-shrink-0 mt-0.5 text-rose-400" />
                <span>{error}</span>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-1.5">
                  Partner ID / Mobile / Email
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                    <User className="w-4 h-4" />
                  </div>
                  <input
                    type="text"
                    value={identifier}
                    onChange={(e) => setIdentifier(e.target.value)}
                    placeholder="e.g. WW-AGT-01 or 9876543210"
                    required
                    className="w-full pl-10 pr-4 py-3 bg-slate-800/80 border border-slate-700 rounded-xl text-white placeholder-slate-500 text-sm focus:outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 transition-all font-medium"
                  />
                </div>
                <p className="text-[11px] text-slate-400 mt-1">
                  You can use your WorkWise Partner Code or registered 10-digit number.
                </p>
              </div>

              <div>
                <div className="flex items-center justify-between mb-1.5">
                  <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider">
                    Password
                  </label>
                  <a
                    href="https://wa.me/919999999999?text=Hello%20WorkWise%20Team,%20I%20forgot%20my%20B2B%20Partner%20password.%20Kindly%20reset%20it."
                    target="_blank"
                    rel="noreferrer"
                    className="text-[11px] text-emerald-400 hover:text-emerald-300 font-semibold"
                  >
                    Forgot Password?
                  </a>
                </div>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                    <Lock className="w-4 h-4" />
                  </div>
                  <input
                    type={showPassword ? "text" : "password"}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="••••••••••••"
                    required
                    className="w-full pl-10 pr-10 py-3 bg-slate-800/80 border border-slate-700 rounded-xl text-white placeholder-slate-500 text-sm focus:outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 transition-all font-medium"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute inset-y-0 right-0 pr-3.5 flex items-center text-slate-400 hover:text-slate-200"
                  >
                    {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                  </button>
                </div>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full py-3.5 px-4 rounded-xl bg-gradient-to-r from-emerald-500 via-teal-500 to-emerald-600 hover:from-emerald-400 hover:to-teal-500 text-white font-black text-sm tracking-wide shadow-lg shadow-emerald-500/30 hover:shadow-emerald-500/40 transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed group mt-2"
              >
                {loading ? (
                  <>
                    <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    <span>Signing In...</span>
                  </>
                ) : (
                  <>
                    <span>Sign In to Partner Portal</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </>
                )}
              </button>
            </form>

            {/* Assistance Footer */}
            <div className="mt-6 pt-5 border-t border-slate-800 text-center">
              <p className="text-xs text-slate-400">
                Want to become an authorized Sourcing Partner?
              </p>
              <a
                href="https://wa.me/919999999999?text=Hello%20WorkWise%20Visa,%20I%20am%20interested%20in%20joining%20as%20a%20B2B%20Candidate%20Sourcing%20Partner."
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-400 hover:text-emerald-300 mt-1.5"
              >
                <Handshake className="w-3.5 h-3.5" />
                <span>Apply for Partner Agency Registration & MoU</span>
              </a>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-white/5 py-6 text-center text-xs text-slate-400">
        <div className="max-w-7xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p>© {new Date().getFullYear()} WorkWise Visa Services Pvt. Ltd. All Rights Reserved.</p>
          <div className="flex items-center gap-4 text-slate-400">
            <Link href="/" className="hover:text-slate-300">Public Website</Link>
            <Link href="/about" className="hover:text-slate-300">About Us</Link>
            <Link href="/admin" className="hover:text-slate-300">Staff Admin Login</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
