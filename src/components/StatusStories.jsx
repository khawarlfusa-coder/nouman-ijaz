import React from 'react';
import { CELEBRITY_DATA } from '../data/celebrityData';
import { Play } from 'lucide-react';

export default function StatusStories({ onSelectStory }) {
  const { statusStories } = CELEBRITY_DATA;

  return (
    <section id="stories" className="relative py-12 bg-obsidian-950 border-y border-neutral-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Subtle Section Header */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-gold-400 animate-pulse"></span>
            <h2 className="text-xs uppercase font-mono tracking-widest text-neutral-400">
              Live Status & Stories
            </h2>
          </div>
          <span className="text-[11px] font-mono text-neutral-500 hidden sm:inline">
            Tap avatar to open 24h updates
          </span>
        </div>

        {/* Stories Horizontal Tray */}
        <div className="flex items-center space-x-6 sm:space-x-8 overflow-x-auto pb-2 pt-1 no-scrollbar scroll-smooth">
          {statusStories.map((story, index) => (
            <button
              key={story.id}
              onClick={() => onSelectStory(index)}
              className="flex flex-col items-center flex-shrink-0 group focus:outline-none transition-transform active:scale-95"
            >
              {/* Outer Glowing Gradient Ring */}
              <div
                className={`relative w-20 h-20 sm:w-24 sm:h-24 p-[2.5px] rounded-full bg-gradient-to-tr ${story.ringColor} shadow group-hover:scale-105 transition-all duration-300`}
              >
                {/* Inner Black Gap */}
                <div className="w-full h-full rounded-full p-[2px] bg-obsidian-950">
                  <div className="w-full h-full rounded-full overflow-hidden bg-obsidian-900 relative">
                    <img
                      src={story.avatar}
                      alt={story.title}
                      className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                </div>

                {/* Micro Play Badge */}
                <div className="absolute bottom-0 right-1 w-5 h-5 rounded-full bg-obsidian-950 border border-neutral-700 flex items-center justify-center text-gold-300">
                  <Play className="w-2 h-2 fill-gold-400 text-gold-400 ml-0.5" />
                </div>
              </div>

              {/* Story Title & Timestamp */}
              <div className="mt-2 text-center max-w-[85px]">
                <div className="text-xs font-medium text-neutral-300 group-hover:text-gold-300 truncate">
                  {story.title}
                </div>
                <div className="text-[10px] text-neutral-500 font-mono">
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
