import { ArrowRight } from "lucide-react";
import { contactInfo } from "../data/siteData";
import Reveal from "./Reveal";

export default function Contact() {
  return (
    <section id="contact" className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="text-center mb-6">
            <span className="section-label">İLETİŞİM</span>
            <h2 className="section-title">Benimle İletişime Geçin</h2>
            <p className="text-gray-500 text-base md:text-lg max-w-2xl mx-auto mt-3">
              Endüstriyel otomasyon, yazılım, web panel sistemleri veya dijital ürün
              fikirleri için benimle iletişime geçebilirsiniz.
            </p>
          </div>
        </Reveal>

        <div className="grid md:grid-cols-3 gap-6 mt-12">
          {/* Contact cards */}
          {contactInfo.map((info, i) => (
            <Reveal key={info.type} delay={i * 0.1}>
              <a
                href={info.href}
                target={info.type === "linkedin" ? "_blank" : undefined}
                rel={info.type === "linkedin" ? "noopener noreferrer" : undefined}
                className="card-hover block p-6 rounded-xl border border-gray-100 bg-slate-50 hover:bg-white hover:border-navy-100 hover:shadow-md group"
              >
                <div className="w-12 h-12 rounded-xl bg-navy-100 text-navy-600 flex items-center justify-center mb-4 group-hover:bg-navy-600 group-hover:text-white transition-colors duration-300">
                  <info.icon className="w-6 h-6" />
                </div>
                <h3 className="font-bold text-navy-900 text-base mb-1">{info.label}</h3>
                <p className="text-gray-500 text-sm break-all">{info.value}</p>
              </a>
            </Reveal>
          ))}

          {/* CTA card */}
          <Reveal delay={0.25}>
            <div className="p-6 rounded-xl bg-gradient-to-br from-navy-700 to-navy-900 text-white flex flex-col justify-between h-full shadow-lg">
              <div>
                <h3 className="text-xl font-bold mb-2">Bir Projeniz mi Var?</h3>
                <p className="text-navy-200 text-sm leading-relaxed mb-6">
                  Fikrinizi birlikte gerçeğe dönüştürelim.
                </p>
              </div>
              <a
                href="mailto:mckandemir20@gmail.com"
                className="inline-flex items-center gap-2 px-5 py-3 bg-white text-navy-800 font-semibold rounded-lg text-sm hover:bg-navy-50 transition-colors w-fit"
              >
                İletişime Geç
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
