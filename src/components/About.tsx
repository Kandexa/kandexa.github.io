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
          <Reveal direction="left" className="lg:col-span-4">
            <div className="relative mx-auto max-w-xs lg:max-w-none">
              <div className="relative rounded-2xl overflow-hidden shadow-xl border border-gray-100">
                <img
                  src="/images/celil-portrait.png"
                  alt="Celil Kandemir"
                  className="w-full h-auto object-cover"
                />
              </div>
              {/* Tags below portrait */}
              <div className="flex flex-wrap gap-2 mt-5 justify-center lg:justify-start">
                {aboutTags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1.5 bg-navy-700 text-white text-xs font-semibold rounded-full"
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
                  <div className="card-hover p-5 rounded-xl border border-gray-100 bg-slate-50 hover:bg-white hover:border-navy-100 group h-full">
                    <div className="w-10 h-10 rounded-lg bg-navy-100 text-navy-600 flex items-center justify-center mb-3 group-hover:bg-navy-600 group-hover:text-white transition-colors">
                      <card.icon className="w-5 h-5" />
                    </div>
                    <h4 className="font-semibold text-navy-900 text-sm mb-1.5 leading-snug">
                      {card.title}
                    </h4>
                    <p className="text-gray-500 text-xs leading-relaxed">{card.description}</p>
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
