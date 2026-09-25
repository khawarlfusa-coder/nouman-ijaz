import React, { useState } from 'react';
import { CELEBRITY_DATA } from '../data/celebrityData';
import { Award, Scroll, Compass, Star, ChevronRight, CheckCircle2, ShieldCheck, Download } from 'lucide-react';

export default function Biography() {
  const { profile, awards } = CELEBRITY_DATA;
  const [activeTab, setActiveTab] = useState('journey');

  const milestones = [
    {
      era: "1988 - 1999",
      title: "The Golden Era Genesis",
      subtitle: "From Law Lecture Halls to PTV Royalty",
      desc: "After completing his law degree from Quaid-e-Azam Law College, Lahore, Naumaan entered Pakistan Television (PTV). His breakout performances in landmark dramas such as 'Nijat', 'Dasht', and 'Kashkol' established him as the most formidable young dramatic powerhouse in South Asia.",
      tag: "Origins of Mastery"
    },
    {
      era: "2000 - 2011",
      title: "The Sovereign of Character Acting",
      subtitle: "Redefining the Anti-Hero in Mera Saaein & Malangi",
      desc: "As private satellite television exploded across Pakistan, Naumaan delivered career-defining performances. In 'Malangi' and the cultural juggernaut 'Mera Saaein' (Malik Wajahat), he created a revolutionary template for feudal and aristocratic character portraits.",
      tag: "Cultural Benchmark"
    },
    {
      era: "2012",
      title: "Presidential Pride of Performance",
      subtitle: "The Highest National Civilian Artistic Honor",
      desc: "Conferred by the President of Pakistan on Pakistan Day, honoring over two decades of transformative contributions to the performing arts, national heritage, and cinema.",
      tag: "State Honor"
    },
    {
      era: "2017 - 2021",
      title: "The Dark Masterpieces & Vulnerability",
      subtitle: "Dar Si Jaati Hai Sila, Raqeeb Se & Dunk",
      desc: "Unflinchingly tackling societal taboos, his portrayal of the deceptive 'Joi' earned him unanimous critical acclaim and the Lux Style Award for Best Actor. He immediately pivoted to the poetic, wounded delicacy of 'Maqsood Sahab' in Raqeeb Se.",
      tag: "Critics' Laureate"
    },
    {
      era: "2021 - Present",
      title: "The Global Cultural Renaissance",
      subtitle: "Parizaad (Behroze Karim) & Duniyapur",
      desc: "His immortal portrayal of Behroze Karim in Parizaad sparked a global sensation, generating hundreds of millions of views across YouTube and international diaspora audiences. Today, as Nauroz Adam in Duniyapur, he reigns unchallenged as the definitive living patriarch of Pakistani cinema.",
      tag: "Global Icon"
    }
  ];

  return (
    <section id="biography" className="relative py-24 bg-obsidian-950 overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-gold-600/5 rounded-full blur-[140px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold-500/10 border border-gold-500/30 text-gold-300 text-xs font-mono uppercase tracking-widest">
            <Scroll className="w-3.5 h-3.5" />
            <span>The Biography</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-serif font-black text-white tracking-tight">
            The Titan's <span className="gold-gradient-text">Odyssey</span>
          </h2>
          <p className="text-neutral-400 text-sm sm:text-base leading-relaxed">
            Thirty-six years of uncompromising dedication to the dramatic arts. A journey from Lahore's courtrooms to the zenith of Asian performing arts.
          </p>
        </div>

        {/* Philosophy Card */}
        <div className="mb-20 p-8 sm:p-10 rounded-3xl bg-gradient-to-r from-obsidian-900 via-obsidian-850 to-obsidian-900 border border-gold-500/30 shadow-2xl relative overflow-hidden">
          <div className="absolute -right-10 -bottom-10 w-60 h-60 bg-gold-500/10 rounded-full blur-3xl pointer-events-none"></div>
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-4">
              <span className="text-xs uppercase font-mono tracking-widest text-gold-400">
                Artistic Philosophy & Method
              </span>
              <p className="font-serif text-2xl sm:text-3xl text-neutral-100 italic leading-snug font-['Noto_Nastaliq_Urdu']">
                "کردار وہ نہیں جو ڈائریکٹر بتاتا ہے، کردار وہ ہے جو کیمرے کے سامنے آپ کی آنکھوں کی خاموشی سے جنم لیتا ہے۔"
              </p>
              <p className="text-sm sm:text-base text-neutral-300 font-light leading-relaxed">
                "A true actor does not decorate a scene with excessive mannerisms. Acting is restraint. It is knowing when the heartbeat of the character must resonate louder than the spoken dialogue."
              </p>
              <div className="pt-2 flex items-center gap-3 text-xs text-gold-300 font-mono">
                <span className="w-2 h-2 rounded-full bg-gold-400"></span>
                <span>Naumaan Ijaz • National College of Arts Master Lecture</span>
              </div>
            </div>

            <div className="lg:col-span-4 flex flex-col items-center justify-center p-6 rounded-2xl bg-obsidian-950/80 border border-neutral-800 text-center">
              <div className="w-16 h-16 rounded-full bg-gold-500/20 border border-gold-500/40 flex items-center justify-center text-gold-300 mb-3">
                <ShieldCheck className="w-8 h-8" />
              </div>
              <div className="font-serif font-bold text-lg text-white">Pride of Performance</div>
              <div className="text-xs text-neutral-400 mt-1">Conferred 2012 by President of Pakistan</div>
              <div className="text-[11px] text-gold-400 font-mono mt-2">Civilian Honors Gazette No. 41-B</div>
            </div>
          </div>
        </div>

        {/* Milestone Timeline */}
        <div className="space-y-6">
          <h3 className="text-xl sm:text-2xl font-serif font-bold text-white mb-8 flex items-center gap-3">
            <Compass className="w-5 h-5 text-gold-400" />
            <span>Key Epochs in Television & Cinema</span>
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {milestones.map((item, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-obsidian-900/80 border border-neutral-800/90 hover:border-gold-500/40 transition-all duration-300 group hover:-translate-y-1 relative flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="px-3 py-1 rounded-full bg-gold-500/10 border border-gold-500/30 text-gold-300 font-mono text-xs font-semibold">
                      {item.era}
                    </span>
                    <span className="text-[11px] text-neutral-400 font-mono uppercase tracking-wider">
                      {item.tag}
                    </span>
                  </div>

                  <h4 className="text-lg font-serif font-bold text-white group-hover:text-gold-200 transition-colors">
                    {item.title}
                  </h4>
                  <div className="text-xs text-gold-400/90 font-medium mb-3">
                    {item.subtitle}
                  </div>

                  <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed font-light">
                    {item.desc}
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-neutral-800/80 flex items-center justify-between text-xs text-neutral-400">
                  <span className="flex items-center gap-1 text-gold-400/80">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    <span>Verified Milestone</span>
                  </span>
                  <span className="font-mono text-[11px]">Chapter {idx + 1}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Awards Gallery Showcase */}
        <div className="mt-20 pt-16 border-t border-neutral-800/80">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-8 gap-4">
            <div>
              <div className="text-xs font-mono uppercase tracking-widest text-gold-400 mb-1">
                Laurels & Recognition
              </div>
              <h3 className="text-2xl sm:text-3xl font-serif font-bold text-white">
                Major Accolades & Trophies
              </h3>
            </div>
            <div className="text-xs text-neutral-400 font-mono">
              Multiple Lux Style, Hum & PTV Lifetime Awards
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {awards.map((award, i) => (
              <div
                key={i}
                className="p-5 rounded-2xl bg-obsidian-900/60 border border-neutral-800 hover:border-gold-400/40 transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="w-10 h-10 rounded-xl bg-gold-500/10 border border-gold-500/30 flex items-center justify-center text-gold-300 mb-3 group-hover:scale-110 transition-transform">
                    <Award className="w-5 h-5" />
                  </div>
                  <div className="text-xs font-mono text-gold-400 font-bold mb-1">
                    {award.year} • {award.category}
                  </div>
                  <div className="text-base font-serif font-bold text-white mb-2">
                    {award.title}
                  </div>
                  <div className="text-xs text-neutral-400 leading-relaxed font-light">
                    {award.desc}
                  </div>
                </div>

                <div className="pt-3 mt-4 border-t border-neutral-800/60 text-[11px] text-neutral-400 font-mono">
                  Conferred by: {award.by}
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
