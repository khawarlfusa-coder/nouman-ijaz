import React, { useState, useEffect } from 'react';
import { CELEBRITY_DATA } from '../data/celebrityData';
import { X, ChevronLeft, ChevronRight, Pause, Play, Send } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function StoryModal({ storyIndex, onClose, onOpenChat }) {
  const stories = CELEBRITY_DATA.stories || [];
  const currentStory = stories[storyIndex];

  const [progress, setProgress] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [reactionCounts, setReactionCounts] = useState({ '🔥': 340, '👑': 780, '❤️': 1200, '👏': 210 });
  const [floatingReaction, setFloatingReaction] = useState(null);

  const duration = 6000;

  useEffect(() => {
    if (isPaused) return;

    const intervalTime = 50;
    const step = (intervalTime / duration) * 100;

    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          handleNext();
          return 0;
        }
        return prev + step;
      });
    }, intervalTime);

    return () => clearInterval(timer);
  }, [storyIndex, isPaused]);

  useEffect(() => {
    setProgress(0);
  }, [storyIndex]);

  const handleNext = () => {
    if (storyIndex < stories.length - 1) {
      // Advance to next story
      setProgress(0);
    } else {
      onClose();
    }
  };

  const handlePrev = () => {
    setProgress(0);
  };

  const triggerReaction = (emoji, e) => {
    e.stopPropagation();
    setReactionCounts((prev) => ({
      ...prev,
      [emoji]: (prev[emoji] || 0) + 1,
    }));
    setFloatingReaction(emoji);
    setTimeout(() => setFloatingReaction(null), 1000);

    confetti({
      particleCount: 20,
      spread: 50,
      origin: { y: 0.8 },
      colors: ['#CFA738', '#E6C564', '#FFFFFF']
    });
  };

  if (!currentStory) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-2xl select-none">
      <div className="absolute inset-0" onClick={onClose}></div>

      {/* Main Story Container */}
      <div
        className="relative z-10 w-full max-w-sm h-[88vh] max-h-[760px] rounded-3xl overflow-hidden bg-obsidian-950 border border-neutral-800 shadow-2xl flex flex-col justify-between"
        onMouseDown={() => setIsPaused(true)}
        onMouseUp={() => setIsPaused(false)}
        onTouchStart={() => setIsPaused(true)}
        onTouchEnd={() => setIsPaused(false)}
      >
        {/* Progress Bar */}
        <div className="absolute top-0 left-0 right-0 z-30 p-3 pt-4 bg-gradient-to-b from-black/80 to-transparent">
          <div className="h-1 w-full bg-white/20 rounded-full overflow-hidden mb-3">
            <div
              className="h-full bg-gold-400 transition-all duration-75"
              style={{ width: `${progress}%` }}
            ></div>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2.5">
              <div className="w-9 h-9 rounded-full overflow-hidden border border-gold-400">
                <img
                  src={currentStory.image}
                  alt={currentStory.title}
                  className="w-full h-full object-cover object-top"
                />
              </div>
              <div>
                <div className="text-xs font-bold text-white flex items-center gap-1">
                  <span>Naumaan Ijaz</span>
                  <span className="text-[10px] text-gold-400">({currentStory.tag})</span>
                </div>
                <div className="text-[10px] text-neutral-400 font-mono">
                  {currentStory.subtitle} • {currentStory.date}
                </div>
              </div>
            </div>

            <div className="flex items-center space-x-1">
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setIsPaused(!isPaused);
                }}
                className="p-1 text-neutral-400 hover:text-white"
              >
                {isPaused ? <Play className="w-4 h-4 fill-white" /> : <Pause className="w-4 h-4" />}
              </button>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  onClose();
                }}
                className="p-1 text-neutral-400 hover:text-white"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        {/* Story Slide Photo */}
        <div className="relative flex-1 flex items-center justify-center overflow-hidden">
          <img
            src={currentStory.image}
            alt={currentStory.title}
            className="w-full h-full object-cover object-top"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/30"></div>

          {/* Floating Emoji */}
          {floatingReaction && (
            <div className="absolute z-30 pointer-events-none text-5xl animate-bounce">
              {floatingReaction}
            </div>
          )}
        </div>

        {/* Story Caption & Quote */}
        <div className="relative z-30 p-5 bg-gradient-to-t from-black via-black/90 to-transparent space-y-3">
          {currentStory.quote && (
            <p className="font-['Noto_Nastaliq_Urdu'] text-lg text-gold-200 leading-relaxed text-center">
              "{currentStory.quote}"
            </p>
          )}

          <p className="text-xs text-neutral-300 font-light text-center">
            {currentStory.caption}
          </p>

          {/* Emoji Reactions */}
          <div className="flex items-center justify-between pt-1">
            <div className="flex items-center space-x-2">
              {['🔥', '👑', '❤️', '👏'].map((em) => (
                <button
                  key={em}
                  onClick={(e) => triggerReaction(em, e)}
                  className="px-2.5 py-1 rounded-full bg-white/10 hover:bg-gold-500/20 text-xs text-white border border-white/10 flex items-center gap-1 active:scale-90 transition-all"
                >
                  <span>{em}</span>
                  <span className="text-[10px] font-mono text-neutral-400">{reactionCounts[em] || 0}</span>
                </button>
              ))}
            </div>

            <button
              onClick={() => {
                onClose();
                onOpenChat();
              }}
              className="px-3.5 py-1.5 rounded-full bg-gold-500 hover:bg-gold-400 text-obsidian-950 font-bold text-xs uppercase flex items-center gap-1"
            >
              <Send className="w-3 h-3" />
              <span>Inquire</span>
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}
