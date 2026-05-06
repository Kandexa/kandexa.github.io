import { useState } from "react";
import { ArrowRight, Loader2, CheckCircle2, XCircle } from "lucide-react";
import { contactInfo, contactFormAccessKey } from "../data/siteData";
import Reveal from "./Reveal";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    botcheck: false,
  });

  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [resultMessage, setResultMessage] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    if (type === "checkbox") {
      setFormData((prev) => ({ ...prev, [name]: (e.target as HTMLInputElement).checked }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (formData.botcheck) {
      setStatus("error");
      setResultMessage("Bot tespiti nedeniyle gönderim iptal edildi.");
      return;
    }

    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setStatus("error");
      setResultMessage("Lütfen tüm alanları doldurun.");
      return;
    }

    setStatus("loading");
    setResultMessage("");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: contactFormAccessKey,
          subject: "Celil Kandemir Web Sitesi Yeni İletişim Mesajı",
          from_name: "celilkandemir.com",
          name: formData.name,
          email: formData.email,
          message: formData.message,
        }),
      });

      const result = await response.json();

      if (response.status === 200) {
        setStatus("success");
        setResultMessage("Mesajınız başarıyla gönderildi. En kısa sürede dönüş yapacağım.");
        setFormData({ name: "", email: "", message: "", botcheck: false });
        
        // Reset success message after 5 seconds
        setTimeout(() => {
          setStatus("idle");
          setResultMessage("");
        }, 5000);
      } else {
        console.error(result);
        setStatus("error");
        setResultMessage(result.message || "Mesaj gönderilemedi. Lütfen daha sonra tekrar deneyin veya e-posta üzerinden ulaşın.");
      }
    } catch (error) {
      console.error("Form submit error:", error);
      setStatus("error");
      setResultMessage("Bağlantı hatası oluştu. Lütfen daha sonra tekrar deneyin veya e-posta üzerinden ulaşın.");
    }
  };

  return (
    <section id="contact" className="py-20 md:py-28 bg-white relative">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-navy-50/50 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="text-center mb-14">
            <span className="section-label">İLETİŞİM</span>
            <h2 className="section-title">Benimle İletişime Geçin</h2>
            <p className="text-gray-500 text-base md:text-lg max-w-2xl mx-auto mt-4">
              Endüstriyel otomasyon, yazılım, web panel sistemleri veya dijital ürün
              fikirleri için benimle iletişime geçebilirsiniz.
            </p>
          </div>
        </Reveal>

        <div className="grid lg:grid-cols-5 gap-8 md:gap-12 items-stretch">
          
          {/* Left / Main Form Card */}
          <Reveal className="lg:col-span-3 h-full">
            <div className="bg-white rounded-2xl border border-gray-200 shadow-[0_8px_30px_rgb(0,0,0,0.04)] p-8 md:p-10 h-full">
              <form onSubmit={handleSubmit} className="flex flex-col h-full space-y-6">
                {/* Honeypot field - hidden */}
                <input
                  type="checkbox"
                  name="botcheck"
                  className="hidden"
                  style={{ display: 'none' }}
                  checked={formData.botcheck}
                  onChange={handleChange}
                />

                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-semibold text-navy-900 ml-1">
                    İsim Soyisim
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Adınız ve soyadınız"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3.5 rounded-xl border border-gray-200 bg-gray-50/50 text-navy-900 placeholder:text-gray-400 focus:bg-white focus:border-navy-500 focus:ring-4 focus:ring-navy-500/10 transition-all duration-300 outline-none"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-semibold text-navy-900 ml-1">
                    E-posta
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="E-posta adresiniz"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3.5 rounded-xl border border-gray-200 bg-gray-50/50 text-navy-900 placeholder:text-gray-400 focus:bg-white focus:border-navy-500 focus:ring-4 focus:ring-navy-500/10 transition-all duration-300 outline-none"
                  />
                </div>

                <div className="space-y-2 flex-grow flex flex-col">
                  <label htmlFor="message" className="text-sm font-semibold text-navy-900 ml-1">
                    Mesaj
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    placeholder="Projenizi veya mesajınızı yazın"
                    required
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3.5 rounded-xl border border-gray-200 bg-gray-50/50 text-navy-900 placeholder:text-gray-400 focus:bg-white focus:border-navy-500 focus:ring-4 focus:ring-navy-500/10 transition-all duration-300 outline-none resize-y min-h-[140px] flex-grow"
                  />
                </div>

                {/* Status Messages */}
                {resultMessage && (
                  <div
                    className={`p-4 rounded-xl flex items-start gap-3 text-sm font-medium ${
                      status === "success"
                        ? "bg-emerald-50 text-emerald-700 border border-emerald-100"
                        : "bg-red-50 text-red-700 border border-red-100"
                    }`}
                  >
                    {status === "success" ? (
                      <CheckCircle2 className="w-5 h-5 flex-shrink-0" />
                    ) : (
                      <XCircle className="w-5 h-5 flex-shrink-0" />
                    )}
                    <p>{resultMessage}</p>
                  </div>
                )}

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="mt-2 w-full flex items-center justify-center gap-2 px-6 py-4 bg-gradient-to-r from-navy-800 to-navy-700 text-white font-bold rounded-xl hover:from-navy-900 hover:to-navy-800 focus:ring-4 focus:ring-navy-500/20 active:scale-[0.98] disabled:opacity-70 disabled:cursor-not-allowed transition-all duration-300 shadow-md"
                >
                  {status === "loading" ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin" />
                      Gönderiliyor...
                    </>
                  ) : (
                    <>
                      Mesaj Gönder
                      <ArrowRight className="w-5 h-5" />
                    </>
                  )}
                </button>
              </form>
            </div>
          </Reveal>

          {/* Right / Contact Info Card */}
          <Reveal delay={0.15} className="lg:col-span-2 h-full">
            <div className="bg-gradient-to-br from-navy-800 to-navy-950 rounded-2xl shadow-xl p-8 md:p-10 h-full flex flex-col relative overflow-hidden border border-navy-700/50">
              {/* Decorative glows */}
              <div className="absolute -top-20 -right-20 w-64 h-64 bg-navy-500/20 rounded-full blur-[80px]" />
              <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-navy-400/10 rounded-full blur-[80px]" />

              <div className="relative z-10">
                <h3 className="text-2xl font-bold text-white mb-8">
                  İletişim Bilgileri
                </h3>
                
                <div className="space-y-6">
                  {contactInfo.map((info) => (
                    <a
                      key={info.type}
                      href={info.href}
                      target={info.type === "linkedin" ? "_blank" : undefined}
                      rel={info.type === "linkedin" ? "noopener noreferrer" : undefined}
                      className="group flex items-start gap-4 p-4 rounded-xl hover:bg-white/5 border border-transparent hover:border-white/10 transition-all duration-300"
                    >
                      <div className="w-12 h-12 rounded-xl bg-white/10 text-white flex items-center justify-center flex-shrink-0 group-hover:bg-white text-navy-900 group-hover:text-navy-900 transition-colors duration-300 shadow-sm border border-white/5">
                        <info.icon className="w-5 h-5 group-hover:text-navy-900 text-white transition-colors" />
                      </div>
                      <div>
                        <p className="text-navy-200 text-sm font-medium mb-1">
                          {info.label}
                        </p>
                        <p className="text-white font-semibold text-base break-all group-hover:text-navy-100 transition-colors">
                          {info.value}
                        </p>
                      </div>
                    </a>
                  ))}
                </div>
              </div>
              
              <div className="relative z-10 mt-auto pt-10">
                <div className="p-5 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm">
                  <p className="text-navy-100 text-sm leading-relaxed">
                    Projeleriniz için detaylı bilgi almak veya tanışmak amacıyla yukarıdaki kanallardan benimle iletişime geçebilirsiniz.
                  </p>
                </div>
              </div>

            </div>
          </Reveal>

        </div>
      </div>
    </section>
  );
}
