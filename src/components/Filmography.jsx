import React, { useState } from 'react';
import { CELEBRITY_DATA } from '../data/celebrityData';
import { Film, Star, ArrowUpRight } from 'lucide-react';
import ProjectModal from './ProjectModal';

export default function Filmography({ onOpenChat }) {
  const { filmography } = CELEBRITY_DATA;
  const [activeCategory, setActiveCategory] = useState('all');
  const [selectedProject, setSelectedProject] = useState(null);

  const categories = [
    { id: 'all', label: 'All Works' },
    { id: 'tv-drama', label: 'Landmark Dramas' },
    { id: 'cult-role', label: 'Cult Antagonists' },
    { id: 'talk-show', label: 'Satire & Talk Shows' },
    { id: 'film', label: 'Cinema Films' },
  ];

  const filteredProjects = activeCategory === 'all'
    ? filmography
    : filmography.filter((p) => p.category === activeCategory);

  return (
    <section id="filmography" className="relative py-24 bg-obsidian-950">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Clean Editorial Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="space-y-2">
            <span className="text-[11px] font-mono uppercase tracking-widest text-gold-400">
              Selected Works
            </span>
            <h2 className="text-3xl sm:text-5xl font-serif font-black text-white tracking-tight">
              Iconic <span className="gold-gradient-text">Masterpieces</span>
            </h2>
            <p className="text-neutral-400 text-sm max-w-xl">
              From Behroze Karim in Parizaad to Haji Marjaan in Sang-e-Mah, each portrayal is an unrepeatable masterclass in method acting.
            </p>
          </div>

          {/* Minimalist Filter Navigation */}
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-medium tracking-wider transition-all ${
                  activeCategory === cat.id
                    ? 'bg-gold-500 text-obsidian-950 font-semibold'
                    : 'bg-obsidian-900 border border-neutral-800 text-neutral-400 hover:text-white hover:border-neutral-700'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Breathable 3-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              onClick={() => setSelectedProject(project)}
              className="group cursor-pointer rounded-2xl overflow-hidden bg-obsidian-900/60 border border-neutral-800/80 hover:border-gold-500/50 transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between"
            >
              <div>
                {/* Clean Poster Container with Unique Character Image */}
                <div className="relative aspect-[16/10] overflow-hidden bg-obsidian-950">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-obsidian-950 via-transparent to-transparent"></div>
                  
                  {/* Subtle Year Tag */}
                  <span className="absolute top-3 left-3 px-2.5 py-0.5 rounded-md bg-obsidian-950/80 backdrop-blur-sm border border-neutral-800 text-[10px] font-mono text-neutral-300">
                    {project.year}
                  </span>
                </div>

                {/* Information Area */}
                <div className="p-5 space-y-2">
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-serif font-bold text-white group-hover:text-gold-200 transition-colors">
                      {project.title}
                    </h3>
                    <span className="text-sm font-['Noto_Nastaliq_Urdu'] text-gold-400/80">
                      {project.urduTitle}
                    </span>
                  </div>

                  <div className="text-xs text-gold-300 font-medium">
                    {project.role}
                  </div>

                  <p className="text-xs text-neutral-400 line-clamp-2 leading-relaxed font-light pt-1">
                    {project.synopsis}
                  </p>
                </div>
              </div>

              {/* Minimal Card Footer */}
              <div className="px-5 pb-5 pt-0 flex items-center justify-between text-[11px] text-neutral-500 border-t border-neutral-900/60 pt-3">
                <span className="font-mono">{project.network}</span>
                <span className="text-neutral-400 group-hover:text-gold-300 flex items-center gap-1 transition-colors">
                  <span>Explore</span>
                  <ArrowUpRight className="w-3 h-3" />
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Project Details Modal */}
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
