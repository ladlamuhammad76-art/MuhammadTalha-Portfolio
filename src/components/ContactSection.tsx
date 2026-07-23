import React, { useState } from 'react';
import { usePortfolio } from '../context/PortfolioContext';
import { Mail, Phone, MapPin, Linkedin, Globe, Download, Send, CheckCircle2, MessageSquare } from 'lucide-react';

export const ContactSection: React.FC = () => {
  const { data } = usePortfolio();
  const { profile } = data;

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.name && formData.email && formData.message) {
      setSubmitted(true);
      setTimeout(() => {
        setFormData({ name: '', email: '', subject: '', message: '' });
      }, 500);
    }
  };

  return (
    <section id="contact" className="py-20 relative bg-[#070a12]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-500/10 border border-teal-500/20 text-teal-400 text-xs font-semibold uppercase tracking-wider">
            <Mail className="w-3.5 h-3.5" />
            <span>Connect & Collaborate</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
            Get In Touch
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            Open for business development partnerships, scientific research collaborations, pharmaceutical consulting, and healthcare recruitment inquiries.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Direct Contact Info */}
          <div className="lg:col-span-5 space-y-8 bg-slate-900/70 p-8 rounded-3xl border border-slate-800 backdrop-blur-md shadow-2xl">
            <div>
              <h3 className="text-xl font-bold text-white">Contact Information</h3>
              <p className="text-xs text-slate-400 mt-1">Feel free to reach out directly via email or LinkedIn.</p>
            </div>

            <div className="space-y-6">
              
              <div className="flex items-center gap-4 group">
                <div className="w-12 h-12 rounded-2xl bg-teal-500/10 border border-teal-500/20 flex items-center justify-center text-teal-400 group-hover:scale-110 transition-transform">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs text-slate-400 font-medium">Professional Email</p>
                  <a href={`mailto:${profile.email}`} className="text-sm font-semibold text-white hover:text-teal-300 transition-colors">
                    {profile.email}
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4 group">
                <div className="w-12 h-12 rounded-2xl bg-sky-500/10 border border-sky-500/20 flex items-center justify-center text-sky-400 group-hover:scale-110 transition-transform">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs text-slate-400 font-medium">Direct Phone</p>
                  <a href={`tel:${profile.phone}`} className="text-sm font-semibold text-white hover:text-teal-300 transition-colors">
                    {profile.phone}
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4 group">
                <div className="w-12 h-12 rounded-2xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400 group-hover:scale-110 transition-transform">
                  <Linkedin className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs text-slate-400 font-medium">LinkedIn Profile</p>
                  <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="text-sm font-semibold text-white hover:text-teal-300 transition-colors">
                    linkedin.com/in/muhammad-talha5
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4 group">
                <div className="w-12 h-12 rounded-2xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400 group-hover:scale-110 transition-transform">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs text-slate-400 font-medium">Location</p>
                  <p className="text-sm font-semibold text-white">{profile.location}</p>
                </div>
              </div>

            </div>

            {profile.cvUrl && (
              <div className="pt-4 border-t border-slate-800">
                <a
                  href={profile.cvUrl}
                  download="Talha_Muhammad_CV.pdf"
                  className="w-full flex items-center justify-center gap-2 px-6 py-3.5 rounded-2xl bg-slate-800 hover:bg-slate-700 text-white text-xs font-bold border border-slate-700 transition-all shadow-md"
                >
                  <Download className="w-4 h-4 text-teal-400" />
                  Download Curriculum Vitae (PDF)
                </a>
              </div>
            )}
          </div>

          {/* Right Column: Contact Inquiry Form */}
          <div className="lg:col-span-7 bg-slate-900/70 p-8 rounded-3xl border border-slate-800 backdrop-blur-md shadow-2xl">
            
            {submitted ? (
              <div className="p-8 text-center space-y-4 rounded-2xl bg-teal-500/10 border border-teal-500/20 text-teal-300">
                <CheckCircle2 className="w-12 h-12 text-teal-400 mx-auto" />
                <h3 className="text-xl font-bold text-white">Thank You for Your Message!</h3>
                <p className="text-xs sm:text-sm text-slate-300">
                  Your inquiry has been logged successfully. Muhammad Talha will get back to you shortly.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="px-5 py-2 text-xs font-semibold rounded-xl bg-teal-600 hover:bg-teal-500 text-white"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <h3 className="text-xl font-bold text-white flex items-center gap-2">
                  <MessageSquare className="w-5 h-5 text-teal-400" />
                  Send an Inquiry
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-slate-300">Your Full Name</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Dr. Sarah Jenkins"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-slate-800/80 border border-slate-700 text-white placeholder-slate-500 text-xs focus:outline-none focus:border-teal-500 transition-colors"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-slate-300">Email Address</label>
                    <input
                      type="email"
                      required
                      placeholder="name@organization.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-slate-800/80 border border-slate-700 text-white placeholder-slate-500 text-xs focus:outline-none focus:border-teal-500 transition-colors"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-slate-300">Subject</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g., Research Collaboration / Business Opportunity"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-slate-800/80 border border-slate-700 text-white placeholder-slate-500 text-xs focus:outline-none focus:border-teal-500 transition-colors"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-slate-300">Message</label>
                  <textarea
                    rows={5}
                    required
                    placeholder="Describe your proposal, project, or question..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-slate-800/80 border border-slate-700 text-white placeholder-slate-500 text-xs focus:outline-none focus:border-teal-500 transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 py-3.5 rounded-xl bg-teal-600 hover:bg-teal-500 text-white font-bold text-xs transition-all shadow-lg shadow-teal-500/25"
                >
                  <Send className="w-4 h-4" />
                  <span>Send Professional Inquiry</span>
                </button>
              </form>
            )}

          </div>

        </div>

      </div>
    </section>
  );
};
