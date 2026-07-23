export interface Metric {
  label: string;
  value: string;
}

export interface Profile {
  name: string;
  title: string;
  headline: string;
  location: string;
  email: string;
  phone: string;
  website: string;
  linkedin: string;
  bio: string;
  image: string;
  cvUrl: string;
  metrics: Metric[];
}

export interface Experience {
  id: string;
  title: string;
  organization: string;
  duration: string;
  location: string;
  category: 'Sales & Marketing' | 'Operations & Management' | 'Research & Academic' | 'Clinical & Pharmacy';
  website?: string;
  responsibilities: string[];
  achievements?: string[];
  skills: string[];
}

export interface Education {
  id: string;
  degree: string;
  institution: string;
  duration: string;
  location: string;
  grade: string;
  eqfLevel: string;
  thesisTitle: string;
  thesisDescription: string;
  highlights: string[];
}

export interface ResearchPublication {
  id: string;
  title: string;
  authors: string;
  journalOrPublisher: string;
  year: string;
  volumePages?: string;
  link?: string;
  type: 'Journal Article' | 'Book Chapter' | 'Project Study' | 'Clinical Report';
  abstract: string;
  methodology: string;
  keyFindings: string[];
  status: 'Published' | 'Under Review' | 'In Progress';
}

export interface SkillItem {
  id: string;
  name: string;
  category: 'Pharmaceutical Sciences' | 'Pharmacology & Pharmaceutics' | 'Business & Sales' | 'Regulatory Affairs' | 'Data & Analytics' | 'Medical Communication';
  level: string; // e.g. "Expert", "Advanced", "Proficient"
  featured: boolean;
}

export interface Project {
  id: string;
  title: string;
  category: 'Scientific Research' | 'Pharmaceutical Business' | 'E-Commerce / Tech' | 'Clinical Study';
  duration: string;
  description: string;
  methodologyOrTech: string;
  outcomes: string[];
  link?: string;
  image?: string;
}

export interface Certification {
  id: string;
  title: string;
  issuer: string;
  date: string;
  mode: string;
  link?: string;
}

export interface ConferenceActivity {
  id: string;
  title: string;
  organization: string;
  roleOrType: string;
  period: string;
  location: string;
  description: string;
  link?: string;
}

export interface Recommendation {
  id: string;
  name: string;
  title: string;
  institution: string;
  email: string;
  phone: string;
  quote: string;
}

export interface AppearanceSettings {
  primaryColor: string; // e.g., '#0d9488'
  themeMode: 'dark' | 'emerald' | 'navy';
  heroTagline: string;
  ctaTextPrimary: string;
  ctaTextSecondary: string;
  adminPassword?: string;
  sectionVisibility: {
    about: boolean;
    experience: boolean;
    education: boolean;
    research: boolean;
    skills: boolean;
    projects: boolean;
    certifications: boolean;
    conferences: boolean;
    interests: boolean;
    recommendations: boolean;
    contact: boolean;
  };
}

export interface PortfolioData {
  profile: Profile;
  experiences: Experience[];
  education: Education[];
  research: ResearchPublication[];
  skills: SkillItem[];
  projects: Project[];
  certifications: Certification[];
  conferences: ConferenceActivity[];
  recommendations: Recommendation[];
  interests: string[];
  appearance: AppearanceSettings;
}
