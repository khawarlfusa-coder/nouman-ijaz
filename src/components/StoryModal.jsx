import React, { useState, useEffect, useRef } from 'react';
import { CELEBRITY_DATA } from '../data/celebrityData';
import { X, ChevronLeft, ChevronRight, Pause, Play, Heart, Flame, Crown, ThumbsUp, Send, Share2 } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function StoryModal({ storyIndex, onClose, onOpenChat }) {
  const { statusStories } = CELEBRITY_DATA;
  const currentStory = statusStories[storyIndex];

  const [slideIndex, setSlideIndex] = useState(0);
  const [progress, setProgress] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [reactionCounts, setReactionCounts] = useState({ '🔥': 284, '👑': 612, '❤️': 930, '👏': 142 });
  const [floatingReaction, setFloatingReaction] = useState(null);

  const currentSlide = currentStory?.slides[slideIndex] || currentStory?.slides[0];
  const slideDuration = currentSlide?.duration || 5000;

  // Handle slide timer progress
  useEffect(() => {
    if (isPaused) return;

    const intervalTime = 50;
    const step = (intervalTime / slideDuration) * 100;

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
  }, [slideIndex, storyIndex, isPaused, slideDuration]);

  // Reset progress when changing slides
  useEffect(() => {
    setProgress(0);
  }, [slideIndex, storyIndex]);

  const handleNext = () => {
    if (slideIndex < currentStory.slides.length - 1) {
      setSlideIndex((prev) => prev + 1);
    } else if (storyIndex < statusStories.length - 1) {
      // Move to next story
      setSlideIndex(0);
      // parent can change storyIndex or we close
      onClose();
    } else {
      onClose();
    }
  };

  const handlePrev = () => {
    if (slideIndex > 0) {
      setSlideIndex((prev) => prev - 1);
    }
  };

  const triggerReaction = (emoji, e) => {
    e.stopPropagation();
    setReactionCounts((prev) => ({
      ...prev,
      [emoji]: (prev[emoji] || 0) + 1,
    }));

    setFloatingReaction(emoji);
    setTimeout(() => setFloatingReaction(null), 1200);

    // Launch celebratory confetti burst
    confetti({
      particleCount: 25,
      spread: 60,
      origin: { y: 0.8 },
      colors: ['#CFA738', '#E6C564', '#FFFFFF', '#DC2626']
    });
  };

  if (!currentStory || !currentSlide) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-xl select-none">
      {/* Background Dim Backdrop */}
      <div className="absolute inset-0" onClick={onClose}></div>

      {/* Main Story Container (9:16 aspect ratio box) */}
      <div
        className="relative z-10 w-full max-w-md h-[92vh] max-h-[820px] rounded-3xl overflow-hidden bg-obsidian-950 border border-neutral-800 shadow-2xl flex flex-col justify-between"
        onMouseDown={() => setIsPaused(true)}
        onMouseUp={() => setIsPaused(false)}
        onTouchStart={() => setIsPaused(true)}
        onTouchEnd={() => setIsPaused(false)}
      >
        {/* Top Progress Bars */}
        <div className="absolute top-0 left-0 right-0 z-30 p-3 pt-4 bg-gradient-to-b from-black/80 via-black/40 to-transparent">
          <div className="flex items-center space-x-1.5 mb-3">
            {currentStory.slides.map((_, i) => (
              <div key={i} className="h-1 flex-1 bg-white/25 rounded-full overflow-hidden">
                <div
                  className="h-full bg-gold-400 transition-all duration-75"
                  style={{
                    width: i < slideIndex ? '100%' : i === slideIndex ? `${progress}%` : '0%',
                  }}
                ></div>
              </div>
            ))}
          </div>

          {/* Story Author Header */}
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2.5">
              <div className="w-10 h-10 rounded-full p-[2px] bg-gradient-to-tr from-gold-400 to-amber-600">
                <img
                  src={currentStory.avatar}
                  alt={currentStory.title}
                  className="w-full h-full rounded-full object-cover"
                />
              </div>
              <div>
                <div className="flex items-center gap-1.5">
                  <span className="text-sm font-semibold text-white">Naumaan Ijaz</span>
                  <span className="w-3.5 h-3.5 rounded-full bg-gold-500 flex items-center justify-center text-[9px] text-obsidian-950 font-bold">✓</span>
                  <span className="text-xs text-gold-300 font-mono">({currentStory.tag})</span>
                </div>
                <div className="text-[11px] text-neutral-400">
                  {currentStory.timestamp} • {currentSlide.location || "Official Update"}
                </div>
              </div>
            </div>

            <div className="flex items-center space-x-2">
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setIsPaused(!isPaused);
                }}
                className="p-1.5 rounded-full bg-black/40 text-neutral-300 hover:text-white"
              >
                {isPaused ? <Play className="w-4 h-4 fill-white" /> : <Pause className="w-4 h-4" />}
              </button>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  onClose();
                }}
                className="p-1.5 rounded-full bg-black/40 text-neutral-300 hover:text-white"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        {/* Story Slide Content Zone */}
        <div className="relative flex-1 flex items-center justify-center overflow-hidden">
          {/* Left / Right Click zones for navigation */}
          <div
            className="absolute top-0 bottom-0 left-0 w-1/3 z-20 cursor-pointer"
            onClick={(e) => {
              e.stopPropagation();
              handlePrev();
            }}
          ></div>
          <div
            className="absolute top-0 bottom-0 right-0 w-1/3 z-20 cursor-pointer"
            onClick={(e) => {
              e.stopPropagation();
              handleNext();
            }}
          ></div>

          {currentSlide.type === 'image' ? (
            <div className="w-full h-full relative">
              <img
                src={currentSlide.url}
                alt="Story slide"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-obsidian-950 via-transparent to-black/30"></div>
            </div>
          ) : (
            <div
              className={`w-full h-full p-8 flex flex-col justify-center items-center text-center bg-gradient-to-br ${
                currentSlide.bgGradient || 'from-obsidian-900 to-black'
              }`}
            >
              <div className="font-serif text-xl sm:text-2xl text-gold-200 font-medium leading-relaxed max-w-sm whitespace-pre-line shadow-sm">
                {currentSlide.text}
              </div>
            </div>
          )}

          {/* Floating Emoji Animation */}
          {floatingReaction && (
            <div className="absolute z-30 pointer-events-none text-5xl animate-bounce">
              {floatingReaction}
            </div>
          )}
        </div>

        {/* Bottom Caption & Interactive Response Area */}
        <div className="relative z-30 p-4 bg-gradient-to-t from-black via-black/90 to-transparent space-y-3">
          {/* Caption text */}
          {currentSlide.caption && (
            <p className="text-xs sm:text-sm text-neutral-200 font-light leading-snug">
              {currentSlide.caption}
            </p>
          )}

          {/* Emoji Reaction Tray */}
          <div className="flex items-center justify-between gap-1 pt-1">
            <div className="flex items-center space-x-1.5">
              {[
                { emoji: '🔥', label: 'Fire' },
                { emoji: '👑', label: 'Legend' },
                { emoji: '❤️', label: 'Love' },
                { emoji: '👏', label: 'Bravo' },
              ].map((item) => (
                <button
                  key={item.emoji}
                  onClick={(e) => triggerReaction(item.emoji, e)}
                  className="px-2.5 py-1.5 rounded-full bg-white/10 hover:bg-gold-500/20 border border-white/15 text-xs flex items-center gap-1 text-white hover:border-gold-400 transition-all active:scale-90"
                >
                  <span>{item.emoji}</span>
                  <span className="text-[10px] text-neutral-300 font-mono">
                    {reactionCounts[item.emoji] || 0}
                  </span>
                </button>
              ))}
            </div>

            {/* Quick Reply / Inquire trigger */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                onClose();
                onOpenChat();
              }}
              className="px-3.5 py-1.5 rounded-full bg-gradient-to-r from-gold-500 to-amber-500 text-obsidian-950 font-semibold text-xs flex items-center gap-1.5 shadow"
            >
              <Send className="w-3 h-3" />
              <span>Inquire</span>
            </button>
          </div>
        </div>

        {/* Side Nav Arrows on Desktop */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            handlePrev();
          }}
          className="hidden sm:flex absolute -left-14 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-obsidian-900 border border-neutral-700 text-white items-center justify-center hover:bg-gold-500 hover:text-black transition-all"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        <button
          onClick={(e) => {
            e.stopPropagation();
            handleNext();
          }}
          className="hidden sm:flex absolute -right-14 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-obsidian-900 border border-neutral-700 text-white items-center justify-center hover:bg-gold-500 hover:text-black transition-all"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      </div>
    </div>
  );
}
