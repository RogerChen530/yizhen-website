import { useEffect, useRef, useState } from 'react';

export default function AboutSection() {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.15 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" ref={ref} className="stratum py-24 md:py-40 px-8 md:px-16" style={{ background: '#121212' }}>
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-start">

          {/* Left: Label */}
          <div className="lg:col-span-3">
            <p className="text-ochre text-xs tracking-[0.4em] uppercase font-body mb-4">The Artist</p>
            <div className="w-12 h-px bg-ochre mb-6" />
            <p className="text-muted-foreground text-xs tracking-widest">藝術家</p>
          </div>

          {/* Right: Content */}
          <div className={`lg:col-span-9 transition-all duration-1000 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <h2 className="font-heading text-canvas mb-10" style={{ fontSize: 'clamp(2.5rem, 6vw, 5rem)', lineHeight: '0.9' }}>
              廖純沂<br />
              <em className="opacity-60" style={{ fontSize: '0.6em' }}>以真 · Chun-Yi Liau · リョウ・ジュンイ</em>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-16">
              <div>
                <p className="text-canvas leading-relaxed text-lg">
                  A scientist by training and an artist by conviction, Chun-Yi Liau bridges the precision of protein chemistry with the fluid discipline of East Asian brushwork. Holding a PhD in Medical Research from Chung Shan Medical University, she brings an analytical rigor to every stroke—treating calligraphy, ink painting, and seal carving not as recreation, but as a second language of inquiry.
                </p>
              </div>
              <div>
                <p className="text-canvas opacity-70 leading-relaxed">
                  她於2021年開始書畫篆刻的研習，短短數年間已在台灣、日本、韓國等地的重要展覽中嶄露頭角。以科學家的嚴謹與藝術家的感性，她的作品融合了傳統筆墨的深度與現代視野的廣度。
                </p>
                <p className="text-canvas opacity-70 leading-relaxed mt-4">
                  Beginning her artistic journey in 2021, she has rapidly established an international presence, exhibiting at premier venues including the National Art Center Tokyo, Osaka City Museum of Fine Arts, and Kyoto City KYOCERA Museum of Art.
                </p>
              </div>
              <div>
                <p className="text-canvas opacity-70 leading-relaxed">
                  科学者としての訓練を積み、芸術家としての信念を貫く廖純沂は、蛋白質化学の精密さと東アジア書画の流麗な技法を結びつける。中山医学大学で医学研究の博士号を取得した彼女は、一筆一筆に分析的な厳密さを込め、書道・水墨画・篆刻を単なる趣味ではなく、探究のためのもう一つの言語として捉えている。
                </p>
                <p className="text-canvas opacity-70 leading-relaxed mt-4">
                  2021年に書画篆刻の研鑽を始めて以来、わずか数年で台湾・日本・韓国など各地の重要な展覧会で頭角を現し、国際的な存在感を確立してきた。国立新美術館（東京）、大阪市立美術館、京都市京セラ美術館をはじめとする一流の会場で作品を発表している。
                </p>
              </div>
            </div>

            {/* Academic & Art credentials */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-12 border-t border-border">
              <div>
                <p className="text-ochre text-xs tracking-widest uppercase mb-4 font-body">Academic</p>
                <ul className="space-y-3">
                  {[
                    { main: 'PhD · Medical Research, Chung Shan Medical University', ja: '中山醫學大學 醫學研究 博士' },
                    { main: 'MSc · Chemical Engineering, Tatung University', ja: '大同大學 化學工學 碩士' },
                    { main: 'Science Ambassador, National Museum of Natural Science', ja: '國立自然科學博物館 サイエンスアンバサダー' },
                  ].map(item => (
                    <li key={item.main} className="border-l border-border pl-4">
                      <p className="text-canvas opacity-70 text-sm leading-snug">{item.main}</p>
                      <p className="text-muted-foreground text-xs leading-snug mt-1">{item.ja}</p>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <p className="text-ochre text-xs tracking-widest uppercase mb-4 font-body">Disciplines</p>
                <ul className="space-y-3">
                  {[
                    { main: '書法 — Calligraphy', ja: '書道' },
                    { main: '水墨 — Ink Painting', ja: '水墨画' },
                    { main: '篆刻 — Seal Carving', ja: '篆刻' },
                  ].map(item => (
                    <li key={item.main} className="border-l border-border pl-4">
                      <p className="text-canvas opacity-70 text-sm">{item.main}</p>
                      <p className="text-muted-foreground text-xs mt-1">{item.ja}</p>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <p className="text-ochre text-xs tracking-widest uppercase mb-4 font-body">Memberships</p>
                <ul className="space-y-3">
                  {[
                    { main: '台灣書法年展 · Juried Selection', ja: '台湾書法年展・入選' },
                    { main: '中華民國書學會 · Permanent Member', ja: '中華民国書学会・終身会員' },
                    { main: '臺中藝術家俱樂部', ja: '台中アーティストクラブ' },
                    { main: '台灣書法學會', ja: '台湾書法学会' },
                  ].map(item => (
                    <li key={item.main} className="border-l border-border pl-4">
                      <p className="text-canvas opacity-70 text-sm">{item.main}</p>
                      <p className="text-muted-foreground text-xs mt-1">{item.ja}</p>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}