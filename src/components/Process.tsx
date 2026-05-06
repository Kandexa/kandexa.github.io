import { processSteps } from "../data/siteData";
import Reveal from "./Reveal";

export default function Process() {
  return (
    <section className="py-20 md:py-28 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="text-center mb-14">
            <span className="section-label">SÜREÇ YÖNETİMİ</span>
            <h2 className="section-title">Süreç Yönetim Yaklaşımım</h2>
          </div>
        </Reveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {/* Connector line (desktop only) */}
          <div className="hidden lg:block absolute top-[52px] left-[12%] right-[12%] process-connector z-0" />

          {processSteps.map((step, i) => (
            <Reveal key={step.number} delay={i * 0.1}>
              <div className="relative z-10 text-center p-6 rounded-xl bg-white border border-gray-100 shadow-sm card-hover hover:shadow-md hover:border-navy-100">
                {/* Step number circle */}
                <div className="mx-auto w-14 h-14 rounded-full bg-navy-700 text-white flex items-center justify-center text-xl font-bold mb-5 shadow-md">
                  {step.number}
                </div>
                <h3 className="font-bold text-navy-900 text-base mb-2">{step.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{step.description}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
