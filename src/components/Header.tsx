import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Mail } from "lucide-react";
import { menuItems } from "../data/siteData";

/** Premium CK monogram — custom letterforms, not a font glyph */
function CKLogo({ size = 52 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 120 120"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="CK Monogram"
    >
      {/* Background circle with gradient */}
      <defs>
        <linearGradient id="ck-bg" x1="0" y1="0" x2="120" y2="120" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#142952" />
          <stop offset="100%" stopColor="#0c1a38" />
        </linearGradient>
        <linearGradient id="ck-ring" x1="0" y1="0" x2="120" y2="120" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#3f65a8" stopOpacity="0.6" />
          <stop offset="100%" stopColor="#1e3a6e" stopOpacity="0.3" />
        </linearGradient>
      </defs>
      {/* Outer ring */}
      <circle cx="60" cy="60" r="58" stroke="url(#ck-ring)" strokeWidth="2" fill="none" />
      {/* Filled circle */}
      <circle cx="60" cy="60" r="54" fill="url(#ck-bg)" />
      {/* Letter C — open arc, thicker at base, tapers */}
      <path
        d="M52 44 C40 44, 32 50, 32 60 C32 70, 40 76, 52 76"
        stroke="white"
        strokeWidth="5.5"
        strokeLinecap="round"
        fill="none"
      />
      {/* Letter K — vertical stem + two diagonals */}
      <line x1="64" y1="42" x2="64" y2="78" stroke="white" strokeWidth="5" strokeLinecap="round" />
      <path
        d="M64 60 L82 42"
        stroke="white"
        strokeWidth="4.5"
        strokeLinecap="round"
      />
      <path
        d="M64 60 L84 78"
        stroke="white"
        strokeWidth="4.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const handleNavClick = (href: string) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "glass-header shadow-sm" : "bg-transparent"
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-[68px] md:h-[76px]">
          {/* Logo */}
          <a
            href="#hero"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick("#hero");
            }}
            className="flex items-center gap-3 group"
          >
            <div className="flex-shrink-0 transition-transform duration-300 group-hover:scale-105">
              <CKLogo size={44} />
            </div>
            <div className="hidden sm:block">
              <div className="text-navy-900 font-bold text-[15px] leading-tight">
                Celil Kandemir
              </div>
              <div className="text-gray-400 text-[10px] leading-tight tracking-wide mt-0.5">
                Kontrol, Otomasyon, Yazılım ve Dijital Sistemler
              </div>
            </div>
          </a>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {menuItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(item.href);
                }}
                className="relative px-4 py-2 text-[13px] font-medium text-gray-600 hover:text-navy-800 transition-colors group/nav"
              >
                {item.label}
                <span className="absolute bottom-0 left-1/2 w-0 h-[2px] bg-navy-600 rounded-full transition-all duration-300 group-hover/nav:w-3/4 group-hover/nav:-translate-x-1/2 opacity-0 group-hover/nav:opacity-100" />
              </a>
            ))}
          </nav>

          {/* Desktop CTA */}
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick("#contact");
            }}
            className="hidden lg:inline-flex items-center gap-2 px-5 py-2.5 bg-navy-800 text-white text-[13px] font-semibold rounded-xl hover:bg-navy-900 transition-all duration-300 shadow-sm hover:shadow-md"
          >
            <Mail className="w-4 h-4" />
            Benimle İletişime Geç
          </a>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden p-2 -mr-2 rounded-lg hover:bg-gray-100 transition-colors text-navy-800"
            aria-label="Menüyü aç/kapat"
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-white border-t border-gray-100 shadow-lg overflow-hidden"
          >
            <nav className="px-4 py-4 space-y-1">
              {menuItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(item.href);
                  }}
                  className="block px-4 py-3 text-sm font-medium text-gray-700 hover:text-navy-700 hover:bg-navy-50 rounded-lg transition-colors"
                >
                  {item.label}
                </a>
              ))}
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick("#contact");
                }}
                className="flex items-center justify-center gap-2 mt-3 px-4 py-3 bg-navy-700 text-white text-sm font-semibold rounded-lg"
              >
                <Mail className="w-4 h-4" />
                Benimle İletişime Geç
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
