import React from 'react';
import { X, Star, Award, Calendar, Tv, Clapperboard, Quote, Share2, ExternalLink } from 'lucide-react';

export default function ProjectModal({ project, onClose, onOpenChat }) {
  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/90 backdrop-blur-xl animate-in fade-in duration-200">
      <div className="absolute inset-0" onClick={onClose}></div>

      <div className="relative z-10 w-full max-w-3xl rounded-3xl overflow-hidden bg-obsidian-950 border border-gold-500/30 shadow-2xl max-h-[90vh] overflow-y-auto">
        
        {/* Header Backdrop */}
        <div className="relative h-64 sm:h-72 w-full overflow-hidden bg-obsidian-900">
          <img
            src={project.backdrop || project.image}
            alt={project.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-obsidian-950 via-obsidian-950/60 to-transparent"></div>
          
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 rounded-full bg-black/60 text-white hover:bg-gold-500 hover:text-black transition-all"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Title on Backdrop */}
          <div className="absolute bottom-6 left-6 right-6">
            <div className="flex items-center gap-2 mb-1">
              <span className="px-3 py-1 rounded-full bg-gold-500/20 border border-gold-500/40 text-gold-300 font-mono text-xs font-semibold uppercase">
                {project.category.replace('-', ' ')}
              </span>
              <span className="text-xs text-neutral-300 font-mono">{project.year}</span>
            </div>
            <h3 className="text-2xl sm:text-4xl font-serif font-black text-white flex items-center justify-between">
              <span>{project.title}</span>
              <span className="text-2xl sm:text-3xl text-gold-400 font-normal font-['Noto_Nastaliq_Urdu']">{project.urduTitle}</span>
            </h3>
          </div>
        </div>

        {/* Content Body */}
        <div className="p-6 sm:p-8 space-y-6">
          
          {/* Role & Rating Banner */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 p-4 rounded-2xl bg-obsidian-900/80 border border-neutral-800">
            <div>
              <div className="text-[11px] uppercase tracking-wider text-neutral-400 font-mono">Character Portrayed</div>
              <div className="text-base font-serif font-bold text-gold-300 mt-0.5">{project.role}</div>
            </div>
            <div>
              <div className="text-[11px] uppercase tracking-wider text-neutral-400 font-mono">Director & Network</div>
              <div className="text-sm font-semibold text-white mt-0.5">{project.director} • {project.network}</div>
            </div>
            <div>
              <div className="text-[11px] uppercase tracking-wider text-neutral-400 font-mono">Critical Reception</div>
              <div className="text-sm font-bold text-amber-400 mt-0.5 flex items-center gap-1">
                <Star className="w-3.5 h-3.5 fill-amber-400" />
                <span>{project.rating}</span>
              </div>
            </div>
          </div>

          {/* Iconic Quote */}
          {project.quote && (
            <div className="p-5 rounded-2xl bg-gold-950/20 border border-gold-500/30 relative">
              <Quote className="w-6 h-6 text-gold-500/40 mb-2" />
              <p className="font-serif text-lg sm:text-xl text-gold-200 italic font-['Noto_Nastaliq_Urdu'] leading-relaxed">
                "{project.quote}"
              </p>
              <div className="text-xs text-neutral-400 font-mono mt-2">
                — {project.role} in {project.title}
              </div>
            </div>
          )}

          {/* Synopsis */}
          <div>
            <h4 className="text-sm uppercase font-mono tracking-widest text-gold-400 mb-2">
              Performance Breakdown & Impact
            </h4>
            <p className="text-sm sm:text-base text-neutral-300 leading-relaxed font-light">
              {project.synopsis}
            </p>
          </div>

          {/* Awards & Critical Acclaim */}
          {project.awards && (
            <div className="flex items-start gap-3 p-4 rounded-xl bg-obsidian-900 border border-neutral-800">
              <Award className="w-5 h-5 text-gold-400 flex-shrink-0 mt-0.5" />
              <div>
                <div className="text-xs font-mono uppercase tracking-wider text-gold-400">Awards & Honors</div>
                <div className="text-sm text-neutral-200 font-medium mt-0.5">{project.awards}</div>
              </div>
            </div>
          )}

          {/* Actions */}
          <div className="pt-4 border-t border-neutral-800 flex flex-wrap items-center justify-between gap-3">
            <button
              onClick={onClose}
              className="px-5 py-2.5 rounded-full border border-neutral-700 text-xs font-semibold uppercase text-neutral-300 hover:text-white"
            >
              Close Window
            </button>
            <button
              onClick={() => {
                onClose();
                onOpenChat();
              }}
              className="px-6 py-2.5 rounded-full bg-gradient-to-r from-gold-500 to-amber-500 text-obsidian-950 font-bold text-xs uppercase tracking-wider shadow-lg hover:scale-105 transition-all"
            >
              Discuss Project / Book Naumaan
            </button>
          </div>

        </div>

      </div>
    </div>
  );
}
