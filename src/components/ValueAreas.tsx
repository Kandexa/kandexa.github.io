import { valueAreas } from "../data/siteData";
import Reveal from "./Reveal";

export default function ValueAreas() {
  return (
    <section id="value-areas" className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="text-center mb-14">
            <span className="section-label">PROJELER</span>
            <h2 className="section-title">Değer Ürettiğim Alanlar</h2>
          </div>
        </Reveal>

        <div className="grid md:grid-cols-3 gap-6">
          {valueAreas.map((area, i) => (
            <Reveal key={area.title} delay={i * 0.12}>
              <div className="group relative rounded-[2rem] overflow-hidden bg-gradient-to-br from-navy-800 to-navy-950 p-8 md:p-10 lg:p-12 h-full min-h-[320px] flex flex-col justify-end border border-navy-700/50 hover:border-navy-500/50 shadow-lg hover:shadow-[0_20px_40px_rgb(12,26,56,0.4)] transition-all duration-500 hover:-translate-y-2">
                {/* Decorative overlay */}
                <div className="absolute top-0 right-0 w-48 h-48 bg-navy-500/20 rounded-full blur-3xl -translate-y-10 translate-x-10 group-hover:bg-navy-400/30 transition-all duration-700" />
                <div className="absolute bottom-0 left-0 w-32 h-32 bg-navy-600/20 rounded-full blur-2xl translate-y-8 -translate-x-8" />

                {/* Icon */}
                <div className="relative z-10 w-16 h-16 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 flex items-center justify-center mb-6 group-hover:bg-white/10 group-hover:scale-110 transition-all duration-500">
                  <area.icon className="w-8 h-8 text-white" />
                </div>

                {/* Content */}
                <div className="relative z-10">
                  <h3 className="text-xl md:text-2xl font-bold text-white mb-4 leading-snug">
                    {area.title}
                  </h3>
                  <p className="text-navy-100 text-sm md:text-base leading-relaxed opacity-90">
                    {area.description}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
