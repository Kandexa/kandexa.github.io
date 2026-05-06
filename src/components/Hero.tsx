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
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const },
    },
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden pt-20"
      style={{
        background:
          "linear-gradient(135deg, #ffffff 0%, #f8f9fb 30%, #f0f4fa 60%, #e8ecf1 100%)",
      }}
    >
      {/* Soft blue glow — right side */}
      <div className="absolute top-1/2 right-[5%] w-[700px] h-[700px] -translate-y-1/2 pointer-events-none rounded-full bg-navy-200/15 blur-[120px]" />
      {/* Secondary glow — top left */}
      <div className="absolute top-0 left-0 w-[400px] h-[400px] pointer-events-none rounded-full bg-navy-100/10 blur-[100px]" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-0 w-full">
        {/* ── MOBILE LAYOUT (< lg) ── */}
        <div className="flex flex-col lg:hidden gap-6">
          {/* 1. Label + Title */}
          <motion.div variants={container} initial="hidden" animate="show">
            <motion.div variants={fadeUp}>
              <span className="section-label text-[10px] tracking-[0.25em]">
                ÇOK YÖNLÜ TEKNİK PROFİL
              </span>
            </motion.div>

            <motion.h1
              variants={fadeUp}
              className="text-[1.75rem] sm:text-4xl font-extrabold text-navy-900 leading-[1.2] mt-3 mb-4"
            >
              Kontrol, Otomasyon,
              <br className="hidden sm:block" /> Yazılım ve Dijital
              <br className="hidden sm:block" /> Sistemler Üreten{" "}
              <span className="text-navy-500">Çok Yönlü Bir Profil</span>
            </motion.h1>

            {/* 2. Description */}
            <motion.p
              variants={fadeUp}
              className="text-gray-500 text-[15px] leading-relaxed mb-0"
            >
              Kontrol ve Otomasyon Teknolojileri ve Bilgisayar Programcılığı
              alanlarında gelişim gösteren; SCADA, HMI, PLC, endüstriyel
              otomasyon, yazılım geliştirme, web site ve panel sistemleri,
              sistem entegrasyonu ve dijital ürün geliştirme gibi birçok alanda
              aktif projeler üretmeye odaklanan çok yönlü bir teknik profil.
            </motion.p>
          </motion.div>

          {/* 3. Hero image — immediately after text */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3, ease: [0.22, 1, 0.36, 1] as const }}
            className="relative w-full -mx-2"
          >
            <div className="absolute inset-0 bg-navy-300/20 rounded-full blur-[60px] scale-90 pointer-events-none" />
            <img
              src="/images/hero-tech.png"
              alt="Kontrol, Otomasyon, Yazılım ve Dijital Sistemler"
              className="relative z-10 w-full h-auto drop-shadow-xl"
            />
          </motion.div>

          {/* 4. CTA buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="flex flex-wrap gap-3"
          >
            <a
              href="#value-areas"
              onClick={(e) => {
                e.preventDefault();
                document
                  .querySelector("#value-areas")
                  ?.scrollIntoView({ behavior: "smooth" });
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
                document
                  .querySelector("#contact")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
              className="btn-outline"
            >
              Benimle İletişime Geç
              <Mail className="w-4 h-4" />
            </a>
          </motion.div>

          {/* 5. Highlight chips */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.7 }}
            className="flex flex-wrap gap-2"
          >
            {heroHighlights.map((h) => (
              <span
                key={h.text}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-white/80 border border-gray-200 rounded-full text-xs font-medium text-navy-700"
              >
                <span className="w-1 h-1 rounded-full bg-navy-500" />
                {h.text}
              </span>
            ))}
          </motion.div>
        </div>

        {/* ── DESKTOP LAYOUT (≥ lg) ── */}
        <div className="hidden lg:grid lg:grid-cols-12 items-center min-h-[calc(100vh-80px)]">
          {/* Left column: text */}
          <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            className="lg:col-span-5 z-10 py-16"
          >
            <motion.div variants={fadeUp}>
              <span className="section-label text-[11px] tracking-[0.25em]">
                ÇOK YÖNLÜ TEKNİK PROFİL
              </span>
            </motion.div>

            <motion.h1
              variants={fadeUp}
              className="text-[2.75rem] xl:text-5xl font-extrabold text-navy-900 leading-[1.15] mt-5 mb-7"
            >
              Kontrol, Otomasyon,
              <br /> Yazılım ve Dijital
              <br /> Sistemler Üreten{" "}
              <span className="text-navy-500 relative">
                Çok Yönlü Bir Profil
                <span className="absolute -bottom-1.5 left-0 w-full h-1 bg-navy-400/30 rounded-full" />
              </span>
            </motion.h1>

            <motion.p
              variants={fadeUp}
              className="text-gray-500 text-base leading-relaxed mb-10 max-w-lg"
            >
              Kontrol ve Otomasyon Teknolojileri ve Bilgisayar Programcılığı
              alanlarında gelişim gösteren; SCADA, HMI, PLC, endüstriyel
              otomasyon, yazılım geliştirme, web site ve panel sistemleri,
              sistem entegrasyonu ve dijital ürün geliştirme gibi birçok alanda
              aktif projeler üretmeye odaklanan çok yönlü bir teknik profil.
            </motion.p>

            {/* CTA */}
            <motion.div variants={fadeUp} className="flex flex-wrap gap-3 mb-10">
              <a
                href="#value-areas"
                onClick={(e) => {
                  e.preventDefault();
                  document
                    .querySelector("#value-areas")
                    ?.scrollIntoView({ behavior: "smooth" });
                }}
                className="btn-primary shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all"
              >
                Projelerimi İncele
                <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  document
                    .querySelector("#contact")
                    ?.scrollIntoView({ behavior: "smooth" });
                }}
                className="btn-outline hover:-translate-y-0.5 transition-all"
              >
                Benimle İletişime Geç
                <Mail className="w-4 h-4" />
              </a>
            </motion.div>

            {/* Chips */}
            <motion.div variants={fadeUp} className="flex flex-wrap gap-2.5">
              {heroHighlights.map((h, i) => (
                <Reveal key={h.text} delay={0.5 + i * 0.1} direction="up">
                  <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 bg-white/80 backdrop-blur-sm border border-gray-200/80 rounded-full text-xs font-medium text-navy-700 shadow-sm">
                    <span className="w-1.5 h-1.5 rounded-full bg-navy-500" />
                    {h.text}
                  </span>
                </Reveal>
              ))}
            </motion.div>
          </motion.div>

          {/* Right column: hero image — large, free-flowing, NO container/card */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              duration: 1,
              delay: 0.35,
              ease: [0.22, 1, 0.36, 1] as const,
            }}
            className="lg:col-span-7 relative flex items-center justify-end"
          >
            {/* Radial blue glow behind image */}
            <div className="absolute right-[-5%] top-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-navy-200/25 blur-[140px] pointer-events-none" />

            <motion.img
              src="/images/hero-tech.png"
              alt="Kontrol, Otomasyon, Yazılım ve Dijital Sistemler"
              className="relative z-10 w-full max-w-[820px] xl:max-w-[880px] h-auto drop-shadow-[0_25px_60px_rgba(12,26,56,0.18)]"
              style={{ marginRight: "-6%" }}
              animate={{ y: [0, -14, 0] }}
              transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
