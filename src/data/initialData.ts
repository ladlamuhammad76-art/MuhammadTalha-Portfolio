import { PortfolioData } from '../types/portfolio';

export const initialPortfolioData: PortfolioData = {
  profile: {
    name: "Muhammad Talha",
    title: "Doctor of Pharmacy (Pharm-D)",
    headline: "Doctor of Pharmacy | Healthcare Professional | Business Development | Scientific Research | Medical & Pharmaceutical Innovation",
    location: "Lahore, Pakistan",
    email: "talharasheed088@gmail.com",
    phone: "(+92) 3256560861",
    website: "https://talha-portfolio-tau.vercel.app/",
    linkedin: "https://www.linkedin.com/in/muhammad-talha5",
    bio: "Passionate and detail-oriented Doctor of Pharmacy graduate with deep expertise spanning medical research, formulation development, pharmaceutical sales, and healthcare business operations. Experienced in epigenetics, antimicrobial research, targeted microparticle gel formulations, and commercial sales execution (achieving 105% target). Dedicated to driving healthcare innovation across precision medicine, exosome therapeutics, aesthetic medicine, and regulatory excellence.",
    image: "/Talhaimage.jpeg",
    cvUrl: "/Talha_Muhammad_CV.pdf",
    metrics: [
      { label: "Published Scientific Research", value: "3 Articles" },
      { label: "Sales Target Attainment", value: "105%" },
      { label: "Academic Qualification", value: "Pharm-D (EQF 7)" },
      { label: "Research Turnaround Boost", value: "+20%" }
    ]
  },
  experiences: [
    {
      id: "exp-1",
      title: "Medical Representative",
      organization: "Shafimed",
      duration: "10/11/2025 – Present",
      location: "Lahore, Pakistan",
      category: "Sales & Marketing",
      responsibilities: [
        "Drive acquisition of new medical leads and clinics for organization's telemedicine platform.",
        "Maintain and manage strategic Key Opinion Leader (KOL) data to strengthen healthcare partnerships.",
        "Communicate clinical benefits of digital healthcare services to medical practitioners."
      ],
      achievements: [
        "Expanded active clinic lead network across key medical sectors in Lahore.",
        "Streamlined KOL database management for enhanced follow-up efficiency."
      ],
      skills: ["Medical Sales", "KOL Engagement", "Telemedicine", "Lead Generation", "Healthcare Marketing"]
    },
    {
      id: "exp-2",
      title: "Operational and Technical Head",
      organization: "EasyShifa",
      duration: "15/04/2025 – 31/12/2025",
      location: "Lahore, Pakistan",
      category: "Operations & Management",
      website: "https://easyshifa.pk/",
      responsibilities: [
        "Oversaw day-to-day operational management to ensure seamless healthcare delivery services.",
        "Developed and implemented Standard Operating Procedures (SOPs) for partner pharmacies and delivery riders to enhance regulatory compliance and workflow efficiency.",
        "Monitored system performance and accountability metrics across digital pharmacy channels.",
        "Conducted product feature testing and delivered structured feedback to software engineering teams.",
        "Collaborated in planning and executing strategic initiatives to elevate service quality and customer satisfaction."
      ],
      achievements: [
        "Standardized SOP compliance across network pharmacies and logistics teams.",
        "Optimized digital service delivery performance metrics."
      ],
      skills: ["Healthcare Operations", "SOP Development", "Digital Health", "System Testing", "Regulatory Compliance"]
    },
    {
      id: "exp-3",
      title: "Territory Manager",
      organization: "Shaigan Pharmaceutical",
      duration: "26/10/2025 – 30/11/2025",
      location: "Lahore, Pakistan",
      category: "Sales & Marketing",
      website: "https://shaigan.com/",
      responsibilities: [
        "Managed pharmaceutical sales territory focused on Gynaecology and Orthopaedics divisions.",
        "Conducted market research and identified 15+ new commercial business opportunities.",
        "Organized and led promotional events and Continuing Medical Education (CME) seminars for healthcare practitioners.",
        "Maintained strong relationship pipelines with prescribing physicians and institutional buyers."
      ],
      achievements: [
        "Achieved 105% of annual sales target in target territory.",
        "Increased brand awareness by 30% through physician engagement and CME events."
      ],
      skills: ["Territory Management", "Pharmaceutical Sales", "Market Research", "CME Events", "Commercial Strategy"]
    },
    {
      id: "exp-4",
      title: "Research Volunteer",
      organization: "HybridMedics",
      duration: "07/04/2024 – 22/09/2025",
      location: "Lahore, Pakistan",
      category: "Research & Academic",
      website: "https://www.linkedin.com/newsletters/7130215596754927616/",
      responsibilities: [
        "Compiled scientific literature and mechanistic data on epigenetic therapies and cancer pathways.",
        "Assisted in structuring research methodologies for oncology therapeutic reviews.",
        "Optimized and streamlined data collection protocols for clinical research projects."
      ],
      achievements: [
        "Reduced research data collection turnaround time by 20% through standardized workflows.",
        "Co-authored scientific insights on cancer epigenetics."
      ],
      skills: ["Epigenetics", "Cancer Biology", "Scientific Writing", "Literature Review", "Data Collection"]
    },
    {
      id: "exp-5",
      title: "Sales and Marketing Intern",
      organization: "Organopharm",
      duration: "01/03/2024 – 01/04/2024",
      location: "Lahore, Pakistan",
      category: "Sales & Marketing",
      responsibilities: [
        "Developed product marketing strategies to promote specialized pharmaceutical product lines.",
        "Created promotional materials, pitch decks, and visual aids for sales force meetings."
      ],
      achievements: [
        "Designed comprehensive promotional pitch deck for incubation product showcase."
      ],
      skills: ["Product Marketing", "Pitch Decks", "Marketing Strategy", "Visual Communication"]
    },
    {
      id: "exp-6",
      title: "Drug & Poison Information Centre Assistant",
      organization: "DPIC - IPS UVAS",
      duration: "22/05/2022 – 17/08/2022",
      location: "Lahore, Pakistan",
      category: "Clinical & Pharmacy",
      website: "https://uvas.edu.pk/institutes/ips/DPIC/resources.htm",
      responsibilities: [
        "Researched and provided evidence-based information on drug-drug interactions, poison management, and adverse drug reactions (ADRs).",
        "Supported clinical healthcare professionals in poison control cases with accurate drug data.",
        "Developed patient education leaflets and public health guides on poison prevention."
      ],
      achievements: [
        "Published patient guidance materials for accidental poisoning prevention."
      ],
      skills: ["Poison Control", "Drug Interactions", "Pharmacovigilance", "Patient Counseling", "Medical Info"]
    },
    {
      id: "exp-7",
      title: "Pharmacy Assistant",
      organization: "Fazal Din Pharma Plus",
      duration: "11/02/2020 – 01/11/2023",
      location: "Lahore, Pakistan",
      category: "Clinical & Pharmacy",
      responsibilities: [
        "Assisted in community pharmacy operations including prescription dispensing and inventory control.",
        "Counseled patients on correct medication dosages, administration, and adverse side effects.",
        "Conducted health screenings (blood pressure, blood glucose) and monitored patient wellness outcomes."
      ],
      achievements: [
        "Maintained high accuracy standards in prescription fulfillment and patient counseling."
      ],
      skills: ["Community Pharmacy", "Medication Counseling", "Inventory Management", "Patient Care"]
    }
  ],
  education: [
    {
      id: "edu-1",
      degree: "Doctor of Pharmacy (Pharm-D)",
      institution: "COMSATS University Islamabad, Lahore Campus",
      duration: "11/09/2019 – 12/06/2024",
      location: "Lahore, Pakistan",
      grade: "Cumulative GPA 2.72 / EQF Level 7",
      eqfLevel: "EQF Level 7 (Master's Equivalent)",
      thesisTitle: "Formulation of Baricitinib-Loaded Microparticles Gel for Psoriasis",
      thesisDescription: "Designed and synthesized a targeted topical gel utilizing baricitinib-loaded microparticles prepared via quasi-emulsion diffusion. Formulated with Carbopol 934, triethylamine, and 5% transcutol, evaluated via mouse tail model for anti-psoriatic efficacy.",
      highlights: [
        "Achieved 85% efficacy in psoriasis management during in vivo animal model testing.",
        "Comprehensive coursework in Pharmacology, Pharmaceutics, Pharmaceutical Chemistry, Regulatory Affairs, and Clinical Pharmacy.",
        "Hands-on expertise in HPLC, spectrophotometry, dissolution testing, and topical gel characterization."
      ]
    }
  ],
  research: [
    {
      id: "res-1",
      title: "Enhanced Antibacterial Activity of Antimicrobial Peptide–Antibiotic Combinations Against Multidrug-Resistant Bacteria",
      authors: "Muhammad Talha, Cesar Augusto Roque-Borda",
      journalOrPublisher: "FEMS Microbes (Oxford Academic)",
      year: "2026",
      volumePages: "Article xtag003",
      link: "https://academic.oup.com/femsmc",
      type: "Journal Article",
      abstract: "Investigated synergistic therapeutic combinations of novel antimicrobial peptides alongside conventional antibiotics to combat multidrug-resistant (MDR) bacterial strains, demonstrating reduced Minimum Inhibitory Concentrations (MIC) and minimal cytotoxicity.",
      methodology: "Broth microdilution assays, checkerboard synergy testing, time-kill kinetics, and drug interaction modeling.",
      keyFindings: [
        "Synergistic combination restored susceptibility in MDR bacterial strains.",
        "Significant reduction in antibiotic dosage requirements, minimizing systemic toxicity."
      ],
      status: "Published"
    },
    {
      id: "res-2",
      title: "Management of Escherichia coli (E. coli) Infections Using Alternative and Conventional Medicines",
      authors: "Talha, M., Zahid, M. S., Zuhair, A., Shehzada, A., Awan, I.",
      journalOrPublisher: "Immunization and Vaccinology, Unique Scientific Publishers",
      year: "2024",
      volumePages: "pp. 441–450",
      type: "Book Chapter",
      abstract: "Comprehensive comparative evaluation of herbal extract bioactive compounds versus conventional antimicrobial agents in treating E. coli infections, highlighting complementary therapeutic pathways.",
      methodology: "Systematic literature analysis, comparative antimicrobial screening data compilation, and phytochemistry review.",
      keyFindings: [
        "Identified key phytochemical compounds with potent antibacterial activity against uropathogenic E. coli.",
        "Proposed integrative protocol combining bio-active herbal components with standard therapy."
      ],
      status: "Published"
    },
    {
      id: "res-3",
      title: "Non-compliance: A Study on Patient Adherence Across Multiple Treatment Plans",
      authors: "Talha, M.",
      journalOrPublisher: "Biological Times",
      year: "2023",
      volumePages: "Vol 2(6), pp. 30–31",
      type: "Journal Article",
      abstract: "Assessed key behavioral, financial, and clinical drivers influencing patient non-adherence to long-term chronic disease therapeutic regimens in outpatient settings.",
      methodology: "Cross-sectional survey, patient interview data collection, and statistical compliance scoring.",
      keyFindings: [
        "Complex dosing schedules and poor doctor-patient communication were primary drivers of non-compliance.",
        "Formulated recommendations for digital reminder tools and simplified once-daily formulations."
      ],
      status: "Published"
    }
  ],
  skills: [
    { id: "sk-1", name: "Pharmacology & Epigenetics", category: "Pharmaceutical Sciences", level: "Expert", featured: true },
    { id: "sk-2", name: "Microparticle Formulation (Quasi-Emulsion)", category: "Pharmacology & Pharmaceutics", level: "Expert", featured: true },
    { id: "sk-3", name: "In Vivo & Mouse Model Research", category: "Scientific & Clinical Research", level: "Advanced", featured: true },
    { id: "sk-4", name: "Territory Sales & Target Attainment (105%)", category: "Business & Sales", level: "Expert", featured: true },
    { id: "sk-5", name: "KOL Management & Telemedicine Leads", category: "Business & Sales", level: "Advanced", featured: true },
    { id: "sk-6", name: "Pharmacy SOP Development & Operations", category: "Regulatory Affairs", level: "Expert", featured: true },
    { id: "sk-7", name: "Drug Interactions & Poison Control (DPIC)", category: "Pharmaceutical Sciences", level: "Advanced", featured: true },
    { id: "sk-8", name: "Good Clinical Practice (GCP - NIDA)", category: "Regulatory Affairs", level: "Certified", featured: true },
    { id: "sk-9", name: "Data Analysis & Power BI", category: "Data & Analytics", level: "Proficient", featured: true },
    { id: "sk-10", name: "Scientific & Medical Writing", category: "Medical Communication", level: "Expert", featured: true },
    { id: "sk-11", name: "Market Research & Opportunity Assessment", category: "Business & Sales", level: "Advanced", featured: false },
    { id: "sk-12", name: "CME Seminars & Medical Product Launches", category: "Business & Sales", level: "Advanced", featured: false },
    { id: "sk-13", name: "Antimicrobial Synergy Assays", category: "Scientific & Clinical Research", level: "Advanced", featured: false },
    { id: "sk-14", name: "Patient Counseling & Healthcare Compliance", category: "Medical Communication", level: "Expert", featured: false }
  ],
  projects: [
    {
      id: "proj-1",
      title: "Formulation of Baricitinib-Loaded Microparticles Gel for Psoriasis",
      category: "Scientific Research",
      duration: "04/09/2023 – 03/06/2024",
      description: "Pioneered a topical microparticle drug delivery gel incorporating Baricitinib using the quasi-emulsion diffusion technique. Polymer matrix composed of Carbopol 934, triethylamine, and 5% transcutol penetration enhancer.",
      methodologyOrTech: "Quasi-emulsion diffusion method, HPLC assay, Mouse Tail Psoriasis Model, Viscosity & In Vitro Release Testing.",
      outcomes: [
        "Achieved 85% efficacy score in reduction of psoriatic lesions during animal trials.",
        "Sustained drug release profile over 24 hours with minimal epidermal irritation."
      ]
    },
    {
      id: "proj-2",
      title: "Assessment of Stress Level and Insomnia Among Young Adults",
      category: "Clinical Study",
      duration: "04/09/2023 – 03/06/2024",
      description: "Conducted an epidemiological observational study analyzing the quantitative correlation between psychological stress metrics and sleep latency / insomnia severity among university-aged young adults.",
      methodologyOrTech: "Perceived Stress Scale (PSS-10), Pittsburgh Sleep Quality Index (PSQI), SPSS statistical regression.",
      outcomes: [
        "Identified statistically significant positive correlation (p < 0.01) between severe academic stress and chronic insomnia.",
        "Presented actionable recommendations for campus mental health interventions."
      ]
    },
    {
      id: "proj-3",
      title: "RasheedSonsEMED Pharmacy – Online Pharmaceutical E-Commerce Platform",
      category: "E-Commerce / Tech",
      duration: "01/05/2025 – Present",
      description: "Architected and launched an e-commerce digital pharmacy platform designed exclusively for prescription medication delivery, OTC healthcare supplements, and personal care products across Pakistan.",
      methodologyOrTech: "React, Modern Web Stack, Compliant Prescription Upload Flow, Digital Inventory Integration.",
      outcomes: [
        "Fully deployed platform ensuring secure, compliant access to essential medicines.",
        "Live site: https://rasheedsonsemed.vercel.app/"
      ],
      link: "https://rasheedsonsemed.vercel.app/"
    }
  ],
  certifications: [
    {
      id: "cert-1",
      title: "Good Clinical Practice (GCP)",
      issuer: "The National Institute on Drug Abuse (NIDA) Clinical Trials Network",
      date: "07/10/2024",
      mode: "Online Certification"
    },
    {
      id: "cert-2",
      title: "Clinical Research: Behind the Statistics",
      issuer: "Coursera",
      date: "11/08/2023",
      mode: "Online Specialization"
    },
    {
      id: "cert-3",
      title: "Ask Questions to Make Data-Driven Decisions",
      issuer: "Google / Coursera",
      date: "10/06/2024",
      mode: "Professional Certificate"
    },
    {
      id: "cert-4",
      title: "Foundations: Data, Data, Everywhere",
      issuer: "Google / Coursera",
      date: "09/05/2025",
      mode: "Professional Certificate"
    }
  ],
  conferences: [
    {
      id: "conf-1",
      title: "American Society of Clinical Oncology (ASCO)",
      organization: "ASCO International",
      roleOrType: "Active Member",
      period: "01/11/2024 – Present",
      location: "Lahore / International",
      description: "Active engagement in clinical oncology advancements, educational seminars, and updates on evidence-based cancer therapy protocols."
    },
    {
      id: "conf-2",
      title: "European Association for Cancer Research (EACR)",
      organization: "EACR Global Network",
      roleOrType: "Official Member",
      period: "08/11/2024 – Present",
      location: "Lahore / Europe",
      description: "Member of global scientific network advancing cancer research and innovation. Access to conference resources and oncology development programs.",
      link: "https://www.eacr.org/badge"
    },
    {
      id: "conf-3",
      title: "International Society for Oncology Pharmacy Practitioners (ISOPP)",
      organization: "ISOPP Network",
      roleOrType: "Practitioner Member",
      period: "2024 – Present",
      location: "International",
      description: "Engaged in oncology pharmacy practice standards, utilizing ISOPP clinical guidelines to promote global oncology medication safety.",
      link: "http://isopp.org/education-resources/pad"
    },
    {
      id: "conf-4",
      title: "American Journal for Microbiology Outreach",
      organization: "AJM Global",
      roleOrType: "Contributing Outreach Member",
      period: "01/10/2024 – Present",
      location: "International Outreach",
      description: "Promoting global microbiology education and supporting collaborative efforts against antimicrobial resistance (AMR)."
    }
  ],
  recommendations: [
    {
      id: "rec-1",
      name: "Prof. Dr. Ghulam Murtaza",
      title: "Professor of Pharmaceutics",
      institution: "COMSATS University Islamabad, Lahore Campus",
      email: "gmdogar@cuilahore.edu.pk",
      phone: "(+92) 3142082826",
      quote: "Muhammad Talha is an outstanding individual with remarkable academic prowess, critical thinking, and hands-on research skills in pharmaceutical sciences. His commitment to excellence and active participation make him a valuable asset to any scientific or clinical setting."
    },
    {
      id: "rec-2",
      name: "Dr. Yasser Shahzad",
      title: "Associate Professor of Pharmaceutics",
      institution: "COMSATS University Islamabad, Lahore Campus",
      email: "yshahzad@cuilahore.edu.pk",
      phone: "(+92) 3364732544",
      quote: "Muhammad Talha is an intellectually sharp and highly motivated individual with a strong academic foundation in pharmaceutics. His analytical mindset, timely execution, and active participation make him an asset in any research or academic setting."
    },
    {
      id: "rec-3",
      name: "Dr. Waseem Hassan",
      title: "Assistant Professor of Pharmacology",
      institution: "COMSATS University Islamabad, Lahore Campus",
      email: "waseemhassan@cuilahore.edu.pk",
      phone: "(+92) 3317098808",
      quote: "Muhammad Talha is a diligent and passionate student with a keen interest in neuroscience and pharmacology. His eagerness to learn, along with his ability to grasp complex concepts and engage in research activities, makes him an outstanding candidate."
    }
  ],
  interests: [
    "Healthcare Innovation & Digital Health Platforms",
    "Exosome Technology & Nano-Drug Delivery Systems",
    "Precision & Targeted Oncology Medicine",
    "Regenerative Medicine & Stem Cell Therapies",
    "Aesthetic Medicine & Cosmeceuticals",
    "Pharmaceutical Business Development & Strategic Sales",
    "Medical & Scientific Affairs",
    "Regulatory Affairs & Pharmacovigilance"
  ],
  appearance: {
    primaryColor: "#0d9488",
    themeMode: "dark",
    heroTagline: "Bridging Pharmaceutical Sciences, Commercial Strategy & Clinical Innovation",
    ctaTextPrimary: "Explore My Research",
    ctaTextSecondary: "View Experience",
    adminPassword: "admin123",
    sectionVisibility: {
      about: true,
      experience: true,
      education: true,
      research: true,
      skills: true,
      projects: true,
      certifications: true,
      conferences: true,
      interests: true,
      recommendations: true,
      contact: true
    }
  }
};
