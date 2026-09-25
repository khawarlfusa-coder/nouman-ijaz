import React, { useState } from 'react';
import { CELEBRITY_DATA } from '../data/celebrityData';
import { Sparkles, Clapperboard, Bell, Check, Clock, Calendar, Shield } from 'lucide-react';

export default function UpcomingProjects({ onOpenChat }) {
  const { upcomingProjects } = CELEBRITY_DATA;
  const [notifiedIds, setNotifiedIds] = useState([]);

  const toggleNotify = (id) => {
    if (notifiedIds.includes(id)) {
      setNotifiedIds(notifiedIds.filter((item) => item !== id));
    } else {
      setNotifiedIds([...notifiedIds, id]);
    }
  };

  return (
    <section id="upcoming" className="relative py-24 bg-obsidian-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold-500/10 border border-gold-500/30 text-gold-300 text-xs font-mono uppercase tracking-widest mb-3">
              <Sparkles className="w-3.5 h-3.5" />
              <span>In The Pipeline</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-serif font-black text-white tracking-tight">
              Upcoming <span className="gold-gradient-text">Ventures</span>
            </h2>
            <p className="text-neutral-400 text-sm sm:text-base mt-2 max-w-xl">
              Confidential previews of upcoming theatrical motion pictures, global streaming originals, and international stage monologues.
            </p>
          </div>

          <div className="p-3 rounded-2xl bg-obsidian-900 border border-neutral-800 flex items-center gap-3">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse"></span>
            <span className="text-xs font-mono text-neutral-300">Representation: Scripts accepted for 2026/2027</span>
          </div>
        </div>

        {/* Upcoming Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {upcomingProjects.map((project) => (
            <div
              key={project.id}
              className="p-8 rounded-3xl bg-gradient-to-b from-obsidian-900 to-obsidian-950 border border-neutral-800 hover:border-gold-500/40 transition-all duration-300 hover:-translate-y-2 flex flex-col justify-between group shadow-xl relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-gold-500/5 rounded-full blur-2xl pointer-events-none"></div>

              <div>
                {/* Badge & Timeline */}
                <div className="flex items-center justify-between mb-4">
                  <span className="px-3 py-1 rounded-full bg-gold-500/20 border border-gold-500/40 text-gold-300 font-mono text-[11px] font-semibold uppercase">
                    {project.badge}
                  </span>
                  <span className="text-xs text-neutral-400 font-mono flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5 text-gold-400" />
                    <span>{project.timeline}</span>
                  </span>
                </div>

                {/* Project Title */}
                <h3 className="text-2xl font-serif font-black text-white group-hover:text-gold-200 transition-colors mb-1">
                  {project.title}
                </h3>
                <div className="text-xs text-gold-400/90 font-mono mb-4">
                  {project.type}
                </div>

                {/* Tagline */}
                <p className="text-xs font-serif italic text-neutral-300 mb-3 border-l-2 border-gold-500 pl-3">
                  "{project.tagline}"
                </p>

                {/* Description */}
                <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed font-light mb-6">
                  {project.description}
                </p>

                {/* Status Box */}
                <div className="p-3 rounded-xl bg-obsidian-950 border border-neutral-800/80 mb-6">
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-neutral-400 font-mono">Current Status:</span>
                    <span className="text-gold-300 font-semibold">{project.status}</span>
                  </div>
                  <div className="flex items-center justify-between text-xs mt-1">
                    <span className="text-neutral-400 font-mono">Helmed By:</span>
                    <span className="text-neutral-300">{project.director}</span>
                  </div>
                </div>
              </div>

              {/* Action */}
              <div className="pt-4 border-t border-neutral-800/80 flex items-center justify-between gap-3">
                <button
                  onClick={() => toggleNotify(project.id)}
                  className={`flex-1 py-2.5 px-4 rounded-xl border text-xs font-semibold uppercase tracking-wider flex items-center justify-center gap-2 transition-all ${
                    notifiedIds.includes(project.id)
                      ? 'bg-emerald-950/60 border-emerald-500/50 text-emerald-300'
                      : 'bg-obsidian-900 border-neutral-800 text-neutral-300 hover:border-gold-500/40 hover:text-white'
                  }`}
                >
                  {notifiedIds.includes(project.id) ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                      <span>Alert Set</span>
                    </>
                  ) : (
                    <>
                      <Bell className="w-3.5 h-3.5 text-gold-400" />
                      <span>Premiere Alert</span>
                    </>
                  )}
                </button>

                <button
                  onClick={onOpenChat}
                  title="Inquire about distribution or casting"
                  className="p-2.5 rounded-xl bg-gold-500/10 hover:bg-gold-500 text-gold-300 hover:text-black border border-gold-500/30 transition-all"
                >
                  <Sparkles className="w-4 h-4" />
                </button>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
