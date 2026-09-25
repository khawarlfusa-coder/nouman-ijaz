import React, { useState } from 'react';
import { CELEBRITY_DATA } from '../data/celebrityData';
import { MapPin, Calendar, ArrowRight, CheckCircle } from 'lucide-react';

export default function InternationalTours({ onOpenChat }) {
  const { internationalEvents } = CELEBRITY_DATA;
  const [requestedCity, setRequestedCity] = useState('');
  const [citySubmitted, setCitySubmitted] = useState(false);

  const handleCitySubmit = (e) => {
    e.preventDefault();
    if (!requestedCity.trim()) return;
    setCitySubmitted(true);
    setTimeout(() => {
      setCitySubmitted(false);
      setRequestedCity('');
    }, 4000);
  };

  return (
    <section id="tours" className="relative py-24 bg-obsidian-950 border-t border-neutral-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-2xl mb-16 space-y-2">
          <span className="text-[11px] font-mono uppercase tracking-widest text-gold-400">
            Global Appearances
          </span>
          <h2 className="text-3xl sm:text-5xl font-serif font-black text-white tracking-tight">
            International <span className="gold-gradient-text">Galas</span>
          </h2>
          <p className="text-neutral-400 text-sm leading-relaxed">
            Connecting with diaspora audiences across North America, the United Kingdom, Europe, and the Middle East.
          </p>
        </div>

        {/* 2-Column Minimalist Grid with Distinct Visuals */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {internationalEvents.map((evt) => (
            <div
              key={evt.id}
              className="rounded-2xl overflow-hidden bg-obsidian-900/40 border border-neutral-800 hover:border-gold-500/40 transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="relative aspect-[16/9] overflow-hidden bg-obsidian-950">
                  <img
                    src={evt.image}
                    alt={evt.city}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-obsidian-950 via-transparent to-transparent"></div>
                  <span className="absolute top-3 left-3 px-2.5 py-0.5 rounded-md bg-obsidian-950/80 backdrop-blur-sm border border-neutral-800 text-[10px] font-mono text-gold-400 uppercase">
                    {evt.status}
                  </span>
                </div>

                <div className="p-6 space-y-2">
                  <div className="flex items-center gap-1.5 text-xs text-neutral-400 font-mono">
                    <MapPin className="w-3.5 h-3.5 text-gold-400" />
                    <span>{evt.city}</span>
                    <span className="text-neutral-600">•</span>
                    <span>{evt.date}</span>
                  </div>

                  <h3 className="text-xl font-serif font-bold text-white group-hover:text-gold-200 transition-colors">
                    {evt.event}
                  </h3>

                  <p className="text-xs text-neutral-400 font-light leading-relaxed">
                    Venue: {evt.venue} — {evt.vipPerks}
                  </p>
                </div>
              </div>

              <div className="p-6 pt-0 border-t border-neutral-900/60 flex items-center justify-between">
                <button
                  onClick={onOpenChat}
                  className="text-xs font-semibold uppercase tracking-wider text-gold-400 hover:text-white transition-colors"
                >
                  Request VIP Pass →
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Clean City Request Strip */}
        <div className="p-6 sm:p-8 rounded-2xl bg-obsidian-900/40 border border-neutral-800 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center sm:text-left">
            <h3 className="text-base font-serif font-bold text-white">
              Want a Tour Appearance in Your City?
            </h3>
            <p className="text-xs text-neutral-400">
              South Asian community organizations and student societies can suggest host cities.
            </p>
          </div>

          <form onSubmit={handleCitySubmit} className="flex gap-2 w-full sm:w-auto">
            <input
              type="text"
              placeholder="e.g. Sydney, Chicago, Birmingham..."
              value={requestedCity}
              onChange={(e) => setRequestedCity(e.target.value)}
              className="px-4 py-2 rounded-xl bg-obsidian-950 border border-neutral-800 text-xs text-white placeholder-neutral-500 focus:outline-none focus:border-gold-400 w-full sm:w-64"
            />
            <button
              type="submit"
              className="px-5 py-2 rounded-xl bg-gold-500 hover:bg-gold-400 text-obsidian-950 font-bold text-xs uppercase tracking-wider transition-colors whitespace-nowrap"
            >
              {citySubmitted ? "Logged!" : "Submit"}
            </button>
          </form>
        </div>

      </div>
    </section>
  );
}
