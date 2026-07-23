import React, { createContext, useContext, useState, useEffect } from 'react';
import { PortfolioData, Profile, Experience, Education, ResearchPublication, SkillItem, Project, Certification, ConferenceActivity, Recommendation, AppearanceSettings } from '../types/portfolio';
import { initialPortfolioData } from '../data/initialData';

const STORAGE_KEY = 'muhammad_talha_portfolio_data_v1';
const PASSCODE_STORAGE_KEY = 'muhammad_talha_admin_passcode_v1';

// Default passcode can also be set via environment variable VITE_ADMIN_PASSWORD if provided
const DEFAULT_PASSCODE = (import.meta.env && import.meta.env.VITE_ADMIN_PASSWORD)
  ? import.meta.env.VITE_ADMIN_PASSWORD
  : (initialPortfolioData.appearance.adminPassword || 'admin123');

// Helper to safely merge saved state with default portfolio data without losing sections
const mergeDataSafely = (incoming: any): PortfolioData => {
  if (!incoming || typeof incoming !== 'object') {
    return {
      ...initialPortfolioData,
      appearance: {
        ...initialPortfolioData.appearance,
        adminPassword: DEFAULT_PASSCODE
      }
    };
  }

  // Load custom passcode from localStorage if present
  let savedPasscode = DEFAULT_PASSCODE;
  try {
    const customPass = localStorage.getItem(PASSCODE_STORAGE_KEY);
    if (customPass) {
      savedPasscode = customPass;
    }
  } catch (e) {
    console.error('Error reading passcode from storage:', e);
  }

  return {
    profile: {
      ...initialPortfolioData.profile,
      ...(incoming.profile || {})
    },
    experiences: (Array.isArray(incoming.experiences) && incoming.experiences.length > 0)
      ? incoming.experiences
      : initialPortfolioData.experiences,
    education: (Array.isArray(incoming.education) && incoming.education.length > 0)
      ? incoming.education
      : initialPortfolioData.education,
    research: (Array.isArray(incoming.research) && incoming.research.length > 0)
      ? incoming.research
      : initialPortfolioData.research,
    skills: (Array.isArray(incoming.skills) && incoming.skills.length > 0)
      ? incoming.skills
      : initialPortfolioData.skills,
    projects: (Array.isArray(incoming.projects) && incoming.projects.length > 0)
      ? incoming.projects
      : initialPortfolioData.projects,
    certifications: (Array.isArray(incoming.certifications) && incoming.certifications.length > 0)
      ? incoming.certifications
      : initialPortfolioData.certifications,
    conferences: (Array.isArray(incoming.conferences) && incoming.conferences.length > 0)
      ? incoming.conferences
      : initialPortfolioData.conferences,
    interests: (Array.isArray(incoming.interests) && incoming.interests.length > 0)
      ? incoming.interests
      : initialPortfolioData.interests,
    appearance: {
      ...initialPortfolioData.appearance,
      ...(incoming.appearance || {}),
      adminPassword: incoming.appearance?.adminPassword || savedPasscode
    }
  };
};

interface PortfolioContextType {
  data: PortfolioData;
  isAdmin: boolean;
  setIsAdmin: (val: boolean) => void;
  updateProfile: (profile: Partial<Profile>) => void;
  // Experience CRUD
  addExperience: (item: Omit<Experience, 'id'>) => void;
  updateExperience: (id: string, item: Partial<Experience>) => void;
  deleteExperience: (id: string) => void;
  reorderExperiences: (items: Experience[]) => void;
  // Education CRUD
  addEducation: (item: Omit<Education, 'id'>) => void;
  updateEducation: (id: string, item: Partial<Education>) => void;
  deleteEducation: (id: string) => void;
  // Research CRUD
  addResearch: (item: Omit<ResearchPublication, 'id'>) => void;
  updateResearch: (id: string, item: Partial<ResearchPublication>) => void;
  deleteResearch: (id: string) => void;
  // Skill CRUD
  addSkill: (item: Omit<SkillItem, 'id'>) => void;
  updateSkill: (id: string, item: Partial<SkillItem>) => void;
  deleteSkill: (id: string) => void;
  // Project CRUD
  addProject: (item: Omit<Project, 'id'>) => void;
  updateProject: (id: string, item: Partial<Project>) => void;
  deleteProject: (id: string) => void;
  // Certification CRUD
  addCertification: (item: Omit<Certification, 'id'>) => void;
  updateCertification: (id: string, item: Partial<Certification>) => void;
  deleteCertification: (id: string) => void;
  // Conference CRUD
  addConference: (item: Omit<ConferenceActivity, 'id'>) => void;
  updateConference: (id: string, item: Partial<ConferenceActivity>) => void;
  deleteConference: (id: string) => void;
  // Interests
  updateInterests: (interests: string[]) => void;
  // Appearance & Security
  updateAppearance: (appearance: Partial<AppearanceSettings>) => void;
  updateAdminPassword: (newPass: string) => void;
  // Export / Import / Reset
  resetToInitialData: () => void;
  importJsonData: (jsonString: string) => boolean;
}

const PortfolioContext = createContext<PortfolioContextType | undefined>(undefined);

export const PortfolioProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [data, setData] = useState<PortfolioData>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        return mergeDataSafely(JSON.parse(saved));
      }
    } catch (e) {
      console.error('Failed to load saved portfolio data from localStorage', e);
    }
    return mergeDataSafely(initialPortfolioData);
  });

  const [isAdmin, setIsAdmin] = useState<boolean>(false);

  // Sync to LocalStorage whenever data changes
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
      if (data.appearance?.adminPassword) {
        localStorage.setItem(PASSCODE_STORAGE_KEY, data.appearance.adminPassword);
      }
    } catch (e) {
      console.error('Failed to save portfolio data to storage', e);
    }
  }, [data]);

  const updateProfile = (profileUpdate: Partial<Profile>) => {
    setData(prev => ({
      ...prev,
      profile: { ...prev.profile, ...profileUpdate }
    }));
  };

  // Experience
  const addExperience = (item: Omit<Experience, 'id'>) => {
    const newExp: Experience = { ...item, id: `exp-${Date.now()}` };
    setData(prev => ({ ...prev, experiences: [newExp, ...prev.experiences] }));
  };

  const updateExperience = (id: string, item: Partial<Experience>) => {
    setData(prev => ({
      ...prev,
      experiences: prev.experiences.map(e => e.id === id ? { ...e, ...item } : e)
    }));
  };

  const deleteExperience = (id: string) => {
    setData(prev => ({
      ...prev,
      experiences: prev.experiences.filter(e => e.id !== id)
    }));
  };

  const reorderExperiences = (items: Experience[]) => {
    setData(prev => ({ ...prev, experiences: items }));
  };

  // Education
  const addEducation = (item: Omit<Education, 'id'>) => {
    const newEdu: Education = { ...item, id: `edu-${Date.now()}` };
    setData(prev => ({ ...prev, education: [...prev.education, newEdu] }));
  };

  const updateEducation = (id: string, item: Partial<Education>) => {
    setData(prev => ({
      ...prev,
      education: prev.education.map(e => e.id === id ? { ...e, ...item } : e)
    }));
  };

  const deleteEducation = (id: string) => {
    setData(prev => ({
      ...prev,
      education: prev.education.filter(e => e.id !== id)
    }));
  };

  // Research
  const addResearch = (item: Omit<ResearchPublication, 'id'>) => {
    const newRes: ResearchPublication = { ...item, id: `res-${Date.now()}` };
    setData(prev => ({ ...prev, research: [newRes, ...prev.research] }));
  };

  const updateResearch = (id: string, item: Partial<ResearchPublication>) => {
    setData(prev => ({
      ...prev,
      research: prev.research.map(r => r.id === id ? { ...r, ...item } : r)
    }));
  };

  const deleteResearch = (id: string) => {
    setData(prev => ({
      ...prev,
      research: prev.research.filter(r => r.id !== id)
    }));
  };

  // Skill
  const addSkill = (item: Omit<SkillItem, 'id'>) => {
    const newSk: SkillItem = { ...item, id: `sk-${Date.now()}` };
    setData(prev => ({ ...prev, skills: [...prev.skills, newSk] }));
  };

  const updateSkill = (id: string, item: Partial<SkillItem>) => {
    setData(prev => ({
      ...prev,
      skills: prev.skills.map(s => s.id === id ? { ...s, ...item } : s)
    }));
  };

  const deleteSkill = (id: string) => {
    setData(prev => ({
      ...prev,
      skills: prev.skills.filter(s => s.id !== id)
    }));
  };

  // Project
  const addProject = (item: Omit<Project, 'id'>) => {
    const newProj: Project = { ...item, id: `proj-${Date.now()}` };
    setData(prev => ({ ...prev, projects: [newProj, ...prev.projects] }));
  };

  const updateProject = (id: string, item: Partial<Project>) => {
    setData(prev => ({
      ...prev,
      projects: prev.projects.map(p => p.id === id ? { ...p, ...item } : p)
    }));
  };

  const deleteProject = (id: string) => {
    setData(prev => ({
      ...prev,
      projects: prev.projects.filter(p => p.id !== id)
    }));
  };

  // Certification
  const addCertification = (item: Omit<Certification, 'id'>) => {
    const newCert: Certification = { ...item, id: `cert-${Date.now()}` };
    setData(prev => ({ ...prev, certifications: [...prev.certifications, newCert] }));
  };

  const updateCertification = (id: string, item: Partial<Certification>) => {
    setData(prev => ({
      ...prev,
      certifications: prev.certifications.map(c => c.id === id ? { ...c, ...item } : c)
    }));
  };

  const deleteCertification = (id: string) => {
    setData(prev => ({
      ...prev,
      certifications: prev.certifications.filter(c => c.id !== id)
    }));
  };

  // Conference
  const addConference = (item: Omit<ConferenceActivity, 'id'>) => {
    const newConf: ConferenceActivity = { ...item, id: `conf-${Date.now()}` };
    setData(prev => ({ ...prev, conferences: [...prev.conferences, newConf] }));
  };

  const updateConference = (id: string, item: Partial<ConferenceActivity>) => {
    setData(prev => ({
      ...prev,
      conferences: prev.conferences.map(c => c.id === id ? { ...c, ...item } : c)
    }));
  };

  const deleteConference = (id: string) => {
    setData(prev => ({
      ...prev,
      conferences: prev.conferences.filter(c => c.id !== id)
    }));
  };

  // Interests
  const updateInterests = (interests: string[]) => {
    setData(prev => ({ ...prev, interests }));
  };

  // Appearance & Security
  const updateAppearance = (appearanceUpdate: Partial<AppearanceSettings>) => {
    setData(prev => ({
      ...prev,
      appearance: { ...prev.appearance, ...appearanceUpdate }
    }));
  };

  const updateAdminPassword = (newPass: string) => {
    try {
      localStorage.setItem(PASSCODE_STORAGE_KEY, newPass);
    } catch (e) {
      console.error('Failed to save passcode to storage', e);
    }
    setData(prev => ({
      ...prev,
      appearance: {
        ...prev.appearance,
        adminPassword: newPass
      }
    }));
  };

  const resetToInitialData = () => {
    setData(initialPortfolioData);
    localStorage.removeItem(STORAGE_KEY);
    localStorage.removeItem(PASSCODE_STORAGE_KEY);
  };

  const importJsonData = (jsonString: string): boolean => {
    try {
      const parsed = JSON.parse(jsonString);
      if (parsed.profile && parsed.experiences && parsed.education) {
        setData(mergeDataSafely(parsed));
        return true;
      }
    } catch (e) {
      console.error('Invalid JSON import', e);
    }
    return false;
  };

  return (
    <PortfolioContext.Provider
      value={{
        data,
        isAdmin,
        setIsAdmin,
        updateProfile,
        addExperience,
        updateExperience,
        deleteExperience,
        reorderExperiences,
        addEducation,
        updateEducation,
        deleteEducation,
        addResearch,
        updateResearch,
        deleteResearch,
        addSkill,
        updateSkill,
        deleteSkill,
        addProject,
        updateProject,
        deleteProject,
        addCertification,
        updateCertification,
        deleteCertification,
        addConference,
        updateConference,
        deleteConference,
        updateInterests,
        updateAppearance,
        updateAdminPassword,
        resetToInitialData,
        importJsonData
      }}
    >
      {children}
    </PortfolioContext.Provider>
  );
};

export const usePortfolio = () => {
  const context = useContext(PortfolioContext);
  if (!context) {
    throw new Error('usePortfolio must be used within a PortfolioProvider');
  }
  return context;
};
