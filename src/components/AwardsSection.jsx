import { useRef, useEffect, useState } from 'react';

const international = [
  { year: '2026', title: '日本第53回ふれあい書道展 特選', org: '日本「筆の都」広島県熊野町全国書画展覧会運営参員会' },
  { year: '2026', title: '韓國第17屆國際書畫交流大展台灣代表甄選 入選', org: '台灣書法學會協辦' },
  { year: '2026', title: '日本第43回産経國際書展一般公募 漢字部 入選', org: '日本產經新聞社／產經國際書會' },
  { year: '2026', title: '日本第77回每日書道展一般公募 漢字部Ｉ類 入選', org: '日本每日新聞社／一般財團法人每日書道會' },
  { year: '2026', title: '日本第14回東京現展公募一般 入選', org: '日本現代美術家協會' },
  { year: '2026', title: '日本第82回現展一般公募 入選', org: '日本現代美術家協會' },
  { year: '2026', title: '日本第52回ふれあい書道展 特選', org: '日本「筆の都」広島県熊野町全国書画展覧会運営参員会' },
  { year: '2026', title: '日本現展神奈川支部卯月展一般公募 入選', org: '日本現代美術家協會' },
  { year: '2026', title: '日本第49回埼玉現展一般公募 入選', org: '日本現代美術家協會' },
  { year: '2026', title: '日本第24回NAU21世紀美術連立展作品募集 入選', org: '日本藝術家聯盟' },
  { year: '2025', title: '日本第13回東京現展一般公募 入選', org: '日本現代美術家協會' },
  { year: '2025', title: '日本第81回現展一般公募 入選', org: '日本現代美術家協會' },
  { year: '2025', title: '韓國第16屆國際書畫交流大展台灣代表甄選 入選', org: '台灣書法學會協辦' },
  { year: '2024', title: '韓國第15屆東亞書畫交流大展台灣代表甄選 入選', org: '台灣書法學會協辦' },
];

const domestic = [
  { year: '2026', title: '乙巳台灣書法年展甄選 入選', org: '中華文化復興運動總會／中華民國書學會' },
  { year: '2026', title: '第13屆臺灣盃全國書法比賽 社會組 佳作', org: '台灣書法學會' },
  { year: '2025', title: '甲辰台灣書法年展甄選 入選', org: '中華文化復興運動總會／中華民國書學會' },
  { year: '2025', title: '第45屆全國書法比賽 一般類 入選', org: '中華民國書法教育學會' },
  { year: '2025', title: '第22屆至聖盃全國書法比賽 社會組 優選', org: '高雄市中華書道學會' },
  { year: '2025', title: '嘎檔杯台灣書法大賽 中區大專社會組 入選', org: '中華民國書學會' },
  { year: '2025', title: '第12屆臺灣盃全國書法比賽 社會組 佳作', org: '台灣書法學會' },
  { year: '2024', title: '第三屆華夏獎 書法類壯年長青組 入選', org: '國家藝術聯盟' },
  { year: '2024', title: '第44屆全國書法比賽 一般類和創意類 入選', org: '中華民國書法教育學會' },
  { year: '2024', title: '癸卯台灣書法年展甄選 入選', org: '中華文化復興運動總會／中華民國書學會' },
  { year: '2024', title: '第11屆臺灣盃全國書法比賽 社會組 佳作', org: '台灣書法學會' },
  { year: '2023', title: '第43屆全國書法比賽 一般類和臨帖類 入選', org: '中華民國書法教育學會' },
];

export default function AwardsSection() {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  const [tab, setTab] = useState('international');

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const awards = tab === 'international' ? international : domestic;

  return (
    <section id="awards" ref={ref} className="stratum py-24 md:py-40" style={{ background: '#0e0e0e' }}>
      {/* Wide heading */}
      <div className="px-8 md:px-16 mb-10">
        <p className="text-ochre text-xs tracking-[0.4em] uppercase font-body mb-4">Recognition</p>
        <h2 className="font-heading text-canvas" style={{ fontSize: 'clamp(2rem, 6vw, 5rem)', lineHeight: '0.9' }}>
          Awards &amp; Selections<br />
          <em className="opacity-40" style={{ fontSize: '0.5em' }}>獲獎紀錄</em>
        </h2>
      </div>

      {/* Toggle */}
      <div className="px-8 md:px-16 mb-10 flex gap-2">
        <button
          onClick={() => setTab('international')}
          className={`text-xs tracking-widest uppercase px-4 py-2 border transition-colors font-body ${
            tab === 'international'
              ? 'border-ochre text-ochre bg-ochre bg-opacity-10'
              : 'border-border text-muted-foreground hover:text-canvas hover:border-canvas'
          }`}
        >
          International
        </button>
        <button
          onClick={() => setTab('domestic')}
          className={`text-xs tracking-widest uppercase px-4 py-2 border transition-colors font-body ${
            tab === 'domestic'
              ? 'border-ochre text-ochre bg-ochre bg-opacity-10'
              : 'border-border text-muted-foreground hover:text-canvas hover:border-canvas'
          }`}
        >
          Taiwan
        </button>
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
            <div className="mb-4">
              <span className="text-ochre text-xs tracking-widest font-mono">{award.year}</span>
            </div>
            <p className="text-canvas text-base leading-snug mb-3 font-body">{award.title}</p>
            <p className="text-muted-foreground text-xs">{award.org}</p>
          </div>
        ))}
      </div>
    </section>
  );
}