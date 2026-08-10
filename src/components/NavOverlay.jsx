import { useEffect } from 'react';
import { X } from 'lucide-react';

const navLinks = [
  { label: 'The Artist', labelZh: '藝術家', anchor: '#about' },
  { label: 'Works', labelZh: '作品', anchor: '#works' },
  { label: 'Exhibitions', labelZh: '展覽', anchor: '#exhibitions' },
  { label: 'Awards', labelZh: '獲獎', anchor: '#awards' },
  { label: 'Inquiry', labelZh: '聯絡', anchor: '#contact' },
];

export default function NavOverlay({ isOpen, onClose }) {
  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  const handleNav = (anchor) => {
    onClose();
    setTimeout(() => {
      const el = document.querySelector(anchor);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }, 700);
  };

  return (
    <div className={`nav-overlay ${isOpen ? 'open' : ''}`}>
      <div className="h-full flex flex-col justify-between p-8 md:p-16">
        {/* Close */}
        <div className="flex justify-end">
          <button onClick={onClose} className="text-canvas hover:text-ochre transition-colors p-2">
            <X size={32} />
          </button>
        </div>

        {/* Links */}
        <nav className="flex-1 flex flex-col justify-center gap-2">
          {navLinks.map((link, i) => (
            <button
              key={link.label}
              onClick={() => handleNav(link.anchor)}
              className="group text-left border-b border-border py-6 flex items-end justify-between hover:border-ochre transition-colors"
              style={{ animationDelay: `${i * 0.08}s` }}
            >
              <span className="font-heading text-display-lg text-canvas group-hover:text-ochre transition-colors">
                {link.label}
              </span>
              <span className="text-muted-foreground text-sm tracking-widest mb-2">{link.labelZh}</span>
            </button>
          ))}
        </nav>

        {/* Footer */}
        <div className="flex justify-between items-end">
          <div>
            <p className="text-muted-foreground text-xs tracking-widest uppercase">廖純沂 以真</p>
            <p className="text-muted-foreground text-xs tracking-widest">Chun-Yi Liau · PhD</p>
          </div>
          <div className="text-right">
            <p className="text-muted-foreground text-xs tracking-widest">Calligraphy · Ink Painting</p>
            <p className="text-muted-foreground text-xs">Seal Carving · Science</p>
          </div>
        </div>
      </div>
    </div>
  );
}