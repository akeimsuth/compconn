import React, { useState, useEffect } from 'react';
import {
  Calendar,
  Menu,
  X,
  ArrowRight,
  MapPin,
  Users,
  Code2,
  ShieldCheck,
  Cloud,
  Settings2,
  Server,
  Search,
  Lightbulb,
  Cog,
  TrendingUp,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  Phone,
  Mail,
  Linkedin,
  Facebook,
  Youtube,
  Building2,
  Activity,
  Check,
  Send,
  Laptop,
  ChevronDown
} from 'lucide-react';
import { SERVICES, ServiceItem } from './data/servicesData';
import { ServicePage } from './components/ServicePage';
import { PARTNERS } from './components/PartnerLogos';

interface TestimonialItem {
  id: string;
  quote: string;
  name: string;
  title: string;
  company: string;
  avatarUrl: string;
}

const TESTIMONIALS: TestimonialItem[] = [
  {
    id: '1',
    quote: 'COMPconn transformed our IT infrastructure and helped us streamline our operations. Their team is professional, responsive and truly understands business needs. Highly recommended!',
    name: 'Karen Mitchell',
    title: 'CEO',
    company: 'Island Foods Ltd.',
    avatarUrl: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=400&q=80'
  },
  {
    id: '2',
    quote: 'Implementing our custom logistics and multi-warehouse tracking platform with COMPconn yielded an immediate 60% boost in operational efficiency. They are Jamaica’s top enterprise tech team.',
    name: 'David Sterling',
    title: 'Managing Director',
    company: 'Caribbean Logistics & Freight',
    avatarUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80'
  },
  {
    id: '3',
    quote: 'With strict Jamaica Data Protection Act deadlines, COMPconn brought our entire financial services architecture into bulletproof security compliance with zero operational downtime.',
    name: 'Althea Campbell',
    title: 'Chief Risk Officer',
    company: 'Capital Heritage Group',
    avatarUrl: 'https://images.unsplash.com/photo-1580894732470-353f4931a5fb?auto=format&fit=crop&w=400&q=80'
  }
];

export default function App() {
  const [currentPage, setCurrentPage] = useState<'home' | string>('home');
  const [activeSection, setActiveSection] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [solutionsDropdownOpen, setSolutionsDropdownOpen] = useState(false);
  const [testimonialIndex, setTestimonialIndex] = useState(0);

  // Modals
  const [consultationModalOpen, setConsultationModalOpen] = useState(false);
  const [caseStudyModalOpen, setCaseStudyModalOpen] = useState(false);
  const [contactModalOpen, setContactModalOpen] = useState(false);

  // Consultation Form State
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: 'IT Consulting',
    meetingMode: 'Virtual (Google Meet)',
    message: ''
  });
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Sync hash routing
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#/', '');
      if (hash.startsWith('services/')) {
        const serviceId = hash.replace('services/', '');
        if (SERVICES.some((s) => s.id === serviceId)) {
          setCurrentPage(serviceId);
          window.scrollTo({ top: 0, behavior: 'smooth' });
          return;
        }
      }
      if (hash === '' || hash === 'home') {
        setCurrentPage('home');
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    handleHashChange();

    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  // Scroll listener for sticky navbar & active section highlight
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      if (currentPage === 'home') {
        const sections = ['home', 'solutions', 'process', 'case-study', 'testimonials', 'contact'];
        for (const sectionId of sections) {
          const el = document.getElementById(sectionId);
          if (el) {
            const rect = el.getBoundingClientRect();
            if (rect.top <= 200 && rect.bottom >= 200) {
              setActiveSection(sectionId);
              break;
            }
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [currentPage]);

  const navigateToService = (serviceId: string) => {
    setMobileMenuOpen(false);
    setSolutionsDropdownOpen(false);
    setCurrentPage(serviceId);
    window.location.hash = `#/services/${serviceId}`;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navigateToHome = (sectionId?: string) => {
    setMobileMenuOpen(false);
    setSolutionsDropdownOpen(false);
    setCurrentPage('home');
    window.location.hash = sectionId ? `#${sectionId}` : '#home';
    if (sectionId) {
      setTimeout(() => {
        const el = document.getElementById(sectionId);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 50);
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleConsultationSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setFormSubmitted(true);
    }, 700);
  };

  const openConsultationWithService = (serviceTitle: string) => {
    setFormData((prev) => ({ ...prev, service: serviceTitle }));
    setFormSubmitted(false);
    setConsultationModalOpen(true);
  };

  const nextTestimonial = () => {
    setTestimonialIndex((prev) => (prev + 1) % TESTIMONIALS.length);
  };

  const prevTestimonial = () => {
    setTestimonialIndex((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  };

  const currentServiceObj = SERVICES.find((s) => s.id === currentPage);

  return (
    <div className="min-h-screen bg-white text-[#4B6380] flex flex-col selection:bg-[#087FEA] selection:text-white">
      
      {/* =========================================================================
          1. NAVIGATION BAR
          Fixed / Sticky with COMPconn Logo, Nav items with Solutions Dropdown, CTA
      ========================================================================= */}
      <header
        className={`sticky top-0 z-40 w-full transition-all duration-300 bg-white/95 backdrop-blur-md ${
          isScrolled
            ? 'h-[74px] shadow-[0_4px_20px_rgba(6,43,85,0.06)] border-b border-[#DCEAF5]'
            : 'h-[80px] border-b border-[#DCEAF5]/80'
        }`}
      >
        <div className="max-w-[1260px] mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center justify-between">
          {/* LOGO */}
          <button
            onClick={() => navigateToHome('home')}
            className="flex items-center gap-3 group select-none text-left cursor-pointer"
            aria-label="COMPconn Home"
          >
            {/* Tech Logo Icon */}
            <div className="w-10 h-10 relative flex items-center justify-center">
              <svg viewBox="0 0 44 44" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="22" cy="22" r="18" stroke="#087FEA" strokeWidth="3" strokeDasharray="95 20" strokeLinecap="round" className="opacity-90" />
                <path d="M12 22C12 16.4772 16.4772 12 22 12C25.5 12 28.5 13.8 30.2 16.5" stroke="#16B9FF" strokeWidth="3.5" strokeLinecap="round" />
                <circle cx="22" cy="22" r="6.5" fill="#087FEA" />
                <circle cx="22" cy="22" r="3" fill="#FFFFFF" />
              </svg>
            </div>

            {/* Wordmark and Subtitle */}
            <div className="flex flex-col">
              <span className="text-[21px] font-extrabold tracking-[-0.03em] text-[#062B55] leading-none">
                COMPCONN
              </span>
              <span className="text-[8px] font-bold tracking-[0.14em] text-[#062B55]/70 mt-1 uppercase">
                IT CONSULTING &amp; TECHNOLOGY SOLUTIONS
              </span>
            </div>
          </button>

          {/* DESKTOP NAVIGATION LINKS */}
          <nav className="hidden lg:flex items-center gap-8">
            <button
              onClick={() => navigateToHome('home')}
              className={`text-[14px] font-semibold transition-colors relative py-1 cursor-pointer ${
                currentPage === 'home' && activeSection === 'home' ? 'text-[#087FEA]' : 'text-[#062B55] hover:text-[#087FEA]'
              }`}
            >
              Home
              {currentPage === 'home' && activeSection === 'home' && (
                <span className="absolute bottom-[-6px] left-0 right-0 h-[2.5px] bg-[#087FEA] rounded-full" />
              )}
            </button>

            {/* Solutions Dropdown Menu */}
            <div className="relative group">
              <button
                onClick={() => setSolutionsDropdownOpen(!solutionsDropdownOpen)}
                onMouseEnter={() => setSolutionsDropdownOpen(true)}
                className={`flex items-center gap-1 text-[14px] font-semibold transition-colors py-1 cursor-pointer ${
                  currentPage !== 'home' || activeSection === 'solutions' ? 'text-[#087FEA]' : 'text-[#062B55] hover:text-[#087FEA]'
                }`}
              >
                <span>Solutions</span>
                <ChevronDown className="w-4 h-4 text-slate-400 group-hover:text-[#087FEA] transition-transform group-hover:rotate-180" />
                {(currentPage !== 'home' || activeSection === 'solutions') && (
                  <span className="absolute bottom-[-6px] left-0 right-0 h-[2.5px] bg-[#087FEA] rounded-full" />
                )}
              </button>

              {/* Mega Dropdown Panel */}
              <div
                onMouseLeave={() => setSolutionsDropdownOpen(false)}
                className={`absolute top-full -left-20 w-[420px] bg-white rounded-2xl border border-[#DCEAF5] shadow-[0_16px_36px_rgba(6,43,85,0.12)] p-4 transition-all duration-200 z-50 ${
                  solutionsDropdownOpen ? 'opacity-100 visible translate-y-2' : 'opacity-0 invisible pointer-events-none'
                }`}
              >
                <div className="text-xs font-bold text-[#6F8299] uppercase tracking-wider px-2 pb-2 mb-2 border-b border-slate-100 flex items-center justify-between">
                  <span>Our Service Lines</span>
                  <span className="text-[#087FEA]">6 Core Areas</span>
                </div>
                <div className="grid grid-cols-1 gap-1">
                  {SERVICES.map((s) => (
                    <button
                      key={s.id}
                      onClick={() => navigateToService(s.id)}
                      className="flex items-center gap-3 p-2.5 rounded-xl hover:bg-[#F5FAFE] transition-colors text-left cursor-pointer group/item"
                    >
                      <img
                        src={s.image}
                        alt=""
                        className="w-10 h-10 rounded-lg object-cover border border-[#DCEAF5]"
                      />
                      <div className="flex flex-col">
                        <span className="text-sm font-bold text-[#062B55] group-hover/item:text-[#087FEA] transition-colors">
                          {s.title}
                        </span>
                        <span className="text-xs text-[#6F8299] line-clamp-1">
                          {s.description}
                        </span>
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {[
              { label: 'Industries', id: 'industries' },
              { label: 'About', id: 'process' },
              { label: 'Case Studies', id: 'case-study' },
              { label: 'Contact', id: 'contact' }
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => navigateToHome(item.id)}
                className={`text-[14px] font-semibold transition-colors relative py-1 cursor-pointer ${
                  currentPage === 'home' && activeSection === item.id ? 'text-[#087FEA]' : 'text-[#062B55] hover:text-[#087FEA]'
                }`}
              >
                {item.label}
                {currentPage === 'home' && activeSection === item.id && (
                  <span className="absolute bottom-[-6px] left-0 right-0 h-[2.5px] bg-[#087FEA] rounded-full" />
                )}
              </button>
            ))}
          </nav>

          {/* RIGHT ACTION */}
          <div className="flex items-center gap-3 sm:gap-4">
            <button
              onClick={() => openConsultationWithService('IT Consulting')}
              className="hidden sm:inline-flex items-center gap-2 bg-[#087FEA] hover:bg-[#0770D0] text-white text-[13.5px] font-semibold px-5 py-2.5 rounded-full shadow-[0_4px_12px_rgba(8,127,234,0.25)] hover:shadow-[0_6px_16px_rgba(8,127,234,0.35)] transition-all duration-200 cursor-pointer transform active:scale-95"
            >
              <Calendar className="w-4 h-4" />
              <span>Book a Consultation</span>
            </button>

            {/* Hamburger Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-[#062B55] hover:text-[#087FEA] hover:bg-[#F5FAFE] rounded-lg transition-colors cursor-pointer"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* MOBILE MENU DROPDOWN */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-white border-b border-[#DCEAF5] px-6 py-5 shadow-xl max-h-[85vh] overflow-y-auto">
            <div className="flex flex-col gap-2.5">
              <button
                onClick={() => navigateToHome('home')}
                className="text-left text-[15px] font-semibold py-2 px-3 rounded-lg text-[#062B55] hover:bg-slate-50 cursor-pointer"
              >
                Home
              </button>

              <div className="py-1">
                <div className="text-xs font-bold text-[#087FEA] uppercase tracking-wider px-3 mb-1">
                  Solutions &amp; Services
                </div>
                <div className="grid grid-cols-1 gap-1 pl-2">
                  {SERVICES.map((s) => (
                    <button
                      key={s.id}
                      onClick={() => navigateToService(s.id)}
                      className="text-left text-[14px] font-medium py-1.5 px-3 rounded-lg text-[#062B55] hover:bg-[#EAF6FF] hover:text-[#087FEA] flex items-center justify-between cursor-pointer"
                    >
                      <span>{s.title}</span>
                      <ArrowRight className="w-3.5 h-3.5 text-slate-400" />
                    </button>
                  ))}
                </div>
              </div>

              {[
                { label: 'Industries', id: 'industries' },
                { label: 'About', id: 'process' },
                { label: 'Case Studies', id: 'case-study' },
                { label: 'Contact', id: 'contact' }
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => navigateToHome(item.id)}
                  className="text-left text-[15px] font-semibold py-2 px-3 rounded-lg text-[#062B55] hover:bg-slate-50 cursor-pointer"
                >
                  {item.label}
                </button>
              ))}

              <div className="pt-3 border-t border-slate-100 flex flex-col gap-2">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    openConsultationWithService('IT Consulting');
                  }}
                  className="w-full flex items-center justify-center gap-2 bg-[#087FEA] hover:bg-[#0770D0] text-white text-[14px] font-semibold py-3 rounded-full shadow-md"
                >
                  <Calendar className="w-4 h-4" />
                  <span>Book a Consultation</span>
                </button>
                <div className="text-center text-xs text-[#6F8299] pt-1">
                  Kingston, Jamaica • 876-670-6444
                </div>
              </div>
            </div>
          </div>
        )}
      </header>

      {/* =========================================================================
          VIEW ROUTING: EITHER INDIVIDUAL DEDICATED SERVICE PAGE OR HOMEPAGE
      ========================================================================= */}
      {currentPage !== 'home' && currentServiceObj ? (
        <ServicePage
          service={currentServiceObj}
          onBackToHome={() => navigateToHome('solutions')}
          onSelectService={(serviceId) => navigateToService(serviceId)}
          onBookConsultation={(svc) => openConsultationWithService(svc)}
        />
      ) : (
        /* HOMEPAGE VIEW */
        <main>
          {/* =========================================================================
              2. HERO SECTION WITH VIVID UNSPLASH IMAGERY & EXACT REFERENCE FIDELITY
          ========================================================================= */}
          <section id="home" className="relative pt-8 pb-16 md:pt-14 md:pb-20 overflow-hidden bg-white">
            <div className="absolute top-0 right-0 w-[550px] h-[550px] bg-gradient-to-bl from-[#EAF6FF]/60 via-[#F5FAFE]/30 to-transparent rounded-full blur-3xl pointer-events-none -z-10" />

            <div className="max-w-[1260px] mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
                
                {/* LEFT COLUMN: HERO COPY */}
                <div className="lg:col-span-6 xl:col-span-6 flex flex-col items-start">
                  <div className="inline-flex items-center gap-2 text-[#087FEA] font-bold text-[11.5px] sm:text-[12.5px] tracking-[0.14em] uppercase mb-4">
                    <span>Jamaica&apos;s Trusted IT Consulting Partner</span>
                  </div>

                  <h1 className="text-[38px] sm:text-[46px] lg:text-[54px] font-extrabold text-[#062B55] leading-[1.08] tracking-[-0.03em] mb-6">
                    Technology That<br />
                    Moves Your Business<br />
                    <span className="text-[#087FEA]">Forward</span>
                  </h1>

                  <p className="text-[16px] sm:text-[17px] text-[#4B6380] leading-[1.65] max-w-[530px] mb-8 font-normal">
                    We help businesses modernize, secure and scale with{' '}
                    <button
                      onClick={() => navigateToHome('solutions')}
                      className="text-[#087FEA] font-medium hover:underline cursor-pointer inline"
                    >
                      custom technology solutions
                    </button>
                    , expert IT consulting and ongoing support — so you can focus on what matters most.
                  </p>

                  <div className="flex flex-wrap items-center gap-4 mb-8">
                    <button
                      onClick={() => openConsultationWithService('General IT Strategy')}
                      className="inline-flex items-center justify-center gap-2.5 bg-[#087FEA] hover:bg-[#0770D0] text-white text-[14.5px] font-semibold px-7 py-3.5 rounded-full shadow-[0_6px_18px_rgba(8,127,234,0.28)] hover:shadow-[0_8px_24px_rgba(8,127,234,0.36)] transition-all duration-200 cursor-pointer transform hover:-translate-y-0.5 group"
                    >
                      <span>Book a Consultation</span>
                      <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </button>

                    <button
                      onClick={() => navigateToHome('solutions')}
                      className="inline-flex items-center justify-center gap-2 bg-white hover:bg-[#F5FAFE] text-[#087FEA] border border-[#087FEA] text-[14.5px] font-semibold px-6 py-3.5 rounded-full transition-all duration-200 cursor-pointer transform hover:-translate-y-0.5 group shadow-sm"
                    >
                      <span>Explore Our Solutions</span>
                      <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
                    </button>
                  </div>

                  <div className="flex items-center gap-2.5 text-[13px] text-[#6F8299] pt-2">
                    <MapPin className="w-4 h-4 text-[#087FEA] shrink-0" />
                    <span className="font-medium text-[#062B55]">Proudly based in Jamaica</span>
                    <span className="text-slate-300">|</span>
                    <span>Supporting businesses locally and globally</span>
                  </div>
                </div>

                {/* RIGHT COLUMN: HERO CONSULTANT IMAGE (compconn_hero_image.png) */}
                <div className="lg:col-span-6 xl:col-span-6 relative">
                  <div className="relative mx-auto max-w-[560px] lg:max-w-none">
                    <div className="relative rounded-[24px] overflow-hidden bg-[#F5FAFE] shadow-[0_16px_44px_rgba(6,43,85,0.12)] border border-[#DCEAF5] group">
                      <img
                        src="/compconn_hero_image.png"
                        alt="COMPconn IT Consultant - Smarter IT. Stronger Business."
                        referrerPolicy="no-referrer"
                        onError={(e) => {
                          e.currentTarget.onerror = null;
                          e.currentTarget.src = "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&q=80";
                        }}
                        className="w-full aspect-[16/10] sm:aspect-[16/10] lg:aspect-[16/10] object-cover object-right sm:object-center transition-transform duration-700 group-hover:scale-[1.02]"
                      />

                      {/* Bottom Trust Badge */}
                      <div className="absolute bottom-4 left-4 hidden sm:flex items-center gap-2 bg-white/95 backdrop-blur-md py-1.5 px-3 rounded-full border border-[#DCEAF5] shadow-md text-xs font-semibold text-[#062B55]">
                        <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                        <span>Jamaica &amp; Caribbean Enterprise IT</span>
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </section>

          {/* =========================================================================
              3. STATISTICS BAR
          ========================================================================= */}
          <section className="bg-[#F8FBFE] border-y border-[#DCEAF5] py-7 sm:py-9">
            <div className="max-w-[1260px] mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-2 md:grid-cols-5 gap-6 md:gap-0">
                <div className="flex items-center gap-3.5 md:justify-center md:border-r md:border-[#DCEAF5] md:px-4">
                  <div className="w-11 h-11 rounded-full bg-[#EAF6FF] flex items-center justify-center shrink-0">
                    <Users className="w-5 h-5 text-[#087FEA]" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[26px] sm:text-[28px] font-extrabold text-[#087FEA] leading-none">15+</span>
                    <span className="text-[12px] sm:text-[13px] font-medium text-[#4B6380] mt-1">Years of Experience</span>
                  </div>
                </div>

                <div className="flex items-center gap-3.5 md:justify-center md:border-r md:border-[#DCEAF5] md:px-4">
                  <div className="w-11 h-11 rounded-full bg-[#EAF6FF] flex items-center justify-center shrink-0">
                    <Building2 className="w-5 h-5 text-[#087FEA]" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[26px] sm:text-[28px] font-extrabold text-[#087FEA] leading-none">100+</span>
                    <span className="text-[12px] sm:text-[13px] font-medium text-[#4B6380] mt-1">Businesses Served</span>
                  </div>
                </div>

                <div className="flex items-center gap-3.5 md:justify-center md:border-r md:border-[#DCEAF5] md:px-4">
                  <div className="w-11 h-11 rounded-full bg-[#EAF6FF] flex items-center justify-center shrink-0">
                    <Activity className="w-5 h-5 text-[#087FEA]" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[26px] sm:text-[28px] font-extrabold text-[#087FEA] leading-none">99.9%</span>
                    <span className="text-[12px] sm:text-[13px] font-medium text-[#4B6380] mt-1">Uptime &amp; Reliability</span>
                  </div>
                </div>

                <div className="flex items-center gap-3.5 md:justify-center md:border-r md:border-[#DCEAF5] md:px-4">
                  <div className="w-11 h-11 rounded-full bg-[#EAF6FF] flex items-center justify-center shrink-0">
                    <Lightbulb className="w-5 h-5 text-[#087FEA]" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[26px] sm:text-[28px] font-extrabold text-[#087FEA] leading-none">6</span>
                    <span className="text-[12px] sm:text-[13px] font-medium text-[#4B6380] mt-1">Core Service Areas</span>
                  </div>
                </div>

                <div className="col-span-2 sm:col-span-1 flex items-center gap-3.5 md:justify-center md:px-4">
                  <div className="w-16 h-16 flex items-center justify-center shrink-0">
                    <img
                        src="/compconn_jamaica.png"
                        alt="COMPconn Jamaica"
                        referrerPolicy="no-referrer"
                        onError={(e) => {
                          e.currentTarget.style.display = 'none';
                        }}
                        className="w-full h-full object-contain select-none"
                    />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[22px] sm:text-[24px] font-extrabold text-[#087FEA] leading-none">Jamaica</span>
                    <span className="text-[12px] sm:text-[13px] font-medium text-[#4B6380] mt-1">Based &amp; Operating</span>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* =========================================================================
              4. SERVICES SECTION: 3X2 GRID WITH DEDICATED PAGE LINKS
          ========================================================================= */}
          <section id="solutions" className="py-20 md:py-24 bg-white">
            <div className="max-w-[1260px] mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
                <div>
                  <span className="text-[#087FEA] font-bold text-[12px] tracking-[0.14em] uppercase block mb-3">
                    Our Services
                  </span>
                  <h2 className="text-[32px] sm:text-[40px] font-extrabold text-[#062B55] leading-[1.15] tracking-tight">
                    Comprehensive IT Solutions<br className="hidden sm:inline" />
                    for a Stronger Tomorrow
                  </h2>
                </div>

                <div className="hidden lg:flex items-center gap-3 text-[14px] font-semibold text-[#062B55]/70">
                  <span className="w-8 h-[2px] bg-[#087FEA]" />
                  <span>Expertise. Innovation. Results.</span>
                </div>
              </div>

              <p className="text-[16px] text-[#4B6380] max-w-[620px] mb-12">
                From strategy to support, we provide end-to-end technology solutions designed to help your business operate smarter, safer and grow faster. Click any service to view its dedicated overview page.
              </p>

              {/* 3x2 Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
                {SERVICES.map((service) => {
                  const renderIcon = () => {
                    switch (service.iconName) {
                      case 'users': return <Users className="w-6 h-6 text-[#087FEA]" />;
                      case 'code': return <Code2 className="w-6 h-6 text-[#087FEA]" />;
                      case 'shield': return <ShieldCheck className="w-6 h-6 text-[#087FEA]" />;
                      case 'cloud': return <Cloud className="w-6 h-6 text-[#087FEA]" />;
                      case 'automation': return <Settings2 className="w-6 h-6 text-[#087FEA]" />;
                      case 'server': return <Server className="w-6 h-6 text-[#087FEA]" />;
                    }
                  };

                  return (
                    <div
                      key={service.id}
                      onClick={() => navigateToService(service.id)}
                      className="group bg-white rounded-[20px] border border-[#DCEAF5] hover:border-[#087FEA]/50 shadow-[0_2px_10px_rgba(6,43,85,0.03)] hover:shadow-[0_16px_36px_rgba(8,127,234,0.14)] transition-all duration-300 transform hover:-translate-y-1.5 flex flex-col justify-between cursor-pointer overflow-hidden"
                    >
                      {/* Service Card Image Banner */}
                      <div className="w-full h-44 relative overflow-hidden bg-slate-100">
                        <img
                          src={service.image}
                          alt={service.title}
                          referrerPolicy="no-referrer"
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#062B55]/70 via-transparent to-transparent" />
                      </div>

                      <div className="p-7 flex flex-col justify-between flex-1">
                        <div>
                          <div className="w-12 h-12 rounded-full bg-[#EAF6FF] group-hover:bg-[#087FEA]/10 flex items-center justify-center mb-5 transition-colors">
                            {renderIcon()}
                          </div>

                          <h3 className="text-[20px] font-bold text-[#062B55] mb-2 group-hover:text-[#087FEA] transition-colors">
                            {service.title}
                          </h3>

                          <p className="text-[14.5px] text-[#4B6380] leading-[1.6]">
                            {service.description}
                          </p>
                        </div>

                        <div className="flex items-center justify-between pt-6 mt-4 border-t border-slate-100">
                          <span className="text-xs font-bold text-[#087FEA] group-hover:underline">
                            Explore Solution
                          </span>
                          <div className="w-9 h-9 rounded-full bg-[#EAF6FF] group-hover:bg-[#087FEA] flex items-center justify-center transition-all shadow-sm">
                            <ArrowRight className="w-4 h-4 text-[#087FEA] group-hover:text-white transition-all transform group-hover:translate-x-0.5" />
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </section>

          {/* =========================================================================
              5. PROCESS SECTION
          ========================================================================= */}
          <section id="process" className="py-20 md:py-24 bg-[#F5FAFE] border-y border-[#DCEAF5]/80">
            <div className="max-w-[1260px] mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
                <div className="lg:col-span-4 flex flex-col items-start">
                  <span className="text-[#087FEA] font-bold text-[12px] tracking-[0.14em] uppercase block mb-3">
                    Our Process
                  </span>
                  <h2 className="text-[32px] sm:text-[38px] font-extrabold text-[#062B55] leading-[1.15] tracking-tight mb-4">
                    How We Transform<br />
                    Your Business
                  </h2>
                  <p className="text-[15px] text-[#4B6380] leading-[1.65] mb-8">
                    We take a consultative, collaborative approach to deliver technology solutions that fit your unique needs and drive measurable results.
                  </p>
                  <button
                    onClick={() => openConsultationWithService('4-Step Transformation')}
                    className="inline-flex items-center gap-2 bg-[#087FEA] hover:bg-[#0770D0] text-white text-[14px] font-semibold px-6 py-3 rounded-full shadow-md cursor-pointer group"
                  >
                    <span>Our Approach</span>
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </button>
                </div>

                <div className="lg:col-span-8">
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
                    <div className="flex flex-col items-start">
                      <div className="w-13 h-13 rounded-full bg-white border border-[#DCEAF5] flex items-center justify-center shadow-sm mb-4">
                        <Search className="w-5 h-5 text-[#087FEA]" />
                      </div>
                      <span className="text-[12px] font-bold text-[#087FEA] uppercase tracking-wider mb-1">01</span>
                      <h3 className="text-[17px] font-bold text-[#062B55] mb-2">Discover</h3>
                      <p className="text-[13.5px] text-[#4B6380] leading-[1.55]">We understand your business, challenges and goals.</p>
                    </div>

                    <div className="flex flex-col items-start">
                      <div className="w-13 h-13 rounded-full bg-white border border-[#DCEAF5] flex items-center justify-center shadow-sm mb-4">
                        <Lightbulb className="w-5 h-5 text-[#087FEA]" />
                      </div>
                      <span className="text-[12px] font-bold text-[#087FEA] uppercase tracking-wider mb-1">02</span>
                      <h3 className="text-[17px] font-bold text-[#062B55] mb-2">Design</h3>
                      <p className="text-[13.5px] text-[#4B6380] leading-[1.55]">We create a tailored solution and strategic roadmap.</p>
                    </div>

                    <div className="flex flex-col items-start">
                      <div className="w-13 h-13 rounded-full bg-white border border-[#DCEAF5] flex items-center justify-center shadow-sm mb-4">
                        <Cog className="w-5 h-5 text-[#087FEA]" />
                      </div>
                      <span className="text-[12px] font-bold text-[#087FEA] uppercase tracking-wider mb-1">03</span>
                      <h3 className="text-[17px] font-bold text-[#062B55] mb-2">Build &amp; Deploy</h3>
                      <p className="text-[13.5px] text-[#4B6380] leading-[1.55]">We implement with precision and minimal disruption.</p>
                    </div>

                    <div className="flex flex-col items-start">
                      <div className="w-13 h-13 rounded-full bg-white border border-[#DCEAF5] flex items-center justify-center shadow-sm mb-4">
                        <TrendingUp className="w-5 h-5 text-[#087FEA]" />
                      </div>
                      <span className="text-[12px] font-bold text-[#087FEA] uppercase tracking-wider mb-1">04</span>
                      <h3 className="text-[17px] font-bold text-[#062B55] mb-2">Support &amp; Grow</h3>
                      <p className="text-[13.5px] text-[#4B6380] leading-[1.55]">We provide ongoing support and help you scale for the future.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* =========================================================================
              6. CASE STUDY SECTION WITH REAL LAPTOP & DASHBOARD PHOTOGRAPHY
          ========================================================================= */}
          <section id="case-study" className="py-20 md:py-24 bg-white">
            <div className="max-w-[1260px] mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
                
                {/* Visual Imagery */}
                <div className="lg:col-span-4">
                  <div className="rounded-[22px] overflow-hidden border border-[#DCEAF5] shadow-[0_12px_36px_rgba(6,43,85,0.08)] relative aspect-[4/3] bg-slate-100">
                    <img
                      src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1000&q=80"
                      alt="Custom Business Management Platform Analytics"
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#062B55]/60 via-transparent to-transparent" />
                    <div className="absolute bottom-3 left-3 bg-white/95 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold text-[#062B55]">
                      Live Logistics Deployment
                    </div>
                  </div>
                </div>

                {/* Center Copy */}
                <div className="lg:col-span-5 flex flex-col items-start">
                  <span className="text-[#087FEA] font-bold text-[11.5px] tracking-[0.14em] uppercase block mb-2.5">
                    Featured Solution
                  </span>
                  <h3 className="text-[28px] sm:text-[34px] font-extrabold text-[#062B55] leading-[1.18] tracking-tight mb-4">
                    Custom Business<br />
                    Management Platform
                  </h3>
                  <p className="text-[15px] text-[#4B6380] leading-[1.65] mb-6">
                    We built a secure, cloud-based platform to help a Jamaican logistics company streamline operations, manage shipments and improve team collaboration across multiple locations.
                  </p>

                  <div className="flex flex-col gap-3 mb-8 w-full">
                    {[
                      'Custom web application',
                      'Real-time tracking & reporting',
                      'Secure cloud infrastructure',
                      'Ongoing support & optimization'
                    ].map((item, idx) => (
                      <div key={idx} className="flex items-center gap-3 text-[14.5px] font-medium text-[#062B55]">
                        <CheckCircle2 className="w-5 h-5 text-[#087FEA] shrink-0" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>

                  <button
                    onClick={() => setCaseStudyModalOpen(true)}
                    className="inline-flex items-center gap-2 bg-white hover:bg-[#F5FAFE] text-[#087FEA] border border-[#087FEA] text-[14px] font-semibold px-6 py-3 rounded-full transition-all cursor-pointer shadow-sm group"
                  >
                    <span>View Case Study</span>
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </button>
                </div>

                {/* Right Metrics Card */}
                <div className="lg:col-span-3">
                  <div className="bg-[#F8FBFE] border border-[#DCEAF5] rounded-[20px] p-6 sm:p-7 shadow-[0_4px_20px_rgba(6,43,85,0.04)]">
                    <div className="inline-flex items-center gap-2 bg-white px-3 py-1.5 rounded-full border border-[#DCEAF5] text-[12px] font-semibold text-[#062B55] mb-6 shadow-xs">
                      <Laptop className="w-4 h-4 text-[#087FEA]" />
                      <span>Logistics &amp; Distribution</span>
                    </div>

                    <div className="mb-6 pb-6 border-b border-[#DCEAF5]">
                      <div className="text-[34px] sm:text-[38px] font-extrabold text-[#087FEA] leading-none mb-1.5">60%</div>
                      <div className="text-[13px] font-medium text-[#4B6380]">faster operational efficiency</div>
                    </div>

                    <div className="mb-6 pb-6 border-b border-[#DCEAF5]">
                      <div className="text-[34px] sm:text-[38px] font-extrabold text-[#087FEA] leading-none mb-1.5">3x</div>
                      <div className="text-[13px] font-medium text-[#4B6380]">improvement in team collaboration</div>
                    </div>

                    <div>
                      <div className="text-[34px] sm:text-[38px] font-extrabold text-[#087FEA] leading-none mb-1.5">99.9%</div>
                      <div className="text-[13px] font-medium text-[#4B6380]">system uptime since launch</div>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </section>

          {/* =========================================================================
              7. TESTIMONIALS SECTION WITH REAL EXECUTIVE PORTRAITS
          ========================================================================= */}
          <section id="testimonials" className="py-20 md:py-24 bg-[#F8FBFE] border-t border-[#DCEAF5]">
            <div className="max-w-[1260px] mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
                
                <div className="lg:col-span-5 flex flex-col items-start">
                  <span className="text-[#087FEA] font-bold text-[12px] tracking-[0.14em] uppercase block mb-3">
                    What Our Clients Say
                  </span>
                  <h2 className="text-[32px] sm:text-[38px] font-extrabold text-[#062B55] leading-[1.15] tracking-tight mb-8">
                    Trusted by Businesses<br />
                    Across Jamaica and Beyond
                  </h2>

                  <div className="flex items-center gap-4">
                    <button
                      onClick={prevTestimonial}
                      aria-label="Previous testimonial"
                      className="w-10 h-10 rounded-full border border-[#DCEAF5] bg-white hover:bg-[#EAF6FF] text-[#062B55] hover:text-[#087FEA] flex items-center justify-center transition-colors cursor-pointer shadow-xs"
                    >
                      <ChevronLeft className="w-5 h-5" />
                    </button>
                    <button
                      onClick={nextTestimonial}
                      aria-label="Next testimonial"
                      className="w-10 h-10 rounded-full border border-[#DCEAF5] bg-white hover:bg-[#EAF6FF] text-[#062B55] hover:text-[#087FEA] flex items-center justify-center transition-colors cursor-pointer shadow-xs"
                    >
                      <ChevronRight className="w-5 h-5" />
                    </button>

                    <div className="flex items-center gap-1.5 ml-3">
                      {TESTIMONIALS.map((_, idx) => (
                        <button
                          key={idx}
                          onClick={() => setTestimonialIndex(idx)}
                          className={`h-2 rounded-full transition-all cursor-pointer ${
                            idx === testimonialIndex ? 'w-6 bg-[#087FEA]' : 'w-2 bg-slate-300 hover:bg-slate-400'
                          }`}
                          aria-label={`Go to slide ${idx + 1}`}
                        />
                      ))}
                    </div>
                  </div>
                </div>

                <div className="lg:col-span-7 bg-white rounded-[24px] p-8 sm:p-10 border border-[#DCEAF5] shadow-[0_6px_24px_rgba(6,43,85,0.04)] relative">
                  <div className="text-[70px] sm:text-[80px] font-serif text-[#087FEA] leading-none mb-2 select-none">
                    “
                  </div>

                  <p className="text-[17px] sm:text-[19px] text-[#062B55] font-medium leading-[1.6] mb-8 italic">
                    {TESTIMONIALS[testimonialIndex].quote}
                  </p>

                  <div className="flex items-center gap-4 pt-4 border-t border-slate-100">
                    <img
                      src={TESTIMONIALS[testimonialIndex].avatarUrl}
                      alt={TESTIMONIALS[testimonialIndex].name}
                      referrerPolicy="no-referrer"
                      className="w-14 h-14 rounded-full object-cover border-2 border-[#087FEA]/30 shrink-0 shadow-sm"
                    />

                    <div className="flex flex-col">
                      <span className="text-[16px] font-bold text-[#062B55]">
                        {TESTIMONIALS[testimonialIndex].name}
                      </span>
                      <span className="text-[13px] text-[#6F8299] font-medium">
                        {TESTIMONIALS[testimonialIndex].title}, {TESTIMONIALS[testimonialIndex].company}
                      </span>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </section>

          {/* =========================================================================
              8. CERTIFIED PARTNERS SECTION ("PROUD TO WORK WITH")
          ========================================================================= */}
          <section className="py-14 sm:py-16 bg-white border-b border-[#DCEAF5]">
            <div className="max-w-[1260px] mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-9 sm:mb-11">
                <span className="text-[#087FEA] font-bold text-[12px] tracking-[0.16em] uppercase block mb-2">
                  Proud to Work With
                </span>
                <h3 className="text-[24px] sm:text-[28px] font-extrabold text-[#062B55]">
                  Certified Technology &amp; Security Partners
                </h3>
              </div>

              {/* Responsive 6-Partner Grid with Balanced 3-Column Layout and Micro-Interactions */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 items-stretch">
                {PARTNERS.map((partner) => {
                  const Logo = partner.Component;
                  return (
                    <div
                      key={partner.id}
                      className="group bg-[#F8FBFE] hover:bg-white rounded-2xl p-6 sm:p-7 border border-[#DCEAF5] hover:border-[#087FEA]/50 shadow-[0_2px_8px_rgba(6,43,85,0.02)] hover:shadow-[0_12px_28px_rgba(8,127,234,0.1)] transition-all duration-300 flex flex-col justify-between items-center text-center cursor-default transform hover:-translate-y-1"
                    >
                      <div className="w-full h-16 flex items-center justify-center py-1">
                        <Logo className="h-10 sm:h-11 max-w-[210px] w-auto transition-transform duration-300 group-hover:scale-105" />
                      </div>
                      <div className="mt-4 pt-3.5 border-t border-[#DCEAF5]/80 w-full flex flex-col items-center">
                        <span className="text-[12.5px] font-bold text-[#062B55] group-hover:text-[#087FEA] transition-colors leading-tight">
                          {partner.tier}
                        </span>
                        <span className="text-[11px] text-[#6F8299] font-medium mt-1 leading-normal line-clamp-1">
                          {partner.category}
                        </span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </section>

          {/* =========================================================================
              9. FINAL CTA SECTION WITH UNSPLASH AERIAL CARIBBEAN COAST PHOTOGRAPHY
          ========================================================================= */}
          <section id="contact" className="relative py-20 sm:py-24 overflow-hidden border-b border-[#DCEAF5]">
            <div className="absolute inset-0 -z-20 w-full h-full">
              <img
                src="https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=1600&q=80"
                alt="Aerial Caribbean Coastline"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute inset-0 -z-10 bg-gradient-to-r from-white via-white/95 to-white/40 lg:to-transparent" />
            <div className="absolute inset-0 -z-10 bg-gradient-to-t from-white/90 via-transparent to-transparent lg:hidden" />

            <div className="max-w-[1260px] mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
                <div className="lg:col-span-7 flex flex-col items-start">
                  <span className="text-[#087FEA] font-bold text-[12px] tracking-[0.14em] uppercase block mb-3">
                    Let&apos;s Build What&apos;s Next
                  </span>
                  <h2 className="text-[34px] sm:text-[44px] font-extrabold text-[#062B55] leading-[1.12] tracking-tight mb-4">
                    Ready to Transform<br />
                    Your Business?
                  </h2>
                  <p className="text-[16px] text-[#4B6380] leading-[1.65] max-w-[520px] mb-8">
                    <span className="font-semibold text-[#062B55]">Book a consultation today and</span> let&apos;s explore how the right technology can help you work smarter, move faster and grow further.
                  </p>

                  <div className="flex flex-wrap items-center gap-4 mb-4">
                    <button
                      onClick={() => openConsultationWithService('Executive IT Strategy')}
                      className="inline-flex items-center gap-2 bg-[#087FEA] hover:bg-[#0770D0] text-white text-[14.5px] font-semibold px-7 py-3.5 rounded-full shadow-[0_6px_18px_rgba(8,127,234,0.28)] hover:shadow-[0_8px_24px_rgba(8,127,234,0.36)] transition-all cursor-pointer transform hover:-translate-y-0.5 group"
                    >
                      <span>Book a Consultation</span>
                      <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </button>

                    <button
                      onClick={() => setContactModalOpen(true)}
                      className="inline-flex items-center gap-2 bg-white hover:bg-[#F5FAFE] text-[#087FEA] border border-[#087FEA] text-[14.5px] font-semibold px-6 py-3.5 rounded-full transition-all cursor-pointer shadow-sm group"
                    >
                      <span>Get in Touch</span>
                      <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
                    </button>
                  </div>
                </div>

                <div className="lg:col-span-5 flex flex-col justify-center lg:items-end">
                  <div className="bg-white/95 backdrop-blur-md p-6 sm:p-7 rounded-[20px] border border-[#DCEAF5] shadow-[0_8px_30px_rgba(6,43,85,0.08)] flex flex-col gap-4 w-full max-w-[340px]">
                    <a
                      href="tel:876-670-6444"
                      className="flex items-center gap-3 text-[14px] font-semibold text-[#062B55] hover:text-[#087FEA] transition-colors"
                    >
                      <div className="w-9 h-9 rounded-full bg-[#EAF6FF] flex items-center justify-center shrink-0">
                        <Phone className="w-4 h-4 text-[#087FEA]" />
                      </div>
                      <span>876-670-6444</span>
                    </a>

                    <a
                      href="mailto:bizdev@compconn.biz"
                      className="flex items-center gap-3 text-[14px] font-semibold text-[#062B55] hover:text-[#087FEA] transition-colors"
                    >
                      <div className="w-9 h-9 rounded-full bg-[#EAF6FF] flex items-center justify-center shrink-0">
                        <Mail className="w-4 h-4 text-[#087FEA]" />
                      </div>
                      <span>bizdev@compconn.biz</span>
                    </a>

                    <div className="flex items-center gap-3 text-[14px] font-semibold text-[#062B55]">
                      <div className="w-9 h-9 rounded-full bg-[#EAF6FF] flex items-center justify-center shrink-0">
                        <MapPin className="w-4 h-4 text-[#087FEA]" />
                      </div>
                      <span>Kingston, Jamaica</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>
      )}

      {/* =========================================================================
          10. FOOTER
      ========================================================================= */}
      <footer className="bg-white pt-12 pb-8 border-t border-[#DCEAF5]">
        <div className="max-w-[1260px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8 pb-10 border-b border-[#DCEAF5]">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 relative flex items-center justify-center">
                <svg viewBox="0 0 44 44" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="22" cy="22" r="18" stroke="#087FEA" strokeWidth="3" strokeDasharray="95 20" strokeLinecap="round" />
                  <path d="M12 22C12 16.4772 16.4772 12 22 12C25.5 12 28.5 13.8 30.2 16.5" stroke="#16B9FF" strokeWidth="3.5" strokeLinecap="round" />
                  <circle cx="22" cy="22" r="6.5" fill="#087FEA" />
                  <circle cx="22" cy="22" r="3" fill="#FFFFFF" />
                </svg>
              </div>

              <div className="flex flex-col">
                <span className="text-[19px] font-extrabold tracking-[-0.03em] text-[#062B55] leading-none">
                  COMPCONN
                </span>
                <span className="text-[7.5px] font-bold tracking-[0.14em] text-[#062B55]/70 mt-1 uppercase">
                  IT CONSULTING &amp; TECHNOLOGY SOLUTIONS
                </span>
              </div>
            </div>

            <nav className="flex flex-wrap items-center justify-center gap-6 sm:gap-8">
              <button
                onClick={() => navigateToHome('home')}
                className="text-[13.5px] font-medium text-[#4B6380] hover:text-[#087FEA] transition-colors cursor-pointer"
              >
                Home
              </button>
              <button
                onClick={() => navigateToHome('solutions')}
                className="text-[13.5px] font-medium text-[#4B6380] hover:text-[#087FEA] transition-colors cursor-pointer"
              >
                Solutions
              </button>
              <button
                onClick={() => navigateToHome('industries')}
                className="text-[13.5px] font-medium text-[#4B6380] hover:text-[#087FEA] transition-colors cursor-pointer"
              >
                Industries
              </button>
              <button
                onClick={() => navigateToHome('process')}
                className="text-[13.5px] font-medium text-[#4B6380] hover:text-[#087FEA] transition-colors cursor-pointer"
              >
                About
              </button>
              <button
                onClick={() => navigateToHome('case-study')}
                className="text-[13.5px] font-medium text-[#4B6380] hover:text-[#087FEA] transition-colors cursor-pointer"
              >
                Case Studies
              </button>
              <button
                onClick={() => navigateToHome('contact')}
                className="text-[13.5px] font-medium text-[#4B6380] hover:text-[#087FEA] transition-colors cursor-pointer"
              >
                Contact
              </button>
            </nav>

            <div className="flex items-center gap-3">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="w-8 h-8 rounded-full border border-[#DCEAF5] flex items-center justify-center text-[#062B55] hover:text-white hover:bg-[#087FEA] hover:border-[#087FEA] transition-colors"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                aria-label="Facebook"
                className="w-8 h-8 rounded-full border border-[#DCEAF5] flex items-center justify-center text-[#062B55] hover:text-white hover:bg-[#087FEA] hover:border-[#087FEA] transition-colors"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noreferrer"
                aria-label="YouTube"
                className="w-8 h-8 rounded-full border border-[#DCEAF5] flex items-center justify-center text-[#062B55] hover:text-white hover:bg-[#087FEA] hover:border-[#087FEA] transition-colors"
              >
                <Youtube className="w-4 h-4" />
              </a>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-6 text-[12.5px] text-[#6F8299]">
            <div>© 2025 COMPCONN. All rights reserved.</div>
            <div className="font-medium text-[#062B55]">Technology. People. Progress.</div>
          </div>
        </div>
      </footer>

      {/* =========================================================================
          MODAL: BOOK A CONSULTATION
      ========================================================================= */}
      {consultationModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-xs animate-in fade-in duration-150">
          <div className="bg-white rounded-[24px] max-w-[550px] w-full p-6 sm:p-8 border border-[#DCEAF5] shadow-2xl relative max-h-[90vh] overflow-y-auto">
            <button
              onClick={() => setConsultationModalOpen(false)}
              className="absolute top-5 right-5 w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 text-[#062B55] flex items-center justify-center transition-colors cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>

            {!formSubmitted ? (
              <div>
                <div className="flex items-center gap-2 text-[#087FEA] text-xs font-bold uppercase tracking-wider mb-2">
                  <Calendar className="w-4 h-4" />
                  <span>Direct Consulting Intake</span>
                </div>
                <h3 className="text-[24px] font-extrabold text-[#062B55] leading-snug mb-2">
                  Book an IT Strategy Session
                </h3>
                <p className="text-[14px] text-[#4B6380] mb-6">
                  Meet directly with COMPconn senior technology consultants in Kingston, Jamaica or via secure virtual conference.
                </p>

                <form onSubmit={handleConsultationSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-[#062B55] mb-1.5">Full Name *</label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Marcus Campbell"
                        className="w-full px-3.5 py-2.5 rounded-xl border border-[#DCEAF5] text-sm text-[#062B55] focus:outline-none focus:border-[#087FEA]"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-[#062B55] mb-1.5">Company Name *</label>
                      <input
                        type="text"
                        required
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        placeholder="e.g. Kingston Freight Ltd."
                        className="w-full px-3.5 py-2.5 rounded-xl border border-[#DCEAF5] text-sm text-[#062B55] focus:outline-none focus:border-[#087FEA]"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-[#062B55] mb-1.5">Corporate Email *</label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="marcus@company.com"
                        className="w-full px-3.5 py-2.5 rounded-xl border border-[#DCEAF5] text-sm text-[#062B55] focus:outline-none focus:border-[#087FEA]"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-[#062B55] mb-1.5">Telephone Number *</label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="876-XXX-XXXX"
                        className="w-full px-3.5 py-2.5 rounded-xl border border-[#DCEAF5] text-sm text-[#062B55] focus:outline-none focus:border-[#087FEA]"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-[#062B55] mb-1.5">Selected Solution</label>
                      <select
                        value={formData.service}
                        onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl border border-[#DCEAF5] text-sm text-[#062B55] focus:outline-none focus:border-[#087FEA] bg-white cursor-pointer"
                      >
                        {SERVICES.map((s) => (
                          <option key={s.id} value={s.title}>{s.title}</option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-[#062B55] mb-1.5">Consultation Mode</label>
                      <select
                        value={formData.meetingMode}
                        onChange={(e) => setFormData({ ...formData, meetingMode: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl border border-[#DCEAF5] text-sm text-[#062B55] focus:outline-none focus:border-[#087FEA] bg-white cursor-pointer"
                      >
                        <option>Virtual (Google Meet / Teams)</option>
                        <option>In-Person (Kingston Headquarters)</option>
                        <option>On-Site Client Visit</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-[#062B55] mb-1.5">Brief Description of Goals</label>
                    <textarea
                      rows={3}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Tell us about your current technology requirements..."
                      className="w-full px-3.5 py-2.5 rounded-xl border border-[#DCEAF5] text-sm text-[#062B55] focus:outline-none focus:border-[#087FEA]"
                    />
                  </div>

                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full flex items-center justify-center gap-2 bg-[#087FEA] hover:bg-[#0770D0] disabled:opacity-75 text-white font-semibold py-3.5 rounded-full shadow-md transition-all cursor-pointer"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                          <span>Scheduling Session...</span>
                        </>
                      ) : (
                        <>
                          <span>Confirm Consultation Request</span>
                          <ArrowRight className="w-4 h-4" />
                        </>
                      )}
                    </button>
                    <p className="text-center text-[11.5px] text-[#6F8299] mt-2.5">
                      Response guaranteed within 2 business hours • Kingston, Jamaica (UTC-5)
                    </p>
                  </div>
                </form>
              </div>
            ) : (
              <div className="text-center py-6">
                <div className="w-14 h-14 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto mb-4">
                  <Check className="w-7 h-7" />
                </div>
                <h4 className="text-[22px] font-extrabold text-[#062B55] mb-2">Consultation Request Received!</h4>
                <p className="text-[14.5px] text-[#4B6380] max-w-[380px] mx-auto mb-6">
                  Thank you, <span className="font-semibold text-[#062B55]">{formData.name}</span>. Our lead solutions architect is reviewing your inquiry and will contact you at <span className="text-[#087FEA] font-medium">{formData.email}</span>.
                </p>
                <button
                  onClick={() => setConsultationModalOpen(false)}
                  className="bg-[#087FEA] hover:bg-[#0770D0] text-white text-sm font-semibold px-6 py-2.5 rounded-full cursor-pointer transition-colors"
                >
                  Close Window
                </button>
              </div>
            )}
          </div>
        </div>
      )}

      {/* =========================================================================
          MODAL: CASE STUDY DEEP DIVE
      ========================================================================= */}
      {caseStudyModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-xs animate-in fade-in duration-150">
          <div className="bg-white rounded-[24px] max-w-[650px] w-full p-6 sm:p-8 border border-[#DCEAF5] shadow-2xl relative max-h-[90vh] overflow-y-auto">
            <button
              onClick={() => setCaseStudyModalOpen(false)}
              className="absolute top-5 right-5 w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 text-[#062B55] flex items-center justify-center transition-colors cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>

            <span className="text-[#087FEA] text-xs font-bold uppercase tracking-wider block mb-2">
              Case Study: Kingston &amp; Regional Logistics
            </span>
            <h3 className="text-[25px] font-extrabold text-[#062B55] leading-snug mb-3">
              Cloud-Native Freight Dispatch &amp; Shipment Tracking Platform
            </h3>
            <p className="text-[14.5px] text-[#4B6380] leading-[1.65] mb-6">
              How COMPconn migrated a Jamaican distribution leader with 8 regional depots from paper waybills and fragmented phone dispatch to an enterprise cloud dashboard.
            </p>

            <div className="grid grid-cols-3 gap-3 mb-6 p-4 rounded-xl bg-[#F5FAFE] border border-[#DCEAF5] text-center">
              <div>
                <div className="text-2xl font-extrabold text-[#087FEA]">60%</div>
                <div className="text-[11px] text-[#4B6380] font-medium">Efficiency Boost</div>
              </div>
              <div>
                <div className="text-2xl font-extrabold text-[#087FEA]">3x</div>
                <div className="text-[11px] text-[#4B6380] font-medium">Team Collaboration</div>
              </div>
              <div>
                <div className="text-2xl font-extrabold text-[#087FEA]">99.9%</div>
                <div className="text-[11px] text-[#4B6380] font-medium">System Uptime</div>
              </div>
            </div>

            <div className="space-y-4 text-xs sm:text-sm text-[#4B6380]">
              <div>
                <h4 className="font-bold text-[#062B55] mb-1">The Challenge:</h4>
                <p>High fuel waste, delivery tracking delays across parishes, and severe audit vulnerabilities during end-of-month reconciliation.</p>
              </div>

              <div>
                <h4 className="font-bold text-[#062B55] mb-1">The COMPconn Solution:</h4>
                <p>Architected a custom real-time GPS fleet dashboard, driver mobile PWA with offline signature capture, and automated SMS notifications to freight recipients.</p>
              </div>
            </div>

            <div className="pt-6 border-t border-slate-100 mt-6 flex justify-end gap-3">
              <button
                onClick={() => {
                  setCaseStudyModalOpen(false);
                  openConsultationWithService('Custom Software');
                }}
                className="bg-[#087FEA] hover:bg-[#0770D0] text-white text-sm font-semibold px-6 py-2.5 rounded-full cursor-pointer transition-colors"
              >
                Discuss Similar Project
              </button>
            </div>
          </div>
        </div>
      )}

      {/* =========================================================================
          MODAL: GENERAL GET IN TOUCH
      ========================================================================= */}
      {contactModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-xs animate-in fade-in duration-150">
          <div className="bg-white rounded-[24px] max-w-[480px] w-full p-6 sm:p-8 border border-[#DCEAF5] shadow-2xl relative">
            <button
              onClick={() => setContactModalOpen(false)}
              className="absolute top-5 right-5 w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 text-[#062B55] flex items-center justify-center transition-colors cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>

            <div className="inline-flex items-center gap-2 text-[#087FEA] text-xs font-bold uppercase tracking-wider mb-2">
              <Send className="w-3.5 h-3.5" />
              <span>Contact COMPconn</span>
            </div>
            <h3 className="text-[24px] font-extrabold text-[#062B55] mb-2">
              Let&apos;s Start a Conversation
            </h3>
            <p className="text-[14px] text-[#4B6380] mb-6">
              Reach out directly to our Kingston team for inquiries, enterprise RFPs, or partnership requests.
            </p>

            <div className="space-y-3 mb-6">
              <a
                href="tel:876-670-6444"
                className="flex items-center gap-3 p-3 rounded-xl border border-[#DCEAF5] hover:border-[#087FEA] hover:bg-[#F5FAFE] transition-colors text-sm text-[#062B55] font-semibold"
              >
                <div className="w-8 h-8 rounded-full bg-[#EAF6FF] flex items-center justify-center text-[#087FEA]">
                  <Phone className="w-4 h-4" />
                </div>
                <span>Call Us: 876-670-6444</span>
              </a>

              <a
                href="mailto:bizdev@compconn.biz"
                className="flex items-center gap-3 p-3 rounded-xl border border-[#DCEAF5] hover:border-[#087FEA] hover:bg-[#F5FAFE] transition-colors text-sm text-[#062B55] font-semibold"
              >
                <div className="w-8 h-8 rounded-full bg-[#EAF6FF] flex items-center justify-center text-[#087FEA]">
                  <Mail className="w-4 h-4" />
                </div>
                <span>Email: bizdev@compconn.biz</span>
              </a>

              <div className="flex items-center gap-3 p-3 rounded-xl border border-[#DCEAF5] text-sm text-[#062B55] font-semibold">
                <div className="w-8 h-8 rounded-full bg-[#EAF6FF] flex items-center justify-center text-[#087FEA]">
                  <MapPin className="w-4 h-4" />
                </div>
                <span>Office: Kingston, Jamaica</span>
              </div>
            </div>

            <button
              onClick={() => {
                setContactModalOpen(false);
                openConsultationWithService('IT Consulting');
              }}
              className="w-full bg-[#087FEA] hover:bg-[#0770D0] text-white font-semibold py-3 rounded-full text-center text-sm shadow-md cursor-pointer transition-colors"
            >
              Or Book Formal Consultation
            </button>
          </div>
        </div>
      )}

    </div>
  );
}
