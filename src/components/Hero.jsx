import React, { useState } from 'react';
import { CELEBRITY_DATA } from '../data/celebrityData';
import { Award, Play, ChevronDown, Sparkles, Star, Film, ArrowRight, CheckCircle2 } from 'lucide-react';

export default function Hero({ onOpenVideoModal, onOpenStory, onOpenChat }) {
  const { profile } = CELEBRITY_DATA;
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(profile.officialEmail);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-24 pb-16 overflow-hidden bg-obsidian-950">
      {/* Cinematic Background Atmosphere */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {/* Soft golden spotlight glows */}
        <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[700px] h-[500px] bg-gold-600/10 rounded-full blur-[140px]"></div>
        <div className="absolute bottom-10 -left-20 w-[450px] h-[450px] bg-red-900/10 rounded-full blur-[120px]"></div>
        <div className="absolute top-1/3 -right-20 w-[500px] h-[500px] bg-amber-500/10 rounded-full blur-[130px]"></div>
        
        {/* Subtle grid mesh overlay */}
        <div className="absolute inset-0 bg-[radial-gradient(#ffffff0a_1px,transparent_1px)] [background-size:24px_24px] opacity-40"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Text & Accolades (7 cols) */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            
            {/* Presidential Honor Pill */}
            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-gold-500/10 border border-gold-500/30 text-gold-300 text-xs font-medium tracking-wider uppercase shadow-inner">
              <Award className="w-4 h-4 text-gold-400" />
              <span>Presidential Pride of Performance (2012)</span>
              <span className="w-1 h-1 rounded-full bg-gold-400"></span>
              <span className="text-neutral-400">Living Legend</span>
            </div>

            {/* Urdu Title & Name */}
            <div className="space-y-1">
              <p className="font-serif text-2xl sm:text-3xl text-gold-400/80 tracking-widest font-normal font-['Noto_Nastaliq_Urdu'] select-none">
                {profile.nativeName}
              </p>
              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-serif font-black tracking-tight text-white leading-none">
                NAUMAAN <span className="gold-gradient-text">IJAZ</span>
              </h1>
            </div>

            {/* Subtitle & Tagline */}
            <p className="text-lg sm:text-xl font-light text-neutral-300 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              {profile.tagline}. Renowned for defining the gold standard of method acting in television and cinema across four decades.
            </p>

            {/* Signature Dialogue Quote Card */}
            <div className="p-4 sm:p-5 rounded-2xl bg-obsidian-900/80 border border-neutral-800/80 backdrop-blur-md relative overflow-hidden group">
              <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-gold-400 to-amber-600"></div>
              <p className="text-sm sm:text-base text-neutral-200 font-serif italic mb-1.5">
                "{profile.signatureQuoteUrdu}"
              </p>
              <p className="text-xs text-neutral-400 leading-normal">
                "{profile.signatureQuoteEnglish}"
              </p>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-2">
              <a
                href="#filmography"
                className="px-7 py-3.5 rounded-full bg-gradient-to-r from-gold-500 via-gold-400 to-amber-500 text-obsidian-950 font-bold text-sm tracking-wider uppercase flex items-center gap-2 shadow-lg shadow-gold-500/20 hover:scale-105 active:scale-95 transition-all"
              >
                <Film className="w-4 h-4" />
                <span>Explore Filmography</span>
              </a>

              <button
                onClick={onOpenVideoModal}
                className="px-6 py-3.5 rounded-full bg-obsidian-900/90 border border-gold-500/40 text-neutral-200 hover:text-gold-200 hover:border-gold-400 font-medium text-sm tracking-wider uppercase flex items-center gap-2.5 transition-all group"
              >
                <div className="w-6 h-6 rounded-full bg-gold-500/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Play className="w-3 h-3 text-gold-400 fill-gold-400 ml-0.5" />
                </div>
                <span>Showreel & Parizaad Reel</span>
              </button>

              <button
                onClick={handleCopyEmail}
                className="px-5 py-3.5 rounded-full border border-neutral-800 bg-obsidian-950/60 text-xs text-neutral-400 hover:text-neutral-200 hover:border-neutral-700 transition-all flex items-center gap-2"
                title="Click to copy official email"
              >
                {copiedEmail ? (
                  <>
                    <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                    <span className="text-emerald-300">info@noumanijaz.com Copied!</span>
                  </>
                ) : (
                  <>
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                    <span>info@noumanijaz.com</span>
                  </>
                )}
              </button>
            </div>

            {/* Quick Metrics Bar */}
            <div className="pt-6 grid grid-cols-2 sm:grid-cols-4 gap-4 border-t border-neutral-800/80">
              <div>
                <div className="text-2xl sm:text-3xl font-serif font-bold text-white">{profile.experienceYears}</div>
                <div className="text-[11px] uppercase tracking-wider text-neutral-400">Years of Mastery</div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-serif font-bold text-gold-300">{profile.masterpieceCount}</div>
                <div className="text-[11px] uppercase tracking-wider text-neutral-400">Cult Characters</div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-serif font-bold text-white">{profile.globalAwards}</div>
                <div className="text-[11px] uppercase tracking-wider text-neutral-400">Major Accolades</div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-serif font-bold text-gold-300">{profile.fanbaseReach}</div>
                <div className="text-[11px] uppercase tracking-wider text-neutral-400">Global Viewers</div>
              </div>
            </div>

          </div>

          {/* Right Column: Hero Portrait & Interactive Showcase (5 cols) */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-md">
              {/* Outer Glow Halo */}
              <div className="absolute -inset-2 bg-gradient-to-tr from-gold-500/20 via-amber-600/10 to-red-600/20 rounded-3xl blur-xl opacity-70"></div>
              
              {/* Card Container */}
              <div className="relative rounded-3xl overflow-hidden border border-gold-500/30 bg-obsidian-900 shadow-2xl group">
                <div className="aspect-[4/5] w-full overflow-hidden bg-obsidian-950 relative">
                  <img
                    src={profile.portrait}
                    alt="Naumaan Ijaz - Living Legend"
                    className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                    onError={(e) => {
                      e.target.src = "https://upload.wikimedia.org/wikipedia/commons/f/fc/Naumaan_Ijaz_2022.png";
                    }}
                  />
                  {/* Subtle cinema gradient vignettes */}
                  <div className="absolute inset-0 bg-gradient-to-t from-obsidian-950 via-obsidian-950/20 to-transparent"></div>
                  <div className="absolute inset-0 bg-gradient-to-r from-obsidian-950/40 via-transparent to-obsidian-950/40"></div>
                </div>

                {/* Floating Overlay Badge: Behroze Karim / Parizaad */}
                <div className="absolute bottom-4 left-4 right-4 p-4 rounded-2xl bg-obsidian-950/90 border border-gold-500/20 backdrop-blur-md">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="flex items-center gap-1.5 text-[11px] uppercase tracking-wider text-gold-400 font-semibold">
                        <Sparkles className="w-3.5 h-3.5" />
                        <span>Iconic Persona</span>
                      </div>
                      <div className="text-base font-serif font-bold text-white">Behroze Karim</div>
                      <div className="text-xs text-neutral-400">Parizaad • Hum TV Landmark</div>
                    </div>
                    <button
                      onClick={() => onOpenStory(2)}
                      className="px-3 py-1.5 rounded-full bg-gold-500/20 hover:bg-gold-500 text-gold-300 hover:text-obsidian-950 text-xs font-semibold tracking-wider transition-all flex items-center gap-1"
                    >
                      <span>Story</span>
                      <ArrowRight className="w-3 h-3" />
                    </button>
                  </div>
                </div>

                {/* Top Corner Live Status Ribbon */}
                <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-obsidian-950/80 border border-neutral-700/80 backdrop-blur-md flex items-center gap-2 text-[11px] text-neutral-300">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
                  <span>Active Tour: North America & Duniyapur</span>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Scroll Indicator */}
        <div className="pt-16 flex flex-col items-center justify-center text-neutral-500 text-xs uppercase tracking-widest gap-2">
          <span>Scroll To Explore</span>
          <ChevronDown className="w-4 h-4 text-gold-400 animate-bounce" />
        </div>
      </div>
    </section>
  );
}
