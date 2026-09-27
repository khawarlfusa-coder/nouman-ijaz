import React from 'react';
import { CELEBRITY_DATA, IMAGE_REGISTRY } from '../data/celebrityData';

export default function EditorialMonologue() {
  const { profile } = CELEBRITY_DATA;

  return (
    <section id="monologue" className="relative py-32 bg-obsidian-950 border-t border-neutral-900 overflow-hidden">
      
      {/* Background Graphic Watermark */}
      <div className="absolute right-6 top-1/2 -translate-y-1/2 text-[14vw] font-serif font-black text-white/[0.015] pointer-events-none select-none leading-none">
        SILENCE
      </div>

      <div className="max-w-5xl mx-auto px-6 sm:px-10 relative z-10 text-center space-y-12">
        
        {/* Creed Subhead */}
        <span className="text-[11px] font-mono uppercase tracking-[0.3em] text-gold-400 block">
          ARTISTIC CREED & METHOD
        </span>

        {/* Large Urdu Nastaliq Quote */}
        <p className="font-['Noto_Nastaliq_Urdu'] text-3xl sm:text-5xl text-neutral-100 leading-relaxed font-normal select-none">
          "{profile.quoteUrdu}"
        </p>

        {/* Large Italic English Translation */}
        <div className="max-w-3xl mx-auto">
          <p className="font-serif italic text-xl sm:text-3xl text-neutral-300 font-light leading-relaxed">
            "{profile.quoteEnglish}"
          </p>
        </div>

        <div className="text-xs font-mono tracking-widest uppercase text-neutral-500">
          NAUMAAN IJAZ • CIVILIAN HONORS GAZETTE 2012
        </div>

        {/* 3 Pillars */}
        <div className="pt-12 border-t border-neutral-900 grid grid-cols-1 sm:grid-cols-3 gap-8 text-center max-w-3xl mx-auto">
          <div>
            <div className="text-3xl sm:text-4xl font-serif font-bold text-white">36+</div>
            <div className="text-[10px] font-mono uppercase tracking-widest text-neutral-500 mt-1">
              Years in Screen Arts
            </div>
          </div>
          <div>
            <div className="text-3xl sm:text-4xl font-serif font-bold text-gold-300">120+</div>
            <div className="text-[10px] font-mono uppercase tracking-widest text-neutral-500 mt-1">
              Cult Characters
            </div>
          </div>
          <div>
            <div className="text-3xl sm:text-4xl font-serif font-bold text-white">PRIDE OF PERFORMANCE</div>
            <div className="text-[10px] font-mono uppercase tracking-widest text-neutral-500 mt-1">
              State Award 2012
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
