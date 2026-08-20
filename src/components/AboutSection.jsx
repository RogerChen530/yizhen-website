import { useEffect, useRef, useState } from 'react';

const bioText = {
  zh: [
    '廖純沂是一位以科學家身分受訓、卻以藝術家信念創作的實踐者，她將蛋白質化學的精密思維與東亞書畫的流動筆法相互交融。擁有中山醫學大學醫學研究博士學位的她，將分析式的嚴謹注入每一筆之中——書法、水墨、篆刻，於她而言並非消遣，而是探究世界的另一種語言。',
    '她於2021年開始書畫篆刻的研習，短短數年間已在台灣、日本、韓國等地的重要展覽中嶄露頭角。以科學家的嚴謹與藝術家的感性，她的作品融合了傳統筆墨的深度與現代視野的廣度。',
    '自2021年投入創作以來，她迅速建立起國際能見度，作品陸續於東京國立新美術館、大阪市立美術館、京都市京瓷美術館等重要場館展出。',
  ],
  en: [
    'A scientist by training and an artist by conviction, Chun-Yi Liau bridges the precision of protein chemistry with the fluid discipline of East Asian brushwork. Holding a PhD in Medical Research from Chung Shan Medical University, she brings an analytical rigor to every stroke—treating calligraphy, ink painting, and seal carving not as recreation, but as a second language of inquiry.',
    'Beginning her artistic journey in 2021, she has rapidly established an international presence, exhibiting at premier venues including the National Art Center Tokyo, Osaka City Museum of Fine Arts, and Kyoto City KYOCERA Museum of Art.',
  ],
  ja: [
    '科学者としての訓練を積み、芸術家としての信念を貫く廖純沂は、蛋白質化学の精密さと東アジア書画の流麗な技法を結びつける。中山医学大学で医学研究の博士号を取得した彼女は、一筆一筆に分析的な厳密さを込め、書道・水墨画・篆刻を単なる趣味ではなく、探究のためのもう一つの言語として捉えている。',
    '2021年に書画篆刻の研鑽を始めて以来、わずか数年で台湾・日本・韓国など各地の重要な展覧会で頭角を現し、国際的な存在感を確立してきた。国立新美術館（東京）、大阪市立美術館、京都市京セラ美術館をはじめとする一流の会場で作品を発表している。',
  ],
};

const credentials = {
  zh: {
    labels: { academic: '學歷', positions: '曾任', disciplines: '專擅', memberships: '社團經歷' },
    academic: ['中山醫學大學 醫學研究所 博士', '大同工學院 化學工程學系 碩士', '國立自然科學博物館 科學大使', '台灣書法年展 免審'],
    positions: ['臺中科技大學 美容系 兼任助理教授', '中興大學 兼任助理教授', '大同大學 通識中心 兼任助理教授', '大同大學 生物工程學系 助理教授'],
    disciplines: ['書法', '水墨', '篆刻'],
    memberships: ['台灣生物化學及分子生物學學會（永久會員）', '台灣化學工程學會（永久會員）', '台灣化學學會（永久會員）', '中華民國書學會（永久會員）', '台灣書法學會', '台灣中國書法學會', '臺中市書法學會', '臺中藝術家俱樂部', '雲林縣藝文學會', '中華民國書法教育學會'],
  },
  en: {
    labels: { academic: 'Academic', positions: 'Prior Positions', disciplines: 'Disciplines', memberships: 'Societies & Memberships' },
    academic: ['PhD, Medical Research — Chung Shan Medical University', 'MSc, Chemical Engineering — Tatung Institute of Technology', 'Science Ambassador — National Museum of Natural Science', 'Exempt-Review Status — Taiwan Calligraphy Annual Exhibition'],
    positions: ['Adjunct Assistant Professor, Dept. of Cosmetic Science — Taichung University of Science and Technology', 'Adjunct Assistant Professor — National Chung Hsing University', 'Adjunct Assistant Professor, General Education Center — Tatung University', 'Assistant Professor, Dept. of Bioengineering — Tatung University'],
    disciplines: ['Calligraphy', 'Ink Painting', 'Seal Carving'],
    memberships: ['Taiwan Society of Biochemistry and Molecular Biology (Permanent Member)', 'Taiwan Institute of Chemical Engineers (Permanent Member)', 'Chemical Society of Taiwan (Permanent Member)', 'Calligraphy Society of the R.O.C. (Permanent Member)', 'Taiwan Calligraphy Society', 'Taiwan Chinese Calligraphy Society', 'Taichung Calligraphy Society', 'Taichung Artists Club', 'Yunlin County Literary and Art Society', 'Calligraphy Education Society of the R.O.C.'],
  },
  ja: {
    labels: { academic: '学歴', positions: '前職', disciplines: '専門', memberships: '所属学会・団体' },
    academic: ['中山医学大学 医学研究科 博士', '大同工学院 化学工学科 修士', '国立自然科学博物館 サイエンスアンバサダー', '台湾書法年展 審査免除'],
    positions: ['台中科技大学 美容学科 兼任助理教授', '中興大学 兼任助理教授', '大同大学 教養教育センター 兼任助理教授', '大同大学 生物工学科 助理教授'],
    disciplines: ['書道', '水墨画', '篆刻'],
    memberships: ['台湾生化学・分子生物学会（終身会員）', '台湾化学工学会（終身会員）', '台湾化学会（終身会員）', '中華民国書学会（終身会員）', '台湾書法学会', '台湾中国書法学会', '台中市書法学会', '台中アーティストクラブ', '雲林県文芸学会', '中華民国書法教育学会'],
  },
};

const langLabels = { zh: '中', en: 'EN', ja: '日' };

export default function AboutSection() {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  const [lang, setLang] = useState('zh');

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

            {/* Language toggle */}
            <div className="flex items-center gap-2 mb-8">
              {Object.keys(langLabels).map((key) => (
                <button
                  key={key}
                  onClick={() => setLang(key)}
                  className={`text-xs tracking-widest uppercase px-4 py-2 border transition-colors font-body ${
                    lang === key
                      ? 'border-ochre text-ochre bg-ochre bg-opacity-10'
                      : 'border-border text-muted-foreground hover:text-canvas hover:border-canvas'
                  }`}
                >
                  {langLabels[key]}
                </button>
              ))}
            </div>

            {/* Profile / Journey split panel */}
            <div className="grid grid-cols-1 md:grid-cols-2 border border-border">
              {/* Profile */}
              <div className="p-8 md:p-10 md:border-r border-border">
                <p className="text-ochre text-xs tracking-widest uppercase mb-5 font-body">Profile</p>
                {bioText[lang].map((para, i) => (
                  <p key={i} className={`text-canvas leading-relaxed ${i === 0 ? '' : 'mt-4'} ${lang === 'en' ? 'text-lg' : ''}`}>
                    {para}
                  </p>
                ))}
              </div>

              {/* Journey */}
              <div className="p-8 md:p-10 border-t md:border-t-0 border-border">
                <p className="text-ochre text-xs tracking-widest uppercase mb-5 font-body">Journey</p>
                <div className="space-y-8">
                  <div>
                    <p className="text-muted-foreground text-xs tracking-widest uppercase mb-3 font-body">{credentials[lang].labels.academic}</p>
                    <ul className="space-y-2">
                      {credentials[lang].academic.map(item => (
                        <li key={item} className="text-canvas opacity-70 text-sm leading-snug border-l border-border pl-4">{item}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <p className="text-muted-foreground text-xs tracking-widest uppercase mb-3 font-body">{credentials[lang].labels.positions}</p>
                    <ul className="space-y-2">
                      {credentials[lang].positions.map(item => (
                        <li key={item} className="text-canvas opacity-70 text-sm leading-snug border-l border-border pl-4">{item}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <p className="text-muted-foreground text-xs tracking-widest uppercase mb-3 font-body">{credentials[lang].labels.disciplines}</p>
                    <ul className="space-y-2">
                      {credentials[lang].disciplines.map(item => (
                        <li key={item} className="text-canvas opacity-70 text-sm border-l border-border pl-4">{item}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <p className="text-muted-foreground text-xs tracking-widest uppercase mb-3 font-body">{credentials[lang].labels.memberships}</p>
                    <ul className="space-y-2">
                      {credentials[lang].memberships.map(item => (
                        <li key={item} className="text-canvas opacity-70 text-sm leading-snug border-l border-border pl-4">{item}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}