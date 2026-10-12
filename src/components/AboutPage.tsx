import React from 'react';
import {
  Shield,
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  Calendar,
  Users,
  Target,
  Compass,
  Award,
  LightbulbIcon,
  Server,
  Cloud,
  Lock,
  Headphones,
  FileCheck,
  TrendingUp,
  Cpu,
  Layers,
  GraduationCap,
  Briefcase,
  PhoneCall,
  Check
} from 'lucide-react';
import { SERVICES } from '../data/servicesData';
import { PARTNERS } from './PartnerLogos';

interface AboutPageProps {
  onBackToHome: () => void;
  onSelectService: (serviceId: string) => void;
  onBookConsultation: (preselectedService: string) => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({
  onBackToHome,
  onSelectService,
  onBookConsultation
}) => {
  return (
    <div className="bg-white min-h-screen text-[#4B6380] animate-in fade-in duration-300">
      
      {/* =========================================================================
          1. BREADCRUMBS & TOP BAR
      ========================================================================= */}
      <div className="bg-[#F8FBFE] border-b border-[#DCEAF5] py-3.5 px-4 sm:px-6 lg:px-8">
        <div className="max-w-[1260px] mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2 text-xs sm:text-sm font-medium text-[#6F8299]">
            <button
              onClick={onBackToHome}
              className="hover:text-[#087FEA] transition-colors cursor-pointer"
            >
              Home
            </button>
            <span>/</span>
            <span className="text-[#062B55] font-semibold">About Us</span>
          </div>

          <button
            onClick={onBackToHome}
            className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-[#087FEA] hover:text-[#0770D0] cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Home</span>
          </button>
        </div>
      </div>

      {/* =========================================================================
          2. HERO SECTION: COMPANY MISSION & IDENTITY
      ========================================================================= */}
      <section className="relative py-12 md:py-20 overflow-hidden bg-white border-b border-[#DCEAF5]">
        <div className="absolute top-0 right-0 w-[550px] h-[550px] bg-gradient-to-bl from-[#EAF6FF]/70 via-[#F5FAFE]/40 to-transparent rounded-full blur-3xl pointer-events-none -z-10" />

        <div className="max-w-[1260px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            
            {/* Left Column: Mission Narrative */}
            <div className="lg:col-span-7 flex flex-col items-start">
              <div className="inline-flex items-center gap-2 text-[#087FEA] bg-[#EAF6FF] px-3.5 py-1.5 rounded-full font-bold text-[12px] tracking-[0.14em] uppercase mb-4 border border-[#DCEAF5]">
                <Shield className="w-3.5 h-3.5" />
                <span>About COMPconn • Smarter IT. Stronger Business.</span>
              </div>

              <h1 className="text-[36px] sm:text-[46px] lg:text-[52px] font-extrabold text-[#062B55] leading-[1.12] tracking-tight mb-5">
                Bridging Business Ambition and Digital Success
              </h1>

              <p className="text-[18px] sm:text-[20px] font-medium text-[#087FEA] leading-snug mb-5">
                Empowering enterprises with vendor-agnostic technology consulting, resilient infrastructure, and high-impact digital solutions.
              </p>

              <p className="text-[15.5px] sm:text-[16.5px] text-[#4B6380] leading-[1.7] mb-6">
                COMPconn is an enterprise IT consulting and digital transformation firm dedicated to steering organizations to the forefront of the technological landscape. From fast-growing small and mid-sized enterprises to global corporations, we serve as your trusted technological bridge—transforming complex infrastructure hurdles into streamlined, competitive advantages.
              </p>

              <p className="text-[15px] sm:text-[16px] text-[#4B6380] leading-[1.7] mb-8">
                Under the strategic stewardship of visionary leadership with over 24 years of proven industry mastery, our team of certified professionals delivers solutions rooted in integrity, technical excellence, and rapid, measurable execution.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-4">
                <button
                  onClick={() => onBookConsultation('IT Consulting')}
                  className="inline-flex items-center gap-2.5 bg-[#087FEA] hover:bg-[#0770D0] text-white text-[14.5px] font-semibold px-7 py-3.5 rounded-full shadow-[0_6px_18px_rgba(8,127,234,0.28)] hover:shadow-[0_8px_24px_rgba(8,127,234,0.36)] transition-all cursor-pointer group"
                >
                  <Calendar className="w-4 h-4" />
                  <span>Schedule Executive Consultation</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </button>

                <a
                  href="#philosophy"
                  className="inline-flex items-center gap-2 border border-[#DCEAF5] hover:border-[#087FEA] text-[#062B55] hover:text-[#087FEA] bg-white text-[14.5px] font-semibold px-6 py-3.5 rounded-full transition-all"
                >
                  <span>Explore Our Philosophy</span>
                </a>
              </div>
            </div>

            {/* Right Column: Key Organizational Metrics & Card */}
            <div className="lg:col-span-5 flex flex-col gap-5">
              <div className="bg-gradient-to-br from-[#062B55] to-[#0A417C] text-white p-7 sm:p-9 rounded-[28px] shadow-[0_20px_45px_rgba(6,43,85,0.18)] relative overflow-hidden">
                <div className="absolute top-0 right-0 w-44 h-44 bg-[#087FEA]/20 rounded-full blur-2xl pointer-events-none" />
                
                <div className="text-xs font-bold tracking-widest uppercase text-[#73BAFC] mb-2 flex items-center gap-2">
                  <Award className="w-4 h-4" />
                  <span>Company At A Glance</span>
                </div>
                
                <h3 className="text-2xl sm:text-3xl font-extrabold mb-4 leading-tight text-white">
                  Technology. People. Progress.
                </h3>
                
                <p className="text-sm text-slate-200 leading-relaxed mb-6">
                  We reject the standard one-size-fits-all IT vendor playbook. Our vendor-agnostic philosophy means we tailor every technology recommendation solely around your bottom line, operational resilience, and long-term scalability.
                </p>

                <div className="grid grid-cols-2 gap-4 pt-4 border-t border-white/15">
                  <div className="bg-white/10 backdrop-blur-xs p-3.5 rounded-xl border border-white/10">
                    <div className="text-2xl sm:text-3xl font-black text-[#73BAFC]">24+</div>
                    <div className="text-xs text-slate-300 font-medium">Years Leadership Experience</div>
                  </div>
                  <div className="bg-white/10 backdrop-blur-xs p-3.5 rounded-xl border border-white/10">
                    <div className="text-2xl sm:text-3xl font-black text-white">100%</div>
                    <div className="text-xs text-slate-300 font-medium">Vendor-Agnostic Advisory</div>
                  </div>
                  <div className="bg-white/10 backdrop-blur-xs p-3.5 rounded-xl border border-white/10">
                    <div className="text-2xl sm:text-3xl font-black text-[#73BAFC]">24/7</div>
                    <div className="text-xs text-slate-300 font-medium">Proactive IT Monitoring</div>
                  </div>
                  <div className="bg-white/10 backdrop-blur-xs p-3.5 rounded-xl border border-white/10">
                    <div className="text-2xl sm:text-3xl font-black text-white">Zero</div>
                    <div className="text-xs text-slate-300 font-medium">Vendor Lock-In</div>
                  </div>
                </div>
              </div>

              {/* Certified Standards Badge */}
              <div className="bg-[#F8FBFE] border border-[#DCEAF5] rounded-2xl p-5 flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-[#087FEA]/10 text-[#087FEA] flex items-center justify-center shrink-0">
                </div>
                <div>
                  <h4 className="text-sm font-bold text-[#062B55]">Enterprise Certified Expertise</h4>
                  <p className="text-xs text-[#6F8299] mt-0.5">
                    Certified in Microsoft Cloud, Fortinet Security, Sophos Defense, Ermes Anti-Phishing &amp; Enterprise Governance.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* =========================================================================
          3. LEADERSHIP SPOTLIGHT: CEO O'RANE GRAY
      ========================================================================= */}
      <section className="py-16 md:py-24 bg-[#F8FBFE] border-b border-[#DCEAF5]">
        <div className="max-w-[1260px] mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-[760px] mx-auto mb-14">
            <span className="text-[#087FEA] font-bold text-xs uppercase tracking-widest bg-white border border-[#DCEAF5] px-3.5 py-1 rounded-full">
              Executive Leadership
            </span>
            <h2 className="text-[32px] sm:text-[40px] font-extrabold text-[#062B55] mt-3 leading-tight">
              Guided by Over Two Decades of Technological Mastery
            </h2>
            <p className="text-[#4B6380] text-base sm:text-lg mt-3">
              Visionary guidance combined with deep engineering execution to help organizations stay ahead in an ever-shifting digital economy.
            </p>
          </div>

          <div className="bg-white rounded-[28px] border border-[#DCEAF5] shadow-[0_12px_36px_rgba(6,43,85,0.06)] p-6 sm:p-10 lg:p-12">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              
              {/* Profile Card / Portrait */}
              <div className="lg:col-span-5 flex flex-col items-center text-center">
                <div className="relative mb-6">
                  <div className="w-48 h-48 sm:w-56 sm:h-56 rounded-3xl overflow-hidden border-4 border-white shadow-xl bg-[#062B55]">
                    <img
                      src="/orane.webp"
                      alt="O'Rane Gray - CEO of COMPconn"
                      className="w-full h-full object-cover object-top"
                      onError={(e) => {
                        e.currentTarget.onerror = null;
                        e.currentTarget.src = "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=600&q=80";
                      }}
                    />
                  </div>
                  <div className="absolute -bottom-3 bg-[#087FEA] text-white text-xs font-bold px-4 py-1.5 rounded-full shadow-md flex items-center gap-1.5">
                    <Shield className="w-3.5 h-3.5" />
                    <span>Chief Executive Officer</span>
                  </div>
                </div>

                <h3 className="text-2xl sm:text-3xl font-extrabold text-[#062B55]">O'Rane Gray</h3>
                <p className="text-[#087FEA] font-semibold text-sm mt-0.5">CEO &amp; Principal Enterprise Consultant</p>

                <div className="flex items-center gap-2 text-xs font-medium text-[#6F8299] mt-3 bg-[#F5FAFE] px-3.5 py-1.5 rounded-lg border border-[#DCEAF5]">
                  <GraduationCap className="w-4 h-4 text-[#087FEA]" />
                  <span>BSc. TOGAF, ITIL, PRINCE2F,CEH, MCP, CCA, VCA, CMS, CSM</span>
                </div>

                <div className="w-full max-w-[320px] mt-6 pt-6 border-t border-[#DCEAF5] flex justify-around text-center">
                  <div>
                    <div className="text-xl font-extrabold text-[#062B55]">24+</div>
                    <div className="text-[11px] text-[#6F8299] uppercase tracking-wider font-semibold">Years in IT</div>
                  </div>
                  <div className="w-[1px] bg-[#DCEAF5]" />
                  <div>
                    <div className="text-xl font-extrabold text-[#062B55]">100+</div>
                    <div className="text-[11px] text-[#6F8299] uppercase tracking-wider font-semibold">Enterprises Served</div>
                  </div>
                </div>
              </div>

              {/* Bio & Leadership Narrative */}
              <div className="lg:col-span-7 flex flex-col justify-center">
                <div className="inline-flex items-center gap-2 text-[#087FEA] text-xs font-bold uppercase tracking-wider mb-2">
                  <Briefcase className="w-4 h-4" />
                  <span>Leadership Profile</span>
                </div>

                <h4 className="text-xl sm:text-2xl font-bold text-[#062B55] mb-4">
                  A Visionary Leader Committed to Technological Advancement
                </h4>

                <div className="space-y-4 text-[15px] sm:text-[16px] text-[#4B6380] leading-[1.7]">
                  <p>
                    O'Rane Gray is the esteemed CEO of COMPconn, an IT solutions and consulting services company. He is a visionary leader with over 24 years of hands-on and executive experience across the IT industry, dedicated to driving technological advancements and committed to uncompromising excellence.
                  </p>
                  <p>
                    Under his strategic leadership, COMPconn has steered countless businesses to new heights by delivering cutting-edge solutions and fostering a culture of continuous innovation. Holding a Bachelor's Degree with a double major in Physics and Mathematics from the University of the West Indies (UWI), Mona, his analytical foundation translates into rigorous systems design and rock-solid IT architecture.
                  </p>
                  <p>
                    O'Rane has held notable management positions across both the public and private sectors, including distinguished service as Network Manager for the prestigious Lascelles DeMercado Group. He has also been a passionate champion for retaining premier technical talent, proving that world-class, enterprise-grade IT consultancy can be delivered with absolute integrity and local dedication.
                  </p>
                </div>

                {/* Quote Callout */}
                <div className="mt-6 p-5 rounded-2xl bg-[#EAF6FF] border border-[#DCEAF5] relative">
                  <p className="italic text-[#062B55] text-sm sm:text-[15px] font-medium leading-relaxed">
                    "Our objective at COMPconn is not merely to fix servers or patch software—it is to align technology directly with business goals, eliminate systemic vulnerabilities, and ensure our clients stay agile, secure, and ahead of the curve."
                  </p>
                  <span className="block mt-2 text-xs font-bold text-[#087FEA] tracking-wider uppercase">
                    — O'Rane Gray, CEO of COMPconn
                  </span>
                </div>
              </div>

            </div>
          </div>

        </div>
      </section>

      {/* =========================================================================
          4. OUR MISSION & VISION
      ========================================================================= */}
      <section className="py-16 md:py-24 bg-white border-b border-[#DCEAF5]">
        <div className="max-w-[1260px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
            
            {/* Mission Card */}
            <div className="bg-[#F8FBFE] border border-[#DCEAF5] rounded-[24px] p-8 sm:p-10 flex flex-col justify-between hover:shadow-lg transition-all group">
              <div>
                <div className="w-14 h-14 rounded-2xl bg-[#087FEA] text-white flex items-center justify-center mb-6 shadow-[0_6px_18px_rgba(8,127,234,0.3)]">
                  <Target className="w-7 h-7" />
                </div>
                <span className="text-xs font-bold text-[#087FEA] uppercase tracking-widest">Our Mission</span>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-[#062B55] mt-2 mb-4">
                  Seamless Digital Success &amp; Boundless Possibilities
                </h3>
                <p className="text-[15.5px] text-[#4B6380] leading-relaxed">
                  To provide businesses of all scales with the strategic guidance, secure network architecture, and operational stability required to thrive in a digital-first world. We demystify technological complexity, providing high service quality, best practices, and timely execution.
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-[#DCEAF5] flex items-center gap-2 text-xs font-semibold text-[#062B55]">
                <CheckCircle2 className="w-4 h-4 text-[#087FEA]" />
                <span>Client-first engineering with measurable ROI</span>
              </div>
            </div>

            {/* Vision Card */}
            <div className="bg-[#062B55] text-white rounded-[24px] p-8 sm:p-10 flex flex-col justify-between shadow-[0_12px_36px_rgba(6,43,85,0.14)] relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-64 h-64 bg-[#087FEA]/20 rounded-full blur-3xl pointer-events-none" />
              
              <div>
                <div className="w-14 h-14 rounded-2xl bg-[#73BAFC] text-[#062B55] flex items-center justify-center mb-6 shadow-md">
                  <Compass className="w-7 h-7" />
                </div>
                <span className="text-xs font-bold text-[#73BAFC] uppercase tracking-widest">Our Vision</span>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-white mt-2 mb-4">
                  The Forefront of Enterprise Technology
                </h3>
                <p className="text-[15.5px] text-slate-200 leading-relaxed">
                  To stand as the benchmark IT consulting authority—celebrated for visionary innovation, steadfast integrity, and unmatched technical depth. We envision a future where every enterprise is shielded by impenetrable security and empowered by resilient, high-speed infrastructure.
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-white/15 flex items-center gap-2 text-xs font-semibold text-slate-200">
                <CheckCircle2 className="w-4 h-4 text-[#73BAFC]" />
                <span>Pioneering next-generation cybersecurity &amp; cloud agility</span>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* =========================================================================
          5. THE COMPCONN PHILOSOPHY: OUR 4 OPERATING PILLARS
      ========================================================================= */}
      <section id="philosophy" className="py-16 md:py-24 bg-[#F8FBFE] border-b border-[#DCEAF5]">
        <div className="max-w-[1260px] mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-[760px] mx-auto mb-14">
            <span className="text-[#087FEA] font-bold text-xs uppercase tracking-widest bg-white border border-[#DCEAF5] px-3.5 py-1 rounded-full">
              The COMPconn Approach
            </span>
            <h2 className="text-[32px] sm:text-[40px] font-extrabold text-[#062B55] mt-3 leading-tight">
              Built on Unbiased Advisory &amp; Engineering Rigor
            </h2>
            <p className="text-[#4B6380] text-base sm:text-lg mt-3">
              We separate ourselves from traditional IT vendors by putting your real business needs above supplier product quotas.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            
            {/* Pillar 1: Vendor Agnostic */}
            <div className="bg-white p-7 rounded-2xl border border-[#DCEAF5] shadow-xs hover:shadow-md transition-all flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-xl bg-[#EAF6FF] text-[#087FEA] flex items-center justify-center mb-5 font-bold">
                  <Layers className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-[#062B55] mb-2.5">
                  100% Vendor-Agnostic
                </h3>
                <p className="text-sm text-[#4B6380] leading-relaxed">
                  We are not tied to any single vendor's sales quota. We architect solutions choosing the right software and hardware tailored purely to your unique technical requirements and operational budget.
                </p>
              </div>
              <div className="mt-5 pt-4 border-t border-slate-100 text-xs font-semibold text-[#087FEA] flex items-center gap-1.5">
                <Check className="w-3.5 h-3.5" />
                <span>Zero proprietary lock-in</span>
              </div>
            </div>

            {/* Pillar 2: Business-First */}
            <div className="bg-white p-7 rounded-2xl border border-[#DCEAF5] shadow-xs hover:shadow-md transition-all flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-xl bg-[#EAF6FF] text-[#087FEA] flex items-center justify-center mb-5 font-bold">
                  <TrendingUp className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-[#062B55] mb-2.5">
                  Business-First Focus
                </h3>
                <p className="text-sm text-[#4B6380] leading-relaxed">
                  Technology exists to empower human productivity and generate revenue. We invest the time to deeply comprehend your operational workflows before prescribing any technical solution.
                </p>
              </div>
              <div className="mt-5 pt-4 border-t border-slate-100 text-xs font-semibold text-[#087FEA] flex items-center gap-1.5">
                <Check className="w-3.5 h-3.5" />
                <span>Aligned with your KPI goals</span>
              </div>
            </div>

            {/* Pillar 3: Security By Design */}
            <div className="bg-white p-7 rounded-2xl border border-[#DCEAF5] shadow-xs hover:shadow-md transition-all flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-xl bg-[#EAF6FF] text-[#087FEA] flex items-center justify-center mb-5 font-bold">
                  <Lock className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-[#062B55] mb-2.5">
                  Security by Design
                </h3>
                <p className="text-sm text-[#4B6380] leading-relaxed">
                  Security is not a final checklist item. From day-one network topology design to post-quantum cryptographic defenses and employee anti-phishing, protection is native to every rollout.
                </p>
              </div>
              <div className="mt-5 pt-4 border-t border-slate-100 text-xs font-semibold text-[#087FEA] flex items-center gap-1.5">
                <Check className="w-3.5 h-3.5" />
                <span>Zero-Trust principles baked in</span>
              </div>
            </div>

            {/* Pillar 4: Timely Delivery & Quality */}
            <div className="bg-white p-7 rounded-2xl border border-[#DCEAF5] shadow-xs hover:shadow-md transition-all flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-xl bg-[#EAF6FF] text-[#087FEA] flex items-center justify-center mb-5 font-bold">
                  <FileCheck className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-[#062B55] mb-2.5">
                  Timely Delivery &amp; SLAs
                </h3>
                <p className="text-sm text-[#4B6380] leading-relaxed">
                  We respect corporate timelines and critical business cycles. Our disciplined project management guarantees rapid deployment, transparent status updates, and guaranteed SLA response times.
                </p>
              </div>
              <div className="mt-5 pt-4 border-t border-slate-100 text-xs font-semibold text-[#087FEA] flex items-center gap-1.5">
                <Check className="w-3.5 h-3.5" />
                <span>Under an hour average escalation</span>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* =========================================================================
          6. CORE VALUES
      ========================================================================= */}
      <section className="py-16 md:py-24 bg-white border-b border-[#DCEAF5]">
        <div className="max-w-[1260px] mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-[760px] mx-auto mb-14">
            <span className="text-[#087FEA] font-bold text-xs uppercase tracking-widest bg-[#EAF6FF] border border-[#DCEAF5] px-3.5 py-1 rounded-full">
              Our Core Values
            </span>
            <h2 className="text-[32px] sm:text-[40px] font-extrabold text-[#062B55] mt-3 leading-tight">
              The Principles That Guide Every Engagement
            </h2>
            <p className="text-[#4B6380] text-base sm:text-lg mt-3">
              Integrity, excellence, and innovation are more than company buzzwords at COMPconn—they form the backbone of our client relationships.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            <div className="p-8 rounded-2xl bg-[#F8FBFE] border border-[#DCEAF5] hover:border-[#087FEA] transition-all">
              <div className="w-12 h-12 rounded-xl bg-[#087FEA] text-white flex items-center justify-center mb-5 shadow-md">
                <Shield className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-[#062B55] mb-3">Integrity</h3>
              <p className="text-[15px] text-[#4B6380] leading-relaxed">
                We believe in total honesty, candid assessments, and ethical data governance. Clients trust us with their most sensitive enterprise data because we uphold confidentiality and transparent communication without compromise.
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-[#F8FBFE] border border-[#DCEAF5] hover:border-[#087FEA] transition-all">
              <div className="w-12 h-12 rounded-xl bg-[#087FEA] text-white flex items-center justify-center mb-5 shadow-md">
                <Award className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-[#062B55] mb-3">Excellence</h3>
              <p className="text-[15px] text-[#4B6380] leading-relaxed">
                We commit to rigorous industry standards, continuous engineer certifications, and best practices. We don't take shortcuts; every cable run, server patch, firewall rule, and code commit is executed to perfection.
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-[#F8FBFE] border border-[#DCEAF5] hover:border-[#087FEA] transition-all">
              <div className="w-12 h-12 rounded-xl bg-[#087FEA] text-white flex items-center justify-center mb-5 shadow-md">
                <LightbulbIcon className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-[#062B55] mb-3">Innovation</h3>
              <p className="text-[15px] text-[#4B6380] leading-relaxed">
                Technology never stops evolving, and neither do we. We continually evaluate emerging solutions—including AI automation, zero-trust frameworks, and quantum-safe algorithms—to keep our clients resilient against tomorrow's threats.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* =========================================================================
          7. FULL SPECTRUM OF EXPERTISE (8 PILLARS FROM COMPCONN.BIZ)
      ========================================================================= */}
      <section className="py-16 md:py-24 bg-[#F8FBFE] border-b border-[#DCEAF5]">
        <div className="max-w-[1260px] mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div>
              <span className="text-[#087FEA] font-bold text-xs uppercase tracking-widest bg-white border border-[#DCEAF5] px-3.5 py-1 rounded-full">
                Areas of Expertise
              </span>
              <h2 className="text-[32px] sm:text-[40px] font-extrabold text-[#062B55] mt-3 leading-tight">
                Comprehensive Enterprise Capabilities
              </h2>
              <p className="text-[#4B6380] text-base sm:text-lg mt-2 max-w-[640px]">
                End-to-end technology solutions configured to solve technical roadblocks, streamline operations, and scale with your enterprise.
              </p>
            </div>

            <button
              onClick={() => onBookConsultation('IT Consulting')}
              className="inline-flex items-center gap-2 text-sm font-bold text-[#087FEA] hover:text-[#0770D0] bg-white border border-[#DCEAF5] px-5 py-2.5 rounded-full shadow-xs cursor-pointer self-start md:self-auto"
            >
              <span>Request Capability Matrix</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              {
                title: 'IT Managed Services',
                desc: '24/7 proactive monitoring, automated patch management, and rapid help desk support to maintain 99.98% uptime.',
                icon: Headphones,
                serviceId: 'managed-services'
              },
              {
                title: 'Infrastructure Support',
                desc: 'Architecture design, server installations, data center upgrades, and disaster-recovery replication.',
                icon: Server,
                serviceId: 'infrastructure-support'
              },
              {
                title: 'IT Project Management',
                desc: 'Agile implementation, risk management, and turnkey migrations delivered on time and within budget.',
                icon: Briefcase,
                serviceId: 'it-consulting'
              },
              {
                title: 'IT Governance & Auditing',
                desc: 'Regulatory compliance assessments, security audits, disaster planning, and IT policy formulation.',
                icon: FileCheck,
                serviceId: 'it-governance'
              },
              {
                title: 'Virtualization & Cloud',
                desc: 'VMware, Hyper-V, and enterprise hybrid cloud architectures that minimize hardware footprint and costs.',
                icon: Cloud,
                serviceId: 'virtualization'
              },
              {
                title: 'Voice over IP (VoIP)',
                desc: 'Crystal-clear unified communications, automated attendants, and modern cloud telephony systems.',
                icon: PhoneCall,
                serviceId: 'voip-solutions'
              },
              {
                title: 'Custom App Development',
                desc: 'Tailored enterprise software, database engineering, and end-to-end API system integrations.',
                icon: Cpu,
                serviceId: 'application-development'
              },
              {
                title: 'Networks & Cyber Defense',
                desc: 'Next-generation firewalls, automated anti-phishing, endpoint security, and post-quantum preparedness.',
                icon: Shield,
                serviceId: 'network-security'
              }
            ].map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  className="bg-white p-6 rounded-2xl border border-[#DCEAF5] shadow-xs hover:border-[#087FEA] hover:shadow-md transition-all flex flex-col justify-between group"
                >
                  <div>
                    <div className="w-11 h-11 rounded-xl bg-[#F5FAFE] group-hover:bg-[#087FEA] text-[#087FEA] group-hover:text-white flex items-center justify-center mb-4 transition-colors">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="text-base font-bold text-[#062B55] mb-2 group-hover:text-[#087FEA] transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#4B6380] leading-relaxed">
                      {item.desc}
                    </p>
                  </div>

                  <div className="mt-5 pt-3 border-t border-slate-100 flex items-center justify-between">
                    <button
                      onClick={() => {
                        const matching = SERVICES.find(s => s.id === item.serviceId);
                        if (matching) {
                          onSelectService(matching.id);
                        } else {
                          onSelectService(SERVICES[0].id);
                        }
                      }}
                      className="text-xs font-semibold text-[#087FEA] hover:text-[#0770D0] inline-flex items-center gap-1 cursor-pointer"
                    >
                      <span>Explore Details</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* =========================================================================
          8. CERTIFIED TECHNOLOGY PARTNERS SECTION
      ========================================================================= */}
      <section className="py-16 md:py-20 bg-white border-b border-[#DCEAF5]">
        <div className="max-w-[1260px] mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-[700px] mx-auto mb-12">
            <span className="text-[#087FEA] font-bold text-xs uppercase tracking-widest bg-[#EAF6FF] border border-[#DCEAF5] px-3.5 py-1 rounded-full">
              Technology Ecosystem
            </span>
            <h2 className="text-[28px] sm:text-[36px] font-extrabold text-[#062B55] mt-3 leading-tight">
              Proud to Collaborate with World-Class Leaders
            </h2>
            <p className="text-[#4B6380] text-sm sm:text-base mt-2">
              Our vendor-agnostic status enables us to integrate the world's most trusted platforms into seamless, customized enterprise environments.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 items-stretch">
            {PARTNERS.map((partner) => {
              const Logo = partner.Component;
              return (
                <div
                  key={partner.id}
                  className="bg-white rounded-2xl p-6 sm:p-7 border border-[#DCEAF5] hover:border-[#087FEA]/50 shadow-[0_2px_12px_rgba(6,43,85,0.03)] hover:shadow-[0_12px_28px_rgba(8,127,234,0.12)] transition-all flex flex-col justify-between group"
                >
                  <div className="h-16 flex items-center justify-center p-2 rounded-xl bg-[#F8FBFE] border border-[#DCEAF5]/60 mb-5 group-hover:bg-[#F2F8FE] transition-colors">
                    <Logo className="h-10 sm:h-11 max-w-[210px] w-auto transition-transform duration-300 group-hover:scale-105" />
                  </div>
                  <div>
                    <span className="text-[11px] font-extrabold text-[#087FEA] uppercase tracking-wider block mb-1">
                      {partner.tier}
                    </span>
                    <h3 className="text-base font-bold text-[#062B55] mb-1">
                      {partner.name}
                    </h3>
                    <p className="text-xs text-[#6F8299] leading-relaxed">
                      {partner.category}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* =========================================================================
          9. BOTTOM CTA: SCHEDULE A CONSULTATION
      ========================================================================= */}
      <section className="py-16 md:py-20 bg-gradient-to-br from-[#062B55] via-[#07386E] to-[#0A417C] text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#087FEA]/20 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-[1260px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-xs text-[#73BAFC] border border-white/20 text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-5">
            <span>Ready for Smarter IT?</span>
          </div>

          <h2 className="text-[32px] sm:text-[44px] font-extrabold text-white leading-tight max-w-[800px] mx-auto mb-4">
            Partner with COMPconn to Accelerate Your Digital Transformation
          </h2>

          <p className="text-slate-200 text-base sm:text-lg max-w-[660px] mx-auto mb-8 leading-relaxed">
            Discover how our vendor-agnostic consulting, proactive managed services, and ironclad security solutions can optimize your infrastructure and scale your business.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <button
              onClick={() => onBookConsultation('IT Consulting')}
              className="inline-flex items-center gap-2.5 bg-[#087FEA] hover:bg-[#0770D0] text-white font-bold text-sm sm:text-base px-8 py-4 rounded-full shadow-[0_8px_24px_rgba(8,127,234,0.4)] transition-all cursor-pointer group"
            >
              <Calendar className="w-5 h-5" />
              <span>Book Your Strategy Consultation</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </button>

            <button
              onClick={onBackToHome}
              className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white border border-white/25 font-semibold text-sm sm:text-base px-7 py-4 rounded-full transition-all cursor-pointer"
            >
              <span>Back to Home</span>
            </button>
          </div>
        </div>
      </section>

    </div>
  );
};
