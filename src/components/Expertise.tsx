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
              <div className="card-hover p-6 rounded-xl bg-white border border-gray-100 shadow-sm hover:shadow-md hover:border-navy-100 group h-full">
                <div className="w-12 h-12 rounded-xl bg-navy-50 text-navy-600 flex items-center justify-center mb-4 group-hover:bg-navy-600 group-hover:text-white transition-colors duration-300">
                  <card.icon className="w-6 h-6" />
                </div>
                <h3 className="font-bold text-navy-900 text-sm mb-2 leading-snug">
                  {card.title}
                </h3>
                <p className="text-gray-500 text-xs leading-relaxed">{card.description}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
