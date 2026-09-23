"use client";

/* ================================================================
   app/admin/page.tsx  — Admin Login Page
   Premium dark glassmorphism design.
   ================================================================ */

import { useState, FormEvent } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";

export default function AdminLoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const res = await fetch("/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();

      if (data.success) {
        router.push("/admin/dashboard");
      } else {
        setError(data.message || "Invalid credentials.");
      }
    } catch {
      setError("Connection error. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div style={styles.page}>
      {/* Background gradient orbs */}
      <div style={styles.orb1} />
      <div style={styles.orb2} />

      <div style={styles.card}>
        {/* Logo */}
        <div style={styles.logoArea}>
          {/* Icon Badge */}
          <div style={styles.iconBadge}>
            <Image
              src="/icon.png"
              alt="WorkWise Visa Icon"
              width={52}
              height={52}
              style={{ objectFit: "contain", width: "52px", height: "52px" }}
              priority
            />
          </div>
          {/* Brand Text */}
          <div style={styles.brandTextBlock}>
            <h1 style={styles.brand}>WorkWise Visa</h1>
            <span style={styles.brandSub}>Admin Control Panel</span>
          </div>
        </div>

        <h2 style={styles.title}>Welcome back</h2>
        <p style={styles.subtitle}>Sign in to manage job postings and content</p>

        {error && (
          <div style={styles.errorBox}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ flexShrink: 0 }}>
              <circle cx="12" cy="12" r="10"/>
              <line x1="12" y1="8" x2="12" y2="12"/>
              <line x1="12" y1="16" x2="12.01" y2="16"/>
            </svg>
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} style={styles.form}>
          {/* Email */}
          <div style={styles.fieldGroup}>
            <label style={styles.label} htmlFor="admin-email">Email Address</label>
            <div style={styles.inputWrapper}>
              <svg style={styles.inputIcon} width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                <polyline points="22,6 12,13 2,6"/>
              </svg>
              <input
                id="admin-email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                required
                style={styles.input}
                onFocus={(e) => Object.assign(e.target.style, styles.inputFocus)}
                onBlur={(e) => Object.assign(e.target.style, { borderColor: "rgba(255,255,255,0.1)", boxShadow: "none" })}
              />
            </div>
          </div>

          {/* Password */}
          <div style={styles.fieldGroup}>
            <label style={styles.label} htmlFor="admin-password">Password</label>
            <div style={styles.inputWrapper}>
              <svg style={styles.inputIcon} width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/>
                <path d="M7 11V7a5 5 0 0 1 10 0v4"/>
              </svg>
              <input
                id="admin-password"
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                required
                style={{ ...styles.input, paddingRight: "44px" }}
                onFocus={(e) => Object.assign(e.target.style, styles.inputFocus)}
                onBlur={(e) => Object.assign(e.target.style, { borderColor: "rgba(255,255,255,0.1)", boxShadow: "none", paddingRight: "44px" })}
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                style={styles.eyeBtn}
                tabIndex={-1}
              >
                {showPassword ? (
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"/>
                    <line x1="1" y1="1" x2="23" y2="23"/>
                  </svg>
                ) : (
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/>
                    <circle cx="12" cy="12" r="3"/>
                  </svg>
                )}
              </button>
            </div>
          </div>

          <button
            type="submit"
            disabled={loading}
            style={{ ...styles.submitBtn, opacity: loading ? 0.7 : 1 }}
          >
            {loading ? (
              <span style={{ display: "flex", alignItems: "center", gap: "8px", justifyContent: "center" }}>
                <svg style={{ animation: "spin 1s linear infinite" }} width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M21 12a9 9 0 1 1-6.219-8.56"/>
                </svg>
                Signing in…
              </span>
            ) : "Sign In to Dashboard"}
          </button>
        </form>

        <p style={styles.footer}>
          WorkWise Visa Admin Panel &nbsp;·&nbsp; Authorized Access Only
        </p>
      </div>

      <style>{`
        @keyframes spin { to { transform: rotate(360deg); } }
        * { box-sizing: border-box; }
        input::placeholder { color: rgba(255,255,255,0.3); }
      `}</style>
    </div>
  );
}

// ── Inline Styles ─────────────────────────────────────────────────

const styles: Record<string, React.CSSProperties> = {
  page: {
    minHeight: "100vh",
    background: "linear-gradient(135deg, #0f0c29 0%, #1a1040 50%, #24243e 100%)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "24px",
    position: "relative",
    overflow: "hidden",
  },
  orb1: {
    position: "absolute",
    top: "-200px",
    right: "-200px",
    width: "500px",
    height: "500px",
    borderRadius: "50%",
    background: "radial-gradient(circle, rgba(16,185,129,0.15) 0%, transparent 70%)",
    pointerEvents: "none",
  },
  orb2: {
    position: "absolute",
    bottom: "-200px",
    left: "-200px",
    width: "500px",
    height: "500px",
    borderRadius: "50%",
    background: "radial-gradient(circle, rgba(99,102,241,0.15) 0%, transparent 70%)",
    pointerEvents: "none",
  },
  card: {
    position: "relative",
    zIndex: 1,
    background: "rgba(255, 255, 255, 0.05)",
    backdropFilter: "blur(20px)",
    WebkitBackdropFilter: "blur(20px)",
    border: "1px solid rgba(255, 255, 255, 0.1)",
    borderRadius: "24px",
    padding: "48px 40px",
    width: "100%",
    maxWidth: "440px",
    boxShadow: "0 32px 80px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.1)",
  },
  logoArea: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: "16px",
    marginBottom: "32px",
    paddingBottom: "28px",
    borderBottom: "1px solid rgba(255,255,255,0.08)",
  },
  iconBadge: {
    width: "64px",
    height: "64px",
    borderRadius: "18px",
    background: "rgba(255,255,255,0.96)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "6px",
    boxShadow: "0 8px 32px rgba(0,0,0,0.35), 0 0 0 1px rgba(255,255,255,0.15), inset 0 1px 0 rgba(255,255,255,1)",
    flexShrink: 0,
  },
  brandTextBlock: {
    display: "flex",
    flexDirection: "column",
    gap: "5px",
  },
  brand: {
    margin: 0,
    fontSize: "20px",
    fontWeight: 800,
    color: "white",
    lineHeight: 1.1,
    letterSpacing: "-0.3px",
  },
  brandSub: {
    display: "inline-block",
    fontSize: "10px",
    letterSpacing: "0.14em",
    fontWeight: 700,
    textTransform: "uppercase" as const,
    background: "rgba(16,185,129,0.15)",
    border: "1px solid rgba(16,185,129,0.25)",
    borderRadius: "999px",
    padding: "3px 10px",
    color: "rgba(110,231,183,0.9)",
  },
  title: {
    margin: "0 0 8px",
    fontSize: "28px",
    fontWeight: 800,
    color: "white",
    letterSpacing: "-0.5px",
  },
  subtitle: {
    margin: "0 0 28px",
    fontSize: "14px",
    color: "rgba(255,255,255,0.5)",
    lineHeight: 1.5,
  },
  errorBox: {
    display: "flex",
    alignItems: "center",
    gap: "10px",
    background: "rgba(239,68,68,0.15)",
    border: "1px solid rgba(239,68,68,0.3)",
    borderRadius: "10px",
    padding: "12px 16px",
    color: "#fca5a5",
    fontSize: "13px",
    marginBottom: "20px",
    lineHeight: 1.4,
  },
  form: {
    display: "flex",
    flexDirection: "column",
    gap: "20px",
  },
  fieldGroup: {
    display: "flex",
    flexDirection: "column",
    gap: "8px",
  },
  label: {
    fontSize: "13px",
    fontWeight: 600,
    color: "rgba(255,255,255,0.7)",
    letterSpacing: "0.03em",
  },
  inputWrapper: {
    position: "relative",
  },
  inputIcon: {
    position: "absolute",
    left: "14px",
    top: "50%",
    transform: "translateY(-50%)",
    color: "rgba(255,255,255,0.35)",
    pointerEvents: "none",
  },
  input: {
    width: "100%",
    background: "rgba(255,255,255,0.06)",
    border: "1px solid rgba(255,255,255,0.1)",
    borderRadius: "12px",
    padding: "14px 16px 14px 44px",
    fontSize: "15px",
    color: "white",
    outline: "none",
    transition: "all 0.2s",
    fontFamily: "'Inter', sans-serif",
  },
  inputFocus: {
    borderColor: "rgba(16,185,129,0.6)",
    boxShadow: "0 0 0 3px rgba(16,185,129,0.15)",
  },
  eyeBtn: {
    position: "absolute",
    right: "14px",
    top: "50%",
    transform: "translateY(-50%)",
    background: "none",
    border: "none",
    cursor: "pointer",
    color: "rgba(255,255,255,0.35)",
    padding: "4px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  submitBtn: {
    marginTop: "8px",
    width: "100%",
    background: "linear-gradient(135deg, #10b981, #059669)",
    border: "none",
    borderRadius: "12px",
    padding: "16px",
    fontSize: "15px",
    fontWeight: 700,
    color: "white",
    cursor: "pointer",
    transition: "all 0.2s",
    boxShadow: "0 8px 24px rgba(16,185,129,0.35)",
    fontFamily: "'Inter', sans-serif",
    letterSpacing: "0.02em",
  },
  footer: {
    marginTop: "28px",
    textAlign: "center" as const,
    fontSize: "12px",
    color: "rgba(255,255,255,0.2)",
    letterSpacing: "0.03em",
  },
};
