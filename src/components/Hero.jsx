import React from 'react';
import { CELEBRITY_DATA, IMAGE_REGISTRY } from '../data/celebrityData';
import { ArrowDown, Play } from 'lucide-react';

export default function Hero({ onOpenVideoModal }) {
  const { profile } = CELEBRITY_DATA;

  return (
    <section className="relative min-h-screen flex flex-col justify-between pt-28 pb-12 bg-obsidian-950 overflow-hidden">
      {/* Editorial Background Atmosphere */}
      <div className="absolute inset-0 z-0">
        <img
          src={IMAGE_REGISTRY.heroCover}
          alt="Naumaan Ijaz - GQ Editorial Cover"
          className="w-full h-full object-cover object-top opacity-35 filter grayscale contrast-125 scale-100 transition-all duration-1000"
        />
        {/* Deep luxury vignettes */}
        <div className="absolute inset-0 bg-gradient-to-t from-obsidian-950 via-obsidian-950/60 to-obsidian-950/40"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-obsidian-950 via-transparent to-obsidian-950"></div>
      </div>

      {/* Top Issue Tag */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-10 w-full pt-8">
        <div className="flex items-center justify-between border-b border-neutral-800/80 pb-4 text-[10px] sm:text-xs font-mono uppercase tracking-[0.25em] text-neutral-400">
          <div className="flex items-center space-x-3">
            <span className="text-gold-400 font-bold">{profile.issueTag}</span>
            <span>•</span>
            <span>CIVILIAN PRIDE OF PERFORMANCE</span>
          </div>
          <div className="hidden sm:block text-neutral-500 font-light">
            LAHORE • KARACHI • LONDON • DALLAS
          </div>
        </div>
      </div>

      {/* Center Magazine Cover Headline */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-10 w-full py-16 text-center space-y-6">
        
        {/* Urdu Calligraphy */}
        <p className="font-['Noto_Nastaliq_Urdu'] text-3xl sm:text-5xl text-gold-400/90 tracking-widest font-normal select-none">
          {profile.nativeName}
        </p>

        {/* Main Giant Name */}
        <h1 className="text-6xl sm:text-8xl md:text-9xl font-serif font-black tracking-tight text-white uppercase leading-none drop-shadow-2xl">
          NAUMAAN <span className="gold-gradient-text italic font-normal">IJAZ</span>
        </h1>

        {/* Editorial Sub-Head */}
        <p className="text-sm sm:text-base md:text-lg font-mono tracking-[0.35em] uppercase text-neutral-300 max-w-3xl mx-auto">
          THE ANATOMY OF SILENCE • 36 YEARS OF CINEMA & TELEVISION
        </p>

        {/* Minimal Monologue Pull-Quote */}
        <div className="max-w-2xl mx-auto pt-4">
          <p className="font-serif italic text-sm sm:text-base text-neutral-400 font-light leading-relaxed">
            "{profile.quoteEnglish}"
          </p>
        </div>

        {/* Action Controls */}
        <div className="pt-6 flex flex-wrap items-center justify-center gap-4 text-xs font-mono tracking-widest uppercase">
          <a
            href="#works"
            className="px-8 py-3.5 rounded-full bg-white text-obsidian-950 font-bold hover:bg-gold-400 transition-all shadow-2xl"
          >
            Explore Masterpieces
          </a>

          <button
            onClick={onOpenVideoModal}
            className="px-7 py-3.5 rounded-full border border-neutral-700 hover:border-gold-400 text-neutral-300 hover:text-white transition-all flex items-center gap-2"
          >
            <Play className="w-3.5 h-3.5 text-gold-400 fill-gold-400" />
            <span>Monologues Reel</span>
          </button>
        </div>

      </div>

      {/* Bottom Editorial Bar */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-10 w-full border-t border-neutral-800/80 pt-6 flex items-center justify-between text-[11px] font-mono text-neutral-500">
        <div>
          ARCHIVE REF: 1988 — PRESENT
        </div>
        <a href="#stories" className="flex items-center gap-1.5 text-neutral-400 hover:text-gold-300 transition-colors">
          <span>SCROLL DOWN</span>
          <ArrowDown className="w-3.5 h-3.5 animate-bounce" />
        </a>
      </div>
    </section>
  );
}
