import { useRef, useEffect, useState } from 'react';

const awards = [
  { year: '2026', title: '日本第53回ふれあい書道展 特選', org: 'Hiroshima Kumano Town · Japan', level: '特選 Special Selection' },
  { year: '2026', title: '日本第52回ふれあい書道展 特選', org: 'Hiroshima Kumano Town · Japan', level: '特選 Special Selection' },
  { year: '2026', title: '乙巳台灣書法年展甄選 入選', org: '中華文化復興運動總會', level: 'Juried Selection' },
  { year: '2026', title: '日本第77回每日書道展 漢字部Ｉ類 入選', org: '日本每日新聞社', level: 'Open Selection' },
  { year: '2026', title: '日本第43回産経國際書展 漢字部 入選', org: '日本產經新聞社', level: 'Open Selection' },
  { year: '2025', title: '第22屆至聖盃全國書法比賽 社會組 優選', org: '高雄市中華書道學會', level: '優選 Excellence' },
  { year: '2025', title: '第12屆臺灣盃全國書法比賽 社會組 佳作', org: '台灣書法學會', level: '佳作 Commendation' },
  { year: '2025', title: '甲辰台灣書法年展甄選 入選', org: '中華文化復興運動總會', level: 'Juried Selection' },
  { year: '2025', title: '日本第81回現展 入選', org: '日本現代美術家協會', level: 'Open Selection' },
  { year: '2024', title: '癸卯台灣書法年展甄選 入選', org: '中華民國書學會', level: 'Juried Selection' },
  { year: '2024', title: '第11屆臺灣盃全國書法比賽 社會組 佳作', org: '台灣書法學會', level: '佳作 Commendation' },
  { year: '2023', title: '第43屆全國書法比賽 入選', org: '中華民國書法教育學會', level: 'National Selection' },
];

export default function AwardsSection() {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="awards" ref={ref} className="stratum py-24 md:py-40" style={{ background: '#0e0e0e' }}>
      {/* Wide heading */}
      <div className="px-8 md:px-16 mb-16">
        <p className="text-ochre text-xs tracking-[0.4em] uppercase font-body mb-4">Recognition</p>
        <h2 className="font-heading text-canvas" style={{ fontSize: 'clamp(2rem, 6vw, 5rem)', lineHeight: '0.9' }}>
          Awards &amp; Selections<br />
          <em className="opacity-40" style={{ fontSize: '0.5em' }}>獲獎紀錄</em>
        </h2>
      </div>

      {/* Awards grid */}
      <div
        ref={ref}
        className="px-8 md:px-16 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-0"
      >
        {awards.map((award, i) => (
          <div
            key={`${award.year}-${award.title}`}
            className="border border-border p-8 hover:border-ochre transition-colors group"
            style={{
              opacity: visible ? 1 : 0,
              transform: visible ? 'translateY(0)' : 'translateY(24px)',
              transition: `opacity 0.5s ease ${i * 0.06}s, transform 0.5s ease ${i * 0.06}s`,
            }}
          >
            <div className="flex items-start justify-between mb-4">
              <span className="text-ochre text-xs tracking-widest font-mono">{award.year}</span>
              <span className="text-xs text-muted-foreground tracking-wider border border-border px-2 py-0.5 group-hover:border-ochre group-hover:text-ochre transition-colors">
                {award.level.split(' ')[0]}
              </span>
            </div>
            <p className="text-canvas text-base leading-snug mb-3 font-body">{award.title}</p>
            <p className="text-muted-foreground text-xs">{award.org}</p>
          </div>
        ))}
      </div>
    </section>
  );
}