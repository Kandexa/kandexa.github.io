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
              <div className="group relative rounded-2xl overflow-hidden bg-gradient-to-br from-navy-800 via-navy-900 to-navy-950 p-8 md:p-10 h-full min-h-[280px] flex flex-col justify-end card-hover hover:shadow-2xl">
                {/* Decorative overlay */}
                <div className="absolute top-0 right-0 w-40 h-40 bg-navy-400/20 rounded-full blur-3xl -translate-y-10 translate-x-10 group-hover:bg-navy-400/30 transition-all duration-500" />
                <div className="absolute bottom-0 left-0 w-32 h-32 bg-navy-500/10 rounded-full blur-2xl translate-y-8 -translate-x-8" />

                {/* Icon */}
                <div className="relative z-10 w-14 h-14 rounded-xl bg-white/10 backdrop-blur-sm border border-white/10 flex items-center justify-center mb-5 group-hover:bg-white/20 transition-colors">
                  <area.icon className="w-7 h-7 text-white" />
                </div>

                {/* Content */}
                <div className="relative z-10">
                  <h3 className="text-xl font-bold text-white mb-3 leading-snug">
                    {area.title}
                  </h3>
                  <p className="text-navy-200 text-sm leading-relaxed">
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
