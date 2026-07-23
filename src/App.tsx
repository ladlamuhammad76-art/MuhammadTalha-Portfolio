import React, { useState } from 'react';
import { PortfolioProvider, usePortfolio } from './context/PortfolioContext';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { ExperienceSection } from './components/ExperienceSection';
import { EducationSection } from './components/EducationSection';
import { ResearchSection } from './components/ResearchSection';
import { SkillsSection } from './components/SkillsSection';
import { ProjectsSection } from './components/ProjectsSection';
import { CertificationsSection } from './components/CertificationsSection';
import { ConferencesSection } from './components/ConferencesSection';
import { InterestsSection } from './components/InterestsSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { AdminDashboard } from './components/AdminDashboard';

const MainContent: React.FC = () => {
  const [currentView, setCurrentView] = useState<'portfolio' | 'admin'>('portfolio');
  const { data } = usePortfolio();
  const { sectionVisibility } = data.appearance;

  return (
    <div className="min-h-screen bg-[#070a12] text-slate-100 selection:bg-teal-500 selection:text-white">
      {/* Top Navbar */}
      <Navbar currentView={currentView} setCurrentView={setCurrentView} />

      {/* Main View Switch */}
      {currentView === 'portfolio' ? (
        <main>
          <Hero />
          {sectionVisibility.about && <About />}
          {sectionVisibility.experience && <ExperienceSection />}
          {sectionVisibility.education && <EducationSection />}
          {sectionVisibility.research && <ResearchSection />}
          {sectionVisibility.skills && <SkillsSection />}
          {sectionVisibility.projects && <ProjectsSection />}
          {sectionVisibility.certifications && <CertificationsSection />}
          {sectionVisibility.conferences && <ConferencesSection />}
          {sectionVisibility.interests && <InterestsSection />}
          {sectionVisibility.contact && <ContactSection />}
          <Footer setCurrentView={setCurrentView} />
        </main>
      ) : (
        <main>
          <AdminDashboard />
          <Footer setCurrentView={setCurrentView} />
        </main>
      )}
    </div>
  );
};

export const App: React.FC = () => {
  return (
    <PortfolioProvider>
      <MainContent />
    </PortfolioProvider>
  );
};

export default App;
