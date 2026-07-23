import React from 'react';
import { usePortfolio } from '../context/PortfolioContext';
import { Globe2, ExternalLink, Quote, Mail, Phone, UserCheck, ShieldCheck } from 'lucide-react';

export const ConferencesSection: React.FC = () => {
  const { data } = usePortfolio();

  return (
    <section id="conferences" className="py-20 relative bg-[#070a12]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-500/10 border border-sky-500/20 text-sky-400 text-xs font-semibold uppercase tracking-wider">
            <Globe2 className="w-3.5 h-3.5" />
            <span>Global Networks & Peer Endorsements</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
            Conferences, Memberships & Recommendations
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            Active scientific memberships in international oncology societies alongside recommendations from distinguished pharmaceutical professors.
          </p>
        </div>

        {/* Global Memberships Sub-Grid */}
        <div className="mb-16">
          <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
            <ShieldCheck className="w-5 h-5 text-teal-400" />
            International Societies & Outreach Memberships
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {data.conferences.map((conf) => (
              <div
                key={conf.id}
                className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800 hover:border-teal-500/40 transition-all hover:bg-slate-900 backdrop-blur-md shadow-xl space-y-3"
              >
                <div className="flex items-center justify-between">
                  <span className="px-3 py-1 rounded-full text-xs font-semibold bg-teal-500/10 text-teal-300 border border-teal-500/20">
                    {conf.roleOrType}
                  </span>
                  <span className="text-xs font-medium text-slate-400">{conf.period}</span>
                </div>

                <h4 className="text-base font-bold text-white leading-snug">
                  {conf.title}
                </h4>

                <p className="text-xs font-semibold text-slate-300">
                  {conf.organization} • <span className="text-slate-400">{conf.location}</span>
                </p>

                <p className="text-xs text-slate-400 leading-relaxed">
                  {conf.description}
                </p>

                {conf.link && (
                  <div className="pt-2">
                    <a
                      href={conf.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs text-teal-400 hover:text-teal-300 font-semibold"
                    >
                      <span>Verification / Society Badge</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Academic Recommendations Sub-Grid */}
        <div>
          <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
            <UserCheck className="w-5 h-5 text-sky-400" />
            Academic Endorsements & Recommendations
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {data.recommendations.map((rec) => (
              <div
                key={rec.id}
                className="flex flex-col justify-between p-6 rounded-2xl bg-slate-900/80 border border-slate-800 hover:border-sky-500/40 transition-all backdrop-blur-md shadow-xl space-y-4 relative"
              >
                <div className="space-y-4">
                  <Quote className="w-8 h-8 text-teal-500/30" />
                  
                  <p className="text-xs sm:text-sm text-slate-300 italic leading-relaxed">
                    "{rec.quote}"
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-800 space-y-1">
                  <h4 className="text-sm font-bold text-white">{rec.name}</h4>
                  <p className="text-xs text-teal-400 font-medium">{rec.title}</p>
                  <p className="text-[11px] text-slate-400">{rec.institution}</p>
                  
                  <div className="pt-2 flex items-center gap-3 text-[11px] text-slate-400">
                    <a href={`mailto:${rec.email}`} className="hover:text-teal-300 flex items-center gap-1">
                      <Mail className="w-3 h-3" /> Email
                    </a>
                    <span>•</span>
                    <span className="flex items-center gap-1">
                      <Phone className="w-3 h-3" /> {rec.phone}
                    </span>
                  </div>
                </div>

              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
