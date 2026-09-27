import React from 'react';
import { CELEBRITY_DATA } from '../data/celebrityData';
import { Play } from 'lucide-react';

export default function EditorialStories({ onSelectStory }) {
  const { stories } = CELEBRITY_DATA;

  return (
    <section id="stories" className="relative py-20 bg-obsidian-950 border-b border-neutral-900">
      <div className="max-w-7xl mx-auto px-6 sm:px-10">
        
        {/* Minimal Section Label */}
        <div className="flex items-center justify-between mb-8 border-b border-neutral-900 pb-4">
          <div className="flex items-center space-x-2 text-xs font-mono uppercase tracking-[0.2em] text-neutral-400">
            <span className="w-2 h-2 rounded-full bg-gold-400 animate-pulse"></span>
            <span>DISPATCHES • LIVE 24H MOMENTS</span>
          </div>
          <span className="text-[11px] font-mono text-neutral-500 hidden sm:inline">
            TAP TO VIEW FULL-SCREEN STORY
          </span>
        </div>

        {/* Stories Horizontal Tray */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6">
          {stories.map((story, index) => (
            <button
              key={story.id}
              onClick={() => onSelectStory(index)}
              className="group text-left focus:outline-none flex flex-col space-y-3 cursor-pointer"
            >
              {/* Portrait Aspect Card */}
              <div className="relative aspect-[3/4] w-full rounded-xl overflow-hidden bg-obsidian-900 border border-neutral-800/80 group-hover:border-gold-400/60 transition-all duration-500 shadow-xl group-hover:-translate-y-1">
                <img
                  src={story.image}
                  alt={story.title}
                  className="w-full h-full object-cover object-top filter grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-obsidian-950 via-transparent to-transparent opacity-80"></div>
                
                {/* Thin Golden Ring Icon */}
                <div className="absolute top-2.5 right-2.5 w-6 h-6 rounded-full border border-gold-400/50 bg-black/60 flex items-center justify-center text-gold-300">
                  <Play className="w-2.5 h-2.5 fill-gold-400 text-gold-400 ml-0.5" />
                </div>

                <div className="absolute bottom-2.5 left-2.5 right-2.5">
                  <span className="text-[9px] font-mono uppercase tracking-widest text-gold-400 block mb-0.5">
                    {story.tag}
                  </span>
                  <div className="text-xs font-serif font-bold text-white group-hover:text-gold-200 transition-colors truncate">
                    {story.title}
                  </div>
                </div>
              </div>

              <div className="text-[10px] font-mono text-neutral-500 flex items-center justify-between">
                <span>{story.subtitle}</span>
                <span className="text-neutral-400">{story.date}</span>
              </div>
            </button>
          ))}
        </div>

      </div>
    </section>
  );
}
