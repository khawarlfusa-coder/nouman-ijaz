import React from 'react';
import { CELEBRITY_DATA } from '../data/celebrityData';
import { ArrowUpRight } from 'lucide-react';

export default function EditorialWorks({ onOpenChat }) {
  const { editorialWorks } = CELEBRITY_DATA;

  return (
    <section id="works" className="relative py-24 bg-obsidian-950">
      <div className="max-w-7xl mx-auto px-6 sm:px-10">
        
        {/* Section Header */}
        <div className="border-b border-neutral-900 pb-8 mb-20 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div className="space-y-2">
            <span className="text-[11px] font-mono uppercase tracking-[0.25em] text-gold-400">
              The Living Retrospective
            </span>
            <h2 className="text-4xl sm:text-6xl font-serif font-black text-white tracking-tight">
              LANDMARK <span className="gold-gradient-text italic font-normal">WORKS</span>
            </h2>
          </div>
          <div className="text-xs font-mono text-neutral-500 uppercase tracking-widest">
            05 SELECTED MASTERPIECES • 70MM CINEMA & TELEVISION
          </div>
        </div>

        {/* Massive Alternating Editorial Spreads */}
        <div className="space-y-36">
          {editorialWorks.map((work, idx) => {
            const isEven = idx % 2 === 1;

            return (
              <div
                key={work.number}
                className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center"
              >
                {/* Massive Photography Spread (7 cols) */}
                <div
                  className={`lg:col-span-7 ${
                    isEven ? 'lg:order-2' : 'lg:order-1'
                  }`}
                >
                  <div className="relative aspect-[4/3] sm:aspect-[16/11] rounded-2xl overflow-hidden bg-obsidian-900 border border-neutral-800 shadow-2xl group">
                    <img
                      src={work.image}
                      alt={work.title}
                      className="w-full h-full object-cover object-top filter grayscale contrast-110 group-hover:grayscale-0 group-hover:scale-103 transition-all duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-obsidian-950 via-transparent to-transparent opacity-60"></div>
                    
                    {/* Big Roman Index in Corner */}
                    <div className="absolute top-4 left-6 text-4xl sm:text-6xl font-serif font-black text-white/20 select-none">
                      {work.number}
                    </div>

                    <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between text-xs font-mono text-neutral-300">
                      <span>{work.network} • {work.year}</span>
                      <span className="text-gold-400 font-semibold">{work.characterType}</span>
                    </div>
                  </div>
                </div>

                {/* Minimalist Editorial Text Spread (5 cols) */}
                <div
                  className={`lg:col-span-5 space-y-6 ${
                    isEven ? 'lg:order-1' : 'lg:order-2'
                  }`}
                >
                  {/* Title & Native Script */}
                  <div className="space-y-1">
                    <div className="flex items-baseline justify-between">
                      <h3 className="text-3xl sm:text-5xl font-serif font-black text-white tracking-tight">
                        {work.title}
                      </h3>
                      <span className="font-['Noto_Nastaliq_Urdu'] text-2xl text-gold-400/90 font-normal">
                        {work.urduTitle}
                      </span>
                    </div>
                    <div className="text-sm font-mono tracking-widest text-gold-300 uppercase">
                      ROLE: {work.role}
                    </div>
                  </div>

                  {/* Iconic Dialogue in Urdu & English */}
                  <div className="p-6 rounded-xl bg-obsidian-900/60 border-l-2 border-gold-400 space-y-2">
                    <p className="font-['Noto_Nastaliq_Urdu'] text-xl sm:text-2xl text-gold-200 leading-relaxed">
                      "{work.quote}"
                    </p>
                    <p className="font-serif italic text-xs sm:text-sm text-neutral-400 font-light leading-relaxed">
                      "{work.quoteEn}"
                    </p>
                  </div>

                  {/* Concise Essay / Critical Reception */}
                  <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed font-light">
                    {work.essay}
                  </p>

                  <div className="pt-2 flex items-center justify-between border-t border-neutral-900 text-xs font-mono">
                    <span className="text-neutral-500 uppercase tracking-wider">{work.awards}</span>
                    <button
                      onClick={onOpenChat}
                      className="text-gold-400 hover:text-white flex items-center gap-1 transition-colors uppercase tracking-widest text-[11px]"
                    >
                      <span>Inquire</span>
                      <ArrowUpRight className="w-3 h-3" />
                    </button>
                  </div>

                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
