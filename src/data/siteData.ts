import {
  Cpu,
  Monitor,
  Code2,
  LayoutDashboard,
  Network,
  Palette,
  Lightbulb,
  Globe,
  Mail,
  Link2,
  Search,
  CalendarCheck,
  Rocket,
  TrendingUp,
  type LucideIcon,
} from "lucide-react";

/* ─── Menu ─── */
export interface MenuItem {
  label: string;
  href: string;
}

export const menuItems: MenuItem[] = [
  { label: "Ana Sayfa", href: "#hero" },
  { label: "Hakkımda", href: "#about" },
  { label: "Uzmanlık", href: "#expertise" },
  { label: "Projeler", href: "#value-areas" },
  { label: "Vizyon", href: "#vision" },
  { label: "İletişim", href: "#contact" },
];

/* ─── Hero highlights ─── */
export interface Highlight {
  text: string;
}

export const heroHighlights: Highlight[] = [
  { text: "Çözüm Odaklı" },
  { text: "Teknik + Yazılım Yetkinliği" },
  { text: "Gerçek Saha Deneyimi" },
  { text: "Global Bakış" },
];

/* ─── About tags ─── */
export const aboutTags: string[] = [
  "Disiplinli",
  "Çözüm Odaklı",
  "Güvenilir",
  "Üreten",
];

/* ─── About cards ─── */
export interface AboutCard {
  title: string;
  description: string;
  icon: LucideIcon;
}

export const aboutCards: AboutCard[] = [
  {
    title: "Kontrol ve Otomasyon Teknolojileri",
    description:
      "Otomasyon sistemlerinin tasarımı, PLC, SCADA, HMI çözümleri ve saha uygulamaları.",
    icon: Cpu,
  },
  {
    title: "Bilgisayar Programcılığı",
    description:
      "Yazılım geliştirme, algoritmik düşünme ve modern programlama yaklaşımları.",
    icon: Code2,
  },
  {
    title: "SCADA / HMI / PLC Sistemleri",
    description:
      "Gerçek zamanlı izleme, kontrol ve veri toplama sistemleri ile entegrasyon.",
    icon: Monitor,
  },
  {
    title: "Yazılım, Web ve Panel Sistemleri",
    description:
      "Modern web çözümleri, panel uygulamaları ve dijital arayüz geliştirme.",
    icon: LayoutDashboard,
  },
  {
    title: "Girişimci ve Sistem Odaklı Düşünce",
    description:
      "Değer üreten, iş modeli geliştirme ve sistematik çözüm odaklı yaklaşım.",
    icon: Lightbulb,
  },
];

/* ─── Expertise cards ─── */
export interface ExpertiseCard {
  title: string;
  description: string;
  icon: LucideIcon;
}

export const expertiseCards: ExpertiseCard[] = [
  {
    title: "PLC & Endüstriyel Otomasyon",
    description:
      "PLC, pano, saha ekipmanları ve endüstriyel otomasyon çözümleri.",
    icon: Cpu,
  },
  {
    title: "SCADA / HMI",
    description:
      "İzleme, kontrol, operatör ekranları ve proses görselleştirme çözümleri.",
    icon: Monitor,
  },
  {
    title: "Yazılım Geliştirme",
    description:
      "Web uygulamaları, arayüzler, API yapıları ve yazılım geliştirme süreçleri.",
    icon: Code2,
  },
  {
    title: "Web Site ve Panel Sistemleri",
    description:
      "Yönetim panelleri, kurumsal web sistemleri ve kullanıcı dostu arayüzler.",
    icon: LayoutDashboard,
  },
  {
    title: "Sistem Entegrasyonu",
    description:
      "Donanım, yazılım ve ağ bileşenlerini tek sistem altında toplama yaklaşımı.",
    icon: Network,
  },
  {
    title: "UI/UX ve Dijital Ürün Mantığı",
    description:
      "Kullanıcı odaklı ekranlar, sade akışlar ve yönetilebilir dijital ürünler.",
    icon: Palette,
  },
  {
    title: "Girişimcilik ve İş Modeli Düşüncesi",
    description:
      "Değer üreten projeler ve sürdürülebilir iş modelleri geliştirme bakışı.",
    icon: Lightbulb,
  },
  {
    title: "Yurt Dışına Açılabilecek Dijital Hizmetler",
    description:
      "Global ölçekte sunulabilecek yazılım, panel ve dijital sistem çözümleri.",
    icon: Globe,
  },
];

/* ─── Value areas ─── */
export interface ValueArea {
  title: string;
  description: string;
  icon: LucideIcon;
}

export const valueAreas: ValueArea[] = [
  {
    title: "Endüstriyel Otomasyon ve Kontrol Sistemleri",
    description:
      "PLC, programlama, SCADA, HMI, proses kontrolü ve üretim hatları otomasyon çözümleri.",
    icon: Cpu,
  },
  {
    title: "Yazılım ve Dijital Sistem Çözümleri",
    description:
      "Özel yazılımlar, web siteleri, yönetim panelleri, API entegrasyonları ve dijital araçlar.",
    icon: Code2,
  },
  {
    title: "Global Dijital Hizmetler ve Girişimcilik",
    description:
      "Dijital çözümler, uzaktan hizmetler ve global ölçekte girişimcilik ile değer üretimi.",
    icon: Globe,
  },
];

/* ─── Vision values ─── */
export interface VisionValue {
  text: string;
}

export const visionValues: VisionValue[] = [
  { text: "Çözüm Odaklı Yaklaşım" },
  { text: "Disiplin ve Planlama" },
  { text: "Kalite ve Güven" },
  { text: "Sürekli Gelişim" },
];

/* ─── Process steps ─── */
export interface ProcessStep {
  number: number;
  title: string;
  description: string;
  icon: LucideIcon;
}

export const processSteps: ProcessStep[] = [
  {
    number: 1,
    title: "Analiz",
    description:
      "Mevcut durumu analiz eder, ihtiyaçları netleştirir ve öncelikleri belirlerim.",
    icon: Search,
  },
  {
    number: 2,
    title: "Planlama",
    description:
      "Çözüm stratejisini belirler, kaynakları planlar ve yol haritasını oluştururum.",
    icon: CalendarCheck,
  },
  {
    number: 3,
    title: "Uygulama",
    description:
      "Projeleri hayata geçirir, entegre eder ve etkin şekilde uygularım.",
    icon: Rocket,
  },
  {
    number: 4,
    title: "Gelişim",
    description:
      "Süreçleri ölçer, optimize eder ve sürdürülebilir gelişim ile değer katmaya devam ederim.",
    icon: TrendingUp,
  },
];

/* ─── Contact info ─── */
export interface ContactInfo {
  type: "email" | "linkedin";
  label: string;
  value: string;
  href: string;
  icon: LucideIcon;
}

export const contactInfo: ContactInfo[] = [
  {
    type: "email",
    label: "E-posta",
    value: "mckandemir20@gmail.com",
    href: "mailto:mckandemir20@gmail.com",
    icon: Mail,
  },
  {
    type: "linkedin",
    label: "LinkedIn",
    value: "www.linkedin.com/in/mehmetcelilkandemir",
    href: "https://www.linkedin.com/in/mehmetcelilkandemir",
    icon: Link2,
  },
];
