import React from 'react';
import { usePortfolio } from '../context/PortfolioContext';
import { ShieldCheck, ArrowUp, LayoutDashboard } from 'lucide-react';

interface FooterProps {
  setCurrentView: (view: 'portfolio' | 'admin') => void;
}

export const Footer: React.FC<FooterProps> = ({ setCurrentView }) => {
  const { data } = usePortfolio();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-12 bg-slate-950 border-t border-slate-900 text-slate-400 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* Brand & Copy */}
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-teal-500/20 border border-teal-500/30 flex items-center justify-center font-bold text-teal-400 text-sm">
            MT
          </div>
          <div>
            <p className="font-bold text-white text-sm flex items-center gap-1.5">
              {data.profile.name}
              <ShieldCheck className="w-3.5 h-3.5 text-teal-400" />
            </p>
            <p className="text-slate-500">Doctor of Pharmacy • Healthcare Business & Scientific Research</p>
          </div>
        </div>

        {/* Admin Quick Action */}
        <div className="flex items-center gap-4">
          <button
            onClick={() => setCurrentView('admin')}
            className="flex items-center gap-1.5 text-slate-400 hover:text-teal-300 transition-colors"
          >
            <LayoutDashboard className="w-3.5 h-3.5" />
            <span>Admin Content Management</span>
          </button>
          
          <span>•</span>

          <button
            onClick={scrollToTop}
            className="p-2 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white transition-colors"
            title="Back to top"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>

      </div>
    </footer>
  );
};
