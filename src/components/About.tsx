import { aboutTags, aboutCards } from "../data/siteData";
import Reveal from "./Reveal";

export default function About() {
  return (
    <section id="about" className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="text-center mb-14">
            <span className="section-label">HAKKIMDA</span>
            <h2 className="section-title">Ben Kimim?</h2>
          </div>
        </Reveal>

        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          {/* Left — Portrait */}
          <Reveal direction="left" className="lg:col-span-4 lg:pr-6">
            <div className="relative mx-auto max-w-xs lg:max-w-sm">
              {/* Decorative background layers */}
              <div className="absolute inset-0 bg-navy-50 rounded-3xl rotate-3 -z-10" />
              
              <div className="relative rounded-3xl overflow-hidden shadow-xl border-4 border-white bg-white">
                <img
                  src="/images/celil-portrait.png"
                  alt="Celil Kandemir"
                  className="w-full h-auto object-cover transform hover:scale-105 transition-transform duration-700"
                />
              </div>
              
              {/* Tags below portrait */}
              <div className="flex flex-wrap gap-2.5 mt-8 justify-center">
                {aboutTags.map((tag) => (
                  <span
                    key={tag}
                    className="px-4 py-2 bg-navy-50 text-navy-700 hover:bg-navy-700 hover:text-white transition-colors cursor-default text-xs font-semibold rounded-full border border-navy-100"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>

          {/* Right — Text + cards */}
          <div className="lg:col-span-8">
            <Reveal delay={0.1}>
              <p className="text-gray-600 text-base md:text-lg leading-relaxed mb-10">
                Kontrol ve Otomasyon Teknolojileri ve Bilgisayar Programcılığı alanında
                kendini geliştiren; saha sistemlerini, yazılım geliştirmeyi ve dijital ürün
                mantığını birlikte düşünebilen çok yönlü bir teknik profilim. SCADA, HMI,
                PLC, endüstriyel otomasyon, yazılım geliştirme, web sistemleri ve panel
                tabanlı çözümler üzerinde çalışarak gerçek problemlere uygulanabilir
                sistemler üretmeye odaklanıyorum.
              </p>
            </Reveal>

            {/* About cards grid */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {aboutCards.map((card, i) => (
                <Reveal key={card.title} delay={0.15 + i * 0.08}>
                  <div className="p-6 rounded-2xl border border-gray-100 bg-white hover:shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:-translate-y-1 hover:border-navy-100 group h-full transition-all duration-300">
                    <div className="w-12 h-12 rounded-xl bg-slate-50 border border-gray-100 text-navy-600 flex items-center justify-center mb-4 group-hover:bg-navy-600 group-hover:text-white group-hover:border-navy-600 transition-all duration-300">
                      <card.icon className="w-6 h-6" />
                    </div>
                    <h4 className="font-bold text-navy-900 text-base mb-2 leading-snug">
                      {card.title}
                    </h4>
                    <p className="text-gray-500 text-sm leading-relaxed">{card.description}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
