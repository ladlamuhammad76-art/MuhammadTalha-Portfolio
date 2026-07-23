import React from 'react';
import { usePortfolio } from '../context/PortfolioContext';
import { ShieldCheck, Calendar, Award, CheckCircle2 } from 'lucide-react';

export const CertificationsSection: React.FC = () => {
  const { data } = usePortfolio();

  return (
    <section id="certifications" className="py-20 relative bg-slate-950/80 border-t border-b border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold uppercase tracking-wider">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>Accredited Credentials & Continuous Learning</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
            Certifications & Training
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            Professional certifications in Good Clinical Practice (GCP), clinical trial statistics, and data-driven decision making.
          </p>
        </div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {data.certifications.map((cert) => (
            <div
              key={cert.id}
              className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800 hover:border-teal-500/40 transition-all hover:bg-slate-900 backdrop-blur-md shadow-xl flex items-start gap-4 group"
            >
              <div className="p-3 rounded-xl bg-teal-500/10 border border-teal-500/20 text-teal-400 shrink-0 group-hover:scale-110 transition-transform">
                <Award className="w-6 h-6" />
              </div>
              <div className="space-y-2">
                <span className="px-2.5 py-0.5 rounded-full bg-slate-800 text-slate-300 text-[10px] font-semibold border border-slate-700">
                  {cert.mode}
                </span>
                <h3 className="text-base font-bold text-white group-hover:text-teal-300 transition-colors">
                  {cert.title}
                </h3>
                <p className="text-xs font-medium text-teal-400">
                  {cert.issuer}
                </p>
                <p className="text-xs text-slate-400 flex items-center gap-1">
                  <Calendar className="w-3 h-3 text-slate-500" />
                  Completed: {cert.date}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
