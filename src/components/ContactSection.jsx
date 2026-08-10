import { useState } from 'react';
import { Send } from 'lucide-react';

export default function ContactSection() {
  const [submitted, setSubmitted] = useState(false);
  const [drying, setDrying] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    setDrying(true);
    setTimeout(() => setSubmitted(true), 800);
  };

  if (submitted) {
    return (
      <section id="contact" className="stratum min-h-screen flex items-center justify-center px-8 md:px-16 py-24" style={{ background: '#121212' }}>
        <div className="text-center max-w-lg" style={{ animation: 'fadeIn 1.2s ease forwards' }}>
          <div className="w-16 h-px bg-ochre mx-auto mb-8" />
          <p className="text-ochre text-xs tracking-[0.4em] uppercase font-body mb-6">Message Received</p>
          <h3 className="font-heading text-canvas mb-6" style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)', lineHeight: '0.9' }}>
            謝謝您<br /><em className="opacity-60" style={{ fontSize: '0.65em' }}>Thank You</em>
          </h3>
          <p className="text-canvas opacity-70 text-lg leading-relaxed mb-8">
            Your inquiry has been received. Chun-Yi will respond with care — as she would to every brushstroke.
          </p>
          <div className="w-16 h-px bg-ochre mx-auto" />
        </div>
      </section>
    );
  }

  return (
    <section id="contact" className="stratum py-24 md:py-40 px-8 md:px-16" style={{ background: '#121212' }}>
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">

          {/* Left */}
          <div className="lg:col-span-4">
            <p className="text-ochre text-xs tracking-[0.4em] uppercase font-body mb-4">The Artist's Ledger</p>
            <div className="w-12 h-px bg-ochre mb-8" />
            <h2 className="font-heading text-canvas mb-8" style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)', lineHeight: '0.9' }}>
              Begin a<br />Conversation
            </h2>
            <p className="text-canvas opacity-60 leading-relaxed mb-10">
              Whether you are a collector, curator, or fellow artist — every dialogue is a collaboration. Use this ledger to open yours.
            </p>
            <p className="text-canvas opacity-40 leading-relaxed text-sm">
              聯絡藝術家，無論您是收藏家、策展人或藝術同好，每一次對話都是一次創作的開始。
            </p>
          </div>

          {/* Right: Form */}
          <div className={`lg:col-span-8 transition-opacity duration-700 ${drying ? 'opacity-0' : 'opacity-100'}`}>
            <form onSubmit={handleSubmit} className="space-y-10">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                <div>
                  <label className="text-muted-foreground text-xs tracking-[0.2em] uppercase block mb-2">Name · 姓名</label>
                  <input
                    type="text"
                    required
                    className="ledger-input"
                    placeholder="Your full name"
                    value={form.name}
                    onChange={e => setForm(f => ({ ...f, name: e.target.value }))}
                  />
                </div>
                <div>
                  <label className="text-muted-foreground text-xs tracking-[0.2em] uppercase block mb-2">Email · 電郵</label>
                  <input
                    type="email"
                    required
                    className="ledger-input"
                    placeholder="your@email.com"
                    value={form.email}
                    onChange={e => setForm(f => ({ ...f, email: e.target.value }))}
                  />
                </div>
              </div>
              <div>
                <label className="text-muted-foreground text-xs tracking-[0.2em] uppercase block mb-2">Subject · 主旨</label>
                <input
                  type="text"
                  className="ledger-input"
                  placeholder="Inquiry / Commission / Collaboration"
                  value={form.subject}
                  onChange={e => setForm(f => ({ ...f, subject: e.target.value }))}
                />
              </div>
              <div>
                <label className="text-muted-foreground text-xs tracking-[0.2em] uppercase block mb-2">Message · 訊息</label>
                <textarea
                  required
                  rows={5}
                  className="ledger-input resize-none"
                  placeholder="Describe your inquiry..."
                  value={form.message}
                  onChange={e => setForm(f => ({ ...f, message: e.target.value }))}
                />
              </div>
              <div className="flex items-center justify-between pt-4 border-t border-border">
                <p className="text-muted-foreground text-xs tracking-widest">All inquiries answered personally.</p>
                <button
                  type="submit"
                  className="flex items-center gap-3 bg-ochre text-charcoal px-8 py-4 text-xs tracking-[0.2em] uppercase font-body hover:bg-canvas transition-colors group"
                >
                  <span>Send Inquiry</span>
                  <Send size={14} className="group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}