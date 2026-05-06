import { motion, type Variants } from "framer-motion";
import { ArrowRight, Mail } from "lucide-react";
import { heroHighlights } from "../data/siteData";
import Reveal from "./Reveal";

export default function Hero() {
  const container: Variants = {
    hidden: {},
    show: { transition: { staggerChildren: 0.12, delayChildren: 0.3 } },
  };
  const fadeUp: Variants = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const } },
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-white via-slate-50 to-navy-50 pt-20"
    >
      {/* Background circuit grid removed for a cleaner look */}
      <div className="absolute top-1/2 right-0 w-[600px] h-[600px] hero-glow -translate-y-1/2 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20 w-full">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left: Text */}
          <motion.div variants={container} initial="hidden" animate="show" className="lg:col-span-5 xl:col-span-6 z-10">
            <motion.div variants={fadeUp}>
              <span className="section-label">ÇOK YÖNLÜ TEKNİK PROFİL</span>
            </motion.div>

            <motion.h1
              variants={fadeUp}
              className="text-3xl sm:text-4xl md:text-5xl font-bold text-navy-900 leading-tight mt-4 mb-6"
            >
              Kontrol, Otomasyon, Yazılım ve Dijital Sistemler Üreten{" "}
              <span className="text-navy-500 relative">
                Çok Yönlü Bir Profil
                <span className="absolute -bottom-1 left-0 w-full h-1 bg-navy-400/30 rounded-full" />
              </span>
            </motion.h1>

            <motion.p
              variants={fadeUp}
              className="text-gray-500 text-base md:text-lg leading-relaxed mb-8 max-w-xl"
            >
              Kontrol ve Otomasyon Teknolojileri ve Bilgisayar Programcılığı alanlarında
              gelişim gösteren; SCADA, HMI, PLC, endüstriyel otomasyon, yazılım geliştirme,
              web site ve panel sistemleri, sistem entegrasyonu ve dijital ürün geliştirme
              gibi birçok alanda aktif projeler üretmeye odaklanan çok yönlü bir teknik profil.
            </motion.p>

            {/* Mobile Image (Visible only on mobile, placed between description and CTA) */}
            <motion.div variants={fadeUp} className="block lg:hidden my-10 w-full relative">
              <div className="absolute inset-0 bg-navy-200/30 rounded-full blur-[80px] -z-10" />
              <img
                src="/images/hero-tech.png"
                alt="Kontrol, Otomasyon, Yazılım ve Dijital Sistemler"
                className="w-[105%] max-w-none -ml-[2.5%] h-auto drop-shadow-2xl relative z-10"
              />
            </motion.div>

            <motion.div variants={fadeUp} className="flex flex-wrap gap-3 mb-10">
              <a
                href="#value-areas"
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector("#value-areas")?.scrollIntoView({ behavior: "smooth" });
                }}
                className="btn-primary shadow-md hover:shadow-lg"
              >
                Projelerimi İncele
                <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
                }}
                className="btn-outline"
              >
                Benimle İletişime Geç
                <Mail className="w-4 h-4" />
              </a>
            </motion.div>

            {/* Highlight pills */}
            <motion.div variants={fadeUp} className="flex flex-wrap gap-3">
              {heroHighlights.map((h, i) => (
                <Reveal key={h.text} delay={0.5 + i * 0.1} direction="up">
                  <span className="inline-flex items-center gap-2 px-4 py-2 bg-white border border-gray-200 rounded-full text-sm font-medium text-navy-700 shadow-sm">
                    <span className="w-1.5 h-1.5 rounded-full bg-navy-500" />
                    {h.text}
                  </span>
                </Reveal>
              ))}
            </motion.div>
          </motion.div>

          {/* Right: Desktop Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, x: 20 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: [0.22, 1, 0.36, 1] as const }}
            className="hidden lg:flex lg:col-span-7 xl:col-span-6 relative items-center justify-center -mr-10 xl:-mr-20"
          >
            {/* Glow behind image */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0">
              <div className="w-[110%] h-[110%] bg-navy-200/20 rounded-full blur-[100px]" />
            </div>
            <motion.img
              src="/images/hero-tech.png"
              alt="Kontrol, Otomasyon, Yazılım ve Dijital Sistemler"
              className="w-[115%] max-w-none h-auto drop-shadow-2xl relative z-10"
              animate={{ y: [0, -12, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
