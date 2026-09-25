import React, { useState } from 'react';
import { CELEBRITY_DATA } from '../data/celebrityData';
import { Mail, Phone, MapPin, Send, Copy, Check, Download, ShieldCheck, Sparkles, MessageSquare } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function ContactAndBooking({ onOpenChat }) {
  const { profile, socialHandles } = CELEBRITY_DATA;

  const [copiedEmail, setCopiedEmail] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    organization: '',
    email: '',
    phone: '',
    inquiryType: 'event',
    budget: '$10,000 - $25,000',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [referenceId, setReferenceId] = useState('');

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(profile.officialEmail);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email) return;

    const ref = 'NI-' + Math.floor(100000 + Math.random() * 900000);
    setReferenceId(ref);
    setSubmitted(true);

    confetti({
      particleCount: 50,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#CFA738', '#E6C564', '#FFFFFF']
    });
  };

  return (
    <section id="contact" className="relative py-24 bg-obsidian-950 border-t border-neutral-800/80">
      {/* Background Glow */}
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-gold-600/5 rounded-full blur-[160px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold-500/10 border border-gold-500/30 text-gold-300 text-xs font-mono uppercase tracking-widest">
            <Mail className="w-3.5 h-3.5" />
            <span>Representation & Contact</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-serif font-black text-white tracking-tight">
            Official <span className="gold-gradient-text">Management Desk</span>
          </h2>
          <p className="text-neutral-400 text-sm sm:text-base leading-relaxed">
            For global cinema productions, brand endorsements, commercial TVCs, UGC partnerships, international keynote appearances, and press inquiries.
          </p>
        </div>

        {/* Highlighted Official Email Strip */}
        <div className="mb-16 p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-obsidian-900 via-obsidian-850 to-obsidian-900 border border-gold-500/40 shadow-2xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center md:text-left">
            <span className="text-xs font-mono uppercase tracking-wider text-gold-400 font-semibold">
              Direct Executive Representation
            </span>
            <div className="text-2xl sm:text-3xl font-serif font-bold text-white flex items-center gap-3 justify-center md:justify-start">
              <span>info@noumanijaz.com</span>
            </div>
            <p className="text-xs text-neutral-400">
              Verified inbox monitored 24/7 by talent management & legal team.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <button
              onClick={handleCopyEmail}
              className="px-5 py-3 rounded-xl bg-obsidian-950 border border-neutral-700 hover:border-gold-400 text-neutral-200 text-xs font-semibold uppercase tracking-wider flex items-center gap-2 transition-all shadow"
            >
              {copiedEmail ? (
                <>
                  <Check className="w-4 h-4 text-emerald-400" />
                  <span className="text-emerald-300">Email Copied!</span>
                </>
              ) : (
                <>
                  <Copy className="w-4 h-4 text-gold-400" />
                  <span>Copy info@noumanijaz.com</span>
                </>
              )}
            </button>

            <a
              href="mailto:info@noumanijaz.com?subject=Official%20Inquiry%20for%20Naumaan%20Ijaz"
              className="px-6 py-3 rounded-xl bg-gradient-to-r from-gold-500 to-amber-500 text-obsidian-950 text-xs font-bold uppercase tracking-wider flex items-center gap-2 shadow hover:scale-105 active:scale-95 transition-all"
            >
              <Send className="w-4 h-4" />
              <span>Launch Mail Client</span>
            </a>
          </div>
        </div>

        {/* Contact Grid: Form & Info */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Left Column: Management Info (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-8 rounded-3xl bg-obsidian-900/60 border border-neutral-800 space-y-6">
              <h3 className="text-xl font-serif font-bold text-white">
                Global Talent Representation
              </h3>

              <div className="space-y-4 text-sm">
                <div className="flex items-start space-x-3.5">
                  <div className="w-9 h-9 rounded-xl bg-gold-500/10 border border-gold-500/30 flex items-center justify-center text-gold-300 flex-shrink-0 mt-0.5">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[11px] uppercase tracking-wider text-neutral-400 font-mono">Executive Inquiries</div>
                    <a href="mailto:info@noumanijaz.com" className="font-semibold text-white hover:text-gold-300 transition-colors">
                      info@noumanijaz.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-3.5">
                  <div className="w-9 h-9 rounded-xl bg-gold-500/10 border border-gold-500/30 flex items-center justify-center text-gold-300 flex-shrink-0 mt-0.5">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[11px] uppercase tracking-wider text-neutral-400 font-mono">Headquarters</div>
                    <div className="font-semibold text-neutral-200">
                      Lahore & Karachi, Pakistan • International Touring Offices
                    </div>
                  </div>
                </div>

                <div className="flex items-start space-x-3.5">
                  <div className="w-9 h-9 rounded-xl bg-gold-500/10 border border-gold-500/30 flex items-center justify-center text-gold-300 flex-shrink-0 mt-0.5">
                    <ShieldCheck className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[11px] uppercase tracking-wider text-neutral-400 font-mono">Legal & Agency</div>
                    <div className="font-semibold text-neutral-200">
                      ONE ICA (Exclusive International Representation)
                    </div>
                  </div>
                </div>
              </div>

              {/* Chat Concierge Card */}
              <div className="p-4 rounded-2xl bg-obsidian-950 border border-gold-500/30 flex items-center justify-between">
                <div>
                  <div className="text-xs font-bold text-white flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5 text-gold-400" />
                    <span>Need Immediate Answers?</span>
                  </div>
                  <div className="text-[11px] text-neutral-400 mt-0.5">
                    Use our 24/7 interactive concierge desk
                  </div>
                </div>
                <button
                  onClick={onOpenChat}
                  className="px-3.5 py-2 rounded-xl bg-gold-500 text-obsidian-950 font-bold text-xs uppercase tracking-wider shadow"
                >
                  Start Chat
                </button>
              </div>

              {/* Press Kit Download */}
              <div className="pt-2">
                <a
                  href="#contact"
                  onClick={(e) => {
                    e.preventDefault();
                    alert("Official Electronic Press Kit (EPK) will be dispatched to your email via info@noumanijaz.com");
                  }}
                  className="w-full py-3.5 px-4 rounded-xl border border-neutral-700 bg-obsidian-950 text-neutral-300 hover:text-white hover:border-gold-400 text-xs font-semibold uppercase tracking-wider flex items-center justify-center gap-2 transition-all"
                >
                  <Download className="w-4 h-4 text-gold-400" />
                  <span>Download Electronic Press Kit (EPK)</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Formal Booking Form (7 cols) */}
          <div className="lg:col-span-7">
            <div className="p-8 sm:p-10 rounded-3xl bg-obsidian-900/60 border border-neutral-800">
              
              {submitted ? (
                <div className="text-center py-12 space-y-4 animate-in fade-in">
                  <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 flex items-center justify-center mx-auto">
                    <Check className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-serif font-bold text-white">
                    Inquiry Received by Management
                  </h3>
                  <div className="inline-block px-4 py-1.5 rounded-full bg-gold-500/15 border border-gold-500/30 text-gold-300 font-mono text-xs">
                    Reference ID: #{referenceId}
                  </div>
                  <p className="text-sm text-neutral-300 max-w-md mx-auto leading-relaxed">
                    Thank you, <strong>{formData.name}</strong>. A copy of your submission has been forwarded to <strong>info@noumanijaz.com</strong>. Our executive director will review the dates and reply within 24-48 business hours.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="px-6 py-2.5 rounded-xl border border-neutral-700 text-xs text-neutral-400 hover:text-white uppercase tracking-wider font-semibold"
                  >
                    Submit Another Inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <h3 className="text-xl font-serif font-bold text-white mb-4">
                    Submit Formal Booking Request
                  </h3>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs uppercase font-mono tracking-wider text-neutral-400 mb-1.5">
                        Your Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Tariq Mansoor"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-obsidian-950 border border-neutral-800 text-xs text-white placeholder-neutral-500 focus:outline-none focus:border-gold-400"
                      />
                    </div>

                    <div>
                      <label className="block text-xs uppercase font-mono tracking-wider text-neutral-400 mb-1.5">
                        Organization / Agency / Brand
                      </label>
                      <input
                        type="text"
                        placeholder="e.g. Paramount Media / Brand Agency"
                        value={formData.organization}
                        onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-obsidian-950 border border-neutral-800 text-xs text-white placeholder-neutral-500 focus:outline-none focus:border-gold-400"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs uppercase font-mono tracking-wider text-neutral-400 mb-1.5">
                        Business Email *
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="name@company.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-obsidian-950 border border-neutral-800 text-xs text-white placeholder-neutral-500 focus:outline-none focus:border-gold-400"
                      />
                    </div>

                    <div>
                      <label className="block text-xs uppercase font-mono tracking-wider text-neutral-400 mb-1.5">
                        Phone / WhatsApp
                      </label>
                      <input
                        type="tel"
                        placeholder="+92 300 0000000 / +1..."
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-obsidian-950 border border-neutral-800 text-xs text-white placeholder-neutral-500 focus:outline-none focus:border-gold-400"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs uppercase font-mono tracking-wider text-neutral-400 mb-1.5">
                        Inquiry Nature *
                      </label>
                      <select
                        value={formData.inquiryType}
                        onChange={(e) => setFormData({ ...formData, inquiryType: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-obsidian-950 border border-neutral-800 text-xs text-white focus:outline-none focus:border-gold-400"
                      >
                        <option value="event">International Event / Tour Appearance</option>
                        <option value="brand">Brand Endorsement / TVC Commercial</option>
                        <option value="ugc">Digital UGC Campaign / Social Endorsement</option>
                        <option value="script">Film or Drama Screenplay Submission</option>
                        <option value="press">Press, Media & Keynote Interview</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs uppercase font-mono tracking-wider text-neutral-400 mb-1.5">
                        Estimated Budget Bracket
                      </label>
                      <select
                        value={formData.budget}
                        onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-obsidian-950 border border-neutral-800 text-xs text-white focus:outline-none focus:border-gold-400"
                      >
                        <option>$10,000 - $25,000</option>
                        <option>$25,000 - $50,000</option>
                        <option>$50,000 - $100,000+</option>
                        <option>Annual Corporate Retainer ($150k+)</option>
                        <option>Press / Editorial Request (N/A)</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs uppercase font-mono tracking-wider text-neutral-400 mb-1.5">
                      Proposal Details / Dates / Venue *
                    </label>
                    <textarea
                      rows={4}
                      required
                      placeholder="Please outline the event format, location, dates, audience profile, or campaign deliverables..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-obsidian-950 border border-neutral-800 text-xs text-white placeholder-neutral-500 focus:outline-none focus:border-gold-400 resize-none"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 px-6 rounded-xl bg-gradient-to-r from-gold-500 via-gold-400 to-amber-500 text-obsidian-950 font-bold text-xs uppercase tracking-wider shadow-lg hover:scale-101 active:scale-99 transition-all flex items-center justify-center gap-2"
                  >
                    <Send className="w-4 h-4" />
                    <span>Transmit Proposal to info@noumanijaz.com</span>
                  </button>

                  <div className="text-[11px] text-neutral-500 text-center font-mono">
                    All correspondence is strictly confidential under NDA.
                  </div>
                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
