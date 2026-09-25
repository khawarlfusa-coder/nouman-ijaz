import React from 'react';
import { CELEBRITY_DATA } from '../data/celebrityData';
import { Award, ShieldCheck, CheckCircle2 } from 'lucide-react';

export default function Biography() {
  const { profile, awards } = CELEBRITY_DATA;

  const milestones = [
    {
      era: "1988 — 1999",
      title: "The PTV Golden Genesis",
      desc: "After finishing his legal education at Quaid-e-Azam Law College Lahore, Naumaan made his television debut. Landmark masterworks such as Nijat, Dasht, and Kashkol established him as the most commanding young actor in Pakistan."
    },
    {
      era: "2000 — 2012",
      title: "feudal Sovereign & State Honor",
      desc: "His portrayal of Malik Wajahat in Mera Saaein created the definitive template for the South Asian anti-hero. In 2012, the President of Pakistan conferred upon him the Pride of Performance."
    },
    {
      era: "2018 — Present",
      title: "Global Renaissance & Cultural Icon",
      desc: "From the chilling psychological villainy of Joi in Dar Si Jaati Hai Sila to the immortal aristocracy of Behroze Karim in Parizaad and Haji Marjaan in Sang-e-Mah, his work continues to inspire millions globally."
    }
  ];

  return (
    <section id="biography" className="relative py-24 bg-obsidian-950 border-t border-neutral-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-2xl mb-16 space-y-2">
          <span className="text-[11px] font-mono uppercase tracking-widest text-gold-400">
            Life & Craft
          </span>
          <h2 className="text-3xl sm:text-5xl font-serif font-black text-white tracking-tight">
            The Titan's <span className="gold-gradient-text">Odyssey</span>
          </h2>
          <p className="text-neutral-400 text-sm leading-relaxed">
            Thirty-six years of screen mastery. A discipline forged in the classical tradition of restraint and intellectual truth.
          </p>
        </div>

        {/* Editorial Philosophy Banner */}
        <div className="mb-20 p-8 sm:p-12 rounded-3xl bg-obsidian-900/50 border border-neutral-800 relative overflow-hidden">
          <div className="max-w-3xl space-y-4">
            <span className="text-xs uppercase font-mono tracking-widest text-gold-400">
              Artistic Creed
            </span>
            <p className="font-serif text-2xl sm:text-3xl text-neutral-100 italic leading-relaxed font-['Noto_Nastaliq_Urdu']">
              "کردار وہ نہیں جو ڈائریکٹر بتاتا ہے، کردار وہ ہے جو کیمرے کے سامنے آپ کی آنکھوں کی خاموشی سے جنم لیتا ہے۔"
            </p>
            <p className="text-sm text-neutral-300 font-light leading-relaxed">
              "A true actor does not decorate a scene with excessive mannerisms. Acting is restraint. It is knowing when the heartbeat of the character must resonate louder than the spoken dialogue."
            </p>
            <div className="text-xs text-neutral-500 font-mono pt-2">
              — Naumaan Ijaz • National College of Arts Masterclass
            </div>
          </div>
        </div>

        {/* Clean 3-Stage Milestone Columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {milestones.map((item, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-obsidian-900/30 border border-neutral-800/80 space-y-3"
            >
              <div className="text-xs font-mono text-gold-400 font-bold tracking-wider">
                {item.era}
              </div>
              <h3 className="text-lg font-serif font-bold text-white">
                {item.title}
              </h3>
              <p className="text-xs sm:text-sm text-neutral-400 font-light leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Minimal Accolades List */}
        <div className="pt-12 border-t border-neutral-900">
          <div className="mb-6 flex items-center justify-between">
            <span className="text-xs uppercase font-mono tracking-widest text-neutral-400">
              National & Global Laurels
            </span>
            <span className="text-[11px] font-mono text-neutral-500">
              Presidential & Critics' Honors
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {awards.map((award, i) => (
              <div
                key={i}
                className="p-5 rounded-xl bg-obsidian-900/40 border border-neutral-800/70 space-y-2"
              >
                <div className="text-xs font-mono text-gold-400 font-semibold">
                  {award.year}
                </div>
                <div className="text-sm font-serif font-bold text-white">
                  {award.title}
                </div>
                <div className="text-[11px] text-neutral-400 leading-relaxed font-light">
                  {award.desc}
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
