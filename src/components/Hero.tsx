import React from 'react';
import { usePortfolio } from '../context/PortfolioContext';
import { Download, ArrowRight, Award, Stethoscope, Microscope, TrendingUp, Mail, ExternalLink, MapPin } from 'lucide-react';

export const Hero: React.FC = () => {
  const { data } = usePortfolio();
  const { profile } = data;

  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-grid-pattern">
      {/* Ambient background glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-teal-500/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-[400px] h-[400px] bg-sky-500/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Text Content */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Status / Category Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-800/80 border border-teal-500/30 text-teal-300 text-xs font-semibold tracking-wide backdrop-blur-md shadow-sm">
              <span className="w-2 h-2 rounded-full bg-teal-400 animate-pulse" />
              <span>Doctor of Pharmacy (Pharm-D) & Healthcare Leader</span>
            </div>

            {/* Main Name Heading */}
            <div className="space-y-2">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight">
                {profile.name}
              </h1>
              <p className="text-lg sm:text-xl font-medium text-teal-400">
                {profile.title}
              </p>
            </div>

            {/* Headline Banner */}
            <p className="text-base sm:text-lg text-slate-300 font-medium leading-relaxed max-w-2xl border-l-2 border-teal-500 pl-4 py-1">
              {profile.headline}
            </p>

            {/* Short Bio */}
            <p className="text-sm sm:text-base text-slate-400 leading-relaxed max-w-2xl">
              {profile.bio}
            </p>

            {/* Location & Quick Info */}
            <div className="flex flex-wrap items-center gap-4 text-xs sm:text-sm text-slate-400">
              <span className="flex items-center gap-1.5">
                <MapPin className="w-4 h-4 text-teal-400" />
                {profile.location}
              </span>
              <span className="w-1 h-1 rounded-full bg-slate-700" />
              <span className="flex items-center gap-1.5">
                <Stethoscope className="w-4 h-4 text-sky-400" />
                Pharmaceutical Sales & Business Dev
              </span>
              <span className="w-1 h-1 rounded-full bg-slate-700" />
              <span className="flex items-center gap-1.5">
                <Microscope className="w-4 h-4 text-indigo-400" />
                Scientific Research & Epigenetics
              </span>
            </div>

            {/* Call To Action Buttons */}
            <div className="pt-4 flex flex-wrap items-center gap-3">
              <a
                href="#research"
                className="flex items-center gap-2 px-6 py-3.5 rounded-xl bg-teal-600 hover:bg-teal-500 text-white font-semibold text-sm transition-all shadow-lg shadow-teal-500/25 hover:shadow-teal-500/40 hover:-translate-y-0.5"
              >
                <span>{data.appearance.ctaTextPrimary || 'Explore My Research'}</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="#experience"
                className="flex items-center gap-2 px-6 py-3.5 rounded-xl bg-slate-800/90 hover:bg-slate-700 text-slate-200 font-semibold text-sm border border-slate-700 hover:border-slate-600 transition-all hover:-translate-y-0.5"
              >
                <span>{data.appearance.ctaTextSecondary || 'View Experience'}</span>
              </a>

              <a
                href="#contact"
                className="flex items-center gap-2 px-5 py-3.5 rounded-xl bg-slate-900/80 hover:bg-slate-800 text-slate-300 font-semibold text-sm border border-slate-800 transition-all hover:text-white"
              >
                <Mail className="w-4 h-4 text-teal-400" />
                <span>Contact Me</span>
              </a>

              {profile.cvUrl && (
                <a
                  href={profile.cvUrl}
                  download="Talha_Muhammad_CV.pdf"
                  className="flex items-center gap-2 px-5 py-3.5 rounded-xl bg-slate-900/80 hover:bg-slate-800 text-slate-300 font-semibold text-sm border border-slate-800 transition-all hover:text-white"
                  title="Download PDF Resume"
                >
                  <Download className="w-4 h-4 text-sky-400" />
                  <span>Download CV</span>
                </a>
              )}
            </div>

          </div>

          {/* Right Column: Premium Profile Photo Card & Badge overlays */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-md">
              
              {/* Outer Glow Ring */}
              <div className="absolute -inset-1.5 bg-gradient-to-r from-teal-500 via-sky-500 to-indigo-500 rounded-3xl blur-lg opacity-40 group-hover:opacity-75 transition duration-1000" />
              
              {/* Profile Card Container */}
              <div className="relative rounded-3xl bg-slate-900 border border-slate-800/90 p-4 shadow-2xl overflow-hidden">
                <div className="relative rounded-2xl overflow-hidden aspect-[4/5] bg-slate-950">
                  <img
                    src={profile.image || '/Talhaimage.jpeg'}
                    alt={profile.name}
                    className="w-full h-full object-cover object-center transition-transform duration-700 hover:scale-105"
                  />
                  {/* Bottom Vignette Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0b0f19] via-transparent to-transparent opacity-80" />

                  {/* Profile Overlay Card */}
                  <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-slate-900/90 backdrop-blur-md border border-slate-700/60 shadow-xl">
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="text-sm font-bold text-white">{profile.name}</h3>
                        <p className="text-xs text-teal-400">Doctor of Pharmacy (Pharm-D)</p>
                      </div>
                      <div className="w-8 h-8 rounded-full bg-teal-500/20 border border-teal-500/40 flex items-center justify-center text-teal-300">
                        <Award className="w-4 h-4" />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Floating Top Badge */}
                <div className="absolute -top-3 -right-3 bg-slate-900 border border-teal-500/40 shadow-xl rounded-xl p-3 flex items-center gap-2.5 backdrop-blur-md">
                  <div className="w-8 h-8 rounded-lg bg-teal-500/20 flex items-center justify-center text-teal-400">
                    <TrendingUp className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-white">105% Target</div>
                    <div className="text-[10px] text-slate-400">Sales Achievement</div>
                  </div>
                </div>

                {/* Floating Bottom Badge */}
                <div className="absolute -bottom-3 -left-3 bg-slate-900 border border-sky-500/40 shadow-xl rounded-xl p-3 flex items-center gap-2.5 backdrop-blur-md">
                  <div className="w-8 h-8 rounded-lg bg-sky-500/20 flex items-center justify-center text-sky-400">
                    <Microscope className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-white">FEMS Microbes 2026</div>
                    <div className="text-[10px] text-slate-400">Published Research</div>
                  </div>
                </div>

              </div>

            </div>
          </div>

        </div>

        {/* Metrics Grid Bar */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 p-6 rounded-2xl bg-slate-900/60 border border-slate-800/80 backdrop-blur-md shadow-xl">
          {profile.metrics.map((metric, idx) => (
            <div key={idx} className="p-4 rounded-xl bg-slate-800/40 border border-slate-800 hover:border-teal-500/30 transition-colors">
              <div className="text-2xl sm:text-3xl font-extrabold text-teal-400 tracking-tight">
                {metric.value}
              </div>
              <div className="text-xs sm:text-sm font-medium text-slate-300 mt-1">
                {metric.label}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
