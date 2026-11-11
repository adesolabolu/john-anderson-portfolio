import React, { useState, useEffect } from 'react';

interface JobItem {
  id: string;
  badge?: string;
  title: string;
  company: string;
  location: string;
  period: string;
  periodColor: 'primary' | 'secondary' | 'tertiary';
  highlights: {
    text: string;
    borderColor: 'primary' | 'secondary' | 'tertiary';
  }[];
}

interface SkillCategory {
  id: string;
  title: string;
  icon: string;
  bgClass: string;
  iconBorderClass: string;
  tagBorderClass: string;
  skills: string[];
}

interface CertificationItem {
  id: string;
  name: string;
  year: string;
}

interface ResumeData {
  logoText: string;
  badgeText: string;
  firstName: string;
  lastName: string;
  role: string;
  summary: string;
  stats: {
    value: string;
    label: string;
    color: 'primary' | 'secondary' | 'tertiary';
  }[];
  contact: {
    email: string;
    phone: string;
    whatsapp: string;
    location: string;
    linkedin: string;
    github: string;
    twitter: string;
  };
  jobs: JobItem[];
  skillCategories: SkillCategory[];
  education: {
    degree: string;
    school: string;
    meta: string;
    honors: string[];
  };
  certifications: CertificationItem[];
  cta: {
    kicker: string;
    headlineLine1: string;
    headlineLine2: string;
    headlineLine3: string;
    description: string;
  };
}

const DEFAULT_DATA: ResumeData = {
  logoText: 'TO.',
  badgeText: 'Lagos to the World · Creative Engineering',
  firstName: 'TOBI',
  lastName: 'OGUNLESI',
  role: 'Creative Technologist & Design Engineer',
  summary:
    'Crafting category-defining digital experiences, interactive web platforms, and tactile design systems for ambitious brands across Africa and the diaspora. Bridging expressive art direction with 60fps production engineering.',
  stats: [
    { value: '40+', label: 'Products Shipped', color: 'primary' },
    { value: '12', label: 'Countries Reached', color: 'secondary' },
    { value: '<1.2s', label: 'Avg Load Time', color: 'tertiary' },
  ],
  contact: {
    email: 'tobi@studioogunlesi.ng',
    phone: '+234 (0) 803 456 7890',
    whatsapp: 'https://wa.me/2348034567890',
    location: 'Lagos · London (GMT+1 · Worldwide)',
    linkedin: 'https://linkedin.com/in/tobiogunlesi',
    github: 'https://github.com/tobiogunlesi',
    twitter: 'https://x.com/tobiogunlesi',
  },
  jobs: [
    {
      id: 'job-1',
      badge: 'Current',
      title: 'LEAD CREATIVE TECHNOLOGIST & DESIGN ENGINEER',
      company: 'AlteVerse Studio (Lagos · London)',
      location: 'Victoria Island, Lagos & Remote',
      period: '2023 - Present',
      periodColor: 'primary',
      highlights: [
        {
          text: 'Directed and engineered interactive flagship web experiences for pan-African music festivals, fashion houses, and fintech rebrands reaching 4M+ visitors',
          borderColor: 'primary',
        },
        {
          text: 'Built a multi-brand Afro-Brutalist design system and motion token library in React & Tailwind, cutting product launch cycles by 55%',
          borderColor: 'secondary',
        },
        {
          text: 'Engineered custom WebGL/Canvas shaders and smooth 60fps scroll choreography optimized to run effortlessly on mid-range mobile devices in Nigeria',
          borderColor: 'tertiary',
        },
        {
          text: 'Led a cross-disciplinary squad of 6 frontend engineers, 3D artists, and brand designers from concept storyboard to live global launch',
          borderColor: 'primary',
        },
      ],
    },
    {
      id: 'job-2',
      title: 'SENIOR FRONTEND & INTERACTION ENGINEER',
      company: 'Kora & Culture Digital',
      location: 'Lekki Phase 1, Lagos',
      period: '2020 - 2023',
      periodColor: 'secondary',
      highlights: [
        {
          text: 'Architected interactive creator-economy storefronts and live ticketing drops handling 80,000+ concurrent fans during Detty December releases',
          borderColor: 'primary',
        },
        {
          text: 'Crafted bespoke micro-interactions, audio-reactive visualizers, and editorial storytelling layouts that lifted campaign conversion by 64%',
          borderColor: 'secondary',
        },
        {
          text: 'Reduced First Contentful Paint to <1.1s across media-heavy lookbooks using edge caching and progressive asset pipelines',
          borderColor: 'tertiary',
        },
      ],
    },
    {
      id: 'job-3',
      title: 'UI ENGINEER & INTERACTIVE DEVELOPER',
      company: 'Mainland Creative Lab',
      location: 'Yaba, Lagos',
      period: '2018 - 2020',
      periodColor: 'tertiary',
      highlights: [
        {
          text: 'Designed and coded bold digital campaigns and interactive product showcases for challenger consumer brands across Lagos, Accra, and Nairobi',
          borderColor: 'primary',
        },
        {
          text: 'Bridged the gap between Figma motion prototypes and production React codebases with zero visual drift',
          borderColor: 'secondary',
        },
      ],
    },
  ],
  skillCategories: [
    {
      id: 'code',
      title: 'CREATIVE CODE',
      icon: '⚡',
      bgClass: 'bg-brand-primary',
      iconBorderClass: 'border-brand-accent',
      tagBorderClass: 'border-brand-accent',
      skills: [
        'TypeScript',
        'React',
        'Next.js',
        'HTML5 Canvas',
        'SVG Choreography',
        'CSS Architecture',
        'Web Audio API',
      ],
    },
    {
      id: 'motion',
      title: 'MOTION & 3D',
      icon: '✦',
      bgClass: 'bg-brand-tertiary',
      iconBorderClass: 'border-brand-accent',
      tagBorderClass: 'border-brand-accent',
      skills: [
        'Three.js / WebGL',
        'GSAP',
        'Motion / Framer',
        'GLSL Shaders',
        'Smooth Scroll',
        'Rive & Lottie',
        'Interactive Physics',
      ],
    },
    {
      id: 'design',
      title: 'DESIGN SYSTEMS',
      icon: '🎨',
      bgClass: 'bg-brand-secondary',
      iconBorderClass: 'border-brand-accent',
      tagBorderClass: 'border-brand-accent',
      skills: [
        'Figma to Code',
        'Design Tokens',
        'Tailwind CSS',
        'Editorial Grids',
        'Brutalist UI',
        'Storybook',
        'Art Direction',
      ],
    },
    {
      id: 'ship',
      title: 'SHIP & SCALE',
      icon: '🚀',
      bgClass: 'bg-brand-accent',
      iconBorderClass: 'border-brand-primary',
      tagBorderClass: 'border-brand-primary',
      skills: [
        'Vercel & Edge',
        'Core Web Vitals',
        'Paystack Commerce',
        'Headless CMS (Sanity)',
        'Low-Bandwidth UX',
        'Vite',
      ],
    },
  ],
  education: {
    degree: 'Bachelor of Science in Computer Science & Visual Computing',
    school: 'University of Lagos (UNILAG)',
    meta: 'Akoka, Lagos • 2014 - 2018',
    honors: ['First Class Honours', 'Lead — Creative Design & Tech Collective'],
  },
  certifications: [
    { id: 'cert-1', name: 'Awwwards — Site of the Day & Developer Nominee', year: '2025' },
    { id: 'cert-2', name: 'Lagos Design Week — Featured Interactive Installation', year: '2024' },
    { id: 'cert-3', name: 'CSS Design Awards — Best UI, UX & Innovation', year: '2023' },
  ],
  cta: {
    kicker: "Let's Make Noise",
    headlineLine1: "DON'T LAUNCH",
    headlineLine2: 'ANOTHER BORING',
    headlineLine3: 'DIGITAL PRODUCT.',
    description:
      'Available for flagship web experiences, interactive brand launches, design systems, and creative engineering leadership across Lagos, London, and worldwide.',
  },
};

const STORAGE_KEY = 'afro_brutalist_creative_tech_v2';

export default function App() {
  const [data, setData] = useState<ResumeData>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        return JSON.parse(saved);
      }
    } catch {
      // ignore storage errors
    }
    return DEFAULT_DATA;
  });

  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const [contactModalOpen, setContactModalOpen] = useState(false);
  const [contactForm, setContactForm] = useState({ name: '', email: '', message: '' });
  const [addingSkillCategory, setAddingSkillCategory] = useState<string | null>(null);
  const [newSkillText, setNewSkillText] = useState('');

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
    } catch {
      // ignore storage errors
    }
  }, [data]);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage((prev) => (prev === msg ? null : prev));
    }, 2600);
  };

  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, selector: string) => {
    e.preventDefault();
    if (selector === '/') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    const target = document.querySelector(selector);
    if (target) {
      const offsetTop = (target as HTMLElement).offsetTop - 90;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth',
      });
    }
  };

  const handlePrint = () => {
    window.print();
  };

  const handleCopyEmail = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(data.contact.email);
      showToast(`Copied ${data.contact.email} to clipboard`);
    }
  };

  const handleReset = () => {
    setData(DEFAULT_DATA);
    localStorage.removeItem(STORAGE_KEY);
    showToast('Restored default Afro-Brutalist Creative Technologist profile');
  };

  const handleAddSkill = (categoryId: string) => {
    const trimmed = newSkillText.trim();
    if (!trimmed) {
      setAddingSkillCategory(null);
      return;
    }
    setData((prev) => ({
      ...prev,
      skillCategories: prev.skillCategories.map((cat) =>
        cat.id === categoryId ? { ...cat, skills: [...cat.skills, trimmed] } : cat
      ),
    }));
    setNewSkillText('');
    setAddingSkillCategory(null);
    showToast(`Added "${trimmed}" to craft & stack`);
  };

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setContactModalOpen(false);
    showToast(`Collaboration brief sent to ${data.firstName} ${data.lastName}!`);
    setContactForm({ name: '', email: '', message: '' });
  };

  const getBorderColorClass = (color: 'primary' | 'secondary' | 'tertiary') => {
    if (color === 'primary') return 'border-brand-primary';
    if (color === 'secondary') return 'border-brand-secondary';
    return 'border-brand-tertiary';
  };

  const getPeriodBadgeClass = (color: 'primary' | 'secondary' | 'tertiary') => {
    if (color === 'primary') return 'text-brand-primary border-brand-primary';
    if (color === 'secondary') return 'text-brand-secondary border-brand-secondary';
    return 'text-brand-tertiary border-brand-tertiary';
  };

  return (
    <div className="font-secondary bg-neutral-background text-text-secondary min-h-screen overflow-x-hidden">
      {/* Toast Notification */}
      {toastMessage && (
        <div
          role="status"
          className="fixed bottom-6 right-6 z-50 bg-brand-accent text-text-on-primary border-4 border-brand-primary px-6 py-3 font-primary font-bold text-sm uppercase tracking-wider shadow-bold no-print"
        >
          {toastMessage}
        </div>
      )}

      {/* Header — 3-Zone Top Bar Contract */}
      <header className="border-b-4 border-brand-accent bg-neutral-background sticky top-0 z-40 no-print">
        <nav
          data-editable="header"
          className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between gap-8"
        >
          <a
            data-editable="text"
            data-path="header.logo.text"
            href="/"
            onClick={(e) => handleScrollTo(e, '/')}
            className="font-display text-4xl font-bold text-brand-primary tracking-tight hover:text-brand-secondary transition-colors whitespace-nowrap shrink-0"
          >
            {data.logoText}
          </a>

          <div
            className="hidden md:flex items-center gap-8"
            data-editable-list="header.navLinks"
          >
            <a
              data-editable="text"
              data-path="header.navLinks[0].text"
              href="#experience"
              onClick={(e) => handleScrollTo(e, '#experience')}
              className="font-primary font-bold text-text-primary hover:text-brand-primary transition-colors uppercase tracking-wide text-sm whitespace-nowrap shrink-0"
            >
              Selected Works
            </a>
            <a
              data-editable="text"
              data-path="header.navLinks[1].text"
              href="#skills"
              onClick={(e) => handleScrollTo(e, '#skills')}
              className="font-primary font-bold text-text-primary hover:text-brand-primary transition-colors uppercase tracking-wide text-sm whitespace-nowrap shrink-0"
            >
              Craft &amp; Stack
            </a>
            <a
              data-editable="text"
              data-path="header.navLinks[2].text"
              href="#education"
              onClick={(e) => handleScrollTo(e, '#education')}
              className="font-primary font-bold text-text-primary hover:text-brand-primary transition-colors uppercase tracking-wide text-sm whitespace-nowrap shrink-0"
            >
              Recognition
            </a>
            <a
              href="#contact-cta"
              onClick={(e) => handleScrollTo(e, '#contact-cta')}
              className="font-primary font-bold text-text-primary hover:text-brand-primary transition-colors uppercase tracking-wide text-sm whitespace-nowrap shrink-0"
            >
              Contact
            </a>
          </div>

          <button
            type="button"
            data-editable="text"
            data-path="header.ctaButton.text"
            onClick={handlePrint}
            className="bg-brand-accent text-text-on-primary font-primary font-bold px-6 py-3 border-3 border-brand-accent hover:bg-brand-primary hover:border-brand-primary transition-all uppercase tracking-wide text-sm shadow-subtle whitespace-nowrap shrink-0 cursor-pointer"
          >
            Download Folio
          </button>
        </nav>
      </header>

      <main>
        {/* Hero Section - Afro-Brutalist Design */}
        <section className="min-h-screen flex items-center justify-center px-6 pt-14 pb-12 relative overflow-hidden diagonal-accent">
          <div className="max-w-7xl mx-auto w-full relative z-10">
            <div className="grid lg:grid-cols-12 gap-12 items-center">
              {/* Left Content */}
              <div className="lg:col-span-7">
                <div className="mb-6 flex flex-wrap items-center gap-4">
                  <span
                    className="inline-block bg-brand-primary text-text-on-primary font-primary font-bold px-4 py-2 uppercase tracking-wider text-xs whitespace-nowrap"
                    contentEditable
                    suppressContentEditableWarning
                    onBlur={(e) => {
                      const val = e.currentTarget.textContent || '';
                      setData((prev) => ({ ...prev, badgeText: val }));
                    }}
                  >
                    {data.badgeText}
                  </span>
                  <span className="text-xs font-primary text-text-secondary no-print">
                    Click any text to edit inline ·{' '}
                    <button
                      type="button"
                      onClick={handleReset}
                      className="underline hover:text-brand-primary font-semibold cursor-pointer whitespace-nowrap"
                    >
                      Reset Edits
                    </button>
                  </span>
                </div>

                <h1
                  className="font-display text-6xl md:text-8xl lg:text-9xl font-bold text-text-primary mb-6 leading-none"
                  contentEditable
                  suppressContentEditableWarning
                  onBlur={(e) => {
                    const lines = e.currentTarget.innerText.split('\n');
                    setData((prev) => ({
                      ...prev,
                      firstName: lines[0] || prev.firstName,
                      lastName: lines.slice(1).join(' ') || prev.lastName,
                    }));
                  }}
                >
                  {data.firstName}
                  <br />
                  {data.lastName}
                </h1>

                <div className="flex items-center gap-4 mb-8">
                  <div className="h-1 w-16 bg-brand-primary shrink-0"></div>
                  <p
                    className="font-primary text-2xl md:text-3xl font-bold text-brand-tertiary uppercase tracking-wide"
                    contentEditable
                    suppressContentEditableWarning
                    onBlur={(e) => {
                      const val = e.currentTarget.textContent || '';
                      setData((prev) => ({ ...prev, role: val }));
                    }}
                  >
                    {data.role}
                  </p>
                </div>

                <p
                  className="text-lg md:text-xl text-text-secondary max-w-2xl leading-relaxed mb-10"
                  contentEditable
                  suppressContentEditableWarning
                  onBlur={(e) => {
                    const val = e.currentTarget.textContent || '';
                    setData((prev) => ({ ...prev, summary: val }));
                  }}
                >
                  {data.summary}
                </p>

                {/* Stats */}
                <div className="grid grid-cols-3 gap-6 mb-10 max-w-xl">
                  {data.stats.map((stat, idx) => (
                    <div
                      key={idx}
                      className={`border-l-4 ${
                        stat.color === 'primary'
                          ? 'border-brand-primary'
                          : stat.color === 'secondary'
                          ? 'border-brand-secondary'
                          : 'border-brand-tertiary'
                      } pl-4`}
                    >
                      <div
                        className={`font-display text-4xl font-bold tabular-nums ${
                          stat.color === 'primary'
                            ? 'text-brand-primary'
                            : stat.color === 'secondary'
                            ? 'text-brand-secondary'
                            : 'text-brand-tertiary'
                        }`}
                        contentEditable
                        suppressContentEditableWarning
                        onBlur={(e) => {
                          const val = e.currentTarget.textContent || '';
                          setData((prev) => {
                            const nextStats = [...prev.stats];
                            nextStats[idx] = { ...nextStats[idx], value: val };
                            return { ...prev, stats: nextStats };
                          });
                        }}
                      >
                        {stat.value}
                      </div>
                      <div
                        className="font-primary text-xs uppercase tracking-wider text-text-secondary"
                        contentEditable
                        suppressContentEditableWarning
                        onBlur={(e) => {
                          const val = e.currentTarget.textContent || '';
                          setData((prev) => {
                            const nextStats = [...prev.stats];
                            nextStats[idx] = { ...nextStats[idx], label: val };
                            return { ...prev, stats: nextStats };
                          });
                        }}
                      >
                        {stat.label}
                      </div>
                    </div>
                  ))}
                </div>

                {/* CTAs */}
                <div className="flex flex-wrap gap-6 no-print">
                  <a
                    href="#experience"
                    onClick={(e) => handleScrollTo(e, '#experience')}
                    className="brutalist-border bg-brand-primary text-text-on-primary font-primary font-bold px-8 py-4 uppercase tracking-wide text-sm inline-block hover:bg-brand-secondary transition-colors whitespace-nowrap shrink-0"
                  >
                    Explore Selected Works
                  </a>
                  <button
                    type="button"
                    onClick={() => setContactModalOpen(true)}
                    className="brutalist-border bg-neutral-surface text-text-primary font-primary font-bold px-8 py-4 uppercase tracking-wide text-sm inline-block hover:bg-neutral-surface1 transition-colors whitespace-nowrap shrink-0 cursor-pointer"
                  >
                    Start a Collaboration
                  </button>
                </div>
              </div>

              {/* Right Content - Contact Info */}
              <div className="lg:col-span-5">
                <div className="bg-brand-accent border-4 border-brand-primary p-8 shadow-bold">
                  <div className="flex items-center justify-between mb-6">
                    <h2 className="font-display text-3xl font-bold text-brand-primary">
                      STUDIO &amp; DIRECT
                    </h2>
                    <button
                      type="button"
                      onClick={handleCopyEmail}
                      className="text-xs font-primary font-bold uppercase tracking-wider text-brand-secondary hover:text-brand-primary transition-colors cursor-pointer whitespace-nowrap no-print"
                    >
                      Copy Email
                    </button>
                  </div>

                  <div className="space-y-5">
                    <div className="flex items-start gap-4 text-neutral-background group">
                      <a
                        href={`mailto:${data.contact.email}`}
                        className="text-2xl group-hover:scale-110 transition-transform text-brand-primary shrink-0"
                        aria-label="Send Email"
                      >
                        ✉
                      </a>
                      <div className="min-w-0 flex-1">
                        <div className="font-primary font-bold uppercase text-xs text-brand-secondary mb-1">
                          Bookings &amp; Commissions
                        </div>
                        <div
                          className="text-sm text-neutral-background hover:text-brand-primary transition-colors break-all"
                          contentEditable
                          suppressContentEditableWarning
                          onBlur={(e) => {
                            const val = e.currentTarget.textContent || '';
                            setData((prev) => ({
                              ...prev,
                              contact: { ...prev.contact, email: val },
                            }));
                          }}
                        >
                          {data.contact.email}
                        </div>
                      </div>
                    </div>

                    <div className="flex items-start gap-4 text-neutral-background group">
                      <a
                        href={`tel:${data.contact.phone.replace(/[^+\d]/g, '')}`}
                        className="text-2xl group-hover:scale-110 transition-transform text-brand-primary shrink-0"
                        aria-label="Call or WhatsApp"
                      >
                        ☎
                      </a>
                      <div>
                        <div className="font-primary font-bold uppercase text-xs text-brand-secondary mb-1">
                          Direct Line / WhatsApp
                        </div>
                        <div
                          className="text-sm tabular-nums text-neutral-background hover:text-brand-primary transition-colors"
                          contentEditable
                          suppressContentEditableWarning
                          onBlur={(e) => {
                            const val = e.currentTarget.textContent || '';
                            setData((prev) => ({
                              ...prev,
                              contact: { ...prev.contact, phone: val },
                            }));
                          }}
                        >
                          {data.contact.phone}
                        </div>
                      </div>
                    </div>

                    <div className="flex items-start gap-4 text-neutral-background">
                      <span className="text-2xl text-brand-primary shrink-0">⚑</span>
                      <div>
                        <div className="font-primary font-bold uppercase text-xs text-brand-secondary mb-1">
                          Base &amp; Reach
                        </div>
                        <div
                          className="text-sm"
                          contentEditable
                          suppressContentEditableWarning
                          onBlur={(e) => {
                            const val = e.currentTarget.textContent || '';
                            setData((prev) => ({
                              ...prev,
                              contact: { ...prev.contact, location: val },
                            }));
                          }}
                        >
                          {data.contact.location}
                        </div>
                      </div>
                    </div>

                    <div className="pt-6 border-t-2 border-brand-primary mt-6 no-print">
                      <div className="flex flex-wrap gap-4">
                        <a
                          href={data.contact.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label="LinkedIn Profile"
                          title="LinkedIn"
                          className="w-12 h-12 border-2 border-brand-primary hover:bg-brand-primary flex items-center justify-center text-brand-primary hover:text-brand-accent transition-all font-bold whitespace-nowrap shrink-0"
                        >
                          in
                        </a>
                        <a
                          href={data.contact.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label="GitHub Profile"
                          title="GitHub"
                          className="w-12 h-12 border-2 border-brand-primary hover:bg-brand-primary flex items-center justify-center text-brand-primary hover:text-brand-accent transition-all font-bold whitespace-nowrap shrink-0"
                        >
                          gh
                        </a>
                        <a
                          href={data.contact.whatsapp}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label="WhatsApp Direct"
                          title="Chat on WhatsApp"
                          className="w-12 h-12 border-2 border-brand-primary hover:bg-brand-primary flex items-center justify-center text-brand-primary hover:text-brand-accent transition-all font-bold whitespace-nowrap shrink-0"
                        >
                          wa
                        </a>
                        <button
                          type="button"
                          onClick={handlePrint}
                          aria-label="Download Portfolio PDF"
                          title="Print / Save as PDF"
                          className="w-12 h-12 border-2 border-brand-primary hover:bg-brand-primary flex items-center justify-center text-brand-primary hover:text-brand-accent transition-all font-bold cursor-pointer whitespace-nowrap shrink-0"
                        >
                          ↓
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Experience / Selected Works Section */}
        <section id="experience" className="py-12 px-6 skew-section bg-neutral-surface1">
          <div className="max-w-6xl mx-auto">
            <div className="mb-8">
              <div className="flex items-center gap-6 mb-2">
                <div className="h-2 w-20 bg-brand-primary"></div>
                <span className="font-primary font-bold uppercase tracking-wider text-sm text-brand-primary">
                  Culture &amp; Code
                </span>
              </div>
              <h2 className="font-display text-5xl md:text-7xl font-bold text-text-primary mb-4">
                SELECTED WORKS &amp; ROLES
              </h2>
            </div>

            <div className="space-y-6">
              {data.jobs.map((job, jobIndex) => (
                <div
                  key={job.id}
                  className="border-4 border-brand-accent bg-neutral-surface p-8 hover:shadow-hover transition-all duration-200"
                >
                  <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6 mb-6">
                    <div className="flex-1">
                      {job.badge && (
                        <div className="inline-block bg-brand-primary text-text-on-primary font-primary font-bold px-3 py-1 uppercase tracking-wider text-xs mb-3 whitespace-nowrap">
                          {job.badge}
                        </div>
                      )}
                      <h3
                        className="font-display text-3xl md:text-4xl font-bold text-text-primary mb-2"
                        contentEditable
                        suppressContentEditableWarning
                        onBlur={(e) => {
                          const val = e.currentTarget.textContent || '';
                          setData((prev) => {
                            const nextJobs = [...prev.jobs];
                            nextJobs[jobIndex] = { ...nextJobs[jobIndex], title: val };
                            return { ...prev, jobs: nextJobs };
                          });
                        }}
                      >
                        {job.title}
                      </h3>
                      <p
                        className="text-brand-tertiary font-primary font-bold text-lg mb-1"
                        contentEditable
                        suppressContentEditableWarning
                        onBlur={(e) => {
                          const val = e.currentTarget.textContent || '';
                          setData((prev) => {
                            const nextJobs = [...prev.jobs];
                            nextJobs[jobIndex] = { ...nextJobs[jobIndex], company: val };
                            return { ...prev, jobs: nextJobs };
                          });
                        }}
                      >
                        {job.company}
                      </p>
                      <p
                        className="text-text-secondary text-sm"
                        contentEditable
                        suppressContentEditableWarning
                        onBlur={(e) => {
                          const val = e.currentTarget.textContent || '';
                          setData((prev) => {
                            const nextJobs = [...prev.jobs];
                            nextJobs[jobIndex] = { ...nextJobs[jobIndex], location: val };
                            return { ...prev, jobs: nextJobs };
                          });
                        }}
                      >
                        {job.location}
                      </p>
                    </div>
                    <div
                      className={`bg-neutral-surface font-primary font-bold px-6 py-3 uppercase tracking-wider text-sm whitespace-nowrap h-fit border-4 tabular-nums ${getPeriodBadgeClass(
                        job.periodColor
                      )}`}
                    >
                      <span
                        contentEditable
                        suppressContentEditableWarning
                        onBlur={(e) => {
                          const val = e.currentTarget.textContent || '';
                          setData((prev) => {
                            const nextJobs = [...prev.jobs];
                            nextJobs[jobIndex] = { ...nextJobs[jobIndex], period: val };
                            return { ...prev, jobs: nextJobs };
                          });
                        }}
                      >
                        {job.period}
                      </span>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    {job.highlights.map((hl, hlIndex) => (
                      <div
                        key={hlIndex}
                        className={`border-l-4 ${getBorderColorClass(hl.borderColor)} pl-4 py-2`}
                      >
                        <span
                          className="text-text-secondary block"
                          contentEditable
                          suppressContentEditableWarning
                          onBlur={(e) => {
                            const val = e.currentTarget.textContent || '';
                            setData((prev) => {
                              const nextJobs = [...prev.jobs];
                              const nextHighlights = [...nextJobs[jobIndex].highlights];
                              nextHighlights[hlIndex] = {
                                ...nextHighlights[hlIndex],
                                text: val,
                              };
                              nextJobs[jobIndex] = {
                                ...nextJobs[jobIndex],
                                highlights: nextHighlights,
                              };
                              return { ...prev, jobs: nextJobs };
                            });
                          }}
                        >
                          {hl.text}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Skills / Craft & Stack Section */}
        <section id="skills" className="py-12 px-6 bg-neutral-background">
          <div className="max-w-6xl mx-auto">
            <div className="mb-8">
              <div className="flex items-center gap-6 mb-2">
                <div className="h-2 w-20 bg-brand-secondary"></div>
                <span className="font-primary font-bold uppercase tracking-wider text-sm text-brand-secondary">
                  Mediums &amp; Tools
                </span>
              </div>
              <h2 className="font-display text-5xl md:text-7xl font-bold text-text-primary mb-4">
                CRAFT &amp; STACK
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {data.skillCategories.map((category, catIndex) => (
                <div
                  key={category.id}
                  className={`border-4 border-brand-accent ${category.bgClass} p-8`}
                >
                  <div className="flex items-center justify-between gap-4 mb-6">
                    <div className="flex items-center gap-4">
                      <div
                        className={`w-16 h-16 border-4 ${category.iconBorderClass} bg-neutral-surface flex items-center justify-center text-3xl shrink-0`}
                      >
                        {category.icon}
                      </div>
                      <h3 className="font-display text-3xl font-bold text-text-on-primary">
                        {category.title}
                      </h3>
                    </div>

                    <button
                      type="button"
                      onClick={() => {
                        setAddingSkillCategory(
                          addingSkillCategory === category.id ? null : category.id
                        );
                        setNewSkillText('');
                      }}
                      className="border-2 border-brand-accent bg-neutral-surface text-text-primary px-3 py-1 font-primary font-bold uppercase text-xs tracking-wider hover:bg-neutral-surface1 transition-colors cursor-pointer whitespace-nowrap shrink-0 no-print"
                    >
                      + Add
                    </button>
                  </div>

                  {addingSkillCategory === category.id && (
                    <div className="mb-4 flex gap-2 no-print">
                      <input
                        type="text"
                        value={newSkillText}
                        onChange={(e) => setNewSkillText(e.target.value)}
                        onKeyDown={(e) => {
                          if (e.key === 'Enter') handleAddSkill(category.id);
                          if (e.key === 'Escape') setAddingSkillCategory(null);
                        }}
                        placeholder="New medium or tool..."
                        autoFocus
                        className="flex-1 bg-neutral-surface text-text-primary border-2 border-brand-accent px-3 py-1.5 font-primary text-xs font-bold focus:outline-none"
                      />
                      <button
                        type="button"
                        onClick={() => handleAddSkill(category.id)}
                        className="bg-brand-accent text-text-on-primary px-4 py-1.5 font-primary text-xs font-bold uppercase tracking-wider cursor-pointer whitespace-nowrap"
                      >
                        Save
                      </button>
                    </div>
                  )}

                  <div className="flex flex-wrap gap-3">
                    {category.skills.map((skill, skillIndex) => (
                      <span
                        key={`${category.id}-${skillIndex}`}
                        className={`border-2 ${category.tagBorderClass} bg-neutral-surface text-text-primary px-4 py-2 font-primary font-bold uppercase text-xs tracking-wider whitespace-nowrap shrink-0`}
                        contentEditable
                        suppressContentEditableWarning
                        onBlur={(e) => {
                          const val = (e.currentTarget.textContent || '').trim();
                          setData((prev) => {
                            const nextCats = [...prev.skillCategories];
                            const nextSkills = [...nextCats[catIndex].skills];
                            if (val) {
                              nextSkills[skillIndex] = val;
                            } else {
                              nextSkills.splice(skillIndex, 1);
                            }
                            nextCats[catIndex] = { ...nextCats[catIndex], skills: nextSkills };
                            return { ...prev, skillCategories: nextCats };
                          });
                        }}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Education & Recognition Section */}
        <section id="education" className="py-12 px-6 skew-section bg-neutral-surface1">
          <div className="max-w-6xl mx-auto">
            <div className="mb-8">
              <div className="flex items-center gap-6 mb-2">
                <div className="h-2 w-20 bg-brand-tertiary"></div>
                <span className="font-primary font-bold uppercase tracking-wider text-sm text-brand-tertiary">
                  Pedigree &amp; Honours
                </span>
              </div>
              <h2 className="font-display text-5xl md:text-7xl font-bold text-text-primary mb-4">
                RECOGNITION
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {/* Education */}
              <div className="border-4 border-brand-accent bg-neutral-surface p-8">
                <div className="w-16 h-16 border-4 border-brand-primary bg-brand-primary flex items-center justify-center text-3xl mb-6">
                  🎓
                </div>
                <h3
                  className="font-primary font-bold text-xl text-text-primary mb-3"
                  contentEditable
                  suppressContentEditableWarning
                  onBlur={(e) => {
                    const val = e.currentTarget.textContent || '';
                    setData((prev) => ({
                      ...prev,
                      education: { ...prev.education, degree: val },
                    }));
                  }}
                >
                  {data.education.degree}
                </h3>
                <p
                  className="text-brand-primary font-primary font-bold mb-2 uppercase tracking-wide text-sm"
                  contentEditable
                  suppressContentEditableWarning
                  onBlur={(e) => {
                    const val = e.currentTarget.textContent || '';
                    setData((prev) => ({
                      ...prev,
                      education: { ...prev.education, school: val },
                    }));
                  }}
                >
                  {data.education.school}
                </p>
                <p
                  className="text-text-secondary mb-4 text-sm tabular-nums"
                  contentEditable
                  suppressContentEditableWarning
                  onBlur={(e) => {
                    const val = e.currentTarget.textContent || '';
                    setData((prev) => ({
                      ...prev,
                      education: { ...prev.education, meta: val },
                    }));
                  }}
                >
                  {data.education.meta}
                </p>
                <div className="flex flex-wrap gap-2">
                  {data.education.honors.map((honor, hIdx) => (
                    <span
                      key={hIdx}
                      className="border-2 border-brand-primary text-brand-primary px-3 py-1 font-primary font-bold uppercase text-xs tracking-wider whitespace-nowrap shrink-0 tabular-nums"
                      contentEditable
                      suppressContentEditableWarning
                      onBlur={(e) => {
                        const val = e.currentTarget.textContent || '';
                        setData((prev) => {
                          const nextHonors = [...prev.education.honors];
                          nextHonors[hIdx] = val;
                          return {
                            ...prev,
                            education: { ...prev.education, honors: nextHonors },
                          };
                        });
                      }}
                    >
                      {honor}
                    </span>
                  ))}
                </div>
              </div>

              {/* Awards & Exhibitions */}
              <div className="border-4 border-brand-accent bg-brand-accent p-8">
                <div className="w-16 h-16 border-4 border-brand-secondary bg-brand-secondary flex items-center justify-center text-3xl mb-6">
                  🏆
                </div>
                <h3 className="font-display text-2xl font-bold text-text-on-primary mb-6">
                  AWARDS &amp; EXHIBITIONS
                </h3>
                <ul className="space-y-4">
                  {data.certifications.map((cert, certIdx) => (
                    <li
                      key={cert.id}
                      className="flex items-start gap-3 text-neutral-background"
                    >
                      <span className="text-brand-primary font-bold text-xl">→</span>
                      <div>
                        <p
                          className="font-primary font-bold"
                          contentEditable
                          suppressContentEditableWarning
                          onBlur={(e) => {
                            const val = e.currentTarget.textContent || '';
                            setData((prev) => {
                              const nextCerts = [...prev.certifications];
                              nextCerts[certIdx] = { ...nextCerts[certIdx], name: val };
                              return { ...prev, certifications: nextCerts };
                            });
                          }}
                        >
                          {cert.name}
                        </p>
                        <p
                          className="text-xs text-neutral-border tabular-nums"
                          contentEditable
                          suppressContentEditableWarning
                          onBlur={(e) => {
                            const val = e.currentTarget.textContent || '';
                            setData((prev) => {
                              const nextCerts = [...prev.certifications];
                              nextCerts[certIdx] = { ...nextCerts[certIdx], year: val };
                              return { ...prev, certifications: nextCerts };
                            });
                          }}
                        >
                          {cert.year}
                        </p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section
          id="contact-cta"
          className="py-12 px-6 bg-neutral-background relative overflow-hidden no-print"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-brand-primary/10 to-brand-tertiary/10 pointer-events-none"></div>
          <div className="max-w-4xl mx-auto relative z-10">
            <div className="text-center">
              <div
                className="inline-block bg-brand-primary text-text-on-primary font-primary font-bold px-4 py-2 uppercase tracking-wider text-xs mb-6 whitespace-nowrap"
                contentEditable
                suppressContentEditableWarning
                onBlur={(e) => {
                  const val = e.currentTarget.textContent || '';
                  setData((prev) => ({
                    ...prev,
                    cta: { ...prev.cta, kicker: val },
                  }));
                }}
              >
                {data.cta.kicker}
              </div>

              <h2 className="font-display text-5xl md:text-7xl font-bold text-text-primary mb-6 leading-tight">
                {data.cta.headlineLine1}
                <br />
                {data.cta.headlineLine2}
                <br />
                {data.cta.headlineLine3}
              </h2>

              <p
                className="text-lg md:text-xl text-text-secondary mb-10 max-w-2xl mx-auto"
                contentEditable
                suppressContentEditableWarning
                onBlur={(e) => {
                  const val = e.currentTarget.textContent || '';
                  setData((prev) => ({
                    ...prev,
                    cta: { ...prev.cta, description: val },
                  }));
                }}
              >
                {data.cta.description}
              </p>

              <div className="flex flex-wrap gap-6 justify-center">
                <button
                  type="button"
                  onClick={() => setContactModalOpen(true)}
                  className="brutalist-border bg-brand-accent text-text-on-primary font-primary font-bold px-10 py-5 uppercase tracking-wide inline-block hover:bg-brand-primary transition-colors cursor-pointer whitespace-nowrap shrink-0"
                >
                  Commission a Project
                </button>
                <a
                  href={data.contact.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="brutalist-border bg-brand-primary text-text-on-primary font-primary font-bold px-10 py-5 uppercase tracking-wide inline-block hover:bg-brand-secondary transition-colors whitespace-nowrap shrink-0"
                >
                  Chat on WhatsApp
                </a>
                <a
                  href={data.contact.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="brutalist-border bg-neutral-surface text-text-primary font-primary font-bold px-10 py-5 uppercase tracking-wide inline-block hover:bg-brand-primary hover:text-text-on-primary transition-colors whitespace-nowrap shrink-0"
                >
                  LinkedIn
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-brand-accent text-neutral-background pt-10 pb-8 mt-6 no-print border-t-8 border-brand-primary">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="font-display text-5xl font-bold mb-4 text-brand-primary">
                {data.logoText}
              </h3>
              <p className="text-neutral-border text-sm leading-relaxed">
                Afro-Brutalist Creative Technologist &amp; Design Engineer. Merging bold visual
                culture with expressive 60fps web engineering from Lagos to the world.
              </p>
            </div>
            <div>
              <h4 className="font-primary font-bold mb-6 uppercase tracking-wider text-brand-secondary">
                Channels
              </h4>
              <ul className="space-y-3 text-sm">
                <li>
                  <a
                    href={data.contact.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-brand-primary transition-colors flex items-center gap-2"
                  >
                    → LinkedIn
                  </a>
                </li>
                <li>
                  <a
                    href={data.contact.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-brand-primary transition-colors flex items-center gap-2"
                  >
                    → GitHub
                  </a>
                </li>
                <li>
                  <a
                    href={data.contact.whatsapp}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-brand-primary transition-colors flex items-center gap-2"
                  >
                    → WhatsApp
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-primary font-bold mb-6 uppercase tracking-wider text-brand-secondary">
                Studio Contact
              </h4>
              <ul className="space-y-3 text-sm">
                <li>
                  <a
                    href={`mailto:${data.contact.email}`}
                    className="hover:text-brand-primary transition-colors"
                  >
                    {data.contact.email}
                  </a>
                </li>
                <li>
                  <a
                    href={`tel:${data.contact.phone.replace(/[^+\d]/g, '')}`}
                    className="hover:text-brand-primary transition-colors tabular-nums"
                  >
                    {data.contact.phone}
                  </a>
                </li>
                <li className="text-neutral-border">{data.contact.location}</li>
              </ul>
            </div>
          </div>
          <div className="border-t-2 border-neutral-border-interactive pt-5">
            <p className="text-sm text-center font-primary">
              © 2026 {data.firstName} {data.lastName}. Crafted in Lagos · Built for the World.
            </p>
          </div>
        </div>
      </footer>

      {/* Brutalist Contact Modal */}
      {contactModalOpen && (
        <div
          className="fixed inset-0 z-50 bg-brand-accent/80 flex items-center justify-center p-4 no-print"
          onClick={() => setContactModalOpen(false)}
        >
          <div
            className="bg-neutral-background border-4 border-brand-accent shadow-bold max-w-lg w-full p-8 relative"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between mb-6">
              <div>
                <span className="inline-block bg-brand-primary text-text-on-primary font-primary font-bold px-3 py-1 uppercase tracking-wider text-xs mb-2">
                  Lagos · London · Worldwide
                </span>
                <h3 className="font-display text-4xl font-bold text-text-primary">
                  START A COLLABORATION
                </h3>
              </div>
              <button
                type="button"
                onClick={() => setContactModalOpen(false)}
                aria-label="Close modal"
                className="w-10 h-10 border-3 border-brand-accent bg-neutral-surface text-text-primary font-primary font-bold hover:bg-brand-primary hover:text-text-on-primary transition-colors cursor-pointer"
              >
                ✕
              </button>
            </div>

            <form onSubmit={handleContactSubmit} className="space-y-4">
              <div>
                <label className="block font-primary font-bold uppercase text-xs text-text-primary mb-1">
                  Your Name / Brand / Studio
                </label>
                <input
                  type="text"
                  required
                  value={contactForm.name}
                  onChange={(e) => setContactForm({ ...contactForm, name: e.target.value })}
                  placeholder="Zainab Balogun · Creative Director"
                  className="w-full border-3 border-brand-accent bg-neutral-surface px-4 py-3 text-sm text-text-primary focus:outline-none focus:border-brand-primary"
                />
              </div>

              <div>
                <label className="block font-primary font-bold uppercase text-xs text-text-primary mb-1">
                  Email Address
                </label>
                <input
                  type="email"
                  required
                  value={contactForm.email}
                  onChange={(e) => setContactForm({ ...contactForm, email: e.target.value })}
                  placeholder="zainab@brandstudio.ng"
                  className="w-full border-3 border-brand-accent bg-neutral-surface px-4 py-3 text-sm text-text-primary focus:outline-none focus:border-brand-primary"
                />
              </div>

              <div>
                <label className="block font-primary font-bold uppercase text-xs text-text-primary mb-1">
                  The Vision, Drop, or Interactive Experience
                </label>
                <textarea
                  rows={4}
                  required
                  value={contactForm.message}
                  onChange={(e) => setContactForm({ ...contactForm, message: e.target.value })}
                  placeholder="Tell me about the brand launch, interactive web experience, design system, or timeline..."
                  className="w-full border-3 border-brand-accent bg-neutral-surface px-4 py-3 text-sm text-text-primary focus:outline-none focus:border-brand-primary"
                />
              </div>

              <div className="flex flex-wrap items-center justify-between gap-4 pt-2">
                <a
                  href={data.contact.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-primary font-bold text-xs uppercase tracking-wider text-brand-tertiary hover:text-brand-primary underline whitespace-nowrap"
                >
                  Or message directly on WhatsApp →
                </a>
                <div className="flex gap-3">
                  <button
                    type="button"
                    onClick={() => setContactModalOpen(false)}
                    className="border-3 border-brand-accent bg-neutral-surface text-text-primary font-primary font-bold px-5 py-3 uppercase text-xs tracking-wider hover:bg-neutral-surface1 cursor-pointer whitespace-nowrap"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="border-3 border-brand-accent bg-brand-primary text-text-on-primary font-primary font-bold px-6 py-3 uppercase text-xs tracking-wider hover:bg-brand-secondary cursor-pointer whitespace-nowrap"
                  >
                    Send Brief
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
