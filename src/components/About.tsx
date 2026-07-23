import React from 'react';
import { usePortfolio } from '../context/PortfolioContext';
import { Stethoscope, ShieldCheck, Microscope, LineChart, Sparkles, Dna, Layers, Zap } from 'lucide-react';

export const About: React.FC = () => {
  const { data } = usePortfolio();

  const pillars = [
    {
      icon: <Microscope className="w-6 h-6 text-teal-400" />,
      title: "Scientific Research & Formulations",
      desc: "Specialized in microparticle targeted drug delivery systems, epigenetics in cancer pathways, antimicrobial combination synergy, and in vivo animal disease models."
    },
    {
      icon: <LineChart className="w-6 h-6 text-sky-400" />,
      title: "Commercial Strategy & Sales",
      desc: "Demonstrated success in territory sales (achieving 105% target in Gynaecology & Orthopaedics), market research, KOL relationship building, and product pitch presentations."
    },
    {
      icon: <ShieldCheck className="w-6 h-6 text-emerald-400" />,
      title: "Regulatory & Quality Operations",
      desc: "Proven experience drafting and enforcing Standard Operating Procedures (SOPs) for pharmacy networks, telemedicine logistics, and adhering to Good Clinical Practice (GCP)."
    },
    {
      icon: <Dna className="w-6 h-6 text-indigo-400" />,
      title: "Emerging Healthcare Technologies",
      desc: "Forward-thinking focus on exosome technology, precision medicine, regenerative stem cell therapies, aesthetic medicine, and digital telemedicine integration."
    }
  ];

  return (
    <section id="about" className="py-20 relative bg-slate-950/60 border-t border-b border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-500/10 border border-teal-500/20 text-teal-400 text-xs font-semibold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Professional Biography & Vision</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
            Bridging Pharmaceutical Science & Commercial Healthcare
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            Combining rigorous clinical pharmacy education with real-world sales execution, regulatory compliance, and international research publications.
          </p>
        </div>

        {/* Biography Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-16">
          
          {/* Main Story Box */}
          <div className="lg:col-span-7 space-y-6 bg-slate-900/70 p-6 sm:p-8 rounded-2xl border border-slate-800 backdrop-blur-md shadow-xl">
            <h3 className="text-xl font-bold text-white flex items-center gap-2">
              <Stethoscope className="w-5 h-5 text-teal-400" />
              Doctor of Pharmacy Background
            </h3>
            
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              As a Doctor of Pharmacy (Pharm-D) graduate from COMSATS University Islamabad, Lahore Campus, my career is defined by a passion for scientific excellence and actionable healthcare solutions. My academic research focused on designing <strong className="text-teal-300">Baricitinib-Loaded Microparticles Gel for Psoriasis</strong> using quasi-emulsion diffusion methods, achieving an 85% efficacy rate in pre-clinical studies.
            </p>

            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              In parallel with research, I have gained substantial commercial exposure as a <strong className="text-teal-300">Territory Manager at Shaigan Pharmaceutical</strong> (exceeding annual sales targets by 105%), <strong className="text-teal-300">Medical Representative at Shafimed</strong>, and <strong className="text-teal-300">Operational & Technical Head at EasyShifa</strong>, where I crafted regulatory SOPs for pharmacy supply chains and delivery logistics.
            </p>

            <div className="p-4 rounded-xl bg-slate-800/60 border border-slate-700/60 space-y-2">
              <h4 className="text-xs font-bold text-teal-400 uppercase tracking-wider flex items-center gap-2">
                <Zap className="w-4 h-4" />
                Next-Generation Interests & Innovations
              </h4>
              <p className="text-xs sm:text-sm text-slate-300">
                Aesthetic medicine, exosome therapeutics, precision oncology, targeted nanomedicine, pharmacovigilance, and digital health transformation across international healthcare markets.
              </p>
            </div>
          </div>

          {/* Core Competency Highlights */}
          <div className="lg:col-span-5 grid grid-cols-1 gap-4">
            {pillars.map((pillar, idx) => (
              <div
                key={idx}
                className="p-5 rounded-2xl bg-slate-900/50 border border-slate-800/80 hover:border-teal-500/40 transition-all hover:bg-slate-800/50 group"
              >
                <div className="flex items-start gap-4">
                  <div className="p-2.5 rounded-xl bg-slate-800 border border-slate-700 group-hover:scale-110 transition-transform">
                    {pillar.icon}
                  </div>
                  <div>
                    <h4 className="text-base font-bold text-white group-hover:text-teal-300 transition-colors">
                      {pillar.title}
                    </h4>
                    <p className="text-xs sm:text-sm text-slate-400 mt-1 leading-relaxed">
                      {pillar.desc}
                    </p>
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
