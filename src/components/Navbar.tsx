import React, { useState, useEffect } from 'react';
import { usePortfolio } from '../context/PortfolioContext';
import { ShieldCheck, Download, Menu, X, FileText, LayoutDashboard, Sparkles } from 'lucide-react';

interface NavbarProps {
  currentView: 'portfolio' | 'admin';
  setCurrentView: (view: 'portfolio' | 'admin') => void;
}

export const Navbar: React.FC<NavbarProps> = ({ currentView, setCurrentView }) => {
  const { data } = usePortfolio();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Experience', href: '#experience' },
    { name: 'Education', href: '#education' },
    { name: 'Research', href: '#research' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Certifications', href: '#certifications' },
    { name: 'Conferences', href: '#conferences' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-[#070a12]/90 backdrop-blur-md border-b border-slate-800/80 py-3 shadow-2xl' : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo / Brand */}
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              setCurrentView('portfolio');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="flex items-center gap-3 group"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-teal-500 to-cyan-400 p-[2px] shadow-lg shadow-teal-500/20 group-hover:scale-105 transition-transform">
              <div className="w-full h-full bg-[#0b0f19] rounded-[10px] flex items-center justify-center font-bold text-teal-400 text-lg">
                MT
              </div>
            </div>
            <div>
              <div className="font-bold text-base tracking-wide text-white group-hover:text-teal-400 transition-colors flex items-center gap-2">
                {data.profile.name}
                <span className="inline-flex items-center gap-1 text-[10px] font-semibold bg-teal-500/10 text-teal-300 border border-teal-500/30 px-2 py-0.5 rounded-full">
                  <ShieldCheck className="w-3 h-3 text-teal-400" />
                  Pharm-D
                </span>
              </div>
              <p className="text-xs text-slate-400 hidden sm:block">Doctor of Pharmacy & Healthcare Innovator</p>
            </div>
          </a>

          {/* Desktop Nav Items */}
          <nav className="hidden lg:flex items-center gap-1 bg-slate-900/60 p-1.5 rounded-full border border-slate-800/80 backdrop-blur-sm">
            {currentView === 'portfolio' && navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="px-3 py-1.5 text-xs font-medium text-slate-300 hover:text-white hover:bg-slate-800/80 rounded-full transition-all"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Right Action Buttons */}
          <div className="hidden sm:flex items-center gap-3">
            {data.profile.cvUrl && (
              <a
                href={data.profile.cvUrl}
                download="Talha_Muhammad_CV.pdf"
                className="flex items-center gap-2 px-3.5 py-2 text-xs font-semibold rounded-lg text-slate-200 bg-slate-800/80 hover:bg-slate-700/80 border border-slate-700 hover:border-slate-600 transition-all shadow-sm"
                title="Download Official CV PDF"
              >
                <Download className="w-3.5 h-3.5 text-teal-400" />
                <span>Download CV</span>
              </a>
            )}

            <button
              onClick={() => setCurrentView(currentView === 'portfolio' ? 'admin' : 'portfolio')}
              className={`flex items-center gap-2 px-4 py-2 text-xs font-semibold rounded-lg transition-all shadow-md ${
                currentView === 'admin'
                  ? 'bg-amber-500 text-slate-950 hover:bg-amber-400'
                  : 'bg-teal-600 text-white hover:bg-teal-500 shadow-teal-500/20'
              }`}
            >
              {currentView === 'portfolio' ? (
                <>
                  <LayoutDashboard className="w-3.5 h-3.5" />
                  <span>Admin Portal</span>
                </>
              ) : (
                <>
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>View Public Portfolio</span>
                </>
              )}
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              onClick={() => setCurrentView(currentView === 'portfolio' ? 'admin' : 'portfolio')}
              className="p-2 text-xs font-medium text-teal-400 bg-teal-500/10 border border-teal-500/30 rounded-lg"
            >
              {currentView === 'portfolio' ? 'Admin' : 'Portfolio'}
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg bg-slate-800 text-slate-300 hover:text-white"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#0b0f19]/95 backdrop-blur-xl border-b border-slate-800 px-4 pt-4 pb-6 mt-3 animate-fade-in">
          <div className="flex flex-col gap-2">
            {currentView === 'portfolio' && navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 text-sm font-medium text-slate-300 hover:text-teal-400 hover:bg-slate-800/50 rounded-lg"
              >
                {link.name}
              </a>
            ))}
            {data.profile.cvUrl && (
              <a
                href={data.profile.cvUrl}
                download="Talha_Muhammad_CV.pdf"
                className="mt-2 flex items-center justify-center gap-2 px-4 py-2.5 text-xs font-semibold text-white bg-slate-800 rounded-lg border border-slate-700"
              >
                <Download className="w-4 h-4 text-teal-400" />
                Download CV (PDF)
              </a>
            )}
          </div>
        </div>
      )}
    </header>
  );
};
