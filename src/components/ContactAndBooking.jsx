import React, { useState } from 'react';
import { CELEBRITY_DATA } from '../data/celebrityData';
import { Mail, MapPin, Send, Copy, Check, Download, ShieldCheck } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function ContactAndBooking({ onOpenChat }) {
  const { profile } = CELEBRITY_DATA;

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
      particleCount: 40,
      spread: 60,
      origin: { y: 0.6 },
      colors: ['#CFA738', '#E6C564', '#FFFFFF']
    });
  };

  return (
    <section id="contact" className="relative py-24 bg-obsidian-950 border-t border-neutral-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-2xl mb-16 space-y-2">
          <span className="text-[11px] font-mono uppercase tracking-widest text-gold-400">
            Management & Booking
          </span>
          <h2 className="text-3xl sm:text-5xl font-serif font-black text-white tracking-tight">
            Official <span className="gold-gradient-text">Representation</span>
          </h2>
          <p className="text-neutral-400 text-sm leading-relaxed">
            For global cinema productions, brand endorsements, commercial TVCs, UGC campaigns, and international keynote appearances.
          </p>
        </div>

        {/* 2-Column Clean Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Left Column: Direct Representation Info (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-8 rounded-2xl bg-obsidian-900/40 border border-neutral-800 space-y-6">
              <div>
                <span className="text-[10px] uppercase font-mono tracking-widest text-neutral-500">
                  Primary Contact
                </span>
                <div className="text-2xl font-serif font-bold text-white mt-1">
                  info@noumanijaz.com
                </div>
                <p className="text-xs text-neutral-400 mt-1">
                  Official representation inbox monitored daily by talent management.
                </p>
              </div>

              <div className="flex gap-3">
                <button
                  onClick={handleCopyEmail}
                  className="px-4 py-2.5 rounded-xl bg-obsidian-950 border border-neutral-800 hover:border-gold-400 text-xs font-mono text-neutral-300 hover:text-white flex items-center gap-1.5 transition-colors"
                >
                  {copiedEmail ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                      <span>Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5 text-gold-400" />
                      <span>Copy Email</span>
                    </>
                  )}
                </button>

                <a
                  href="mailto:info@noumanijaz.com?subject=Official%20Inquiry%20for%20Naumaan%20Ijaz"
                  className="px-4 py-2.5 rounded-xl bg-gold-500 hover:bg-gold-400 text-obsidian-950 font-bold text-xs uppercase tracking-wider transition-colors"
                >
                  Open Mail
                </a>
              </div>

              <div className="pt-4 border-t border-neutral-800/80 space-y-3 text-xs text-neutral-400">
                <div className="flex items-center gap-2">
                  <MapPin className="w-3.5 h-3.5 text-gold-400 flex-shrink-0" />
                  <span>Lahore & Karachi, Pakistan • Global Touring</span>
                </div>
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-3.5 h-3.5 text-gold-400 flex-shrink-0" />
                  <span>Representation: ONE ICA & Global Management</span>
                </div>
              </div>

              <div className="pt-2">
                <button
                  onClick={onOpenChat}
                  className="w-full py-3 rounded-xl border border-neutral-800 hover:border-gold-500/40 text-xs text-neutral-300 hover:text-gold-300 font-mono transition-colors"
                >
                  Open 24/7 Live Concierge Chat →
                </button>
              </div>
            </div>
          </div>

          {/* Right Column: Clean Booking Form (7 cols) */}
          <div className="lg:col-span-7">
            <div className="p-8 rounded-2xl bg-obsidian-900/40 border border-neutral-800">
              
              {submitted ? (
                <div className="text-center py-10 space-y-3">
                  <div className="w-12 h-12 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto">
                    <Check className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-serif font-bold text-white">Inquiry Transmitted</h3>
                  <div className="text-xs font-mono text-gold-400">Reference #{referenceId}</div>
                  <p className="text-xs text-neutral-400 max-w-sm mx-auto">
                    Thank you, {formData.name}. A copy of your details has been forwarded to info@noumanijaz.com.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="text-xs text-neutral-500 hover:text-white pt-2 font-mono"
                  >
                    Submit another request
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <h3 className="text-base font-serif font-bold text-white">
                    Submit Proposal or Inquire
                  </h3>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[11px] uppercase font-mono text-neutral-400 mb-1">Name *</label>
                      <input
                        type="text"
                        required
                        placeholder="Your Name"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-obsidian-950 border border-neutral-800 text-xs text-white placeholder-neutral-500 focus:outline-none focus:border-gold-400"
                      />
                    </div>

                    <div>
                      <label className="block text-[11px] uppercase font-mono text-neutral-400 mb-1">Email *</label>
                      <input
                        type="email"
                        required
                        placeholder="email@company.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-obsidian-950 border border-neutral-800 text-xs text-white placeholder-neutral-500 focus:outline-none focus:border-gold-400"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[11px] uppercase font-mono text-neutral-400 mb-1">Inquiry Type</label>
                      <select
                        value={formData.inquiryType}
                        onChange={(e) => setFormData({ ...formData, inquiryType: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-obsidian-950 border border-neutral-800 text-xs text-white focus:outline-none focus:border-gold-400"
                      >
                        <option value="event">International Tour / Appearance</option>
                        <option value="brand">Brand Endorsement / Commercial TVC</option>
                        <option value="ugc">Digital UGC Campaign</option>
                        <option value="script">Film / Drama Script Submission</option>
                        <option value="press">Press / Media Interview</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-[11px] uppercase font-mono text-neutral-400 mb-1">Budget Bracket</label>
                      <select
                        value={formData.budget}
                        onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-obsidian-950 border border-neutral-800 text-xs text-white focus:outline-none focus:border-gold-400"
                      >
                        <option>$10,000 - $25,000</option>
                        <option>$25,000 - $50,000</option>
                        <option>$50,000 - $100,000+</option>
                        <option>Annual Retainer</option>
                        <option>Press / Editorial</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-[11px] uppercase font-mono text-neutral-400 mb-1">Proposal Details *</label>
                    <textarea
                      rows={3}
                      required
                      placeholder="Outline event dates, deliverables, or brand scope..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-obsidian-950 border border-neutral-800 text-xs text-white placeholder-neutral-500 focus:outline-none focus:border-gold-400 resize-none"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3 rounded-xl bg-gold-500 hover:bg-gold-400 text-obsidian-950 font-bold text-xs uppercase tracking-wider transition-colors flex items-center justify-center gap-1.5"
                  >
                    <Send className="w-3.5 h-3.5" />
                    <span>Send Proposal to info@noumanijaz.com</span>
                  </button>
                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
