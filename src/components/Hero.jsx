import React, { useState } from 'react';
import { CELEBRITY_DATA } from '../data/celebrityData';
import { Award, Play, Film, CheckCircle2, ChevronDown } from 'lucide-react';

export default function Hero({ onOpenVideoModal, onOpenStory }) {
  const { profile } = CELEBRITY_DATA;
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(profile.officialEmail);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  return (
    <section className="relative min-h-[90vh] lg:min-h-screen flex items-center justify-center pt-28 pb-16 overflow-hidden bg-obsidian-950">
      {/* Subtle Atmospheric Light */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-gold-600/10 rounded-full blur-[160px] pointer-events-none"></div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-12 items-center">
          
          {/* Left Column: Editorial Presentation (7 cols) */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            
            {/* Minimalist Honor Tag */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-gold-500/10 border border-gold-500/25 text-gold-300 text-[11px] font-mono tracking-widest uppercase">
              <Award className="w-3.5 h-3.5 text-gold-400" />
              <span>Pride of Performance (2012) • Pakistan</span>
            </div>

            {/* Typography */}
            <div className="space-y-2">
              <p className="font-serif text-2xl sm:text-3xl text-gold-400/90 font-normal font-['Noto_Nastaliq_Urdu'] select-none">
                {profile.nativeName}
              </p>
              <h1 className="text-5xl sm:text-7xl font-serif font-black tracking-tight text-white leading-none">
                NAUMAAN <span className="gold-gradient-text">IJAZ</span>
              </h1>
            </div>

            <p className="text-base sm:text-lg text-neutral-300 font-light max-w-xl mx-auto lg:mx-0 leading-relaxed">
              The Living Legend of Pakistani Television & Cinema. Defining four decades of psychological depth, masterclass Urdu diction, and aristocratic screen presence.
            </p>

            {/* Minimalist Quote Banner */}
            <div className="py-3 px-4 rounded-xl bg-obsidian-900/60 border-l-2 border-gold-400 text-left">
              <p className="text-xs text-neutral-400 font-serif italic">
                "{profile.signatureQuoteEnglish}"
              </p>
            </div>

            {/* Clean Actions */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-2">
              <a
                href="#filmography"
                className="px-7 py-3 rounded-full bg-gradient-to-r from-gold-500 via-gold-400 to-amber-500 text-obsidian-950 font-bold text-xs uppercase tracking-wider flex items-center gap-2 shadow-lg shadow-gold-500/20 hover:scale-105 active:scale-95 transition-all"
              >
                <Film className="w-4 h-4" />
                <span>Explore Works</span>
              </a>

              <button
                onClick={onOpenVideoModal}
                className="px-6 py-3 rounded-full bg-obsidian-900 border border-neutral-700 hover:border-gold-400 text-neutral-200 hover:text-white font-medium text-xs uppercase tracking-wider flex items-center gap-2 transition-all"
              >
                <Play className="w-3.5 h-3.5 text-gold-400 fill-gold-400" />
                <span>Watch Showreel</span>
              </button>

              <button
                onClick={handleCopyEmail}
                className="px-4 py-3 rounded-full text-xs text-neutral-400 hover:text-gold-300 transition-colors flex items-center gap-1.5 font-mono"
              >
                {copiedEmail ? (
                  <>
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                    <span className="text-emerald-400">Copied!</span>
                  </>
                ) : (
                  <span>info@noumanijaz.com</span>
                )}
              </button>
            </div>

            {/* Minimal Accolade Numbers */}
            <div className="pt-6 border-t border-neutral-900 grid grid-cols-4 gap-4 text-center lg:text-left">
              <div>
                <div className="text-xl sm:text-2xl font-serif font-bold text-white">36+</div>
                <div className="text-[10px] uppercase font-mono tracking-wider text-neutral-400">Years Active</div>
              </div>
              <div>
                <div className="text-xl sm:text-2xl font-serif font-bold text-gold-300">120+</div>
                <div className="text-[10px] uppercase font-mono tracking-wider text-neutral-400">Masterpieces</div>
              </div>
              <div>
                <div className="text-xl sm:text-2xl font-serif font-bold text-white">18+</div>
                <div className="text-[10px] uppercase font-mono tracking-wider text-neutral-400">Major Awards</div>
              </div>
              <div>
                <div className="text-xl sm:text-2xl font-serif font-bold text-gold-300">50M+</div>
                <div className="text-[10px] uppercase font-mono tracking-wider text-neutral-400">Admirers</div>
              </div>
            </div>

          </div>

          {/* Right Column: Clean Cinematic Portrait (5 cols) */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-sm">
              <div className="relative rounded-2xl overflow-hidden border border-neutral-800 bg-obsidian-900 shadow-2xl group">
                <div className="aspect-[4/5] w-full overflow-hidden bg-obsidian-950">
                  <img
                    src={profile.portrait}
                    alt="Naumaan Ijaz"
                    className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-102"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-obsidian-950 via-transparent to-transparent"></div>
                </div>

                <div className="absolute bottom-4 left-4 right-4 p-3 rounded-xl bg-obsidian-950/85 backdrop-blur-md border border-neutral-800 flex items-center justify-between">
                  <div>
                    <div className="text-xs font-serif font-bold text-white">Behroze Karim</div>
                    <div className="text-[11px] text-neutral-400">Parizaad • Hum TV Landmark</div>
                  </div>
                  <button
                    onClick={() => onOpenStory(2)}
                    className="px-3 py-1 rounded-lg bg-gold-500/15 text-gold-300 text-[11px] font-semibold hover:bg-gold-500 hover:text-black transition-colors"
                  >
                    View Story
                  </button>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Scroll Indicator */}
        <div className="pt-12 flex justify-center text-neutral-400">
          <ChevronDown className="w-5 h-5 text-gold-400/80 animate-bounce" />
        </div>
      </div>
    </section>
  );
}
