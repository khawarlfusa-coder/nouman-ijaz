import React, { useState } from 'react';
import { CELEBRITY_DATA } from '../data/celebrityData';
import { Mail, Copy, Check, Send, ArrowUp } from 'lucide-react';
import { InstagramIcon, FacebookIcon, YoutubeIcon } from './Icons';
import confetti from 'canvas-confetti';

export default function EditorialRepresentation({ onOpenChat }) {
  const { profile, representation, socials } = CELEBRITY_DATA;

  const [copied, setCopied] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(representation.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.email) return;
    setSubmitted(true);
    confetti({
      particleCount: 30,
      spread: 50,
      origin: { y: 0.7 },
      colors: ['#CFA738', '#E6C564', '#FFFFFF']
    });
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <section id="representation" className="relative py-28 bg-obsidian-950 border-t border-neutral-900">
      <div className="max-w-7xl mx-auto px-6 sm:px-10">
        
        {/* Section Header */}
        <div className="border-b border-neutral-900 pb-8 mb-20">
          <span className="text-[11px] font-mono uppercase tracking-[0.25em] text-gold-400">
            Booking & Press Credentials
          </span>
          <h2 className="text-4xl sm:text-6xl font-serif font-black text-white tracking-tight mt-2">
            REPRESENTATION <span className="gold-gradient-text italic font-normal">& CONTACT</span>
          </h2>
        </div>

        {/* 2-Column Clean Editorial Spread */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start mb-24">
          
          {/* Left Column: Direct Representation Info (6 cols) */}
          <div className="lg:col-span-6 space-y-8">
            <div className="space-y-3">
              <span className="text-xs font-mono uppercase tracking-widest text-neutral-500">
                Official Correspondence
              </span>
              <div className="text-3xl sm:text-4xl font-serif font-bold text-white">
                {representation.email}
              </div>
              <p className="text-xs text-neutral-400 font-light leading-relaxed max-w-md">
                All scripts, television contracts, commercial brand deals, international galas, and press requests are reviewed directly by talent management.
              </p>
            </div>

            {/* Actions */}
            <div className="flex flex-wrap items-center gap-4 text-xs font-mono uppercase tracking-widest">
              <button
                onClick={handleCopy}
                className="px-5 py-3 rounded-full border border-neutral-800 hover:border-gold-400 text-neutral-300 hover:text-white transition-all flex items-center gap-2"
              >
                {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5 text-gold-400" />}
                <span>{copied ? "Copied" : "Copy Email"}</span>
              </button>

              <a
                href={`mailto:${representation.email}?subject=Official%20Inquiry%20for%20Naumaan%20Ijaz`}
                className="px-6 py-3 rounded-full bg-white text-obsidian-950 font-bold hover:bg-gold-400 transition-all shadow"
              >
                Launch Mail Client
              </a>

              <button
                onClick={onOpenChat}
                className="px-5 py-3 rounded-full border border-gold-400/40 text-gold-300 hover:bg-gold-500 hover:text-black transition-all"
              >
                Live Concierge Desk
              </button>
            </div>

            {/* Inquiries Scope List */}
            <div className="pt-6 border-t border-neutral-900 space-y-2">
              <span className="text-[11px] font-mono uppercase tracking-widest text-neutral-500 block mb-3">
                Representation Scope
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-neutral-400 font-light">
                {representation.inquiries.map((inq, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-gold-400/80"></span>
                    <span>{inq}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Agency & Locations */}
            <div className="text-xs font-mono text-neutral-500 pt-2 space-y-1">
              <div>TALENT AGENCY: {representation.agency}</div>
              <div>LOCATIONS: {representation.locations}</div>
            </div>
          </div>

          {/* Right Column: Clean Minimalist Inquiry Form (6 cols) */}
          <div className="lg:col-span-6 p-8 sm:p-10 rounded-2xl bg-obsidian-900/40 border border-neutral-800">
            {submitted ? (
              <div className="text-center py-12 space-y-3">
                <div className="w-10 h-10 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto">
                  <Check className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-serif font-bold text-white">Proposal Dispatched</h3>
                <p className="text-xs text-neutral-400 max-w-xs mx-auto font-light">
                  Thank you. Your message has been sent to {representation.email}.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="text-[11px] font-mono text-neutral-500 hover:text-white pt-2"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="text-sm font-serif font-bold text-white tracking-wide">
                  Transmit Formal Proposal
                </div>

                <div>
                  <label className="block text-[10px] font-mono uppercase tracking-widest text-neutral-500 mb-1.5">
                    Your Name / Organization *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Full Name"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-obsidian-950 border border-neutral-800 text-xs text-white placeholder-neutral-600 focus:outline-none focus:border-gold-400 font-mono"
                  />
                </div>

                <div>
                  <label className="block text-[10px] font-mono uppercase tracking-widest text-neutral-500 mb-1.5">
                    Business Email *
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="email@company.com"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-obsidian-950 border border-neutral-800 text-xs text-white placeholder-neutral-600 focus:outline-none focus:border-gold-400 font-mono"
                  />
                </div>

                <div>
                  <label className="block text-[10px] font-mono uppercase tracking-widest text-neutral-500 mb-1.5">
                    Brief / Dates / Project Scope *
                  </label>
                  <textarea
                    rows={4}
                    required
                    placeholder="Provide details regarding the script, campaign, or event..."
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-obsidian-950 border border-neutral-800 text-xs text-white placeholder-neutral-600 focus:outline-none focus:border-gold-400 font-mono resize-none"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 rounded-xl bg-gold-500 hover:bg-gold-400 text-obsidian-950 font-bold text-xs uppercase tracking-widest transition-all flex items-center justify-center gap-2"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Send Proposal</span>
                </button>
              </form>
            )}
          </div>

        </div>

        {/* Minimal Footer Strip */}
        <div className="border-t border-neutral-900 pt-10 flex flex-col sm:flex-row items-center justify-between gap-6 text-xs font-mono text-neutral-500">
          <div className="flex items-center space-x-6">
            <a
              href="https://www.instagram.com/m_naumaanijazofficial/"
              target="_blank"
              rel="noreferrer"
              className="hover:text-white flex items-center gap-1.5"
            >
              <InstagramIcon className="w-3.5 h-3.5" />
              <span>@m_naumaanijazofficial</span>
            </a>
            <a
              href="https://www.facebook.com/ijaznaumaan/"
              target="_blank"
              rel="noreferrer"
              className="hover:text-white flex items-center gap-1.5"
            >
              <FacebookIcon className="w-3.5 h-3.5" />
              <span>Facebook</span>
            </a>
            <a
              href="https://www.youtube.com/results?search_query=Naumaan+Ijaz+interviews"
              target="_blank"
              rel="noreferrer"
              className="hover:text-white flex items-center gap-1.5"
            >
              <YoutubeIcon className="w-3.5 h-3.5" />
              <span>YouTube</span>
            </a>
          </div>

          <div className="flex items-center space-x-6">
            <span>© {new Date().getFullYear()} NAUMAAN IJAZ</span>
            <button
              onClick={scrollToTop}
              className="hover:text-gold-300 flex items-center gap-1 uppercase tracking-wider"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3 h-3" />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}
