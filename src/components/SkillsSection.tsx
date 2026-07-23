import React, { useState } from 'react';
import { usePortfolio } from '../context/PortfolioContext';
import { Award, CheckCircle2, Sparkles, SlidersHorizontal } from 'lucide-react';

export const SkillsSection: React.FC = () => {
  const { data } = usePortfolio();
  const [activeCategory, setActiveCategory] = useState<string>('All');

  const categories = [
    'All',
    'Pharmaceutical Sciences',
    'Pharmacology & Pharmaceutics',
    'Scientific & Clinical Research',
    'Business & Sales',
    'Regulatory Affairs',
    'Data & Analytics',
    'Medical Communication'
  ];

  const filteredSkills = activeCategory === 'All'
    ? data.skills
    : data.skills.filter(s => s.category === activeCategory);

  return (
    <section id="skills" className="py-20 relative bg-slate-950/70 border-t border-b border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-500/10 border border-teal-500/20 text-teal-400 text-xs font-semibold uppercase tracking-wider">
            <Award className="w-3.5 h-3.5" />
            <span>Core Competencies & Expertise</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
            Professional Skill Matrix
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            Categorized capabilities spanning clinical pharmacy, sales target execution, formulation design, data analytics, and regulatory compliance.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 text-xs font-semibold rounded-xl transition-all ${
                activeCategory === cat
                  ? 'bg-teal-600 text-white shadow-lg shadow-teal-500/20'
                  : 'bg-slate-900 text-slate-400 hover:text-white hover:bg-slate-800 border border-slate-800'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Skills Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredSkills.map((skill) => (
            <div
              key={skill.id}
              className="p-5 rounded-2xl bg-slate-900/60 border border-slate-800 hover:border-teal-500/40 transition-all hover:bg-slate-800/60 backdrop-blur-md flex items-center justify-between group shadow-lg"
            >
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <h3 className="text-sm font-bold text-white group-hover:text-teal-300 transition-colors">
                    {skill.name}
                  </h3>
                  {skill.featured && (
                    <Sparkles className="w-3.5 h-3.5 text-amber-400 shrink-0" title="Core Expertise" />
                  )}
                </div>
                <p className="text-[11px] text-slate-400 font-medium">{skill.category}</p>
              </div>

              <span className={`px-2.5 py-1 rounded-lg text-xs font-semibold border ${
                skill.level === 'Expert'
                  ? 'bg-teal-500/10 text-teal-300 border-teal-500/30'
                  : skill.level === 'Certified'
                  ? 'bg-amber-500/10 text-amber-300 border-amber-500/30'
                  : skill.level === 'Advanced'
                  ? 'bg-sky-500/10 text-sky-300 border-sky-500/30'
                  : 'bg-slate-800 text-slate-300 border-slate-700'
              }`}>
                {skill.level}
              </span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
