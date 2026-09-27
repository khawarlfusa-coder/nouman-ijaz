import React, { useState, useEffect } from 'react';
import { CELEBRITY_DATA } from '../data/celebrityData';
import { Sparkles, Menu, X, ArrowUpRight } from 'lucide-react';
import { InstagramIcon, FacebookIcon, YoutubeIcon } from './Icons';

export default function Navbar({ onOpenChat }) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-obsidian-950/90 backdrop-blur-md border-b border-neutral-900 py-3.5'
          : 'bg-gradient-to-b from-black/90 to-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-10 flex items-center justify-between">
        
        {/* Left: Issue Masthead Note */}
        <div className="hidden lg:flex items-center space-x-3 text-[11px] font-mono tracking-widest text-neutral-400 uppercase">
          <span className="text-gold-400 font-bold">VOL. XXXVI</span>
          <span className="text-neutral-600">•</span>
          <span>THE LIVING LEGEND</span>
        </div>

        {/* Center: Editorial Masthead */}
        <a href="#" className="text-center group">
          <div className="font-serif text-xl sm:text-2xl font-black tracking-widest text-white group-hover:text-gold-300 transition-colors uppercase">
            NAUMAAN IJAZ
          </div>
          <div className="text-[9px] font-mono uppercase tracking-[0.3em] text-neutral-400 mt-0.5 font-light">
            Archives & Management
          </div>
        </a>

        {/* Right: Editorial Links & Inquire */}
        <div className="hidden lg:flex items-center space-x-8 text-xs font-mono tracking-widest uppercase text-neutral-300">
          <a href="#stories" className="hover:text-gold-300 transition-colors">Dispatches</a>
          <a href="#works" className="hover:text-gold-300 transition-colors">Works</a>
          <a href="#monologue" className="hover:text-gold-300 transition-colors">Creed</a>
          <a href="#representation" className="hover:text-gold-300 transition-colors">Representation</a>
          <button
            onClick={onOpenChat}
            className="px-4 py-1.5 rounded-full border border-gold-400/50 text-gold-300 hover:bg-gold-500 hover:text-black transition-all flex items-center gap-1.5 text-[11px]"
          >
            <span>Concierge</span>
            <ArrowUpRight className="w-3 h-3" />
          </button>
        </div>

        {/* Mobile menu button */}
        <div className="lg:hidden flex items-center space-x-3">
          <button
            onClick={onOpenChat}
            className="p-2 text-gold-400 text-xs font-mono"
          >
            Concierge
          </button>
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-neutral-300 hover:text-white p-1"
          >
            {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="lg:hidden bg-obsidian-950 border-b border-neutral-900 px-6 py-6 space-y-4">
          <div className="flex flex-col space-y-3 text-xs font-mono tracking-widest uppercase">
            <a href="#stories" onClick={() => setMenuOpen(false)} className="text-neutral-300 hover:text-gold-300">Dispatches</a>
            <a href="#works" onClick={() => setMenuOpen(false)} className="text-neutral-300 hover:text-gold-300">Landmark Works</a>
            <a href="#monologue" onClick={() => setMenuOpen(false)} className="text-neutral-300 hover:text-gold-300">Creed & Philosophy</a>
            <a href="#representation" onClick={() => setMenuOpen(false)} className="text-neutral-300 hover:text-gold-300">Representation</a>
          </div>
          <div className="pt-4 border-t border-neutral-900 text-xs font-mono text-gold-400">
            info@noumanijaz.com
          </div>
        </div>
      )}
    </header>
  );
}
