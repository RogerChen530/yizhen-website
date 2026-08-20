import { useEffect, useRef, useState } from 'react';

const bioText = {
  zh: [
    '廖純沂是一位科學藝術家——以科學家的訓練為根基，投身書法、水墨與篆刻創作。她擁有中山醫學大學醫學研究博士學位，長年從事生物工程與蛋白質化學研究。對她而言，科學與藝術並非兩種身分，而是理解世界的兩種語言。',
    '2021年，她開始系統性研習書法、水墨與篆刻，並迅速在台灣、日本、韓國等地展出，入選日本每日書道展、產經國際書展、現展（GENTEN）等公募展，作品曾於東京國立新美術館、大阪市立美術館、京都市京瓷美術館展出。她的創作，是科學家的觀察與藝術家的直覺並行而存的視覺語言。',
  ],
  en: [
    'Chun-Yi Liau is a scientist-artist — grounded in scientific training, devoted to calligraphy, ink painting, and seal carving. She holds a PhD in Medical Research from Chung Shan Medical University and has spent years researching bioengineering and protein chemistry. To her, science and art are not two separate identities, but two languages for understanding the world.',
    'In 2021, she began systematic study of calligraphy, ink painting, and seal carving, and quickly exhibited across Taiwan, Japan, and Korea — selected for Japan\'s Mainichi Shodo Exhibition, the Sankei International Calligraphy Exhibition, and GENTEN, among other juried shows, with work shown at the National Art Center Tokyo, Osaka City Museum of Fine Arts, and Kyoto City KYOCERA Museum of Art. Her practice is a visual language where a scientist\'s observation and an artist\'s intuition move as one.',
  ],
  ja: [
    '廖純沂は科学者としての訓練を礎とし、書道・水墨画・篆刻に取り組む「科学芸術家」である。中山医学大学で医学研究の博士号を取得し、長年にわたり生物工学と蛋白質化学の研究に従事してきた。彼女にとって科学と芸術は別々の顔ではなく、世界を理解するための二つの言語である。',
    '2021年、書道・水墨画・篆刻の体系的な研鑽を開始し、台湾・日本・韓国で作品を発表。日本每日書道展、産経国際書展、現展（GENTEN）などの公募展に入選し、国立東京新美術館、大阪市立美術館、京都市京セラ美術館などで作品を展示してきた。彼女の創作は、科学者の観察眼と芸術家の直感が並び立つ、一つの視覚言語である。',
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

const fullBio = {
  zh: [
    '廖純沂（以真）是一位具有科學研究與高等教育背景，從事書法、水墨與篆刻創作的臺灣藝術家。擁有中山醫學大學醫學研究博士學位，長年從事生物工程、蛋白質化學相關研究與大學教育。對她而言，科學與藝術並非彼此分離的身分，而是觀察、理解與探索世界的不同方式。',
    '2021年起，她開始系統性研習書法、水墨與篆刻，並投入藝術創作。她以東亞傳統筆墨為根基，在彼此關聯而又各自發展的創作路徑中持續探索。書法創作從篆書、隸書等古典書體出發，逐漸延伸至文字結構的拆解、重組與抽象化；水墨創作則著重筆、墨與水所產生的變化，以及形象與空間之間的關係，在具象描繪與更自由的墨色表現之間尋找可能；篆刻則進一步探索線條、結構、留白，以及文字與造形之間的關係。',
    '在不同的創作形式中，她持續關注墨色的濃淡變化、筆勢與節奏、空間關係，以及結構與偶發性之間所形成的張力。科學訓練所培養的觀察與分析習慣，與藝術創作中的直覺、感受及不可預期的變化，在她的創作歷程中並行而存。書法、水墨與篆刻對她而言，不只是傳統技法的研習，更是觀看自然與自我、思考秩序與變化的一種視覺語言。',
    '自投入創作以來，她的作品陸續於臺灣、日本及韓國展出，並入選日本每日書道展、產經國際書展、現展（GENTEN）、NAU21世紀美術連立展等公募展。作品曾於東京國立新美術館、東京都美術館、大阪市立美術館、京都市京瓷美術館等場館展出。她持續在書法與水墨的多元創作之間，尋找一種植基於傳統、同時向當代表現開放的個人藝術語彙。',
  ],
  en: [
    'Chun-Yi Liau (Yi-Zhen) is a Taiwanese artist working in calligraphy, ink painting, and seal carving, with a background in scientific research and higher education. She holds a PhD in Medical Research from Chung Shan Medical University and has spent many years in bioengineering and protein chemistry research, as well as university teaching. To her, science and art are not separate identities, but different ways of observing, understanding, and exploring the world.',
    'Since 2021, she has undertaken systematic study of calligraphy, ink painting, and seal carving, devoting herself to artistic creation. Grounded in the traditions of East Asian brush and ink, she continues to explore three interrelated yet independently evolving paths. Her calligraphy begins with classical scripts such as seal script and clerical script, gradually extending toward the deconstruction, recombination, and abstraction of character structure; her ink painting focuses on the transformations produced by brush, ink, and water, and the relationship between image and space, seeking possibilities between representational depiction and freer expressions of ink tonality; her seal carving further explores line, structure, negative space, and the relationship between text and form.',
    'Across these different forms of creation, she remains attentive to the gradations of ink tone, the momentum and rhythm of the brush, spatial relationships, and the tension between structure and chance. The habits of observation and analysis cultivated by her scientific training coexist, in her creative process, with the intuition, sensation, and unpredictable change inherent to artistic creation. For her, calligraphy, ink painting, and seal carving are not merely the study of traditional techniques, but a visual language for observing nature and self, and for reflecting on order and change.',
    'Since devoting herself to artistic creation, her work has been exhibited in Taiwan, Japan, and Korea, and selected for juried exhibitions including Japan\'s Mainichi Shodo Exhibition, the Sankei International Calligraphy Exhibition, GENTEN, and the NAU 21st Century Art Federation Exhibition, among others. Her work has been shown at venues including the National Art Center Tokyo, the Tokyo Metropolitan Art Museum, Osaka City Museum of Fine Arts, and Kyoto City KYOCERA Museum of Art. She continues to search, across her diverse practice in calligraphy and ink painting, for a personal artistic vocabulary rooted in tradition while remaining open to contemporary expression.',
  ],
  ja: [
    '廖純沂（以真）は、科学研究と高等教育の背景を持ち、書道・水墨画・篆刻の創作に取り組む台湾の芸術家である。中山医学大学で医学研究の博士号を取得し、長年にわたり生物工学・蛋白質化学に関する研究と大学教育に従事してきた。彼女にとって科学と芸術は互いに切り離された身分ではなく、世界を観察し、理解し、探求するための異なる方法である。',
    '2021年より、書道・水墨画・篆刻の体系的な研鑽を始め、芸術創作に取り組んできた。東アジアの伝統的な筆墨を基盤としながら、互いに関連しつつもそれぞれ独自に発展する創作の道を探求し続けている。書道は篆書・隷書などの古典書体を出発点とし、次第に文字構造の分解・再構成・抽象化へと展開している。水墨画では筆・墨・水がもたらす変化や、形象と空間の関係に着目し、具象的な描写とより自由な墨色表現との間で可能性を探っている。篆刻はさらに、線・構造・余白、そして文字と造形の関係を探求するものである。',
    'これらの異なる創作形式において、彼女は墨色の濃淡の変化、筆勢とリズム、空間関係、そして構造と偶発性の間に生まれる緊張感に絶えず注意を払っている。科学的訓練によって培われた観察と分析の習慣は、芸術創作における直感・感覚・予測不可能な変化と、彼女の創作過程の中で並存している。書道・水墨画・篆刻は彼女にとって、伝統技法の習得にとどまらず、自然と自己を見つめ、秩序と変化について思考するための視覚言語でもある。',
    '創作に取り組んで以来、その作品は台湾・日本・韓国で展示され、日本每日書道展、産経国際書展、現展（GENTEN）、NAU21世紀美術連立展など公募展に入選してきた。作品は国立新美術館（東京）、東京都美術館、大阪市立美術館、京都市京セラ美術館などの会場で展示されている。彼女は書道と水墨画という多様な創作の間で、伝統に根ざしながらも現代的表現に開かれた、個人的な芸術的語彙を探求し続けている。',
  ],
};

const fullBioTagLabel = { zh: '完整藝術家介紹 →', en: 'Full Biography →', ja: '詳しいプロフィール →' };

function BioModal({ lang, onClose }) {
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    const handleKey = (e) => { if (e.key === 'Escape') onClose(); };
    window.addEventListener('keydown', handleKey);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKey);
    };
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center px-4 py-8 md:px-12"
      style={{ background: 'rgba(10, 9, 8, 0.96)' }}
      onClick={onClose}
    >
      <button
        onClick={onClose}
        aria-label="Close"
        className="absolute top-6 right-6 md:top-8 md:right-8 text-canvas opacity-60 hover:opacity-100 transition-opacity text-3xl leading-none z-10"
      >
        ×
      </button>

      <div
        className="max-w-3xl w-full max-h-[85vh] overflow-y-auto border border-border p-8 md:p-14"
        style={{ background: '#121212' }}
        onClick={(e) => e.stopPropagation()}
      >
        <p className="text-ochre text-xs tracking-widest uppercase mb-3 font-body">Artist Biography</p>
        <h3 className="font-heading text-canvas mb-8" style={{ fontSize: 'clamp(1.5rem, 3vw, 2.25rem)' }}>
          廖純沂（以真）
        </h3>
        <div className="space-y-6">
          {fullBio[lang].map((para, i) => (
            <p key={i} className={`text-canvas opacity-80 leading-relaxed ${lang === 'en' ? 'text-lg' : ''}`}>{para}</p>
          ))}
        </div>
      </div>
    </div>
  );
}

const langLabels = { zh: '中', en: 'EN', ja: '日' };

export default function AboutSection() {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  const [lang, setLang] = useState('zh');
  const [showBio, setShowBio] = useState(false);

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
                <button
                  onClick={() => setShowBio(true)}
                  className="inline-block mt-6 text-xs text-ochre border border-ochre border-opacity-30 px-3 py-1 tracking-widest uppercase font-body hover:bg-ochre hover:bg-opacity-10 transition-colors"
                >
                  {fullBioTagLabel[lang]}
                </button>
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
      {showBio && <BioModal lang={lang} onClose={() => setShowBio(false)} />}
    </section>
  );
}