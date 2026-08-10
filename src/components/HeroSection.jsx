import { useEffect, useRef, useState } from 'react';
import { Menu } from 'lucide-react';
import NavOverlay from './NavOverlay';

export default function HeroSection() {
  const [navOpen, setNavOpen] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const heroRef = useRef(null);

  useEffect(() => {
    const handleMouse = (e) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 18;
      const y = (e.clientY / window.innerHeight - 0.5) * 12;
      setMousePos({ x, y });
    };
    window.addEventListener('mousemove', handleMouse);
    return () => window.removeEventListener('mousemove', handleMouse);
  }, []);

  return (
    <>
      <NavOverlay isOpen={navOpen} onClose={() => setNavOpen(false)} />

      <section
        ref={heroRef}
        className="relative w-full min-h-screen flex flex-col overflow-hidden"
        style={{ background: '#121212' }}
      >
        {/* Background texture overlay */}
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `url(https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=1800&q=80)`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            filter: 'grayscale(100%) contrast(1.3)',
            transform: `translate(${mousePos.x * 0.1}px, ${mousePos.y * 0.1}px) scale(1.05)`,
            transition: 'transform 0.8s ease-out',
          }}
        />
        {/* Gradient overlay */}
        <div className="absolute inset-0" style={{ background: 'linear-gradient(to bottom, rgba(18,18,18,0.4) 0%, rgba(18,18,18,0.1) 40%, rgba(18,18,18,0.85) 100%)' }} />

        {/* Curator's Tab */}
        <div className="relative z-10 flex justify-between items-start p-8 md:p-12">
          <div>
            <p className="text-ochre text-xs tracking-[0.3em] uppercase font-body">Atelier</p>
            <p className="text-canvas text-xs tracking-widest opacity-60">以真 · Yi-Zhen</p>
          </div>
          <button
            onClick={() => setNavOpen(true)}
            className="flex items-center gap-3 text-canvas hover:text-ochre transition-colors group"
          >
            <span className="text-xs tracking-[0.2em] uppercase font-body opacity-60 group-hover:opacity-100 transition-opacity">Menu</span>
            <Menu size={22} />
          </button>
        </div>

        {/* Main heading */}
        <div className="relative z-10 flex-1 flex flex-col justify-end px-8 md:px-16 pb-16 md:pb-20">
          <div
            style={{
              transform: `translate(${mousePos.x * 0.3}px, ${mousePos.y * 0.3}px)`,
              transition: 'transform 0.6s ease-out',
            }}
          >
            <p className="text-ochre text-xs tracking-[0.4em] uppercase font-body mb-6 ochre-line">
              廖純沂 · Chun-Yi Liao PhD
            </p>
            <h1 className="font-heading text-canvas leading-none mb-2" style={{ fontSize: 'clamp(3.5rem, 10vw, 10rem)', lineHeight: '0.88', letterSpacing: '-0.03em' }}>
              書·畫·刻
            </h1>
            <h2 className="font-heading text-canvas opacity-80 leading-none mb-8" style={{ fontSize: 'clamp(2rem, 5vw, 5rem)', lineHeight: '0.9', letterSpacing: '-0.02em' }}>
              Calligraphy &amp; Ink
            </h2>
            <p className="text-canvas opacity-50 text-sm tracking-[0.2em] uppercase font-body max-w-xs">
              Scientist · Calligrapher · Painter · Seal Carver
            </p>
          </div>

          {/* Scroll indicator */}
          <div className="absolute bottom-8 right-8 md:right-16 flex flex-col items-center gap-2">
            <div className="w-px h-16 bg-ochre opacity-40" style={{ animation: 'fadeIn 2s ease infinite alternate' }} />
            <p className="text-muted-foreground text-xs tracking-widest rotate-90 origin-center mt-2">Scroll</p>
          </div>
        </div>

        {/* Bottom vellum data strip */}
        <div className="relative z-10 border-t border-border px-8 md:px-16 py-4 flex gap-8 overflow-x-auto">
          {[
            { label: 'Medium', value: '水墨 · 書法 · 篆刻' },
            { label: 'Active Since', value: '2021' },
            { label: 'Exhibitions', value: '50+' },
            { label: 'International', value: 'Japan · Korea' },
          ].map(item => (
            <div key={item.label} className="flex-shrink-0">
              <p className="text-muted-foreground text-xs tracking-widest uppercase mb-1">{item.label}</p>
              <p className="text-canvas text-sm font-body">{item.value}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}