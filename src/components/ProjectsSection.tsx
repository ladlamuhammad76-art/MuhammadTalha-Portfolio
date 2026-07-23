import React from 'react';
import { usePortfolio } from '../context/PortfolioContext';
import { FolderGit2, ExternalLink, Calendar, CheckCircle2, Cpu, Globe } from 'lucide-react';

export const ProjectsSection: React.FC = () => {
  const { data } = usePortfolio();

  return (
    <section id="projects" className="py-20 relative bg-[#070a12]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-xs font-semibold uppercase tracking-wider">
            <FolderGit2 className="w-3.5 h-3.5" />
            <span>Featured Scientific & Digital Projects</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
            Projects & Digital Innovations
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            From novel drug delivery formulations to clinical epidemiological studies and pharmaceutical e-commerce platforms.
          </p>
        </div>

        {/* Projects Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {data.projects.map((proj) => (
            <div
              key={proj.id}
              className="flex flex-col justify-between p-6 rounded-3xl bg-slate-900/60 border border-slate-800 hover:border-teal-500/40 transition-all hover:bg-slate-900 backdrop-blur-md shadow-xl group"
            >
              <div className="space-y-4">
                
                {/* Category & Duration */}
                <div className="flex items-center justify-between">
                  <span className="px-3 py-1 rounded-full text-xs font-semibold bg-purple-500/10 text-purple-300 border border-purple-500/20">
                    {proj.category}
                  </span>
                  <span className="text-xs font-medium text-slate-400 flex items-center gap-1">
                    <Calendar className="w-3 h-3" />
                    {proj.duration}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-lg font-bold text-white group-hover:text-teal-300 transition-colors leading-snug">
                  {proj.title}
                </h3>

                {/* Description */}
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {proj.description}
                </p>

                {/* Methodology or Tech Stack */}
                <div className="p-3.5 rounded-xl bg-slate-800/60 border border-slate-700/60 space-y-1">
                  <p className="text-[11px] font-bold text-teal-400 uppercase tracking-wider flex items-center gap-1.5">
                    <Cpu className="w-3.5 h-3.5" />
                    Methodology / Tech Stack:
                  </p>
                  <p className="text-xs text-slate-300">
                    {proj.methodologyOrTech}
                  </p>
                </div>

                {/* Key Outcomes */}
                <div className="space-y-1.5">
                  <p className="text-xs font-semibold text-slate-200 uppercase tracking-wider">Key Outcomes:</p>
                  {proj.outcomes.map((outcome, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs text-slate-400">
                      <CheckCircle2 className="w-3.5 h-3.5 text-teal-400 shrink-0 mt-0.5" />
                      <span>{outcome}</span>
                    </div>
                  ))}
                </div>

              </div>

              {/* External Link if exists */}
              {proj.link && (
                <div className="pt-6 mt-4 border-t border-slate-800/80">
                  <a
                    href={proj.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-teal-600 hover:bg-teal-500 text-white text-xs font-semibold transition-all shadow-md"
                  >
                    <Globe className="w-3.5 h-3.5" />
                    <span>Visit Live Store</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              )}

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
