import React, { useState } from 'react';
import { CELEBRITY_DATA } from '../data/celebrityData';
import { Sparkles, Video, TrendingUp, CheckCircle, Calculator, Send, ArrowRight, ShieldCheck, Award } from 'lucide-react';

export default function CommercialsAndUGC({ onOpenChat }) {
  const { commercialsAndUgc } = CELEBRITY_DATA;

  // Interactive Brand Calculator State
  const [selectedService, setSelectedService] = useState('ugc-reel');
  const [selectedReach, setSelectedReach] = useState('pak-intl');
  const [calculatorCalculated, setCalculatorCalculated] = useState(false);

  const serviceOptions = [
    { id: 'ugc-reel', label: 'Vertical UGC Reel (9:16)', deliverable: '1x High-Impact Endorsement Reel + 2 Stories' },
    { id: 'tvc-film', label: 'Commercial TVC / Film', deliverable: 'Main Broadcast Film + Cutdowns & Billboards' },
    { id: 'ambassador', label: '360° Annual Ambassadorship', deliverable: 'Exclusive Category Brand Face + All Media' },
    { id: 'keynote', label: 'Corporate Gala / Launch', deliverable: 'Chief Guest Appearance & Keynote Address' },
  ];

  const handleCalculate = (e) => {
    e.preventDefault();
    setCalculatorCalculated(true);
  };

  return (
    <section id="brand-ugc" className="relative py-24 bg-obsidian-950 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold-500/10 border border-gold-500/30 text-gold-300 text-xs font-mono uppercase tracking-widest">
            <Video className="w-3.5 h-3.5" />
            <span>Commercials & Digital UGC</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-serif font-black text-white tracking-tight">
            Brand Endorsements & <span className="gold-gradient-text">UGC Ads Desk</span>
          </h2>
          <p className="text-neutral-400 text-sm sm:text-base leading-relaxed">
            {commercialsAndUgc.description}
          </p>
        </div>

        {/* Authority Metrics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
          {commercialsAndUgc.keyMetrics.map((metric, i) => (
            <div
              key={i}
              className="p-6 rounded-2xl bg-obsidian-900/80 border border-neutral-800 text-center hover:border-gold-500/30 transition-colors"
            >
              <div className="text-2xl sm:text-4xl font-serif font-black text-gold-300 mb-1">
                {metric.value}
              </div>
              <div className="text-xs uppercase font-mono tracking-wider text-neutral-400">
                {metric.label}
              </div>
            </div>
          ))}
        </div>

        {/* Featured Commercial Campaigns Showcase */}
        <div className="mb-20">
          <div className="flex items-center justify-between mb-8">
            <h3 className="text-xl sm:text-2xl font-serif font-bold text-white flex items-center gap-2">
              <Award className="w-5 h-5 text-gold-400" />
              <span>Flagship Commercial Endorsements</span>
            </h3>
            <span className="text-xs text-neutral-400 font-mono hidden sm:inline">
              Verified Brand Partnerships
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {commercialsAndUgc.brandsShowcase.map((brand, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-obsidian-900/60 border border-neutral-800 hover:border-gold-400/40 transition-all flex flex-col justify-between group hover:-translate-y-1"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="px-2.5 py-1 rounded-full bg-gold-500/10 border border-gold-500/20 text-gold-300 font-mono text-[10px] font-semibold">
                      {brand.year}
                    </span>
                    <span className="text-[11px] text-emerald-400 font-mono font-medium">
                      {brand.reach}
                    </span>
                  </div>

                  <h4 className="text-lg font-serif font-bold text-white group-hover:text-gold-200 transition-colors mb-1">
                    {brand.name}
                  </h4>
                  <div className="text-xs text-gold-400/90 font-medium mb-3">
                    {brand.campaign}
                  </div>

                  <p className="text-xs text-neutral-400 font-light leading-relaxed mb-4">
                    Category: {brand.category}
                  </p>
                </div>

                <div className="pt-3 border-t border-neutral-800/80 text-[11px] text-neutral-400 font-mono">
                  Scope: {brand.deliverables}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* UGC Formats & Partnership Offerings */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-20">
          {commercialsAndUgc.ugcServices.map((svc, i) => (
            <div
              key={i}
              className="p-8 rounded-3xl bg-obsidian-900 border border-neutral-800 hover:border-gold-500/40 transition-all flex flex-col justify-between"
            >
              <div>
                <div className="w-12 h-12 rounded-2xl bg-gold-500/10 border border-gold-500/30 flex items-center justify-center text-gold-300 mb-6">
                  <Video className="w-6 h-6" />
                </div>
                <h4 className="text-xl font-serif font-bold text-white mb-2">
                  {svc.title}
                </h4>
                <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed font-light mb-6">
                  {svc.desc}
                </p>
              </div>

              <div className="space-y-3 pt-4 border-t border-neutral-800">
                <div className="flex items-center justify-between text-xs">
                  <span className="text-neutral-500 font-mono">Typical Turnaround:</span>
                  <span className="text-gold-300 font-semibold">{svc.turnaround}</span>
                </div>
                <div className="flex items-center justify-between text-xs">
                  <span className="text-neutral-500 font-mono">Ideal For:</span>
                  <span className="text-neutral-300">{svc.idealFor}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Interactive Campaign & UGC Rate Estimator Desk */}
        <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-br from-obsidian-900 via-obsidian-950 to-obsidian-900 border border-gold-500/40 shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            <div className="lg:col-span-5 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold-500/20 text-gold-300 text-xs font-mono uppercase tracking-wider">
                <Calculator className="w-3.5 h-3.5" />
                <span>Executive Rate Desk</span>
              </div>
              <h3 className="text-2xl sm:text-4xl font-serif font-bold text-white">
                Plan Your Brand Campaign
              </h3>
              <p className="text-sm text-neutral-400 leading-relaxed">
                Marketing agencies, luxury brands, and commercial production directors can configure initial campaign requirements. Your brief is reviewed directly by executive talent management.
              </p>
              <div className="space-y-2 text-xs text-neutral-300 pt-2">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-gold-400" />
                  <span>Official representation via ONE ICA & Management</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-emerald-400" />
                  <span>Direct formal proposal to info@noumanijaz.com</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-7 p-6 sm:p-8 rounded-2xl bg-obsidian-950 border border-neutral-800">
              <form onSubmit={handleCalculate} className="space-y-5">
                <div>
                  <label className="block text-xs uppercase font-mono tracking-wider text-neutral-400 mb-2">
                    Select Campaign Format
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {serviceOptions.map((opt) => (
                      <button
                        type="button"
                        key={opt.id}
                        onClick={() => setSelectedService(opt.id)}
                        className={`p-3 rounded-xl border text-left text-xs transition-all ${
                          selectedService === opt.id
                            ? 'bg-gold-500/15 border-gold-400 text-gold-200'
                            : 'bg-obsidian-900 border-neutral-800 text-neutral-400 hover:border-neutral-700'
                        }`}
                      >
                        <div className="font-semibold">{opt.label}</div>
                        <div className="text-[10px] text-neutral-400 mt-0.5">{opt.deliverable}</div>
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-xs uppercase font-mono tracking-wider text-neutral-400 mb-2">
                    Target Territory & Demographics
                  </label>
                  <div className="grid grid-cols-3 gap-2 text-xs">
                    {[
                      { id: 'pak-only', label: 'Pakistan Domestic' },
                      { id: 'pak-intl', label: 'South Asia & Diaspora' },
                      { id: 'global-all', label: 'Global 360° Omnichannel' },
                    ].map((item) => (
                      <button
                        type="button"
                        key={item.id}
                        onClick={() => setSelectedReach(item.id)}
                        className={`p-2.5 rounded-xl border text-center transition-all ${
                          selectedReach === item.id
                            ? 'bg-gold-500/20 border-gold-400 text-white font-semibold'
                            : 'bg-obsidian-900 border-neutral-800 text-neutral-400'
                        }`}
                      >
                        {item.label}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="pt-2 flex flex-col sm:flex-row items-center gap-3">
                  <button
                    type="submit"
                    className="w-full sm:w-auto flex-1 py-3.5 px-6 rounded-xl bg-gradient-to-r from-gold-500 via-gold-400 to-amber-500 text-obsidian-950 font-bold text-xs uppercase tracking-wider shadow-lg hover:scale-102 transition-all flex items-center justify-center gap-2"
                  >
                    <span>Request Campaign Availability</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>

                  <button
                    type="button"
                    onClick={onOpenChat}
                    className="w-full sm:w-auto py-3.5 px-5 rounded-xl border border-neutral-700 text-xs font-semibold text-neutral-300 hover:text-white uppercase tracking-wider"
                  >
                    Discuss in Live Chat
                  </button>
                </div>

                {calculatorCalculated && (
                  <div className="p-4 rounded-xl bg-gold-950/30 border border-gold-500/40 text-xs text-gold-200 animate-in fade-in">
                    <p className="font-semibold mb-1">✓ Campaign Scope Logged</p>
                    <p className="text-neutral-300 text-[11px]">
                      Selected: <strong>{serviceOptions.find((s) => s.id === selectedService)?.label}</strong>. Direct inquiry automatically formatted for executive review. You can also send your complete media deck to <strong>info@noumanijaz.com</strong>.
                    </p>
                  </div>
                )}
              </form>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
