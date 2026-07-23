import React, { useState } from 'react';
import { usePortfolio } from '../context/PortfolioContext';
import { ResearchPublication } from '../types/portfolio';
import { ResearchModal } from './ResearchModal';
import { Microscope, BookOpen, ExternalLink, Eye, Award, FileText, CheckCircle2 } from 'lucide-react';

export const ResearchSection: React.FC = () => {
  const { data } = usePortfolio();
  const [activePub, setActivePub] = useState<ResearchPublication | null>(null);

  return (
    <section id="research" className="py-20 relative bg-[#070a12]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-semibold uppercase tracking-wider">
            <Microscope className="w-3.5 h-3.5" />
            <span>Peer-Reviewed Publications & Clinical Studies</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
            Research & Scientific Publications
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            Contributing evidence-based research across antimicrobial peptide synergy, epigenetics in cancer biology, and clinical treatment adherence.
          </p>
        </div>

        {/* Publication Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {data.research.map((pub) => (
            <div
              key={pub.id}
              className="flex flex-col justify-between p-6 rounded-3xl bg-slate-900/60 border border-slate-800 hover:border-teal-500/40 transition-all hover:bg-slate-900 backdrop-blur-md shadow-xl group"
            >
              <div className="space-y-4">
                {/* Top Badge Row */}
                <div className="flex items-center justify-between">
                  <span className="px-3 py-1 rounded-full text-xs font-semibold bg-teal-500/10 text-teal-300 border border-teal-500/20">
                    {pub.type}
                  </span>
                  <span className="text-xs font-medium text-slate-400">{pub.year}</span>
                </div>

                {/* Title */}
                <h3 className="text-base sm:text-lg font-bold text-white group-hover:text-teal-300 transition-colors line-clamp-3 leading-snug">
                  {pub.title}
                </h3>

                {/* Authors */}
                <p className="text-xs font-medium text-slate-400">
                  <span className="text-slate-500">Authors:</span> {pub.authors}
                </p>

                {/* Journal Info */}
                <div className="flex items-center gap-2 text-xs text-teal-400 font-semibold pt-2 border-t border-slate-800">
                  <BookOpen className="w-4 h-4 shrink-0" />
                  <span className="truncate">{pub.journalOrPublisher}</span>
                </div>

                {/* Abstract Preview */}
                <p className="text-xs text-slate-400 line-clamp-3 leading-relaxed">
                  {pub.abstract}
                </p>
              </div>

              {/* Action Buttons */}
              <div className="pt-6 mt-4 border-t border-slate-800/80 flex items-center justify-between">
                <button
                  onClick={() => setActivePub(pub)}
                  className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold transition-all border border-slate-700 hover:border-slate-600"
                >
                  <Eye className="w-3.5 h-3.5 text-teal-400" />
                  <span>Read Abstract & Findings</span>
                </button>

                {pub.link && (
                  <a
                    href={pub.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-xl bg-slate-800 hover:bg-teal-600 text-slate-400 hover:text-white transition-colors"
                    title="External Article Link"
                  >
                    <ExternalLink className="w-4 h-4" />
                  </a>
                )}
              </div>

            </div>
          ))}
        </div>

      </div>

      {/* Detail Modal */}
      <ResearchModal publication={activePub} onClose={() => setActivePub(null)} />
    </section>
  );
};
