import {
  FaGlobe,
  FaEnvelope,
  FaPhone,
  FaWhatsapp,
  FaLocationDot,
  FaLinkedin,
  FaInstagram,
  FaFacebook,
  FaXTwitter,
  FaYoutube,
} from "react-icons/fa6";

const quickLinks = [
  { label: "Countries", href: "/countries" },
  { label: "Services", href: "/#services" },
  { label: "Industries", href: "/#industries" },
  { label: "Why Us", href: "/#why-us" },
  { label: "About Us", href: "/about" },
  { label: "Blogs", href: "/blogs" },
  { label: "Drop CV", href: "mailto:workwisevisa@gmail.com" },
];

const offices = [
  { city: "Noida (HQ)", address: "Urbtech trade centre, D-701 C, Sector 132, Noida, Uttar Pradesh 201304" },
  { city: "Patna", address: "6th floor office no 606, Varma Centre, Boring Rd, crossing, Sri Krishna Puri, Patna, Bihar 800001" },
];

const socials = [
  { label: "Instagram", icon: FaInstagram, href: "https://www.instagram.com/workwisevisa/" },
  { label: "Facebook", icon: FaFacebook, href: "https://www.facebook.com/workwisevisa/" },
  { label: "WhatsApp", icon: FaWhatsapp, href: "https://wa.me/918130161603?text=Hi%20WorkWise%20Visa,%20I%20would%20like%20to%20book%20a%20free%20consultation!" },
  { label: "LinkedIn", icon: FaLinkedin, href: "https://www.linkedin.com/company/workwisevisa/" },
];

export default function Footer() {
  return (
    <footer className="relative border-t border-slate-200 bg-slate-50 text-slate-700 pt-16 pb-8">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Logo Image: /workwise_logo.png */}
          <div className="lg:col-span-1">
            <div className="mb-5">
              <img
                src="/workwise_logo.png"
                alt="WorkWise Visa Logo"
                className="h-24 sm:h-28 md:h-32 max-w-[400px] sm:max-w-[480px] w-auto object-contain hover:scale-105 transition-transform duration-200"
              />
            </div>
            <p className="text-sm text-slate-600 leading-relaxed mb-6 max-w-xs font-normal">
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
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-9 w-9 items-center justify-center rounded-lg border border-slate-200 bg-white text-slate-600 hover:text-emerald-600 hover:border-emerald-400/50 hover:bg-emerald-50/50 transition-all shadow-xs"
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
            <h4 className="text-sm font-display font-bold text-slate-900 uppercase tracking-wider mb-5">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((l) => (
                <li key={l.label}>
                  <a
                    href={l.href}
                    className="text-sm text-slate-600 hover:text-emerald-600 transition-colors font-medium"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* offices */}
          <div>
            <h4 className="text-sm font-display font-bold text-slate-900 uppercase tracking-wider mb-5">
              Our Offices
            </h4>
            <ul className="space-y-4">
              {offices.map((o) => (
                <li key={o.city} className="flex items-start gap-2.5">
                  <FaLocationDot className="w-4 h-4 mt-0.5 text-emerald-600 shrink-0" />
                  <div>
                    <p className="text-sm font-bold text-slate-900">{o.city}</p>
                    <p className="text-xs text-slate-600 font-normal leading-relaxed">{o.address}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* contact */}
          <div>
            <h4 className="text-sm font-display font-bold text-slate-900 uppercase tracking-wider mb-5">
              Contact Us
            </h4>
            <ul className="space-y-4">
              <li className="flex items-center gap-2.5">
                <FaPhone className="w-4 h-4 text-emerald-600 shrink-0" />
                <a href="tel:+918130161603" className="text-sm text-slate-600 hover:text-emerald-600 transition-colors font-medium">
                  +91 81301 61603
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <FaWhatsapp className="w-4 h-4 text-emerald-600 shrink-0" />
                <a
                  href="https://wa.me/918130161603?text=Hi%20WorkWise%20Visa,%20I%20would%20like%20to%20book%20a%20free%20consultation!"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-slate-600 hover:text-emerald-600 transition-colors font-medium"
                >
                  WhatsApp: +91 81301 61603
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <FaEnvelope className="w-4 h-4 text-emerald-600 shrink-0" />
                <a href="mailto:workwisevisa@gmail.com" className="text-sm text-slate-600 hover:text-emerald-600 transition-colors font-medium">
                  workwisevisa@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <FaGlobe className="w-4 h-4 text-emerald-600 shrink-0" />
                <a href="#" className="text-sm text-slate-600 hover:text-emerald-600 transition-colors font-medium">
                  www.workwisevisa.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* bottom bar */}
        <div className="mt-14 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-slate-200 pt-8">
          <p className="text-xs text-slate-500">
            © {new Date().getFullYear()} WorkWise Visa. All rights reserved.
          </p>
          <div className="flex gap-6 text-xs text-slate-500 font-medium">
            <a href="#" className="hover:text-slate-900 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-slate-900 transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-slate-900 transition-colors">Refund Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
