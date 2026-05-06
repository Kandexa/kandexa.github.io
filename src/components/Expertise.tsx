import { expertiseCards } from "../data/siteData";
import Reveal from "./Reveal";

export default function Expertise() {
  return (
    <section id="expertise" className="py-20 md:py-28 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="text-center mb-14">
            <span className="section-label">UZMANLIK ALANLARIM</span>
            <h2 className="section-title">Ne Konularda Yetkinim?</h2>
          </div>
        </Reveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {expertiseCards.map((card, i) => (
            <Reveal key={card.title} delay={i * 0.06}>
              <div className="group relative p-7 md:p-8 rounded-2xl bg-white border border-gray-100 shadow-sm hover:shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:-translate-y-1 hover:border-navy-100 transition-all duration-300 h-full flex flex-col">
                <div className="w-14 h-14 rounded-2xl bg-slate-50 border border-gray-100 text-navy-600 flex items-center justify-center mb-6 group-hover:bg-navy-600 group-hover:text-white group-hover:border-navy-600 transition-all duration-300">
                  <card.icon className="w-7 h-7" />
                </div>
                <h3 className="font-bold text-navy-900 text-base mb-3 leading-snug">
                  {card.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed mt-auto">{card.description}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
