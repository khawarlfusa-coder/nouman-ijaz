import React, { useState, useEffect } from 'react';
import { CELEBRITY_DATA } from '../data/celebrityData';
import { Menu, X, Mail, Sparkles, Volume2, VolumeX } from 'lucide-react';
import { InstagramIcon, FacebookIcon, YoutubeIcon } from './Icons';

export default function Navbar({ onOpenChat, soundEnabled, setSoundEnabled }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: "Odyssey", href: "#biography" },
    { label: "Live Stories", href: "#stories" },
    { label: "Masterpieces", href: "#filmography" },
    { label: "Upcoming", href: "#upcoming" },
    { label: "World Tours", href: "#tours" },
    { label: "Brand & UGC", href: "#brand-ugc" },
    { label: "Social", href: "#social-feed" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-obsidian-950/85 backdrop-blur-md border-b border-gold-500/20 py-3 shadow-2xl'
          : 'bg-gradient-to-b from-black/80 via-black/40 to-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand / Monogram */}
        <a href="#" className="flex items-center space-x-3 group">
          <div className="w-10 h-10 rounded-full border border-gold-400/40 bg-obsidian-900/90 flex items-center justify-center text-gold-300 font-serif font-bold text-lg shadow-lg group-hover:border-gold-300 group-hover:scale-105 transition-all">
            NI
          </div>
          <div>
            <div className="font-serif text-lg tracking-wider text-neutral-100 font-bold group-hover:text-gold-200 transition-colors flex items-center gap-1.5">
              NAUMAAN IJAZ
              <span className="w-1.5 h-1.5 rounded-full bg-gold-400"></span>
            </div>
            <div className="text-[10px] tracking-widest uppercase text-neutral-400 font-mono">
              Official Archive & Management
            </div>
          </div>
        </a>

        {/* Desktop Nav Links */}
        <div className="hidden lg:flex items-center space-x-7 text-xs uppercase tracking-widest font-medium text-neutral-300">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="hover:text-gold-300 transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1.5px] after:bg-gold-400 hover:after:w-full after:transition-all after:duration-300"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Action Controls & Social */}
        <div className="hidden sm:flex items-center space-x-4">
          {/* Sound Ambiance Toggle */}
          <button
            onClick={() => setSoundEnabled(!soundEnabled)}
            title={soundEnabled ? "Mute Ambient Cinema Sound" : "Enable Ambient Cinema Tone"}
            className="p-2 rounded-full border border-neutral-800 bg-obsidian-900/80 text-neutral-400 hover:text-gold-300 hover:border-gold-500/40 transition-all text-xs flex items-center gap-1.5"
          >
            {soundEnabled ? (
              <>
                <Volume2 className="w-3.5 h-3.5 text-gold-400 animate-pulse" />
                <span className="text-[10px] uppercase font-mono hidden md:inline text-gold-400">Audio ON</span>
              </>
            ) : (
              <>
                <VolumeX className="w-3.5 h-3.5" />
                <span className="text-[10px] uppercase font-mono hidden md:inline">Audio OFF</span>
              </>
            )}
          </button>

          {/* Social Icons */}
          <div className="flex items-center space-x-2 border-l border-neutral-800 pl-3">
            <a
              href={CELEBRITY_DATA.socialHandles.instagram.url}
              target="_blank"
              rel="noreferrer"
              title="Instagram: @m_naumaanijazofficial"
              className="p-2 text-neutral-400 hover:text-pink-400 transition-colors"
            >
              <InstagramIcon className="w-4 h-4" />
            </a>
            <a
              href={CELEBRITY_DATA.socialHandles.facebook.url}
              target="_blank"
              rel="noreferrer"
              title="Official Facebook Page"
              className="p-2 text-neutral-400 hover:text-blue-400 transition-colors"
            >
              <FacebookIcon className="w-4 h-4" />
            </a>
            <a
              href={CELEBRITY_DATA.socialHandles.youtube.url}
              target="_blank"
              rel="noreferrer"
              title="YouTube Media Archive"
              className="p-2 text-neutral-400 hover:text-red-400 transition-colors"
            >
              <YoutubeIcon className="w-4 h-4" />
            </a>
          </div>

          {/* Direct Concierge / Inquire CTA */}
          <button
            onClick={onOpenChat}
            className="flex items-center space-x-2 px-4 py-2 rounded-full bg-gradient-to-r from-gold-600 via-gold-500 to-gold-400 text-obsidian-950 font-semibold text-xs tracking-wider uppercase hover:shadow-lg hover:shadow-gold-500/20 hover:scale-105 active:scale-95 transition-all"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>VIP Inquiries</span>
          </button>
        </div>

        {/* Mobile menu trigger */}
        <div className="flex items-center space-x-2 lg:hidden">
          <button
            onClick={onOpenChat}
            className="p-2 rounded-full bg-gold-500/20 text-gold-300 border border-gold-500/30 text-xs flex items-center"
          >
            <Sparkles className="w-3.5 h-3.5" />
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-neutral-300 hover:text-white"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-obsidian-950/95 backdrop-blur-xl border-b border-gold-500/20 px-6 py-6 space-y-4">
          <div className="grid grid-cols-2 gap-3 text-sm font-medium">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="py-2.5 px-3 rounded-lg bg-obsidian-900/60 border border-neutral-800 text-neutral-300 hover:text-gold-300 hover:border-gold-500/30 transition-all text-xs uppercase tracking-wider"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="pt-4 border-t border-neutral-800/80 flex items-center justify-between">
            <div className="flex items-center space-x-3 text-neutral-400">
              <a href={CELEBRITY_DATA.socialHandles.instagram.url} target="_blank" rel="noreferrer">
                <InstagramIcon className="w-5 h-5 hover:text-pink-400" />
              </a>
              <a href={CELEBRITY_DATA.socialHandles.facebook.url} target="_blank" rel="noreferrer">
                <FacebookIcon className="w-5 h-5 hover:text-blue-400" />
              </a>
              <a href={CELEBRITY_DATA.socialHandles.youtube.url} target="_blank" rel="noreferrer">
                <YoutubeIcon className="w-5 h-5 hover:text-red-400" />
              </a>
            </div>
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="text-xs uppercase tracking-widest text-gold-300 font-semibold border-b border-gold-400 pb-0.5"
            >
              info@noumanijaz.com
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
