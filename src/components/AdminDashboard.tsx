import React, { useState } from 'react';
import { usePortfolio } from '../context/PortfolioContext';
import {
  Lock, Unlock, LayoutDashboard, User, Briefcase, GraduationCap, Microscope,
  FolderGit2, Award, Globe2, Palette, Download, Upload, RotateCcw, Plus, Trash2,
  Edit2, Save, X, Eye, CheckCircle, Sparkles, Image as ImageIcon, FileText, ArrowUp, ArrowDown, KeyRound, ShieldAlert
} from 'lucide-react';
import { Experience, Education, ResearchPublication, SkillItem, Project, Certification, ConferenceActivity } from '../types/portfolio';

export const AdminDashboard: React.FC = () => {
  const {
    data,
    updateProfile,
    addExperience,
    updateExperience,
    deleteExperience,
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
    updateAppearance,
    updateAdminPassword,
    resetToInitialData,
    importJsonData
  } = usePortfolio();

  // Auth state
  const [passcode, setPasscode] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [authError, setAuthError] = useState(false);

  // Password Change state
  const [currentPassInput, setCurrentPassInput] = useState('');
  const [newPassInput, setNewPassInput] = useState('');
  const [confirmPassInput, setConfirmPassInput] = useState('');
  const [passChangeError, setPassChangeError] = useState('');

  // Active Tab state
  const [activeTab, setActiveTab] = useState<'profile' | 'experience' | 'education' | 'research' | 'projects' | 'skills' | 'certifications' | 'conferences' | 'appearance' | 'security' | 'data'>('profile');

  // Success Notification banner
  const [successMsg, setSuccessMsg] = useState('');

  const triggerSuccess = (msg: string) => {
    setSuccessMsg(msg);
    setTimeout(() => setSuccessMsg(''), 4000);
  };

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    const validPassword = data.appearance.adminPassword || 'admin123';
    if (passcode === validPassword) {
      setIsAuthenticated(true);
      setAuthError(false);
      setPasscode('');
    } else {
      setAuthError(true);
    }
  };

  const handleChangePassword = (e: React.FormEvent) => {
    e.preventDefault();
    setPassChangeError('');

    const currentActual = data.appearance.adminPassword || 'admin123';

    if (currentPassInput !== currentActual) {
      setPassChangeError('Current passcode is incorrect.');
      return;
    }

    if (!newPassInput || newPassInput.length < 4) {
      setPassChangeError('New passcode must be at least 4 characters long.');
      return;
    }

    if (newPassInput !== confirmPassInput) {
      setPassChangeError('New passcode and confirmation do not match.');
      return;
    }

    updateAdminPassword(newPassInput);
    setCurrentPassInput('');
    setNewPassInput('');
    setConfirmPassInput('');
    triggerSuccess('Admin security passcode updated successfully!');
  };

  // Login Screen if not authenticated
  if (!isAuthenticated) {
    return (
      <div className="min-h-screen pt-32 pb-20 flex items-center justify-center px-4 bg-grid-pattern">
        <div className="w-full max-w-md p-8 rounded-3xl bg-slate-900 border border-slate-800 shadow-2xl space-y-6 text-center">
          <div className="w-16 h-16 rounded-2xl bg-teal-500/10 border border-teal-500/30 flex items-center justify-center text-teal-400 mx-auto">
            <Lock className="w-8 h-8" />
          </div>

          <div className="space-y-1">
            <h2 className="text-2xl font-bold text-white">Portfolio Admin Portal</h2>
            <p className="text-xs text-slate-400">Secure Content & Website Management System</p>
          </div>

          <form onSubmit={handleLogin} className="space-y-4 text-left">
            <div className="space-y-1.5">
              <label className="text-xs font-semibold text-slate-300">Admin Security Passcode</label>
              <input
                type="password"
                required
                placeholder="Enter your security passcode"
                value={passcode}
                onChange={(e) => setPasscode(e.target.value)}
                className="w-full px-4 py-3 rounded-xl bg-slate-800 border border-slate-700 text-white text-xs focus:outline-none focus:border-teal-500 transition-colors"
              />
              {authError && (
                <p className="text-xs text-rose-400 mt-1 flex items-center gap-1">
                  <ShieldAlert className="w-3.5 h-3.5" />
                  Incorrect passcode. Please try again.
                </p>
              )}
            </div>

            <button
              type="submit"
              className="w-full py-3 rounded-xl bg-teal-600 hover:bg-teal-500 text-white font-bold text-xs shadow-lg shadow-teal-500/25 transition-all"
            >
              Authenticate & Access Dashboard
            </button>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-28 pb-20 bg-[#070a12] text-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* Top Header Bar */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 p-6 rounded-3xl bg-slate-900 border border-slate-800 shadow-xl">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-2xl bg-teal-500/20 border border-teal-500/30 flex items-center justify-center text-teal-400 shadow-md">
              <LayoutDashboard className="w-6 h-6" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-white flex items-center gap-2">
                Portfolio Content Management Dashboard
                <span className="px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 text-[10px]">
                  Protected Session
                </span>
              </h1>
              <p className="text-xs text-slate-400">All updates immediately sync to the public website without code modifications.</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => setIsAuthenticated(false)}
              className="flex items-center gap-2 px-4 py-2 rounded-xl bg-rose-500/10 hover:bg-rose-500/20 text-rose-300 text-xs font-semibold border border-rose-500/30 transition-all"
            >
              <Lock className="w-3.5 h-3.5" />
              Lock Session
            </button>
          </div>
        </div>

        {/* Success Toast Banner */}
        {successMsg && (
          <div className="p-4 rounded-2xl bg-teal-500/20 border border-teal-500/40 text-teal-300 text-xs font-semibold flex items-center gap-2 animate-fade-in shadow-lg">
            <CheckCircle className="w-4 h-4 text-teal-400" />
            <span>{successMsg}</span>
          </div>
        )}

        {/* Tab Navigation Grid */}
        <div className="flex flex-wrap gap-2 p-2 rounded-2xl bg-slate-900/80 border border-slate-800 backdrop-blur-md">
          {[
            { id: 'profile', label: 'Profile & Bio', icon: <User className="w-4 h-4" /> },
            { id: 'experience', label: 'Experience', icon: <Briefcase className="w-4 h-4" /> },
            { id: 'education', label: 'Education', icon: <GraduationCap className="w-4 h-4" /> },
            { id: 'research', label: 'Research & Publications', icon: <Microscope className="w-4 h-4" /> },
            { id: 'projects', label: 'Projects', icon: <FolderGit2 className="w-4 h-4" /> },
            { id: 'skills', label: 'Skills Matrix', icon: <Award className="w-4 h-4" /> },
            { id: 'certifications', label: 'Certifications', icon: <FileText className="w-4 h-4" /> },
            { id: 'conferences', label: 'Conferences & Activity', icon: <Globe2 className="w-4 h-4" /> },
            { id: 'appearance', label: 'Appearance Settings', icon: <Palette className="w-4 h-4" /> },
            { id: 'security', label: 'Admin Passcode & Security', icon: <KeyRound className="w-4 h-4" /> },
            { id: 'data', label: 'Backup / JSON Export', icon: <Download className="w-4 h-4" /> }
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as any)}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-semibold transition-all ${
                activeTab === tab.id
                  ? 'bg-teal-600 text-white shadow-md'
                  : 'text-slate-400 hover:text-white hover:bg-slate-800'
              }`}
            >
              {tab.icon}
              <span>{tab.label}</span>
            </button>
          ))}
        </div>

        {/* TAB 1: PROFILE MANAGEMENT */}
        {activeTab === 'profile' && (
          <div className="p-8 rounded-3xl bg-slate-900/70 border border-slate-800 shadow-xl space-y-6">
            <h2 className="text-lg font-bold text-white flex items-center gap-2">
              <User className="w-5 h-5 text-teal-400" />
              Manage Personal Profile & Bio
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-slate-300">Full Name</label>
                <input
                  type="text"
                  value={data.profile.name}
                  onChange={(e) => updateProfile({ name: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl bg-slate-800 border border-slate-700 text-white text-xs"
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-slate-300">Degree / Title Badge</label>
                <input
                  type="text"
                  value={data.profile.title}
                  onChange={(e) => updateProfile({ title: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl bg-slate-800 border border-slate-700 text-white text-xs"
                />
              </div>

              <div className="md:col-span-2 space-y-1.5">
                <label className="text-xs font-semibold text-slate-300">Professional Headline</label>
                <input
                  type="text"
                  value={data.profile.headline}
                  onChange={(e) => updateProfile({ headline: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl bg-slate-800 border border-slate-700 text-white text-xs"
                />
              </div>

              <div className="md:col-span-2 space-y-1.5">
                <label className="text-xs font-semibold text-slate-300">Professional Biography</label>
                <textarea
                  rows={4}
                  value={data.profile.bio}
                  onChange={(e) => updateProfile({ bio: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl bg-slate-800 border border-slate-700 text-white text-xs resize-none"
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-slate-300">Email Address</label>
                <input
                  type="email"
                  value={data.profile.email}
                  onChange={(e) => updateProfile({ email: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl bg-slate-800 border border-slate-700 text-white text-xs"
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-slate-300">Phone Number</label>
                <input
                  type="text"
                  value={data.profile.phone}
                  onChange={(e) => updateProfile({ phone: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl bg-slate-800 border border-slate-700 text-white text-xs"
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-slate-300">Location</label>
                <input
                  type="text"
                  value={data.profile.location}
                  onChange={(e) => updateProfile({ location: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl bg-slate-800 border border-slate-700 text-white text-xs"
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-slate-300">LinkedIn URL</label>
                <input
                  type="text"
                  value={data.profile.linkedin}
                  onChange={(e) => updateProfile({ linkedin: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl bg-slate-800 border border-slate-700 text-white text-xs"
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-slate-300">Profile Image Path / URL</label>
                <input
                  type="text"
                  value={data.profile.image}
                  onChange={(e) => updateProfile({ image: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl bg-slate-800 border border-slate-700 text-white text-xs"
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-slate-300">CV Download Document Path / URL</label>
                <input
                  type="text"
                  value={data.profile.cvUrl}
                  onChange={(e) => updateProfile({ cvUrl: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl bg-slate-800 border border-slate-700 text-white text-xs"
                />
              </div>
            </div>

            <div className="pt-4 flex justify-end">
              <button
                onClick={() => triggerSuccess('Profile details updated successfully!')}
                className="px-6 py-2.5 rounded-xl bg-teal-600 hover:bg-teal-500 text-white font-bold text-xs flex items-center gap-2 shadow-lg shadow-teal-500/25"
              >
                <Save className="w-4 h-4" /> Save Profile Updates
              </button>
            </div>
          </div>
        )}

        {/* TAB 2: EXPERIENCE MANAGEMENT */}
        {activeTab === 'experience' && (
          <div className="p-8 rounded-3xl bg-slate-900/70 border border-slate-800 shadow-xl space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-bold text-white flex items-center gap-2">
                <Briefcase className="w-5 h-5 text-teal-400" />
                Manage Work Experience & Roles
              </h2>
              <button
                onClick={() => {
                  const newExp: Omit<Experience, 'id'> = {
                    title: 'New Position',
                    organization: 'Healthcare Organization',
                    duration: '2026 – Present',
                    location: 'Lahore, Pakistan',
                    category: 'Sales & Marketing',
                    responsibilities: ['Responsibility item 1'],
                    skills: ['Healthcare', 'Sales']
                  };
                  addExperience(newExp);
                  triggerSuccess('Added new experience entry!');
                }}
                className="flex items-center gap-2 px-4 py-2 rounded-xl bg-teal-600 hover:bg-teal-500 text-white font-bold text-xs"
              >
                <Plus className="w-4 h-4" /> Add Experience Entry
              </button>
            </div>

            <div className="space-y-4">
              {data.experiences.map((exp) => (
                <div key={exp.id} className="p-5 rounded-2xl bg-slate-800/60 border border-slate-700 space-y-3">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-sm font-bold text-white">{exp.title}</h3>
                      <p className="text-xs text-teal-400">{exp.organization} • {exp.duration}</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => deleteExperience(exp.id)}
                        className="p-2 rounded-lg bg-rose-500/10 text-rose-400 hover:bg-rose-500/20"
                        title="Delete entry"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                    <div>
                      <label className="text-slate-400">Position Title</label>
                      <input
                        type="text"
                        value={exp.title}
                        onChange={(e) => updateExperience(exp.id, { title: e.target.value })}
                        className="w-full px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-700 text-white mt-1"
                      />
                    </div>
                    <div>
                      <label className="text-slate-400">Organization</label>
                      <input
                        type="text"
                        value={exp.organization}
                        onChange={(e) => updateExperience(exp.id, { organization: e.target.value })}
                        className="w-full px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-700 text-white mt-1"
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* TAB 3: EDUCATION MANAGEMENT */}
        {activeTab === 'education' && (
          <div className="p-8 rounded-3xl bg-slate-900/70 border border-slate-800 shadow-xl space-y-6">
            <h2 className="text-lg font-bold text-white flex items-center gap-2">
              <GraduationCap className="w-5 h-5 text-teal-400" />
              Manage Education & Thesis Details
            </h2>

            {data.education.map((edu) => (
              <div key={edu.id} className="p-6 rounded-2xl bg-slate-800/60 border border-slate-700 space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                  <div>
                    <label className="text-slate-300 font-semibold">Degree Title</label>
                    <input
                      type="text"
                      value={edu.degree}
                      onChange={(e) => updateEducation(edu.id, { degree: e.target.value })}
                      className="w-full px-3 py-2 rounded-xl bg-slate-900 border border-slate-700 text-white mt-1"
                    />
                  </div>

                  <div>
                    <label className="text-slate-300 font-semibold">Institution</label>
                    <input
                      type="text"
                      value={edu.institution}
                      onChange={(e) => updateEducation(edu.id, { institution: e.target.value })}
                      className="w-full px-3 py-2 rounded-xl bg-slate-900 border border-slate-700 text-white mt-1"
                    />
                  </div>

                  <div className="sm:col-span-2">
                    <label className="text-slate-300 font-semibold">Thesis Title</label>
                    <input
                      type="text"
                      value={edu.thesisTitle}
                      onChange={(e) => updateEducation(edu.id, { thesisTitle: e.target.value })}
                      className="w-full px-3 py-2 rounded-xl bg-slate-900 border border-slate-700 text-white mt-1"
                    />
                  </div>

                  <div className="sm:col-span-2">
                    <label className="text-slate-300 font-semibold">Thesis Description</label>
                    <textarea
                      rows={3}
                      value={edu.thesisDescription}
                      onChange={(e) => updateEducation(edu.id, { thesisDescription: e.target.value })}
                      className="w-full px-3 py-2 rounded-xl bg-slate-900 border border-slate-700 text-white mt-1 resize-none"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* TAB 4: RESEARCH MANAGEMENT */}
        {activeTab === 'research' && (
          <div className="p-8 rounded-3xl bg-slate-900/70 border border-slate-800 shadow-xl space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-bold text-white flex items-center gap-2">
                <Microscope className="w-5 h-5 text-teal-400" />
                Manage Scientific Research & Publications
              </h2>
              <button
                onClick={() => {
                  addResearch({
                    title: 'New Scientific Publication Title',
                    authors: 'Muhammad Talha et al.',
                    journalOrPublisher: 'Journal Name',
                    year: '2026',
                    type: 'Journal Article',
                    abstract: 'Abstract summary text goes here...',
                    methodology: 'Methodology details...',
                    keyFindings: ['Key finding 1'],
                    status: 'Published'
                  });
                  triggerSuccess('Added new research entry!');
                }}
                className="flex items-center gap-2 px-4 py-2 rounded-xl bg-teal-600 hover:bg-teal-500 text-white font-bold text-xs"
              >
                <Plus className="w-4 h-4" /> Add Research Entry
              </button>
            </div>

            <div className="space-y-4">
              {data.research.map((res) => (
                <div key={res.id} className="p-5 rounded-2xl bg-slate-800/60 border border-slate-700 space-y-3">
                  <div className="flex items-center justify-between">
                    <h3 className="text-sm font-bold text-white">{res.title}</h3>
                    <button
                      onClick={() => deleteResearch(res.id)}
                      className="p-2 rounded-lg bg-rose-500/10 text-rose-400 hover:bg-rose-500/20"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                    <div>
                      <label className="text-slate-400">Publication Title</label>
                      <input
                        type="text"
                        value={res.title}
                        onChange={(e) => updateResearch(res.id, { title: e.target.value })}
                        className="w-full px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-700 text-white mt-1"
                      />
                    </div>
                    <div>
                      <label className="text-slate-400">Journal / Publisher</label>
                      <input
                        type="text"
                        value={res.journalOrPublisher}
                        onChange={(e) => updateResearch(res.id, { journalOrPublisher: e.target.value })}
                        className="w-full px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-700 text-white mt-1"
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* TAB 5: PROJECTS MANAGEMENT */}
        {activeTab === 'projects' && (
          <div className="p-8 rounded-3xl bg-slate-900/70 border border-slate-800 shadow-xl space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-bold text-white flex items-center gap-2">
                <FolderGit2 className="w-5 h-5 text-teal-400" />
                Manage Portfolio Projects
              </h2>
              <button
                onClick={() => {
                  addProject({
                    title: 'New Project Title',
                    category: 'Scientific Research',
                    duration: '2026',
                    description: 'Project description...',
                    methodologyOrTech: 'Techniques used...',
                    outcomes: ['Key outcome 1']
                  });
                  triggerSuccess('Added new project!');
                }}
                className="flex items-center gap-2 px-4 py-2 rounded-xl bg-teal-600 hover:bg-teal-500 text-white font-bold text-xs"
              >
                <Plus className="w-4 h-4" /> Add Project
              </button>
            </div>

            <div className="space-y-4">
              {data.projects.map((proj) => (
                <div key={proj.id} className="p-5 rounded-2xl bg-slate-800/60 border border-slate-700 space-y-3">
                  <div className="flex items-center justify-between">
                    <h3 className="text-sm font-bold text-white">{proj.title}</h3>
                    <button
                      onClick={() => deleteProject(proj.id)}
                      className="p-2 rounded-lg bg-rose-500/10 text-rose-400 hover:bg-rose-500/20"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                  <input
                    type="text"
                    value={proj.title}
                    onChange={(e) => updateProject(proj.id, { title: e.target.value })}
                    className="w-full px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-700 text-white text-xs"
                  />
                </div>
              ))}
            </div>
          </div>
        )}

        {/* TAB 6: SKILLS MANAGEMENT */}
        {activeTab === 'skills' && (
          <div className="p-8 rounded-3xl bg-slate-900/70 border border-slate-800 shadow-xl space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-bold text-white flex items-center gap-2">
                <Award className="w-5 h-5 text-teal-400" />
                Manage Skills Matrix
              </h2>
              <button
                onClick={() => {
                  addSkill({
                    name: 'New Skill Name',
                    category: 'Pharmaceutical Sciences',
                    level: 'Expert',
                    featured: true
                  });
                  triggerSuccess('Added new skill!');
                }}
                className="flex items-center gap-2 px-4 py-2 rounded-xl bg-teal-600 hover:bg-teal-500 text-white font-bold text-xs"
              >
                <Plus className="w-4 h-4" /> Add Skill
              </button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {data.skills.map((sk) => (
                <div key={sk.id} className="p-4 rounded-xl bg-slate-800/60 border border-slate-700 flex items-center justify-between">
                  <input
                    type="text"
                    value={sk.name}
                    onChange={(e) => updateSkill(sk.id, { name: e.target.value })}
                    className="px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-700 text-white text-xs"
                  />
                  <button
                    onClick={() => deleteSkill(sk.id)}
                    className="p-1.5 rounded-lg bg-rose-500/10 text-rose-400 hover:bg-rose-500/20"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* TAB 7: CERTIFICATIONS MANAGEMENT */}
        {activeTab === 'certifications' && (
          <div className="p-8 rounded-3xl bg-slate-900/70 border border-slate-800 shadow-xl space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-bold text-white flex items-center gap-2">
                <FileText className="w-5 h-5 text-teal-400" />
                Manage Certifications
              </h2>
              <button
                onClick={() => {
                  addCertification({
                    title: 'New Certification Title',
                    issuer: 'Issuing Body',
                    date: '2026',
                    mode: 'Online Certification'
                  });
                  triggerSuccess('Added new certificate!');
                }}
                className="flex items-center gap-2 px-4 py-2 rounded-xl bg-teal-600 hover:bg-teal-500 text-white font-bold text-xs"
              >
                <Plus className="w-4 h-4" /> Add Certificate
              </button>
            </div>

            <div className="space-y-4">
              {data.certifications.map((cert) => (
                <div key={cert.id} className="p-4 rounded-xl bg-slate-800/60 border border-slate-700 flex items-center justify-between">
                  <div>
                    <h4 className="text-xs font-bold text-white">{cert.title}</h4>
                    <p className="text-[11px] text-teal-400">{cert.issuer}</p>
                  </div>
                  <button
                    onClick={() => deleteCertification(cert.id)}
                    className="p-2 rounded-lg bg-rose-500/10 text-rose-400 hover:bg-rose-500/20"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* TAB 8: CONFERENCES MANAGEMENT */}
        {activeTab === 'conferences' && (
          <div className="p-8 rounded-3xl bg-slate-900/70 border border-slate-800 shadow-xl space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-bold text-white flex items-center gap-2">
                <Globe2 className="w-5 h-5 text-teal-400" />
                Manage Conferences & Memberships
              </h2>
              <button
                onClick={() => {
                  addConference({
                    title: 'New Society / Event Name',
                    organization: 'Organization Name',
                    roleOrType: 'Active Member',
                    period: '2026',
                    location: 'Lahore, PK',
                    description: 'Description of activity...'
                  });
                  triggerSuccess('Added conference entry!');
                }}
                className="flex items-center gap-2 px-4 py-2 rounded-xl bg-teal-600 hover:bg-teal-500 text-white font-bold text-xs"
              >
                <Plus className="w-4 h-4" /> Add Activity
              </button>
            </div>

            <div className="space-y-4">
              {data.conferences.map((conf) => (
                <div key={conf.id} className="p-4 rounded-xl bg-slate-800/60 border border-slate-700 flex items-center justify-between">
                  <div>
                    <h4 className="text-xs font-bold text-white">{conf.title}</h4>
                    <p className="text-[11px] text-teal-400">{conf.organization}</p>
                  </div>
                  <button
                    onClick={() => deleteConference(conf.id)}
                    className="p-2 rounded-lg bg-rose-500/10 text-rose-400 hover:bg-rose-500/20"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* TAB 9: APPEARANCE & CUSTOMIZER */}
        {activeTab === 'appearance' && (
          <div className="p-8 rounded-3xl bg-slate-900/70 border border-slate-800 shadow-xl space-y-6">
            <h2 className="text-lg font-bold text-white flex items-center gap-2">
              <Palette className="w-5 h-5 text-teal-400" />
              Website Appearance & Call-To-Action Customizer
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-slate-300">Hero CTA Primary Button Text</label>
                <input
                  type="text"
                  value={data.appearance.ctaTextPrimary}
                  onChange={(e) => updateAppearance({ ctaTextPrimary: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl bg-slate-800 border border-slate-700 text-white text-xs"
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-slate-300">Hero CTA Secondary Button Text</label>
                <input
                  type="text"
                  value={data.appearance.ctaTextSecondary}
                  onChange={(e) => updateAppearance({ ctaTextSecondary: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl bg-slate-800 border border-slate-700 text-white text-xs"
                />
              </div>
            </div>

            <div className="pt-4 flex justify-end">
              <button
                onClick={() => triggerSuccess('Appearance settings saved!')}
                className="px-6 py-2.5 rounded-xl bg-teal-600 hover:bg-teal-500 text-white font-bold text-xs"
              >
                Save Appearance Settings
              </button>
            </div>
          </div>
        )}

        {/* TAB 10: ADMIN PASSCODE & SECURITY MANAGEMENT */}
        {activeTab === 'security' && (
          <div className="p-8 rounded-3xl bg-slate-900/70 border border-slate-800 shadow-xl space-y-6 max-w-2xl">
            <div className="space-y-1">
              <h2 className="text-lg font-bold text-white flex items-center gap-2">
                <KeyRound className="w-5 h-5 text-teal-400" />
                Admin Passcode & Security Settings
              </h2>
              <p className="text-xs text-slate-400">
                Update your security passcode to prevent unauthorized access to this admin dashboard.
              </p>
            </div>

            <form onSubmit={handleChangePassword} className="space-y-5">
              
              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-slate-300">Current Security Passcode</label>
                <input
                  type="password"
                  required
                  placeholder="Enter current passcode"
                  value={currentPassInput}
                  onChange={(e) => setCurrentPassInput(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl bg-slate-800 border border-slate-700 text-white text-xs focus:outline-none focus:border-teal-500"
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-slate-300">New Security Passcode</label>
                <input
                  type="password"
                  required
                  placeholder="Enter new strong passcode"
                  value={newPassInput}
                  onChange={(e) => setNewPassInput(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl bg-slate-800 border border-slate-700 text-white text-xs focus:outline-none focus:border-teal-500"
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-slate-300">Confirm New Security Passcode</label>
                <input
                  type="password"
                  required
                  placeholder="Re-enter new passcode"
                  value={confirmPassInput}
                  onChange={(e) => setConfirmPassInput(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl bg-slate-800 border border-slate-700 text-white text-xs focus:outline-none focus:border-teal-500"
                />
              </div>

              {passChangeError && (
                <p className="text-xs text-rose-400 flex items-center gap-1">
                  <ShieldAlert className="w-3.5 h-3.5" />
                  {passChangeError}
                </p>
              )}

              <button
                type="submit"
                className="px-6 py-2.5 rounded-xl bg-teal-600 hover:bg-teal-500 text-white font-bold text-xs flex items-center gap-2 shadow-lg shadow-teal-500/25"
              >
                <Save className="w-4 h-4" />
                Update Security Passcode
              </button>
            </form>
          </div>
        )}

        {/* TAB 11: BACKUP & DATA MANAGEMENT */}
        {activeTab === 'data' && (
          <div className="p-8 rounded-3xl bg-slate-900/70 border border-slate-800 shadow-xl space-y-6">
            <h2 className="text-lg font-bold text-white flex items-center gap-2">
              <Download className="w-5 h-5 text-teal-400" />
              Data Backup, Export & Reset
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-6 rounded-2xl bg-slate-800/60 border border-slate-700 space-y-3">
                <h3 className="text-sm font-bold text-white flex items-center gap-2">
                  <Download className="w-4 h-4 text-teal-400" />
                  Export Full Portfolio Backup (JSON)
                </h3>
                <p className="text-xs text-slate-400">
                  Download all your portfolio content, research entries, experiences, and settings into a JSON backup file.
                </p>
                <button
                  onClick={() => {
                    const jsonStr = JSON.stringify(data, null, 2);
                    const blob = new Blob([jsonStr], { type: 'application/json' });
                    const url = URL.createObjectURL(blob);
                    const a = document.createElement('a');
                    a.href = url;
                    a.download = `Muhammad_Talha_Portfolio_Backup_${Date.now()}.json`;
                    a.click();
                    triggerSuccess('Portfolio JSON exported successfully!');
                  }}
                  className="px-4 py-2 rounded-xl bg-teal-600 hover:bg-teal-500 text-white font-bold text-xs"
                >
                  Export JSON Backup File
                </button>
              </div>

              <div className="p-6 rounded-2xl bg-slate-800/60 border border-slate-700 space-y-3">
                <h3 className="text-sm font-bold text-white flex items-center gap-2">
                  <RotateCcw className="w-4 h-4 text-amber-400" />
                  Reset to Authentic Initial CV Data
                </h3>
                <p className="text-xs text-slate-400">
                  Restore all content to Muhammad Talha's original verified CV dataset.
                </p>
                <button
                  onClick={() => {
                    if (window.confirm('Are you sure you want to reset all portfolio data to original CV default?')) {
                      resetToInitialData();
                      triggerSuccess('Portfolio reset to original authentic CV data!');
                    }
                  }}
                  className="px-4 py-2 rounded-xl bg-amber-600 hover:bg-amber-500 text-white font-bold text-xs"
                >
                  Reset to Default CV Data
                </button>
              </div>
            </div>
          </div>
        )}

      </div>
    </div>
  );
};
