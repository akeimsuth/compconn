import React, { useState } from 'react';
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  Calendar,
  ChevronDown,
  Shield,
  Layers,
  MapPin,
  TrendingUp
} from 'lucide-react';
import { ServiceItem, SERVICES } from '../data/servicesData';

interface ServicePageProps {
  service: ServiceItem;
  onBackToHome: () => void;
  onSelectService: (serviceId: string) => void;
  onBookConsultation: (preselectedService: string) => void;
}

export const ServicePage: React.FC<ServicePageProps> = ({
  service,
  onBackToHome,
  onSelectService,
  onBookConsultation
}) => {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

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
            <button
              onClick={onBackToHome}
              className="hover:text-[#087FEA] transition-colors cursor-pointer"
            >
              Solutions
            </button>
            <span>/</span>
            <span className="text-[#062B55] font-semibold">{service.title}</span>
          </div>

          <button
            onClick={onBackToHome}
            className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-[#087FEA] hover:text-[#0770D0] cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to All Solutions</span>
          </button>
        </div>
      </div>

      {/* =========================================================================
          2. SERVICE HERO SECTION WITH REAL UNSPLASH PHOTOGRAPHY
      ========================================================================= */}
      <section className="relative py-12 md:py-20 overflow-hidden bg-white border-b border-[#DCEAF5]">
        <div className="max-w-[1260px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            
            {/* Left Column: Narrative */}
            <div className="lg:col-span-6 flex flex-col items-start">
              <div className="inline-flex items-center gap-2 text-[#087FEA] font-bold text-[12px] tracking-[0.14em] uppercase mb-3">
                <Shield className="w-4 h-4" />
                <span>COMPconn Enterprise Solution</span>
              </div>

              <h1 className="text-[36px] sm:text-[46px] font-extrabold text-[#062B55] leading-[1.12] tracking-tight mb-4">
                {service.title}
              </h1>

              <p className="text-[18px] sm:text-[20px] font-medium text-[#087FEA] leading-snug mb-4">
                {service.tagline}
              </p>

              <p className="text-[15.5px] sm:text-[16.5px] text-[#4B6380] leading-[1.65] mb-8 max-w-[540px]">
                {service.fullDetails.summary}
              </p>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-4 mb-8">
                <button
                  onClick={() => onBookConsultation(service.title)}
                  className="inline-flex items-center gap-2.5 bg-[#087FEA] hover:bg-[#0770D0] text-white text-[14.5px] font-semibold px-7 py-3.5 rounded-full shadow-[0_6px_18px_rgba(8,127,234,0.28)] hover:shadow-[0_8px_24px_rgba(8,127,234,0.36)] transition-all cursor-pointer group"
                >
                  <Calendar className="w-4 h-4" />
                  <span>Book a Consultation</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </button>

                <a
                  href="#capabilities"
                  className="inline-flex items-center gap-2 bg-white hover:bg-[#F5FAFE] text-[#087FEA] border border-[#087FEA] text-[14.5px] font-semibold px-6 py-3.5 rounded-full transition-all cursor-pointer shadow-xs"
                >
                  <span>Explore Capabilities</span>
                </a>
              </div>

              {/* Verified Metrics Strip */}
              <div className="grid grid-cols-3 gap-4 w-full pt-4 border-t border-[#DCEAF5]">
                {service.stats.map((st, i) => (
                  <div key={i} className="flex flex-col">
                    <span className="text-[24px] sm:text-[28px] font-extrabold text-[#087FEA] leading-none">
                      {st.value}
                    </span>
                    <span className="text-[12px] text-[#6F8299] font-medium mt-1">
                      {st.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Column: High-Res Unsplash Hero Image with Floating Trust Badge */}
            <div className="lg:col-span-6 relative">
              <div className="relative rounded-[24px] overflow-hidden border border-[#DCEAF5] shadow-[0_16px_40px_rgba(6,43,85,0.08)] bg-slate-100 aspect-[16/11]">
                <img
                  src={service.image}
                  alt={service.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
                />

                {/* Gradient Scrim */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#062B55]/70 via-transparent to-transparent pointer-events-none" />

                {/* Bottom Overlay Badge */}
                <div className="absolute bottom-5 left-5 right-5 text-white p-4 rounded-xl bg-[#062B55]/85 backdrop-blur-md border border-white/20 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-[#087FEA] flex items-center justify-center shrink-0">
                      <MapPin className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <div className="text-xs uppercase tracking-wider text-cyan-300 font-bold">
                        Kingston, Jamaica
                      </div>
                      <div className="text-sm font-semibold text-white">
                        Enterprise Grade SLA &amp; Local On-Site Support
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* =========================================================================
          3. CORE CAPABILITIES (BENTO GRID)
      ========================================================================= */}
      <section id="capabilities" className="py-16 md:py-20 bg-[#F8FBFE] border-b border-[#DCEAF5]">
        <div className="max-w-[1260px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-[700px] mx-auto mb-12">
            <span className="text-[#087FEA] font-bold text-[12px] tracking-[0.14em] uppercase block mb-2">
              Capabilities
            </span>
            <h2 className="text-[30px] sm:text-[36px] font-extrabold text-[#062B55] leading-tight mb-3">
              What We Deliver in {service.title}
            </h2>
            <p className="text-[15.5px] text-[#4B6380]">
              Rigorous, tested frameworks engineered to solve complex operational challenges with measurable commercial outcomes.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {service.fullDetails.capabilities.map((cap, idx) => (
              <div
                key={idx}
                className="bg-white rounded-[20px] p-7 border border-[#DCEAF5] shadow-[0_4px_16px_rgba(6,43,85,0.03)] hover:border-[#087FEA]/50 hover:shadow-[0_8px_24px_rgba(8,127,234,0.1)] transition-all"
              >
                <div className="w-10 h-10 rounded-full bg-[#EAF6FF] text-[#087FEA] font-bold text-sm flex items-center justify-center mb-5">
                  0{idx + 1}
                </div>
                <h3 className="text-[18px] font-bold text-[#062B55] mb-2.5">
                  {cap.title}
                </h3>
                <p className="text-[14px] text-[#4B6380] leading-[1.6]">
                  {cap.desc}
                </p>
              </div>
            ))}
          </div>

          {/* Key Strategic Benefits Checklist */}
          <div className="mt-12 bg-white rounded-[24px] p-8 sm:p-10 border border-[#DCEAF5] shadow-sm">
            <h3 className="text-[20px] font-bold text-[#062B55] mb-6 flex items-center gap-2.5">
              <TrendingUp className="w-5 h-5 text-[#087FEA]" />
              <span>Key Business Impact &amp; ROI</span>
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {service.fullDetails.benefits.map((benefit, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#087FEA] shrink-0 mt-0.5" />
                  <span className="text-[14.5px] text-[#062B55] font-medium">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          4. SECONDARY SECTION WITH DETAILED DELIVERABLES & SECONDARY UNSPLASH PHOTO
      ========================================================================= */}
      <section className="py-16 md:py-20 bg-white border-b border-[#DCEAF5]">
        <div className="max-w-[1260px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Secondary Photo */}
            <div className="lg:col-span-5 order-2 lg:order-1">
              <div className="rounded-[22px] overflow-hidden border border-[#DCEAF5] shadow-lg aspect-[4/3]">
                <img
                  src={service.secondaryImage}
                  alt={`${service.title} Workstation`}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Deliverables List */}
            <div className="lg:col-span-7 order-1 lg:order-2 flex flex-col items-start">
              <span className="text-[#087FEA] font-bold text-[12px] tracking-[0.14em] uppercase block mb-2">
                Tangible Outcomes
              </span>
              <h2 className="text-[28px] sm:text-[34px] font-extrabold text-[#062B55] leading-tight mb-4">
                What Your Organization Receives
              </h2>
              <p className="text-[15px] text-[#4B6380] mb-6 leading-relaxed">
                Every COMPconn engagement produces concrete, auditable assets that empower your leadership team with complete operational clarity and independence.
              </p>

              <div className="space-y-3 w-full mb-8">
                {service.fullDetails.deliverables.map((deliv, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-xl bg-[#F5FAFE] border border-[#DCEAF5] flex items-center gap-3 text-[#062B55] font-semibold text-[14.5px]"
                  >
                    <div className="w-6 h-6 rounded-full bg-[#087FEA] text-white flex items-center justify-center text-xs shrink-0">
                      ✓
                    </div>
                    <span>{deliv}</span>
                  </div>
                ))}
              </div>

              {/* Jamaica Relevance Callout */}
              <div className="p-5 rounded-2xl bg-amber-50/70 border border-amber-200/80 text-xs sm:text-[13.5px] text-[#062B55] leading-relaxed">
                <span className="font-bold text-amber-900">Caribbean Context: </span>
                {service.fullDetails.jamaicaRelevance}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* =========================================================================
          5. FAQ ACCORDION
      ========================================================================= */}
      <section className="py-16 md:py-20 bg-[#F8FBFE] border-b border-[#DCEAF5]">
        <div className="max-w-[850px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <span className="text-[#087FEA] font-bold text-[12px] tracking-[0.14em] uppercase block mb-2">
              Frequently Asked Questions
            </span>
            <h2 className="text-[28px] sm:text-[34px] font-extrabold text-[#062B55]">
              Common Inquiries About {service.title}
            </h2>
          </div>

          <div className="space-y-3.5">
            {service.fullDetails.faqs.map((faq, idx) => {
              const isOpen = openFaqIndex === idx;
              return (
                <div
                  key={idx}
                  className="bg-white rounded-[16px] border border-[#DCEAF5] overflow-hidden shadow-xs transition-colors"
                >
                  <button
                    onClick={() => toggleFaq(idx)}
                    className="w-full flex items-center justify-between p-5 text-left font-bold text-[#062B55] hover:text-[#087FEA] transition-colors cursor-pointer"
                  >
                    <span className="text-[15.5px] pr-4">{faq.q}</span>
                    <ChevronDown
                      className={`w-5 h-5 text-[#087FEA] shrink-0 transition-transform duration-200 ${
                        isOpen ? 'rotate-180' : ''
                      }`}
                    />
                  </button>
                  {isOpen && (
                    <div className="px-5 pb-5 text-[14.5px] text-[#4B6380] leading-relaxed border-t border-slate-100 pt-3 animate-in fade-in duration-150">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* =========================================================================
          6. EXPLORE OTHER COMPCONN SOLUTIONS
      ========================================================================= */}
      <section className="py-14 bg-white border-b border-[#DCEAF5]">
        <div className="max-w-[1260px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-8">
            <div>
              <span className="text-[#087FEA] font-bold text-xs uppercase tracking-wider block mb-1">
                More Solutions
              </span>
              <h3 className="text-2xl font-bold text-[#062B55]">
                Explore Other Service Lines
              </h3>
            </div>
            <button
              onClick={onBackToHome}
              className="text-sm font-semibold text-[#087FEA] hover:underline cursor-pointer hidden sm:block"
            >
              View Full Overview →
            </button>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
            {SERVICES.filter((s) => s.id !== service.id).map((other) => (
              <button
                key={other.id}
                onClick={() => {
                  onSelectService(other.id);
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="p-4 rounded-xl border border-[#DCEAF5] hover:border-[#087FEA] hover:bg-[#F5FAFE] transition-all text-left group cursor-pointer flex flex-col justify-between"
              >
                <div>
                  <div className="text-xs text-[#087FEA] font-bold uppercase tracking-wider mb-1">
                    Solution
                  </div>
                  <div className="font-bold text-sm text-[#062B55] group-hover:text-[#087FEA] transition-colors leading-snug">
                    {other.title}
                  </div>
                </div>
                <div className="pt-3 flex items-center text-xs font-semibold text-[#087FEA] gap-1">
                  <span>Learn more</span>
                  <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
          7. BOTTOM CALL TO ACTION
      ========================================================================= */}
      <section className="py-16 bg-[#062B55] text-white">
        <div className="max-w-[1260px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-cyan-400 font-bold text-xs uppercase tracking-widest block mb-2">
            Let&apos;s Accelerate Your Technology
          </span>
          <h2 className="text-[30px] sm:text-[38px] font-extrabold mb-4">
            Ready to Deploy {service.title}?
          </h2>
          <p className="text-[15.5px] text-blue-100 max-w-[600px] mx-auto mb-8">
            Consult with COMPconn’s senior technical architects to structure an engagement tailored to your infrastructure and operational budget.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <button
              onClick={() => onBookConsultation(service.title)}
              className="bg-[#087FEA] hover:bg-[#0770D0] text-white font-semibold text-sm px-8 py-3.5 rounded-full shadow-lg transition-all cursor-pointer"
            >
              Schedule Discovery Meeting
            </button>
            <button
              onClick={onBackToHome}
              className="bg-transparent hover:bg-white/10 text-white border border-white/40 font-semibold text-sm px-7 py-3.5 rounded-full transition-all cursor-pointer"
            >
              Return to Homepage
            </button>
          </div>
        </div>
      </section>

    </div>
  );
};
