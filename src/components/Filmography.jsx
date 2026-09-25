import React, { useState } from 'react';
import { CELEBRITY_DATA } from '../data/celebrityData';
import { Film, Clapperboard, Star, Sparkles, Tv, ArrowUpRight, Award } from 'lucide-react';
import ProjectModal from './ProjectModal';

export default function Filmography({ onOpenChat }) {
  const { filmography } = CELEBRITY_DATA;
  const [activeCategory, setActiveCategory] = useState('all');
  const [selectedProject, setSelectedProject] = useState(null);

  const categories = [
    { id: 'all', label: 'All Works' },
    { id: 'tv-drama', label: 'Landmark TV Dramas' },
    { id: 'film', label: 'Feature Films' },
    { id: 'cult-role', label: 'Antagonist & Cult Roles' },
    { id: 'talk-show', label: 'Satire & Talk Shows' },
  ];

  const filteredProjects = activeCategory === 'all'
    ? filmography
    : filmography.filter((p) => p.category === activeCategory);

  return (
    <section id="filmography" className="relative py-24 bg-obsidian-900/40 border-t border-neutral-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold-500/10 border border-gold-500/30 text-gold-300 text-xs font-mono uppercase tracking-widest mb-3">
              <Film className="w-3.5 h-3.5" />
              <span>Iconic Filmography</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-serif font-black text-white tracking-tight">
              The Definitive <span className="gold-gradient-text">Masterpieces</span>
            </h2>
            <p className="text-neutral-400 text-sm sm:text-base mt-2 max-w-2xl">
              From Behroze Karim in Parizaad to Haji Marjaan in Sang-e-Mah, explore character transformations that defined contemporary South Asian screen acting.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-4 py-2 rounded-full text-xs font-semibold tracking-wider transition-all uppercase ${
                  activeCategory === cat.id
                    ? 'bg-gold-500 text-obsidian-950 shadow-lg shadow-gold-500/20'
                    : 'bg-obsidian-900 border border-neutral-800 text-neutral-400 hover:text-neutral-200 hover:border-neutral-700'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              onClick={() => setSelectedProject(project)}
              className="group cursor-pointer rounded-3xl overflow-hidden bg-obsidian-950 border border-neutral-800/90 hover:border-gold-500/50 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-gold-500/10 flex flex-col justify-between"
            >
              <div>
                {/* Poster / Backdrop Header */}
                <div className="relative aspect-[16/10] overflow-hidden bg-obsidian-900">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-obsidian-950 via-obsidian-950/40 to-transparent"></div>
                  
                  {/* Top Badges */}
                  <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
                    <span className="px-3 py-1 rounded-full bg-obsidian-950/80 backdrop-blur-md border border-gold-500/30 text-gold-300 font-mono text-[11px] font-semibold">
                      {project.year}
                    </span>

                    {project.featured && (
                      <span className="px-3 py-1 rounded-full bg-red-600/90 text-white font-mono text-[10px] uppercase font-bold tracking-wider shadow">
                        Cult Classic
                      </span>
                    )}
                  </div>

                  {/* Character Name Ribbon */}
                  <div className="absolute bottom-3 left-4 right-4">
                    <div className="text-[11px] uppercase tracking-wider text-gold-400 font-mono font-medium">
                      Character Portrayed
                    </div>
                    <div className="text-base font-serif font-bold text-white group-hover:text-gold-200 transition-colors">
                      {project.role}
                    </div>
                  </div>
                </div>

                {/* Details Body */}
                <div className="p-6 space-y-3">
                  <div className="flex items-center justify-between">
                    <h3 className="text-xl font-serif font-black text-white">
                      {project.title}
                    </h3>
                    <span className="text-lg font-['Noto_Nastaliq_Urdu'] text-gold-400/90">
                      {project.urduTitle}
                    </span>
                  </div>

                  <p className="text-xs text-neutral-400 line-clamp-2 font-light leading-relaxed">
                    {project.synopsis}
                  </p>

                  {/* Rating & Network */}
                  <div className="pt-2 flex items-center justify-between text-xs text-neutral-400 border-t border-neutral-800/80">
                    <span className="font-mono">{project.network}</span>
                    <span className="flex items-center gap-1 text-amber-400 font-semibold">
                      <Star className="w-3.5 h-3.5 fill-amber-400" />
                      <span>{project.rating.split(' ')[0]}</span>
                    </span>
                  </div>
                </div>
              </div>

              {/* Card Footer Action */}
              <div className="px-6 pb-6 pt-0">
                <div className="w-full py-2.5 rounded-xl bg-obsidian-900 border border-neutral-800 group-hover:border-gold-500/40 text-neutral-300 group-hover:text-gold-300 text-xs font-semibold uppercase tracking-wider flex items-center justify-center gap-1.5 transition-all">
                  <span>View Details & Dialogue</span>
                  <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Detail Modal */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
          onOpenChat={onOpenChat}
        />
      )}
    </section>
  );
}
