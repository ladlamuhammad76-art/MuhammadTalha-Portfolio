import React, { useState } from 'react';
import { usePortfolio } from '../context/PortfolioContext';
import { Briefcase, Calendar, MapPin, ExternalLink, CheckCircle2, TrendingUp, Building2, Layers } from 'lucide-react';

export const ExperienceSection: React.FC = () => {
  const { data } = usePortfolio();
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = ['All', 'Sales & Marketing', 'Operations & Management', 'Research & Academic', 'Clinical & Pharmacy'];

  const filteredExperiences = selectedCategory === 'All'
    ? data.experiences
    : data.experiences.filter(exp => exp.category === selectedCategory);

  return (
    <section id="experience" className="py-20 relative bg-[#070a12]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-500/10 border border-sky-500/20 text-sky-400 text-xs font-semibold uppercase tracking-wider mb-3">
              <Briefcase className="w-3.5 h-3.5" />
              <span>Career Trajectory</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
              Professional Experience
            </h2>
            <p className="text-slate-400 text-sm sm:text-base mt-2 max-w-xl">
              Proven hands-on leadership across pharmaceutical sales, digital healthcare operations, research volunteering, and clinical drug information.
            </p>
          </div>

          {/* Category Filter Tabs */}
          <div className="flex flex-wrap items-center gap-2 bg-slate-900/80 p-1.5 rounded-xl border border-slate-800 backdrop-blur-md">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-all ${
                  selectedCategory === cat
                    ? 'bg-teal-600 text-white shadow-md'
                    : 'text-slate-400 hover:text-white hover:bg-slate-800'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Timeline / Card List */}
        <div className="space-y-8 relative before:absolute before:inset-0 before:left-6 md:before:left-1/2 before:w-0.5 before:-ml-px before:bg-slate-800/80">
          {filteredExperiences.map((exp, idx) => {
            const isEven = idx % 2 === 0;
            return (
              <div
                key={exp.id}
                className="relative flex flex-col md:flex-row items-center group"
              >
                {/* Timeline Dot */}
                <div className="absolute left-6 md:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-slate-900 border-2 border-teal-400 group-hover:bg-teal-400 group-hover:scale-125 transition-all z-10 shadow-lg shadow-teal-500/30" />

                {/* Card Wrapper */}
                <div className={`w-full md:w-1/2 pl-12 md:pl-0 ${isEven ? 'md:pr-12 md:text-right' : 'md:ml-auto md:pl-12'}`}>
                  <div className="p-6 rounded-2xl bg-slate-900/70 border border-slate-800 hover:border-teal-500/40 transition-all hover:bg-slate-900 backdrop-blur-md shadow-xl space-y-4">
                    
                    {/* Top Row: Category & Duration */}
                    <div className={`flex flex-wrap items-center gap-2 text-xs ${isEven ? 'md:justify-end' : 'justify-start'}`}>
                      <span className="px-2.5 py-0.5 rounded-full bg-teal-500/10 text-teal-300 border border-teal-500/20 font-semibold">
                        {exp.category}
                      </span>
                      <span className="flex items-center gap-1 text-slate-400">
                        <Calendar className="w-3.5 h-3.5 text-slate-500" />
                        {exp.duration}
                      </span>
                    </div>

                    {/* Job Title & Organization */}
                    <div>
                      <h3 className="text-lg font-bold text-white group-hover:text-teal-300 transition-colors">
                        {exp.title}
                      </h3>
                      <div className={`flex items-center gap-2 text-sm font-semibold text-slate-300 mt-1 ${isEven ? 'md:justify-end' : 'justify-start'}`}>
                        <Building2 className="w-4 h-4 text-teal-400" />
                        <span>{exp.organization}</span>
                        {exp.website && (
                          <a
                            href={exp.website}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-slate-400 hover:text-teal-300 transition-colors ml-1"
                            title="Visit website"
                          >
                            <ExternalLink className="w-3.5 h-3.5" />
                          </a>
                        )}
                      </div>
                      <p className={`text-xs text-slate-400 flex items-center gap-1 mt-1 ${isEven ? 'md:justify-end' : 'justify-start'}`}>
                        <MapPin className="w-3 h-3 text-slate-500" />
                        {exp.location}
                      </p>
                    </div>

                    {/* Key Responsibilities */}
                    <div className="space-y-1.5 text-xs sm:text-sm text-slate-300 text-left">
                      <p className="font-semibold text-slate-200 text-xs uppercase tracking-wider">Key Responsibilities:</p>
                      <ul className="space-y-1.5">
                        {exp.responsibilities.map((resp, i) => (
                          <li key={i} className="flex items-start gap-2 text-slate-400">
                            <span className="w-1.5 h-1.5 rounded-full bg-teal-400 mt-1.5 shrink-0" />
                            <span>{resp}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Achievements */}
                    {exp.achievements && exp.achievements.length > 0 && (
                      <div className="p-3 rounded-xl bg-slate-800/60 border border-slate-700/60 space-y-1 text-left">
                        <p className="text-xs font-bold text-teal-400 flex items-center gap-1.5">
                          <TrendingUp className="w-3.5 h-3.5" />
                          Key Achievements:
                        </p>
                        {exp.achievements.map((ach, i) => (
                          <p key={i} className="text-xs text-slate-300 flex items-center gap-2">
                            <CheckCircle2 className="w-3 h-3 text-teal-400 shrink-0" />
                            <span>{ach}</span>
                          </p>
                        ))}
                      </div>
                    )}

                    {/* Skills Tags */}
                    <div className={`flex flex-wrap gap-1.5 pt-2 ${isEven ? 'md:justify-end' : 'justify-start'}`}>
                      {exp.skills.map((skill, i) => (
                        <span
                          key={i}
                          className="px-2 py-0.5 text-[11px] font-medium rounded-md bg-slate-800 text-slate-300 border border-slate-700"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>

                  </div>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
