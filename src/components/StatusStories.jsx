import React from 'react';
import { CELEBRITY_DATA } from '../data/celebrityData';
import { Sparkles, Eye, Flame, Play } from 'lucide-react';

export default function StatusStories({ onSelectStory }) {
  const { statusStories } = CELEBRITY_DATA;

  return (
    <section id="stories" className="relative py-12 bg-obsidian-900/60 border-y border-neutral-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-4">
          <div>
            <div className="inline-flex items-center gap-1.5 text-xs font-mono uppercase tracking-widest text-gold-400 mb-1">
              <span className="w-2 h-2 rounded-full bg-gold-400 animate-pulse"></span>
              Live Celebrity Status & Moments
            </div>
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-white">
              Official Stories & Behind-The-Scenes
            </h2>
            <p className="text-sm text-neutral-400 mt-1">
              Tap any status bubble to view candid updates, set moments, and monologues.
            </p>
          </div>

          <div className="flex items-center gap-2 text-xs text-neutral-400">
            <span className="inline-block w-2.5 h-2.5 rounded-full bg-gradient-to-r from-amber-400 to-rose-500"></span>
            <span>Tap ring to view 24h stories</span>
          </div>
        </div>

        {/* Stories Horizontal Tray */}
        <div className="flex items-center space-x-6 overflow-x-auto pb-4 pt-2 no-scrollbar scroll-smooth">
          {statusStories.map((story, index) => (
            <button
              key={story.id}
              onClick={() => onSelectStory(index)}
              className="flex flex-col items-center flex-shrink-0 group focus:outline-none focus-visible:ring-2 focus-visible:ring-gold-400 rounded-2xl p-2 transition-transform active:scale-95"
            >
              {/* Outer Glowing Gradient Ring */}
              <div
                className={`relative w-20 h-20 sm:w-24 sm:h-24 p-[3px] rounded-full bg-gradient-to-tr ${story.ringColor} shadow-lg group-hover:scale-105 transition-all duration-300 group-hover:shadow-gold-500/20`}
              >
                {/* Inner Obsidian Gap */}
                <div className="w-full h-full rounded-full p-[2px] bg-obsidian-950">
                  <div className="w-full h-full rounded-full overflow-hidden bg-obsidian-900 relative">
                    <img
                      src={story.avatar}
                      alt={story.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors"></div>
                  </div>
                </div>

                {/* Small Play / Badge Indicator */}
                <div className="absolute bottom-0 right-1 w-6 h-6 rounded-full bg-obsidian-950 border border-gold-400/50 flex items-center justify-center text-gold-300 shadow">
                  <Play className="w-2.5 h-2.5 fill-gold-300 ml-0.5" />
                </div>
              </div>

              {/* Story Title & Timestamp */}
              <div className="mt-2.5 text-center max-w-[90px]">
                <div className="text-xs font-semibold text-neutral-200 group-hover:text-gold-300 truncate">
                  {story.title}
                </div>
                <div className="text-[10px] text-neutral-500 font-mono mt-0.5">
                  {story.timestamp}
                </div>
              </div>
            </button>
          ))}
        </div>

      </div>
    </section>
  );
}
