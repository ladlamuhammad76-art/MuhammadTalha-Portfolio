import React from 'react';
import { usePortfolio } from '../context/PortfolioContext';
import { GraduationCap, Award, BookOpen, CheckCircle2, Sparkles, MapPin, Calendar, Microscope } from 'lucide-react';

export const EducationSection: React.FC = () => {
  const { data } = usePortfolio();

  return (
    <section id="education" className="py-20 relative bg-slate-950/80 border-t border-b border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-500/10 border border-teal-500/20 text-teal-400 text-xs font-semibold uppercase tracking-wider">
            <GraduationCap className="w-3.5 h-3.5" />
            <span>Academic Excellence</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
            Education & Doctoral Training
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            Comprehensive 5-year clinical and pharmaceutical doctorate curriculum with advanced experimental thesis research.
          </p>
        </div>

        {/* Main Education Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {data.education.map((edu) => (
            <React.Fragment key={edu.id}>
              
              {/* Left Column: Degree & Institution Overview */}
              <div className="lg:col-span-5 bg-gradient-to-br from-slate-900 via-slate-900 to-slate-950 p-8 rounded-3xl border border-slate-800 shadow-2xl flex flex-col justify-between space-y-6">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-2xl bg-teal-500/20 border border-teal-500/30 flex items-center justify-center text-teal-400 shadow-lg">
                      <GraduationCap className="w-6 h-6" />
                    </div>
                    <span className="px-3 py-1 rounded-full bg-slate-800 text-slate-300 text-xs font-semibold border border-slate-700">
                      {edu.eqfLevel}
                    </span>
                  </div>

                  <h3 className="text-2xl font-bold text-white leading-tight">
                    {edu.degree}
                  </h3>
                  
                  <p className="text-base font-medium text-teal-400 mt-1">
                    {edu.institution}
                  </p>

                  <div className="flex flex-wrap items-center gap-4 text-xs text-slate-400 mt-4 pt-4 border-t border-slate-800">
                    <span className="flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5 text-teal-400" />
                      {edu.duration}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <MapPin className="w-3.5 h-3.5 text-sky-400" />
                      {edu.location}
                    </span>
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-slate-800/60 border border-slate-700/60 space-y-2">
                  <div className="flex items-center justify-between text-xs font-semibold text-slate-300">
                    <span>Academic Qualification</span>
                    <span className="text-teal-400">{edu.grade}</span>
                  </div>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    Doctor of Pharmacy is accredited under European Qualifications Framework (EQF Level 7), qualifying for clinical practice, pharmaceutical research, and regulatory governance.
                  </p>
                </div>
              </div>

              {/* Right Column: Final-Year Thesis Spotlight */}
              <div className="lg:col-span-7 bg-slate-900/60 p-8 rounded-3xl border border-slate-800 backdrop-blur-md shadow-2xl flex flex-col justify-between space-y-6">
                <div>
                  <div className="flex items-center gap-2 text-xs font-bold text-teal-400 uppercase tracking-wider mb-2">
                    <Microscope className="w-4 h-4" />
                    <span>Final-Year Research Thesis Spotlight</span>
                  </div>

                  <h4 className="text-xl font-bold text-white leading-snug">
                    {edu.thesisTitle}
                  </h4>

                  <p className="text-sm text-slate-300 mt-3 leading-relaxed">
                    {edu.thesisDescription}
                  </p>

                  <div className="mt-6 space-y-3">
                    <p className="text-xs font-semibold text-slate-200 uppercase tracking-wider">Key Research Milestones & Techniques:</p>
                    <div className="space-y-2">
                      {edu.highlights.map((highlight, i) => (
                        <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                          <CheckCircle2 className="w-4 h-4 text-teal-400 shrink-0 mt-0.5" />
                          <span>{highlight}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-teal-500/10 border border-teal-500/20 text-xs text-teal-300 flex items-center justify-between">
                  <span className="font-semibold">Thesis Outcome: 85% Efficacy Score in In-Vivo Psoriasis Model</span>
                  <Sparkles className="w-4 h-4 text-teal-400 shrink-0" />
                </div>
              </div>

            </React.Fragment>
          ))}
        </div>

      </div>
    </section>
  );
};
