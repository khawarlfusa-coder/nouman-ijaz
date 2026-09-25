import React, { useState } from 'react';
import { CELEBRITY_DATA } from '../data/celebrityData';
import { Video, ArrowRight, ShieldCheck } from 'lucide-react';

export default function CommercialsAndUGC({ onOpenChat }) {
  const { commercialsAndUgc } = CELEBRITY_DATA;
  const [selectedFormat, setSelectedFormat] = useState('ugc');

  return (
    <section id="brand-ugc" className="relative py-24 bg-obsidian-950 border-t border-neutral-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-2xl mb-16 space-y-2">
          <span className="text-[11px] font-mono uppercase tracking-widest text-gold-400">
            Commercial Collaborations
          </span>
          <h2 className="text-3xl sm:text-5xl font-serif font-black text-white tracking-tight">
            Brand Endorsements & <span className="gold-gradient-text">UGC Ads</span>
          </h2>
          <p className="text-neutral-400 text-sm leading-relaxed">
            Universal authority, household respect, and high-impact digital storytelling for luxury, real estate, and consumer brands.
          </p>
        </div>

        {/* Feature Spotlight: Editorial High-Fashion Photo + Offerings */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-16">
          
          <div className="lg:col-span-5">
            <div className="rounded-2xl overflow-hidden border border-neutral-800 bg-obsidian-900 shadow-xl aspect-[3/4] relative">
              <img
                src="/assets/images/brand-royal-festive.jpg"
                alt="Brand Ambassador Naumaan Ijaz"
                className="w-full h-full object-cover object-top"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-obsidian-950 via-transparent to-transparent"></div>
              <div className="absolute bottom-4 left-4 right-4 p-3 rounded-xl bg-obsidian-950/85 backdrop-blur-sm border border-neutral-800 text-xs">
                <div className="font-semibold text-white">Royal Festive Attire Ambassador</div>
                <div className="text-[10px] text-neutral-400 font-mono">Bespoke Handcrafted Campaign</div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 space-y-6">
            <div className="grid grid-cols-2 gap-4">
              {commercialsAndUgc.keyMetrics.map((m, i) => (
                <div key={i} className="p-4 rounded-xl bg-obsidian-900/40 border border-neutral-800/80">
                  <div className="text-2xl font-serif font-bold text-gold-300">{m.value}</div>
                  <div className="text-[11px] text-neutral-400 uppercase font-mono mt-0.5">{m.label}</div>
                </div>
              ))}
            </div>

            <div className="space-y-3 pt-2">
              {commercialsAndUgc.ugcServices.map((svc, i) => (
                <div key={i} className="p-4 rounded-xl bg-obsidian-900/30 border border-neutral-800/60 flex items-center justify-between">
                  <div>
                    <div className="text-sm font-semibold text-white">{svc.title}</div>
                    <div className="text-xs text-neutral-400 font-light mt-0.5">{svc.desc}</div>
                  </div>
                  <span className="text-[10px] text-gold-400 font-mono px-2 py-1 rounded bg-obsidian-950 border border-neutral-800 whitespace-nowrap ml-4">
                    {svc.turnaround}
                  </span>
                </div>
              ))}
            </div>

            <div className="pt-2 flex items-center gap-4">
              <button
                onClick={onOpenChat}
                className="px-6 py-3 rounded-full bg-gold-500 hover:bg-gold-400 text-obsidian-950 font-bold text-xs uppercase tracking-wider transition-all"
              >
                Inquire Brand Campaign
              </button>
              <a
                href="mailto:info@noumanijaz.com?subject=Brand%20Campaign%20Inquiry"
                className="text-xs font-mono text-neutral-400 hover:text-white"
              >
                info@noumanijaz.com
              </a>
            </div>
          </div>

        </div>

        {/* Brand Showcase Grid with Unique Images */}
        <div className="pt-8 border-t border-neutral-900">
          <div className="text-xs font-mono uppercase tracking-widest text-neutral-500 mb-6">
            Featured Brand Partnerships
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {commercialsAndUgc.brandsShowcase.map((b, idx) => (
              <div key={idx} className="rounded-xl overflow-hidden bg-obsidian-900/40 border border-neutral-800/80 group">
                <div className="aspect-[16/10] overflow-hidden bg-obsidian-950">
                  <img
                    src={b.image}
                    alt={b.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-4 space-y-1">
                  <div className="text-sm font-serif font-bold text-white">{b.name}</div>
                  <div className="text-xs text-gold-400 font-medium">{b.campaign}</div>
                  <div className="text-[11px] text-neutral-500 font-mono">{b.category}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
