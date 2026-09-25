import React from 'react';
import { CELEBRITY_DATA } from '../data/celebrityData';
import { Mail, ArrowUp, Award, ShieldCheck } from 'lucide-react';
import { InstagramIcon, FacebookIcon, YoutubeIcon } from './Icons';

export default function Footer({ onOpenChat }) {
  const { profile, socialHandles } = CELEBRITY_DATA;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-obsidian-950 border-t border-neutral-800/80 pt-16 pb-12 overflow-hidden text-neutral-400">
      
      {/* Background Subtle Monogram Watermark */}
      <div className="absolute right-0 bottom-0 text-[180px] font-serif font-black text-white/[0.015] select-none pointer-events-none leading-none">
        NI
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Top Tier */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-neutral-900">
          
          {/* Brand Intro (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-full border border-gold-400/40 bg-obsidian-900 flex items-center justify-center text-gold-300 font-serif font-bold text-lg">
                NI
              </div>
              <div>
                <div className="text-xl font-serif font-bold text-white tracking-wider">
                  NAUMAAN IJAZ
                </div>
                <div className="text-[10px] uppercase font-mono tracking-widest text-gold-400">
                  Presidential Pride of Performance • 2012
                </div>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-neutral-400 font-light leading-relaxed max-w-sm">
              The official archival portfolio, commercial booking desk, and verified digital home of Pakistan's most revered dramatic actor.
            </p>

            <div className="flex items-center space-x-3 pt-2">
              <a
                href={socialHandles.instagram.url}
                target="_blank"
                rel="noreferrer"
                title="Instagram"
                className="w-9 h-9 rounded-xl bg-obsidian-900 border border-neutral-800 flex items-center justify-center text-neutral-300 hover:text-pink-400 hover:border-pink-500/40 transition-colors"
              >
                <InstagramIcon className="w-4 h-4" />
              </a>
              <a
                href={socialHandles.facebook.url}
                target="_blank"
                rel="noreferrer"
                title="Facebook"
                className="w-9 h-9 rounded-xl bg-obsidian-900 border border-neutral-800 flex items-center justify-center text-neutral-300 hover:text-blue-400 hover:border-blue-500/40 transition-colors"
              >
                <FacebookIcon className="w-4 h-4" />
              </a>
              <a
                href={socialHandles.youtube.url}
                target="_blank"
                rel="noreferrer"
                title="YouTube"
                className="w-9 h-9 rounded-xl bg-obsidian-900 border border-neutral-800 flex items-center justify-center text-neutral-300 hover:text-red-400 hover:border-red-500/40 transition-colors"
              >
                <YoutubeIcon className="w-4 h-4" />
              </a>
              <a
                href="mailto:info@noumanijaz.com"
                title="Official Email"
                className="w-9 h-9 rounded-xl bg-obsidian-900 border border-neutral-800 flex items-center justify-center text-neutral-300 hover:text-gold-300 hover:border-gold-500/40 transition-colors"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Navigation (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <div className="text-xs uppercase font-mono tracking-widest text-white font-semibold">
              Archive Directory
            </div>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#biography" className="hover:text-gold-300 transition-colors">The Odyssey & Milestones</a>
              </li>
              <li>
                <a href="#stories" className="hover:text-gold-300 transition-colors">Live 24h Stories & Status</a>
              </li>
              <li>
                <a href="#filmography" className="hover:text-gold-300 transition-colors">Parizaad & Landmark Works</a>
              </li>
              <li>
                <a href="#upcoming" className="hover:text-gold-300 transition-colors">Upcoming Cinema & OTT</a>
              </li>
              <li>
                <a href="#tours" className="hover:text-gold-300 transition-colors">International Galas & Tours</a>
              </li>
            </ul>
          </div>

          {/* Commercial & Contact (4 cols) */}
          <div className="lg:col-span-4 space-y-3">
            <div className="text-xs uppercase font-mono tracking-widest text-white font-semibold">
              Direct Representation
            </div>
            <p className="text-xs text-neutral-400 leading-relaxed font-light">
              Executive talent booking, commercials, UGC campaigns, and media credentials:
            </p>
            <div className="p-3.5 rounded-xl bg-obsidian-900 border border-neutral-800 flex items-center justify-between">
              <div>
                <div className="text-[10px] uppercase font-mono text-neutral-500">Official Inbox</div>
                <a href="mailto:info@noumanijaz.com" className="text-xs font-semibold text-gold-300 hover:underline">
                  info@noumanijaz.com
                </a>
              </div>
              <button
                onClick={onOpenChat}
                className="px-3 py-1.5 rounded-lg bg-gold-500 text-obsidian-950 font-bold text-[10px] uppercase tracking-wider shadow"
              >
                Chat Desk
              </button>
            </div>
            <div className="text-[11px] text-neutral-500 font-mono">
              Talent Management: ONE ICA & Global Management
            </div>
          </div>

        </div>

        {/* Bottom Tier */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-500 font-mono">
          <div>
            © {new Date().getFullYear()} Naumaan Ijaz. All Rights Reserved. Licensed for Official Representation.
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 text-neutral-400 hover:text-gold-300 transition-colors"
          >
            <span>Back to Summit</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </footer>
  );
}
