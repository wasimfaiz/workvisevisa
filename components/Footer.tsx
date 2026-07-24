import {
  FaGlobe,
  FaEnvelope,
  FaPhone,
  FaWhatsapp,
  FaLocationDot,
  FaLinkedin,
  FaInstagram,
  FaXTwitter,
  FaYoutube,
} from "react-icons/fa6";

const quickLinks = [
  { label: "Countries", href: "#countries" },
  { label: "Services", href: "#services" },
  { label: "Why Us", href: "#why-us" },
  { label: "Process", href: "#process" },
  { label: "FAQ", href: "#faq" },
  { label: "Book Consultation", href: "#consultation" },
];

const offices = [
  { city: "Mumbai", address: "14th Floor, Platina, BKC, Mumbai 400051" },
  { city: "Dubai", address: "Office 1204, Jumeirah Bay X2, JLT, Dubai" },
  { city: "London", address: "71-75 Shelton Street, Covent Garden, WC2H 9JQ" },
];

const socials = [
  { label: "LinkedIn", icon: FaLinkedin, href: "#" },
  { label: "Instagram", icon: FaInstagram, href: "#" },
  { label: "Twitter", icon: FaXTwitter, href: "#" },
  { label: "YouTube", icon: FaYoutube, href: "#" },
];

export default function Footer() {
  return (
    <footer className="relative border-t border-slate-800 bg-slate-900 text-slate-300 pt-16 pb-8">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Logo Image: /workwise_logo.png */}
          <div className="lg:col-span-1">
            <div className="mb-5">
              <img
                src="/workwise_logo.png"
                alt="WorkWise Visa Logo"
                className="h-12 sm:h-14 max-w-[260px] w-auto object-contain"
              />
            </div>
            <p className="text-sm text-slate-400 leading-relaxed mb-6 max-w-xs font-normal">
              Premium international job placement and visa consultancy. Helping
              professionals build global careers since 2020.
            </p>
            <div className="flex gap-3">
              {socials.map((s) => {
                const Icon = s.icon;
                return (
                  <a
                    key={s.label}
                    href={s.href}
                    className="flex h-9 w-9 items-center justify-center rounded-lg border border-slate-700 bg-slate-800 text-slate-400 hover:text-emerald-400 hover:border-emerald-500/50 transition-all"
                    aria-label={s.label}
                  >
                    <Icon className="w-4 h-4" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* quick links */}
          <div>
            <h4 className="text-sm font-display font-bold text-white uppercase tracking-wider mb-5">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((l) => (
                <li key={l.label}>
                  <a
                    href={l.href}
                    className="text-sm text-slate-400 hover:text-emerald-400 transition-colors font-medium"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* offices */}
          <div>
            <h4 className="text-sm font-display font-bold text-white uppercase tracking-wider mb-5">
              Our Offices
            </h4>
            <ul className="space-y-4">
              {offices.map((o) => (
                <li key={o.city} className="flex items-start gap-2.5">
                  <FaLocationDot className="w-4 h-4 mt-0.5 text-emerald-400 shrink-0" />
                  <div>
                    <p className="text-sm font-bold text-white">{o.city}</p>
                    <p className="text-xs text-slate-400 font-normal">{o.address}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* contact */}
          <div>
            <h4 className="text-sm font-display font-bold text-white uppercase tracking-wider mb-5">
              Contact Us
            </h4>
            <ul className="space-y-4">
              <li className="flex items-center gap-2.5">
                <FaPhone className="w-4 h-4 text-emerald-400 shrink-0" />
                <a href="tel:+918130161603" className="text-sm text-slate-300 hover:text-white transition-colors">
                  +91 81301 61603
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <FaWhatsapp className="w-4 h-4 text-emerald-400 shrink-0" />
                <a
                  href="https://wa.me/918130161603?text=Hi%20WorkWise%20Visa,%20I%20would%20like%20to%20book%20a%20free%20consultation!"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-slate-300 hover:text-white transition-colors"
                >
                  WhatsApp: +91 81301 61603
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <FaEnvelope className="w-4 h-4 text-emerald-400 shrink-0" />
                <a href="mailto:workwisevisa@gmail.com" className="text-sm text-slate-300 hover:text-white transition-colors">
                  workwisevisa@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <FaGlobe className="w-4 h-4 text-emerald-400 shrink-0" />
                <a href="#" className="text-sm text-slate-300 hover:text-white transition-colors">
                  www.workwisevisa.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* bottom bar */}
        <div className="mt-14 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-slate-800 pt-8">
          <p className="text-xs text-slate-400">
            © {new Date().getFullYear()} WorkWise Visa. All rights reserved.
          </p>
          <div className="flex gap-6 text-xs text-slate-400 font-medium">
            <a href="#" className="hover:text-slate-200 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-slate-200 transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-slate-200 transition-colors">Refund Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
