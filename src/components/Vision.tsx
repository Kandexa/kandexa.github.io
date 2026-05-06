import { Target, CheckCircle, Shield, Zap } from "lucide-react";
import { visionValues } from "../data/siteData";
import Reveal from "./Reveal";

const valueIcons = [Target, CheckCircle, Shield, Zap];

export default function Vision() {
  return (
    <section id="vision" className="relative py-20 md:py-24 bg-navy-900 overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 vision-pattern pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-10">
          {/* Left */}
          <div className="lg:max-w-xl">
            <Reveal>
              <span className="inline-block text-xs font-bold tracking-[0.2em] uppercase text-navy-300 bg-white/5 px-4 py-1.5 rounded-full mb-5 border border-white/10">
                VİZYONUM
              </span>
            </Reveal>
            <Reveal delay={0.1}>
              <blockquote className="text-2xl md:text-3xl lg:text-4xl font-bold text-white leading-tight">
                &ldquo;Teknolojiyi kullanarak değer üreten sistemlerle dünyaya hizmet etmek.&rdquo;
              </blockquote>
            </Reveal>
          </div>

          {/* Right — value pills */}
          <div className="grid grid-cols-2 gap-4">
            {visionValues.map((v, i) => {
              const Icon = valueIcons[i];
              return (
                <Reveal key={v.text} delay={0.15 + i * 0.08}>
                  <div className="flex items-center gap-3 px-5 py-4 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm hover:bg-white/10 transition-colors">
                    <Icon className="w-5 h-5 text-navy-300 flex-shrink-0" />
                    <span className="text-white text-sm font-medium">{v.text}</span>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
