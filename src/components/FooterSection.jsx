export default function FooterSection() {
  const scrollTo = (anchor) => {
    const el = document.querySelector(anchor);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-border px-8 md:px-16 py-12" style={{ background: '#0a0a0a' }}>
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start gap-12">
        {/* Identity */}
        <div>
          <p className="font-heading text-canvas text-2xl mb-1">廖純沂</p>
          <p className="text-muted-foreground text-xs tracking-widest">Chun-Yi Liau PhD · 以真</p>
          <p className="text-muted-foreground text-xs mt-3">書法 · 水墨 · 篆刻</p>
          <p className="text-muted-foreground text-xs">Calligraphy · Ink Painting · Seal Carving</p>
        </div>

        {/* Nav */}
        <nav className="flex flex-col gap-2">
          {[
            { label: 'The Artist', anchor: '#about' },
            { label: 'Works', anchor: '#works' },
            { label: 'Exhibitions', anchor: '#exhibitions' },
            { label: 'Awards', anchor: '#awards' },
            { label: 'Inquiry', anchor: '#contact' },
          ].map(link => (
            <button
              key={link.label}
              onClick={() => scrollTo(link.anchor)}
              className="text-muted-foreground text-xs tracking-widest uppercase hover:text-ochre transition-colors text-left"
            >
              {link.label}
            </button>
          ))}
        </nav>

        {/* Credentials */}
        <div>
          <p className="text-muted-foreground text-xs tracking-widest uppercase mb-3">Recognition</p>
          <p className="text-canvas opacity-60 text-xs mb-1">台灣書法年展 · Juried (No Examination)</p>
          <p className="text-canvas opacity-60 text-xs mb-1">National Museum of Natural Science · Science Ambassador</p>
          <p className="text-canvas opacity-60 text-xs">Japan · Korea · Taiwan Exhibitions 50+</p>
        </div>
      </div>

      <div className="border-t border-border mt-10 pt-6 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-muted-foreground text-xs">© 2026 廖純沂 Chun-Yi Liau. All rights reserved.</p>
        <p className="text-muted-foreground text-xs tracking-widest">Crafted with ink &amp; intention.</p>
      </div>
    </footer>
  );
}