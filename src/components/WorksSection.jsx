import { useState, useRef, useEffect } from 'react';
import lotusTriptych from '../assets/works/lotus-triptych.jpg';
import birdOfParadise from '../assets/works/bird-of-paradise.jpg';
import windThunderGods from '../assets/works/wind-thunder-gods.jpg';
import wisteria from '../assets/works/wisteria.jpg';
import windmill from '../assets/works/windmill.jpg';

const works = [
  {
    id: 1,
    titleZh: '『畫』荷·常與『變』',
    titleEn: 'Painting the Lotus — Constancy & Change',
    year: '2026',
    medium: '水墨 Ink on Paper',
    dimensions: '150 × 210 cm (with mounting)',
    description: 'A triptych meditation on the lotus — eternal symbol of purity — rendered through three distinct moods: the jade shimmer of 翠影蕩樣, the golden rain of 荷花金雨, and the ink-cloud depths of 墨雲荷池.',
    image: lotusTriptych,
    tag: 'Ink Painting',
  },
  {
    id: 2,
    titleZh: '鶴望迷想',
    titleEn: 'The Crane\'s Reverie',
    year: '2026',
    medium: '水墨 Ink on Paper',
    dimensions: '125 × 85 cm (with mounting)',
    description: 'Birds of paradise emerge from swirling marble clouds and indigo waters — a triptych that captures longing frozen in mid-flight, the moment between earth and sky.',
    image: birdOfParadise,
    tag: 'Ink Painting',
  },
  {
    id: 3,
    titleZh: '聲雷而振 趁風而追',
    titleEn: 'Thunder Stirs the Wing — Wind Gives Chase',
    year: '2026',
    medium: '礦物彩 Mineral Pigments on Gold',
    dimensions: '90 × 82 cm (with mounting)',
    description: 'Fūjin and Raijin — the Japanese deities of wind and thunder — blaze across gilded paper in explosive mineral pigments. A dialogue between Taiwanese brush culture and Japanese mythological iconography.',
    image: windThunderGods,
    tag: 'Mineral Pigments',
  },
  {
    id: 4,
    titleZh: '紫藤花開',
    titleEn: 'Wisteria in Bloom',
    year: '2025',
    medium: '水墨 Ink on Paper',
    dimensions: '59 × 104 cm (with mounting)',
    description: 'Cascading violet clusters fall from ink-dark branches in this diptych, each petal placed with the precision of a scientist and the grace of a poet.',
    image: wisteria,
    tag: 'Ink Painting',
  },
  {
    id: 5,
    titleZh: '靜觀獨踽 翱翔之翼',
    titleEn: 'In Still Contemplation — Wings That Soar',
    year: '2025',
    medium: '水墨 Ink on Paper',
    dimensions: '104 × 59 cm (with mounting)',
    description: 'A windmill stands sentinel in pale winter mist as a formation of birds pivots across the sky — solitude and freedom in a single breath of ink.',
    image: windmill,
    tag: 'Ink Painting',
  },
];

function WorkStrip({ work, index, onOpen }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className="work-strip border-t border-border cursor-pointer"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={() => onOpen(index)}
      role="button"
      tabIndex={0}
      aria-label={`View full image of ${work.titleEn}`}
      onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); onOpen(index); } }}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0)' : 'translateY(30px)',
        transition: `opacity 0.7s ease ${index * 0.1}s, transform 0.7s ease ${index * 0.1}s`,
      }}
    >
      {/* BG image on hover */}
      <div
        className="work-strip-bg"
        style={{ backgroundImage: `url(${work.image})` }}
      />

      <div className="relative z-10 px-8 md:px-16 py-8 md:py-10 flex flex-col md:flex-row md:items-center gap-4 md:gap-16">
        {/* Index */}
        <span className="text-muted-foreground text-xs tracking-widest font-mono w-8 flex-shrink-0">
          {String(index + 1).padStart(2, '0')}
        </span>

        {/* Title */}
        <div className="flex-1">
          <h3 className="work-title font-heading text-canvas transition-colors duration-300" style={{ fontSize: 'clamp(1.5rem, 3.5vw, 3rem)', lineHeight: '1' }}>
            {work.titleZh}
          </h3>
          <p className="text-muted-foreground text-sm mt-1 font-body italic">{work.titleEn}</p>
        </div>

        {/* Meta (visible on hover) */}
        <div className="work-meta flex gap-8 flex-shrink-0">
          <div>
            <p className="text-muted-foreground text-xs tracking-widest uppercase mb-1">Year</p>
            <p className="text-canvas text-sm">{work.year}</p>
          </div>
          <div>
            <p className="text-muted-foreground text-xs tracking-widest uppercase mb-1">Medium</p>
            <p className="text-canvas text-sm">{work.medium}</p>
          </div>
          <div className="hidden md:block">
            <p className="text-muted-foreground text-xs tracking-widest uppercase mb-1">Size</p>
            <p className="text-canvas text-sm">{work.dimensions}</p>
          </div>
        </div>

        {/* Tag */}
        <span className="flex-shrink-0 text-xs text-ochre border border-ochre border-opacity-30 px-3 py-1 tracking-widest uppercase font-body">
          {work.tag}
        </span>
      </div>

      {/* Description strip (hover) */}
      {hovered && (
        <div className="relative z-10 px-8 md:px-16 pb-8 md:pl-40">
          <p className="text-canvas opacity-70 text-base max-w-2xl leading-relaxed">{work.description}</p>
          <p className="text-ochre opacity-80 text-xs mt-3 tracking-widest uppercase">Click to view full image →</p>
        </div>
      )}
    </div>
  );
}

function Lightbox({ work, onClose, onPrev, onNext }) {
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    const handleKey = (e) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') onPrev();
      if (e.key === 'ArrowRight') onNext();
    };
    window.addEventListener('keydown', handleKey);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKey);
    };
  }, [onClose, onPrev, onNext]);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center px-4 py-8 md:px-12 md:py-12"
      style={{ background: 'rgba(10, 9, 8, 0.96)' }}
      onClick={onClose}
    >
      {/* Close button */}
      <button
        onClick={onClose}
        aria-label="Close"
        className="absolute top-6 right-6 md:top-8 md:right-8 text-canvas opacity-60 hover:opacity-100 transition-opacity text-3xl leading-none z-10"
      >
        ×
      </button>

      {/* Prev arrow */}
      <button
        onClick={(e) => { e.stopPropagation(); onPrev(); }}
        aria-label="Previous work"
        className="absolute left-3 md:left-8 top-1/2 -translate-y-1/2 text-canvas opacity-50 hover:opacity-100 transition-opacity text-4xl leading-none z-10 px-2"
      >
        ‹
      </button>

      {/* Next arrow */}
      <button
        onClick={(e) => { e.stopPropagation(); onNext(); }}
        aria-label="Next work"
        className="absolute right-3 md:right-8 top-1/2 -translate-y-1/2 text-canvas opacity-50 hover:opacity-100 transition-opacity text-4xl leading-none z-10 px-2"
      >
        ›
      </button>

      <div
        className="max-w-6xl w-full flex flex-col items-center gap-6"
        onClick={(e) => e.stopPropagation()}
      >
        <img
          src={work.image}
          alt={work.titleEn}
          className="max-h-[75vh] w-auto object-contain"
          style={{ boxShadow: '0 20px 60px rgba(0,0,0,0.5)' }}
        />
        <div className="text-center px-4">
          <h3 className="font-heading text-canvas" style={{ fontSize: 'clamp(1.25rem, 2.5vw, 2rem)' }}>
            {work.titleZh}
          </h3>
          <p className="text-muted-foreground text-sm mt-1 font-body italic">{work.titleEn}</p>
          <div className="flex gap-6 justify-center mt-4 text-xs text-muted-foreground tracking-widest uppercase">
            <span>{work.year}</span>
            <span>{work.medium}</span>
            <span>{work.dimensions}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function WorksSection() {
  const [lightboxIndex, setLightboxIndex] = useState(null);

  const handlePrev = () => setLightboxIndex((i) => (i - 1 + works.length) % works.length);
  const handleNext = () => setLightboxIndex((i) => (i + 1) % works.length);

  return (
    <section id="works" className="stratum py-24 md:py-32" style={{ background: '#0e0e0e' }}>
      <div className="px-8 md:px-16 mb-16">
        <div className="flex items-end justify-between border-b border-border pb-8">
          <div>
            <p className="text-ochre text-xs tracking-[0.4em] uppercase font-body mb-3">Index of Creation</p>
            <h2 className="font-heading text-canvas" style={{ fontSize: 'clamp(2rem, 5vw, 4.5rem)', lineHeight: '0.9' }}>
              Selected Works<br /><em className="opacity-40" style={{ fontSize: '0.6em' }}>作品選</em>
            </h2>
          </div>
          <p className="text-muted-foreground text-xs tracking-widest hidden md:block">
            Click to view full image
          </p>
        </div>
      </div>

      <div>
        {works.map((work, i) => (
          <WorkStrip key={work.id} work={work} index={i} onOpen={setLightboxIndex} />
        ))}
      </div>

      {lightboxIndex !== null && (
        <Lightbox
          work={works[lightboxIndex]}
          onClose={() => setLightboxIndex(null)}
          onPrev={handlePrev}
          onNext={handleNext}
        />
      )}
    </section>
  );
}