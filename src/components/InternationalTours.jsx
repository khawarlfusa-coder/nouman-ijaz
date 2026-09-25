import React, { useState } from 'react';
import { CELEBRITY_DATA } from '../data/celebrityData';
import { Globe, MapPin, Calendar, Ticket, Crown, CheckCircle, ArrowRight } from 'lucide-react';

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
    <section id="tours" className="relative py-24 bg-obsidian-900/60 border-t border-neutral-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold-500/10 border border-gold-500/30 text-gold-300 text-xs font-mono uppercase tracking-widest">
            <Globe className="w-3.5 h-3.5" />
            <span>Worldwide Diaspora & Galas</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-serif font-black text-white tracking-tight">
            International <span className="gold-gradient-text">Appearances</span>
          </h2>
          <p className="text-neutral-400 text-sm sm:text-base leading-relaxed">
            Connecting with millions of admirers across North America, the United Kingdom, Europe, and the Middle East for exclusive keynote monologues, cinema galas, and VIP meet-and-greets.
          </p>
        </div>

        {/* Events Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {internationalEvents.map((evt) => (
            <div
              key={evt.id}
              className="p-8 rounded-3xl bg-obsidian-950 border border-neutral-800 hover:border-gold-500/40 transition-all duration-300 hover:shadow-2xl hover:shadow-gold-500/10 flex flex-col justify-between group"
            >
              <div>
                {/* City & Status Badge */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2 text-gold-400 font-mono text-sm font-semibold">
                    <MapPin className="w-4 h-4 text-gold-400 flex-shrink-0" />
                    <span>{evt.city}</span>
                  </div>
                  <span className="px-3 py-1 rounded-full bg-gold-500/10 border border-gold-500/30 text-gold-300 font-mono text-xs">
                    {evt.status}
                  </span>
                </div>

                {/* Event Name */}
                <h3 className="text-2xl font-serif font-bold text-white group-hover:text-gold-200 transition-colors mb-2">
                  {evt.event}
                </h3>

                {/* Venue & Date */}
                <div className="space-y-1.5 mb-6 text-xs sm:text-sm text-neutral-300">
                  <div className="flex items-center gap-2 text-neutral-400">
                    <Calendar className="w-3.5 h-3.5 text-gold-400" />
                    <span>{evt.date}</span>
                  </div>
                  <div className="flex items-center gap-2 text-neutral-400">
                    <span className="w-1.5 h-1.5 rounded-full bg-neutral-600"></span>
                    <span>Venue: {evt.venue}</span>
                  </div>
                  <div className="flex items-center gap-2 text-neutral-400">
                    <span className="w-1.5 h-1.5 rounded-full bg-neutral-600"></span>
                    <span>Format: {evt.type}</span>
                  </div>
                </div>

                {/* VIP Perks */}
                <div className="p-4 rounded-2xl bg-obsidian-900 border border-neutral-800/80 mb-6">
                  <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-gold-400 font-semibold mb-1">
                    <Crown className="w-3.5 h-3.5" />
                    <span>VIP Inclusions</span>
                  </div>
                  <p className="text-xs text-neutral-300 leading-relaxed font-light">
                    {evt.vipPerks}
                  </p>
                </div>
              </div>

              {/* Booking Action */}
              <div className="pt-4 border-t border-neutral-800/80 flex items-center justify-between gap-4">
                <button
                  onClick={onOpenChat}
                  className="flex-1 py-3 px-4 rounded-xl bg-gradient-to-r from-gold-500 via-gold-400 to-amber-500 text-obsidian-950 font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow hover:scale-102 active:scale-98 transition-all"
                >
                  <Ticket className="w-3.5 h-3.5" />
                  <span>Request VIP Pass</span>
                </button>
              </div>

            </div>
          ))}
        </div>

        {/* "Request Tour In Your City" Interactive Banner */}
        <div className="p-8 sm:p-10 rounded-3xl bg-gradient-to-r from-obsidian-900 via-obsidian-850 to-obsidian-900 border border-gold-500/30 flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="space-y-2 text-center lg:text-left">
            <span className="text-xs font-mono uppercase tracking-widest text-gold-400 font-semibold">
              Host Naumaan Ijaz Overseas
            </span>
            <h3 className="text-2xl sm:text-3xl font-serif font-bold text-white">
              Want a Tour Date in Your City?
            </h3>
            <p className="text-sm text-neutral-400 max-w-xl">
              South Asian student societies, cultural organizations, and community event organizers can request international appearances and spoken-word keynote sessions.
            </p>
          </div>

          <form onSubmit={handleCitySubmit} className="w-full lg:w-auto flex-shrink-0 flex flex-col sm:flex-row gap-3">
            <input
              type="text"
              placeholder="e.g. Sydney, Chicago, Birmingham..."
              value={requestedCity}
              onChange={(e) => setRequestedCity(e.target.value)}
              className="px-5 py-3.5 rounded-xl bg-obsidian-950 border border-neutral-700 text-white placeholder-neutral-500 text-xs sm:text-sm focus:outline-none focus:border-gold-400 w-full sm:w-72"
            />
            <button
              type="submit"
              className="px-6 py-3.5 rounded-xl bg-gold-500 hover:bg-gold-400 text-obsidian-950 font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 whitespace-nowrap transition-all shadow"
            >
              {citySubmitted ? (
                <>
                  <CheckCircle className="w-4 h-4 text-obsidian-950" />
                  <span>City Logged!</span>
                </>
              ) : (
                <>
                  <span>Submit City</span>
                  <ArrowRight className="w-4 h-4" />
                </>
              )}
            </button>
          </form>
        </div>

      </div>
    </section>
  );
}
