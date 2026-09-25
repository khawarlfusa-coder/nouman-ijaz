import React, { useState } from 'react';
import { X, Play, Pause, Volume2, VolumeX, Sparkles, Film, Star } from 'lucide-react';

export default function ShowreelModal({ isOpen, onClose, onOpenChat }) {
  if (!isOpen) return null;

  const [activeClip, setActiveClip] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  const clips = [
    {
      title: "Parizaad — Behroze Karim's Immortal Monologue",
      drama: "Parizaad (Hum TV Landmark)",
      quote: "ہم جیسے لوگ محبت میں بھی سودا نہیں کرتے، اپنی جان نچھاور کر دیتے ہیں۔",
      quoteEn: "Men like us do not negotiate in love; we surrender our very souls.",
      duration: "03:45",
      badge: "Global Phenomenon",
      backdrop: "/assets/images/event-stage.jpg",
      awards: "Hum Award for Best Supporting Actor"
    },
    {
      title: "Sang-e-Mah — Haji Marjaan's Tribal Jirga Judgment",
      drama: "Sang-e-Mah (Hum TV)",
      quote: "جرگے کا فیصلہ پتھر پر لکیر ہوتا ہے، اور حاجی مرجان کبھی اپنے لفظ سے پیچھے نہیں ہٹتا۔",
      quoteEn: "The verdict of the Jirga is carved in stone, and Haji Marjaan never retreats from his word.",
      duration: "04:12",
      badge: "Critics' Choice",
      backdrop: "/assets/images/awards-trophy.jpg",
      awards: "Critically Acclaimed Monologue"
    },
    {
      title: "Duniyapur — Nauroz Adam's Feudal Confrontation",
      drama: "Duniyapur (Green Entertainment)",
      quote: "دنیا پور میں قانون صرف میرا ہے، اور عدل بھی وہی جو میں چاہوں۔",
      quoteEn: "In Duniyapur, the law is mine alone, and justice is what I decree.",
      duration: "02:50",
      badge: "Blockbuster Action",
      backdrop: "/assets/images/event-stage.jpg",
      awards: "Top Trending Masterpiece"
    }
  ];

  const current = clips[activeClip];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/95 backdrop-blur-2xl animate-in fade-in duration-200">
      <div className="absolute inset-0" onClick={onClose}></div>

      <div className="relative z-10 w-full max-w-4xl rounded-3xl overflow-hidden bg-obsidian-950 border border-gold-500/40 shadow-2xl">
        
        {/* Modal Top Bar */}
        <div className="p-4 sm:p-5 bg-obsidian-900 border-b border-neutral-800 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 rounded-full bg-gold-500/20 border border-gold-500/40 flex items-center justify-center text-gold-300">
              <Film className="w-4 h-4" />
            </div>
            <div>
              <div className="text-sm font-serif font-bold text-white flex items-center gap-2">
                <span>The Masterclass Showreel</span>
                <span className="text-[10px] px-2 py-0.5 rounded-full bg-gold-500/10 text-gold-400 font-mono">HD Archival</span>
              </div>
              <div className="text-xs text-neutral-400">{current.drama}</div>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-full text-neutral-400 hover:text-white hover:bg-neutral-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Cinematic Video Simulation Screen */}
        <div className="relative aspect-video w-full bg-black overflow-hidden flex items-center justify-center group">
          <img
            src={current.backdrop}
            alt={current.title}
            className={`w-full h-full object-cover transition-all duration-700 ${isPlaying ? 'scale-105 opacity-80' : 'opacity-40'}`}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-obsidian-950 via-black/40 to-black/30"></div>

          {/* Subtitles / Quote Overlay */}
          <div className="absolute bottom-12 left-6 right-6 text-center space-y-2 select-none">
            <p className="font-serif text-xl sm:text-2xl lg:text-3xl text-gold-200 font-medium font-['Noto_Nastaliq_Urdu'] leading-relaxed drop-shadow-md">
              "{current.quote}"
            </p>
            <p className="text-xs sm:text-sm text-neutral-300 font-light italic max-w-xl mx-auto drop-shadow">
              "{current.quoteEn}"
            </p>
          </div>

          {/* Center Play/Pause button */}
          <button
            onClick={() => setIsPlaying(!isPlaying)}
            className="absolute z-20 w-16 h-16 rounded-full bg-gold-500/90 text-obsidian-950 flex items-center justify-center shadow-2xl hover:scale-110 active:scale-95 transition-all"
          >
            {isPlaying ? (
              <Pause className="w-6 h-6 fill-obsidian-950" />
            ) : (
              <Play className="w-6 h-6 fill-obsidian-950 ml-1" />
            )}
          </button>

          {/* Top Badge */}
          <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-obsidian-950/80 backdrop-blur-md border border-gold-500/30 text-gold-300 text-xs font-mono">
            {current.badge}
          </div>
        </div>

        {/* Clip Selector Tabs */}
        <div className="p-4 sm:p-6 bg-obsidian-900/90 border-t border-neutral-800 space-y-4">
          <div className="flex items-center justify-between">
            <span className="text-xs uppercase font-mono tracking-wider text-neutral-400">
              Select Character Reel
            </span>
            <span className="text-xs text-gold-400 font-mono">
              Clip {activeClip + 1} of {clips.length}
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {clips.map((clip, idx) => (
              <button
                key={idx}
                onClick={() => {
                  setActiveClip(idx);
                  setIsPlaying(true);
                }}
                className={`p-3 rounded-2xl border text-left transition-all ${
                  activeClip === idx
                    ? 'bg-gold-500/15 border-gold-400 text-white shadow-lg shadow-gold-500/10'
                    : 'bg-obsidian-950 border-neutral-800 text-neutral-400 hover:border-neutral-700'
                }`}
              >
                <div className="font-semibold text-xs truncate text-white">{clip.drama}</div>
                <div className="text-[11px] text-neutral-400 truncate mt-0.5">{clip.title.split('—')[1]}</div>
                <div className="text-[10px] text-gold-400 font-mono mt-1">{clip.duration}</div>
              </button>
            ))}
          </div>

          <div className="pt-2 flex items-center justify-between">
            <button
              onClick={() => {
                onClose();
                onOpenChat();
              }}
              className="text-xs text-gold-300 hover:text-white font-mono flex items-center gap-1.5"
            >
              <Sparkles className="w-3.5 h-3.5 text-gold-400" />
              <span>Inquire for Film & Web Series Screenplay</span>
            </button>

            <button
              onClick={onClose}
              className="px-5 py-2 rounded-xl bg-obsidian-950 border border-neutral-700 text-xs uppercase font-semibold text-neutral-300 hover:text-white"
            >
              Close
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}
