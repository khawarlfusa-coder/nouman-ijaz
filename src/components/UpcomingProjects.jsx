import React, { useState } from 'react';
import { CELEBRITY_DATA } from '../data/celebrityData';
import { Bell, Check, Clock, Sparkles } from 'lucide-react';

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
    <section id="upcoming" className="relative py-24 bg-obsidian-950 border-t border-neutral-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-2xl mb-16 space-y-2">
          <span className="text-[11px] font-mono uppercase tracking-widest text-gold-400">
            Forthcoming
          </span>
          <h2 className="text-3xl sm:text-5xl font-serif font-black text-white tracking-tight">
            Upcoming <span className="gold-gradient-text">Ventures</span>
          </h2>
          <p className="text-neutral-400 text-sm leading-relaxed">
            Confidential look into upcoming 70mm cinema productions, international streaming series, and live stage masterclasses.
          </p>
        </div>

        {/* 3-Column Clean Card Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {upcomingProjects.map((project) => (
            <div
              key={project.id}
              className="rounded-2xl overflow-hidden bg-obsidian-900/40 border border-neutral-800 hover:border-gold-500/40 transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                {/* Visual Image Header */}
                <div className="relative aspect-[16/10] overflow-hidden bg-obsidian-950">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-obsidian-950 via-transparent to-transparent"></div>
                  <span className="absolute top-3 right-3 px-2.5 py-0.5 rounded-md bg-obsidian-950/80 backdrop-blur-sm border border-neutral-800 text-[10px] font-mono text-gold-400 uppercase">
                    {project.badge}
                  </span>
                </div>

                <div className="p-6 space-y-3">
                  <div className="text-[11px] text-neutral-500 font-mono flex items-center gap-1.5">
                    <Clock className="w-3 h-3 text-gold-400" />
                    <span>{project.timeline}</span>
                  </div>

                  <h3 className="text-xl font-serif font-bold text-white group-hover:text-gold-200 transition-colors">
                    {project.title}
                  </h3>

                  <p className="text-xs text-neutral-400 font-light leading-relaxed">
                    {project.description}
                  </p>
                </div>
              </div>

              <div className="p-6 pt-0 border-t border-neutral-900 flex items-center justify-between">
                <button
                  onClick={() => toggleNotify(project.id)}
                  className={`text-xs font-semibold uppercase tracking-wider flex items-center gap-1.5 transition-colors ${
                    notifiedIds.includes(project.id)
                      ? 'text-emerald-400'
                      : 'text-neutral-400 hover:text-white'
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
                      <span>Notify Premiere</span>
                    </>
                  )}
                </button>

                <button
                  onClick={onOpenChat}
                  className="text-xs text-neutral-500 hover:text-gold-300 font-mono"
                >
                  Inquire
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
