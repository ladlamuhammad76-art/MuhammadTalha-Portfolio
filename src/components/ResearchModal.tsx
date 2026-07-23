import React from 'react';
import { ResearchPublication } from '../types/portfolio';
import { X, ExternalLink, BookOpen, Microscope, CheckCircle2, FileText } from 'lucide-react';

interface ResearchModalProps {
  publication: ResearchPublication | null;
  onClose: () => void;
}

export const ResearchModal: React.FC<ResearchModalProps> = ({ publication, onClose }) => {
  if (!publication) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-fade-in">
      <div className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-8 shadow-2xl space-y-6">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full bg-slate-800 text-slate-400 hover:text-white hover:bg-slate-700 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="space-y-2 pr-8">
          <div className="flex items-center gap-2">
            <span className="px-3 py-1 rounded-full text-xs font-semibold bg-teal-500/10 text-teal-400 border border-teal-500/30">
              {publication.type}
            </span>
            <span className="text-xs font-medium text-slate-400">{publication.year}</span>
          </div>

          <h3 className="text-xl sm:text-2xl font-bold text-white leading-snug">
            {publication.title}
          </h3>

          <p className="text-sm font-medium text-teal-400">
            {publication.authors}
          </p>

          <p className="text-xs text-slate-400 flex items-center gap-2">
            <BookOpen className="w-3.5 h-3.5 text-sky-400" />
            <span>{publication.journalOrPublisher}</span>
            {publication.volumePages && <span>• {publication.volumePages}</span>}
          </p>
        </div>

        {/* Abstract */}
        <div className="p-5 rounded-2xl bg-slate-800/50 border border-slate-700/60 space-y-2">
          <h4 className="text-xs font-bold text-slate-200 uppercase tracking-wider flex items-center gap-2">
            <FileText className="w-4 h-4 text-teal-400" />
            Abstract Summary
          </h4>
          <p className="text-sm text-slate-300 leading-relaxed">
            {publication.abstract}
          </p>
        </div>

        {/* Methodology */}
        <div className="p-5 rounded-2xl bg-slate-800/50 border border-slate-700/60 space-y-2">
          <h4 className="text-xs font-bold text-slate-200 uppercase tracking-wider flex items-center gap-2">
            <Microscope className="w-4 h-4 text-sky-400" />
            Research Methodology & Techniques
          </h4>
          <p className="text-sm text-slate-300 leading-relaxed">
            {publication.methodology}
          </p>
        </div>

        {/* Key Findings */}
        <div className="space-y-3">
          <h4 className="text-xs font-bold text-slate-200 uppercase tracking-wider">
            Key Findings & Clinical Implications
          </h4>
          <div className="space-y-2">
            {publication.keyFindings.map((finding, idx) => (
              <div key={idx} className="flex items-start gap-2.5 text-sm text-slate-300 p-3 rounded-xl bg-slate-800/30 border border-slate-800">
                <CheckCircle2 className="w-4 h-4 text-teal-400 shrink-0 mt-0.5" />
                <span>{finding}</span>
              </div>
            ))}
          </div>
        </div>

        {/* External Link CTA */}
        {publication.link && (
          <div className="pt-4 border-t border-slate-800 flex justify-end">
            <a
              href={publication.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-teal-600 hover:bg-teal-500 text-white font-semibold text-xs transition-all shadow-md"
            >
              <span>View Full Publication Link</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        )}

      </div>
    </div>
  );
};
