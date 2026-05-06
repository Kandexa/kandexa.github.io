import Reveal from "./Reveal";

export default function Footer() {
  return (
    <footer className="bg-navy-950 text-white py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-navy-300">
            <p>&copy; 2026 Celil Kandemir. Tüm hakları saklıdır.</p>
            <p className="flex items-center gap-1.5">
              <span className="inline-block w-1.5 h-1.5 rounded-full bg-navy-500" />
              Türkiye&apos;den Dünyaya Teknoloji.
            </p>
          </div>
        </Reveal>
      </div>
    </footer>
  );
}
