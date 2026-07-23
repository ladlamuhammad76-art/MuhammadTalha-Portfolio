import React from 'react';
import { usePortfolio } from '../context/PortfolioContext';
import { Sparkles, Dna, Compass, Lightbulb } from 'lucide-react';

export const InterestsSection: React.FC = () => {
  const { data } = usePortfolio();

  return (
    <section id="interests" className="py-16 relative bg-slate-950/60 border-t border-b border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-2xl mx-auto space-y-3 mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-500/10 border border-teal-500/20 text-teal-400 text-xs font-semibold uppercase tracking-wider">
            <Compass className="w-3.5 h-3.5" />
            <span>Future Healthcare Horizons</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
            Professional & Strategic Focus Areas
          </h2>
        </div>

        <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
          {data.interests.map((interest, idx) => (
            <div
              key={idx}
              className="flex items-center gap-2.5 px-4 py-2.5 rounded-2xl bg-slate-900/80 border border-slate-800 hover:border-teal-500/40 text-slate-200 text-xs sm:text-sm font-semibold transition-all hover:scale-105 hover:bg-slate-800 shadow-md group"
            >
              <Dna className="w-4 h-4 text-teal-400 group-hover:rotate-180 transition-transform duration-500" />
              <span>{interest}</span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
