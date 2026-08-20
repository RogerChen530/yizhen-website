import { useState, useRef, useEffect } from 'react';

const international = [
  { year: '2026', event: '韓國第17屆國際書畫交流大展', venue: '大邱藝術文化會館, Korea', dates: 'Aug 18–23' },
  { year: '2026', event: '日本第43回産経國際書展', venue: '東京都美術館', dates: 'Aug 14–21' },
  { year: '2026', event: '日本第13回東京現展', venue: '東京都美術館', dates: 'Aug 5–12' },
  { year: '2026', event: '日本每日書道展', venue: '東京都美術館', dates: 'Jul 18–25' },
  { year: '2026', event: '日本公募ZEN展第24回', venue: '東京都美術館', dates: 'Jun 16–21' },
  { year: '2026', event: '日本第82回現展', venue: '國立東京新美術館', dates: 'May 27 – Jun 8' },
  { year: '2026', event: '2026日本現代藝術家展〖現展神奈川支部 卯月展〗', venue: '橫濱戶塚Sakura Plaza', dates: 'Mar 31 – Apr 6' },
  { year: '2026', event: '2026國家藝術聯盟「芸象万千」京都美展', venue: '京都市京瓷美術館', dates: 'Mar 10–15' },
  { year: '2026', event: '日本第49回埼玉現展', venue: 'MOMAS埼玉近代美術館', dates: 'Mar 3–8' },
  { year: '2026', event: '日本第24回NAU21世紀美術連立展', venue: '國立東京新美術館', dates: 'Feb 4–15' },
  { year: '2025', event: '日本第13回東京現展', venue: '東京都美術館', dates: 'Sep 19–26' },
  { year: '2025', event: '「與風景對話」台日藝術家交流展-日本站', venue: '東京都銀座京橋檜藝術畫廊', dates: 'Sep 8–13' },
  { year: '2025', event: '第31屆國際書法聯盟作品展', venue: '沖繩縣立美術館', dates: 'Jun 20–23' },
  { year: '2025', event: '日本第81回現展', venue: '國立東京新美術館', dates: 'May 28 – Jun 9' },
  { year: '2025', event: '韓國第16屆國際書畫交流大展', venue: '大邱藝術文化會館, Korea', dates: 'Apr 8–13' },
  { year: '2025', event: '2025「芸象万千」台日名家交流展', venue: '大阪市立美術館', dates: 'Apr 1–6' },
  { year: '2024', event: '韓國第15屆東亞書畫交流大展暨第8屆大韓民國青年作家選定展', venue: '大邱文化藝術會館, Korea', dates: 'Nov 5–10' },
];

const domestic = [
  { year: '2027', event: '臺中市藝術家俱樂部第55週年年展', venue: '臺中市大墩文化中心', dates: 'Jan 30 – Feb 17' },
  { year: '2026', event: '第14屆國立中興大學教職員工暨眷屬藝展', venue: '國立中興大學藝術中心', dates: 'Oct 12–30' },
  { year: '2026', event: '中華民國書學會-中部地區聯誼會丙午年會員聯展', venue: '彰化八卦山大佛藝廊', dates: 'Sep 2–29' },
  { year: '2026', event: '中華民國書學會-乙巳台灣書法年展', venue: '基隆美術館', dates: 'Sep 2–20' },
  { year: '2026', event: '115年中國書法學會彰化縣會員暨本會名家作品展', venue: '彰化縣立美術館', dates: 'Sep 1–20' },
  { year: '2026', event: '中華民國書學會-丙午年會員書法展', venue: '淡水文化園區殼牌倉庫', dates: 'Jul 16–29' },
  { year: '2026', event: '筆墨同行2026臺中市書法學會會員聯展暨全國名家邀請展', venue: '逢甲大學游翰堂漢字文化中心', dates: 'Jul 3 – Aug 30' },
  { year: '2026', event: '第32屆國際書法聯盟作品展', venue: '台南客家文化會館', dates: 'Jun 12–17' },
  { year: '2026', event: '台灣中國書法學會-「馳馬翫墨」會員暨國際名家書法聯展', venue: '台南新營文化藝術中心', dates: 'May 1–17' },
  { year: '2026', event: '2026中華民國書法教育學會會員聯展「藝情墨韻」', venue: '國立臺灣藝術教育館', dates: 'Mar 11–18' },
  { year: '2026', event: '臺中藝術家俱樂部第54週年會員聯展', venue: '臺中市大墩文化中心', dates: 'Jan 17–28' },
  { year: '2025', event: '2025臺灣國際書法彩墨畫聯展', venue: '臺中市屯區藝文中心', dates: 'Dec 6 – Jan 4' },
  { year: '2025', event: '中華民國書學會-甲辰台灣書法年展', venue: '臺中市屯區藝文中心', dates: 'Nov 15 – Dec 7' },
  { year: '2025', event: '中華民國書學會-中部聯誼會會員聯展「筆歌墨舞」', venue: '彰化八卦山大佛藝廊', dates: 'Sep 2–28' },
  { year: '2025', event: '「動物花鳥之美」國際動保藝術名家交流展', venue: '桃園市展演中心', dates: 'Aug 28 – Sep 14' },
  { year: '2025', event: '中華民國書學會-乙巳年會員書法展', venue: '彰化八卦山大佛藝廊', dates: 'Aug 1–31' },
  { year: '2025', event: '114年中華民國書學會聯誼會師生聯展「人書俱老」', venue: '淡江大學文錙藝術中心', dates: 'Jul 23 – Aug 27' },
  { year: '2025', event: '2025臺中書法學會會員作品聯展', venue: '臺中市屯區藝文中心', dates: 'Jul 19 – Aug 17' },
  { year: '2025', event: '「與風景對話」台日藝術家交流展-台灣站', venue: '桃園隱藝術畫廊', dates: 'Jun 18 – Jul 13' },
  { year: '2025', event: '「翰墨華章」第一屆兩岸三地藝術家交流展', venue: '臺中市屯區藝文中心', dates: 'Jun 14 – Jul 13' },
  { year: '2025', event: '台灣書法學會會員聯展', venue: '高雄市議會', dates: 'May 11–28' },
  { year: '2025', event: '臺中藝術家俱樂部第53週年會員聯展', venue: '臺中市大墩文化中心', dates: 'Feb 8–19' },
  { year: '2025', event: '雲林縣藝文學會會員聯展', venue: '雲林縣文化觀光處', dates: 'Jan 9–23' },
  { year: '2024', event: '2024台灣國際書法彩墨畫聯展', venue: '臺中市屯區藝文中心', dates: 'Nov 16 – Dec 10' },
  { year: '2024', event: '中華民國書學會-中部聯誼會甲辰龍年會員聯展', venue: '彰化八卦山大佛藝廊', dates: 'Nov 1–29' },
  { year: '2024', event: '東方美韻臺中一中媽聯會水墨社團聯展', venue: '臺中市大墩文化中心', dates: 'Oct 12–30' },
  { year: '2024', event: '2024臺中書法學會會員作品聯展', venue: '臺中市港區藝術中心', dates: 'Sep 14 – Oct 13' },
  { year: '2024', event: '中華民國書學會-甲辰新春開筆大會暨癸卯台灣書法聯展', venue: '桃園市展演中心', dates: 'May 8–19' },
  { year: '2023', event: '東方美韻彩墨創作藝術聯展', venue: '臺中一中藝術中心', dates: 'May 12 – Jun 2' },
  { year: '2023', event: '第13屆國立中興大學教職員工暨眷屬藝展', venue: '國立中興大學藝術中心', dates: 'Mar 8–29' },
];

function TimelineItem({ item, index, visible }) {
  return (
    <div
      className="timeline-item relative pl-6"
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0)' : 'translateY(20px)',
        transition: `opacity 0.5s ease ${index * 0.05}s, transform 0.5s ease ${index * 0.05}s`,
      }}
    >
      <div className="flex items-start gap-4 py-4 border-b border-border border-opacity-30">
        <span className="text-ochre text-xs tracking-widest font-mono w-10 flex-shrink-0 pt-0.5">{item.year}</span>
        <div className="flex-1 min-w-0">
          <p className="text-canvas text-sm leading-snug">{item.event}</p>
          <p className="text-muted-foreground text-xs mt-1">{item.venue}</p>
        </div>
        <span className="text-muted-foreground text-xs tracking-wider flex-shrink-0 hidden sm:block">{item.dates}</span>
      </div>
    </div>
  );
}

export default function ExhibitionsSection() {
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

  const items = tab === 'international' ? international : domestic;

  return (
    <section id="exhibitions" ref={ref} className="stratum py-24 md:py-40 px-8 md:px-16" style={{ background: '#121212' }}>
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">

          {/* Label */}
          <div className="lg:col-span-3">
            <p className="text-ochre text-xs tracking-[0.4em] uppercase font-body mb-4">Exhibitions</p>
            <div className="w-12 h-px bg-ochre mb-6" />
            <h2 className="font-heading text-canvas mb-2" style={{ fontSize: 'clamp(1.75rem, 3vw, 3rem)', lineHeight: '0.95' }}>
              The Living<br />Archive
            </h2>
            <p className="text-muted-foreground text-xs leading-relaxed mt-6">
              45+ exhibitions across Taiwan, Japan, and Korea since 2023.
            </p>

            {/* Toggle */}
            <div className="mt-10 flex flex-col gap-2">
              <button
                onClick={() => setTab('international')}
                className={`text-left text-xs tracking-widest uppercase py-2 border-b transition-colors ${tab === 'international' ? 'text-ochre border-ochre' : 'text-muted-foreground border-border hover:text-canvas'}`}
              >
                International ↗
              </button>
              <button
                onClick={() => setTab('domestic')}
                className={`text-left text-xs tracking-widest uppercase py-2 border-b transition-colors ${tab === 'domestic' ? 'text-ochre border-ochre' : 'text-muted-foreground border-border hover:text-canvas'}`}
              >
                Taiwan ↗
              </button>
            </div>
          </div>

          {/* Timeline */}
          <div className="lg:col-span-9">
            <div className="space-y-0">
              {items.map((item, i) => (
                <TimelineItem key={`${item.year}-${item.event}`} item={item} index={i} visible={visible} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}