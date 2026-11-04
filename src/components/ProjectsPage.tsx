import React, { useState, useMemo } from 'react';
import {
  ArrowLeft,
  ArrowRight,
  Calendar,
  Briefcase,
  CheckCircle2,
  Building2,
  ShieldCheck,
  Server,
  Cloud,
  Cpu,
  Layers,
  Search,
  Filter,
  ExternalLink,
  ChevronRight,
  Clock,
  Sparkles,
  ChevronDown,
  ChevronUp
} from 'lucide-react';
import { PROJECTS, ProjectItem } from '../data/projectsData';

interface ProjectsPageProps {
  onBackToHome: () => void;
  onBookConsultation: (preselectedService: string) => void;
}

export const ProjectsPage: React.FC<ProjectsPageProps> = ({
  onBackToHome,
  onBookConsultation
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [selectedAssociation, setSelectedAssociation] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [expandedSkills, setExpandedSkills] = useState<Record<string, boolean>>({});

  const categories = useMemo(() => {
    return ['All', 'ERP & Architecture', 'Digital Transformation', 'Cybersecurity', 'Data Center & Infrastructure', 'Virtualization', 'Networking'];
  }, []);

  const associations = useMemo(() => {
    return ['All', 'CompConn', 'The CB Group', 'Lascelles Ltd.'];
  }, []);

  const toggleSkills = (projectId: string) => {
    setExpandedSkills((prev) => ({ ...prev, [projectId]: !prev[projectId] }));
  };

  const filteredProjects = useMemo(() => {
    return PROJECTS.filter((project) => {
      // Category filter
      const matchesCategory =
        selectedCategory === 'All' || project.category === selectedCategory;

      // Association filter
      const matchesAssociation =
        selectedAssociation === 'All' ||
        (project.association && project.association.includes(selectedAssociation));

      // Search query
      const query = searchQuery.toLowerCase().trim();
      const matchesSearch =
        query === '' ||
        project.title.toLowerCase().includes(query) ||
        project.description.toLowerCase().includes(query) ||
        project.skills.some((s) => s.toLowerCase().includes(query)) ||
        (project.association && project.association.toLowerCase().includes(query));

      return matchesCategory && matchesAssociation && matchesSearch;
    });
  }, [selectedCategory, selectedAssociation, searchQuery]);

  // Helper icon for category
  const getCategoryIcon = (category: ProjectItem['category']) => {
    switch (category) {
      case 'ERP & Architecture':
        return <Layers className="w-4 h-4 text-[#087FEA]" />;
      case 'Digital Transformation':
        return <Cloud className="w-4 h-4 text-[#087FEA]" />;
      case 'Cybersecurity':
        return <ShieldCheck className="w-4 h-4 text-[#087FEA]" />;
      case 'Data Center & Infrastructure':
        return <Server className="w-4 h-4 text-[#087FEA]" />;
      case 'Virtualization':
        return <Cpu className="w-4 h-4 text-[#087FEA]" />;
      case 'Networking':
        return <Building2 className="w-4 h-4 text-[#087FEA]" />;
      default:
        return <Briefcase className="w-4 h-4 text-[#087FEA]" />;
    }
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
            <span className="text-[#062B55] font-semibold">Projects</span>
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
          2. HERO SECTION
      ========================================================================= */}
      <section className="relative py-12 md:py-20 overflow-hidden bg-white border-b border-[#DCEAF5]">
        <div className="absolute top-0 right-0 w-[550px] h-[550px] bg-gradient-to-bl from-[#EAF6FF]/70 via-[#F5FAFE]/40 to-transparent rounded-full blur-3xl pointer-events-none -z-10" />

        <div className="max-w-[1260px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 text-[#087FEA] bg-[#EAF6FF] px-3.5 py-1.5 rounded-full font-bold text-[12px] tracking-[0.14em] uppercase mb-4 border border-[#DCEAF5]">
              <Briefcase className="w-3.5 h-3.5" />
              <span>Proven Track Record • Enterprise Projects</span>
            </div>

            <h1 className="text-[34px] sm:text-[46px] lg:text-[52px] font-extrabold text-[#062B55] leading-[1.12] tracking-tight mb-5">
              Mission-Critical Project Portfolio
            </h1>

            <p className="text-[17px] sm:text-[19px] font-medium text-[#087FEA] leading-snug mb-5">
              Delivering high-stakes IT initiatives, ERP migrations, ransomware defense, and zero-downtime infrastructure relocations.
            </p>

            <p className="text-[15.5px] text-[#4B6380] leading-[1.7] mb-6">
              Explore our project archive highlighting leadership in strategic enterprise architecture, complex cloud platforms, network upgrades, and mission-critical operations.
            </p>

            {/* Delivery Assurance Banner */}
            <div className="inline-flex flex-wrap items-center gap-3 bg-emerald-50 border border-emerald-200/90 px-4 py-3 rounded-2xl mb-8 shadow-xs">
              <div className="w-8 h-8 rounded-full bg-emerald-600 text-white flex items-center justify-center shrink-0 shadow-xs">
                <CheckCircle2 className="w-5 h-5" />
              </div>
              <div className="flex flex-col sm:flex-row sm:items-center sm:gap-2">
                <span className="text-sm font-bold text-emerald-950">
                  Track Record Guarantee:
                </span>
                <span className="text-sm font-semibold text-emerald-800">
                  All projects completed successfully within established budget and timeline.
                </span>
              </div>
            </div>
          </div>

          {/* Key Metrics Counter Strip */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 pt-6 border-t border-[#DCEAF5]">
            <div className="bg-[#F8FBFE] border border-[#DCEAF5] rounded-xl p-4 sm:p-5">
              <div className="text-[28px] sm:text-[34px] font-extrabold text-[#087FEA] leading-tight">7+</div>
              <div className="text-xs sm:text-[13px] font-semibold text-[#062B55] mt-1">Featured Initiatives</div>
              <div className="text-[11px] text-[#6F8299] mt-0.5">Enterprise scale &amp; delivery</div>
            </div>

            <div className="bg-[#F8FBFE] border border-[#DCEAF5] rounded-xl p-4 sm:p-5">
              <div className="text-[28px] sm:text-[34px] font-extrabold text-[#087FEA] leading-tight">50+</div>
              <div className="text-xs sm:text-[13px] font-semibold text-[#062B55] mt-1">Servers Lifted &amp; Shifted</div>
              <div className="text-[11px] text-[#6F8299] mt-0.5">Zero weekday disruption</div>
            </div>

            <div className="bg-[#F8FBFE] border border-[#DCEAF5] rounded-xl p-4 sm:p-5">
              <div className="text-[28px] sm:text-[34px] font-extrabold text-emerald-600 leading-tight">100%</div>
              <div className="text-xs sm:text-[13px] font-semibold text-[#062B55] mt-1">On-Budget &amp; On-Time</div>
              <div className="text-[11px] text-emerald-700 font-medium mt-0.5">Within established budget &amp; timeline</div>
            </div>

            <div className="bg-[#F8FBFE] border border-[#DCEAF5] rounded-xl p-4 sm:p-5">
              <div className="text-[28px] sm:text-[34px] font-extrabold text-[#087FEA] leading-tight">24+</div>
              <div className="text-xs sm:text-[13px] font-semibold text-[#062B55] mt-1">Years Combined Mastery</div>
              <div className="text-[11px] text-[#6F8299] mt-0.5">Senior IT consultant leadership</div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          3. FILTERING & SEARCH CONTROLS
      ========================================================================= */}
      <section className="py-8 bg-[#F8FBFE] border-b border-[#DCEAF5] sticky top-[74px] z-30 backdrop-blur-md bg-[#F8FBFE]/95">
        <div className="max-w-[1260px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-4">
            
            {/* Search Input */}
            <div className="relative flex-1 max-w-md">
              <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search projects, technologies, or keywords..."
                className="w-full pl-10 pr-4 py-2 text-sm bg-white border border-[#DCEAF5] rounded-xl focus:outline-none focus:border-[#087FEA] focus:ring-2 focus:ring-[#087FEA]/10 text-[#062B55] transition-all"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-xs font-semibold text-slate-400 hover:text-slate-600"
                >
                  Clear
                </button>
              )}
            </div>

            {/* Filter by Association Buttons */}
            <div className="flex items-center gap-2 overflow-x-auto pb-1 lg:pb-0 scrollbar-none">
              <span className="text-xs font-bold text-[#6F8299] uppercase tracking-wider shrink-0 mr-1 flex items-center gap-1">
                <Filter className="w-3.5 h-3.5" /> Entity:
              </span>
              {associations.map((assoc) => (
                <button
                  key={assoc}
                  onClick={() => setSelectedAssociation(assoc)}
                  className={`text-xs font-semibold px-3 py-1.5 rounded-full whitespace-nowrap transition-all cursor-pointer ${
                    selectedAssociation === assoc
                      ? 'bg-[#062B55] text-white shadow-xs'
                      : 'bg-white border border-[#DCEAF5] text-[#4B6380] hover:border-[#087FEA] hover:text-[#087FEA]'
                  }`}
                >
                  {assoc === 'All' ? 'All Entities' : assoc}
                </button>
              ))}
            </div>

          </div>

          {/* Category Pills */}
          <div className="flex items-center gap-2 overflow-x-auto pt-4 pb-1 scrollbar-none">
            <span className="text-xs font-bold text-[#6F8299] uppercase tracking-wider shrink-0 mr-1">
              Category:
            </span>
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`text-xs font-semibold px-3.5 py-1.5 rounded-full whitespace-nowrap transition-all cursor-pointer ${
                  selectedCategory === cat
                    ? 'bg-[#087FEA] text-white shadow-[0_2px_8px_rgba(8,127,234,0.25)]'
                    : 'bg-white border border-[#DCEAF5] text-[#4B6380] hover:border-[#087FEA] hover:text-[#087FEA]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
          4. PROJECTS LISTING
      ========================================================================= */}
      <section className="py-12 md:py-16 bg-white">
        <div className="max-w-[1260px] mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex items-center justify-between mb-8">
            <div className="text-sm font-semibold text-[#062B55]">
              Showing <span className="text-[#087FEA] font-bold">{filteredProjects.length}</span> of {PROJECTS.length} projects
            </div>

            {(selectedCategory !== 'All' || selectedAssociation !== 'All' || searchQuery) && (
              <button
                onClick={() => {
                  setSelectedCategory('All');
                  setSelectedAssociation('All');
                  setSearchQuery('');
                }}
                className="text-xs font-semibold text-[#087FEA] hover:underline cursor-pointer"
              >
                Reset All Filters
              </button>
            )}
          </div>

          {filteredProjects.length === 0 ? (
            <div className="text-center py-16 px-4 bg-[#F8FBFE] border border-[#DCEAF5] rounded-2xl">
              <Briefcase className="w-12 h-12 text-slate-300 mx-auto mb-3" />
              <h3 className="text-lg font-bold text-[#062B55] mb-1">No Projects Found</h3>
              <p className="text-sm text-[#6F8299] max-w-sm mx-auto mb-4">
                We couldn't find any projects matching your current filter criteria.
              </p>
              <button
                onClick={() => {
                  setSelectedCategory('All');
                  setSelectedAssociation('All');
                  setSearchQuery('');
                }}
                className="bg-[#087FEA] text-white text-xs font-semibold px-4 py-2 rounded-full hover:bg-[#0770D0] transition-colors"
              >
                Clear Filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
              {filteredProjects.map((project) => {
                const isSkillsExpanded = !!expandedSkills[project.id];
                const hasExtraSkills = project.moreSkills && project.moreSkills.length > 0;

                return (
                  <div
                    key={project.id}
                    className="group bg-[#F8FBFE] hover:bg-white rounded-2xl border border-[#DCEAF5] hover:border-[#087FEA]/50 p-6 sm:p-7 shadow-[0_2px_12px_rgba(6,43,85,0.03)] hover:shadow-[0_12px_32px_rgba(8,127,234,0.09)] transition-all duration-300 flex flex-col justify-between"
                  >
                    <div>
                      {/* Top Meta Line: Period & Category */}
                      <div className="flex flex-wrap items-center justify-between gap-2 mb-3.5">
                        <div className="inline-flex items-center gap-1.5 text-xs font-bold text-[#087FEA] bg-[#EAF6FF] px-2.5 py-1 rounded-md border border-[#DCEAF5]">
                          <Calendar className="w-3.5 h-3.5 text-[#087FEA]" />
                          <span>{project.period}</span>
                        </div>

                        <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#062B55] bg-white px-2.5 py-1 rounded-md border border-[#DCEAF5]">
                          {getCategoryIcon(project.category)}
                          <span>{project.category}</span>
                        </div>
                      </div>

                      {/* Project Title */}
                      <h3 className="text-[20px] sm:text-[22px] font-extrabold text-[#062B55] group-hover:text-[#087FEA] transition-colors leading-tight mb-2.5">
                        {project.title}
                      </h3>

                      {/* Association & Completion Badges */}
                      <div className="flex flex-wrap items-center gap-2 mb-4">
                        {project.association && (
                          <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#062B55] bg-white/90 border border-[#DCEAF5] px-2.5 py-1 rounded-full shadow-xs">
                            <Building2 className="w-3.5 h-3.5 text-[#087FEA]" />
                            <span>{project.association}</span>
                          </div>
                        )}
                        <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-emerald-800 bg-emerald-50 border border-emerald-200/80 px-2.5 py-1 rounded-full shadow-xs">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                          <span>Completed within established budget &amp; timeline</span>
                        </div>
                      </div>

                      {/* Verbatim Description */}
                      <p className="text-[14.5px] text-[#4B6380] leading-[1.65] mb-5">
                        {project.description}
                      </p>

                      {/* Highlights */}
                      {project.highlights && project.highlights.length > 0 && (
                        <div className="mb-5 space-y-2 bg-white/70 border border-[#DCEAF5]/80 p-3.5 rounded-xl">
                          <div className="text-[11px] font-bold text-[#6F8299] uppercase tracking-wider mb-1.5">
                            Key Deliverables &amp; Outcomes
                          </div>
                          {project.highlights.map((h, idx) => (
                            <div key={idx} className="flex items-start gap-2 text-xs text-[#062B55]">
                              <CheckCircle2 className="w-3.5 h-3.5 text-[#087FEA] shrink-0 mt-0.5" />
                              <span>{h}</span>
                            </div>
                          ))}
                        </div>
                      )}

                      {/* Skills & Badges */}
                      <div className="mb-6">
                        <div className="text-[11px] font-bold text-[#6F8299] uppercase tracking-wider mb-2">
                          Domain Skills &amp; Technologies
                        </div>
                        <div className="flex flex-wrap items-center gap-1.5">
                          {project.skills.map((skill, sIdx) => (
                            <span
                              key={sIdx}
                              className="text-xs font-medium text-[#062B55] bg-white border border-[#DCEAF5] px-2.5 py-1 rounded-lg"
                            >
                              {skill}
                            </span>
                          ))}

                          {/* Extra Skills Toggle */}
                          {project.moreSkillsCount && !isSkillsExpanded && (
                            <button
                              onClick={() => toggleSkills(project.id)}
                              className="text-xs font-bold text-[#087FEA] hover:text-[#0770D0] bg-[#EAF6FF] hover:bg-[#DCEAF5] border border-[#DCEAF5] px-2.5 py-1 rounded-lg transition-colors cursor-pointer inline-flex items-center gap-1"
                            >
                              <span>+{project.moreSkillsCount} {project.moreSkillsCount === 1 ? 'skill' : 'skills'}</span>
                              <ChevronDown className="w-3 h-3" />
                            </button>
                          )}

                          {isSkillsExpanded && hasExtraSkills && (
                            <>
                              {project.moreSkills!.map((extra, eIdx) => (
                                <span
                                  key={eIdx}
                                  className="text-xs font-medium text-[#087FEA] bg-[#EAF6FF] border border-[#DCEAF5] px-2.5 py-1 rounded-lg animate-in fade-in"
                                >
                                  {extra}
                                </span>
                              ))}
                              <button
                                onClick={() => toggleSkills(project.id)}
                                className="text-[11px] font-bold text-[#6F8299] hover:text-[#062B55] px-1.5 py-0.5 cursor-pointer inline-flex items-center"
                              >
                                <span>Show less</span>
                                <ChevronUp className="w-3 h-3 ml-0.5" />
                              </button>
                            </>
                          )}
                        </div>
                      </div>
                    </div>

                    {/* Bottom Action */}
                    <div className="pt-4 border-t border-[#DCEAF5] flex items-center justify-between">
                      <span className="text-xs text-[#6F8299] font-medium">
                        Enterprise Implementation
                      </span>

                      <button
                        onClick={() => onBookConsultation(`Consultation regarding: ${project.title}`)}
                        className="inline-flex items-center gap-1.5 text-xs sm:text-[13px] font-bold text-[#087FEA] hover:text-[#0770D0] transition-colors cursor-pointer group/btn"
                      >
                        <span>Discuss Similar Project</span>
                        <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover/btn:translate-x-1" />
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          )}

        </div>
      </section>

      {/* =========================================================================
          5. BOTTOM CONSULTATION CALL-TO-ACTION
      ========================================================================= */}
      <section className="py-16 sm:py-20 bg-gradient-to-b from-white via-[#F8FBFE] to-[#EAF6FF]/50 border-t border-[#DCEAF5]">
        <div className="max-w-[1260px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-2xl mx-auto">
            <span className="text-[#087FEA] font-bold text-[12px] tracking-[0.16em] uppercase block mb-3">
              Ready to Execute Your Vision?
            </span>
            <h2 className="text-[28px] sm:text-[36px] font-extrabold text-[#062B55] leading-tight mb-4">
              Bring Proven Technical Leadership to Your Next Project
            </h2>
            <p className="text-[15px] sm:text-[16px] text-[#4B6380] leading-relaxed mb-8">
              All projects in our portfolio were completed successfully within established budget and timeline. Whether you are planning a mission-critical cloud ERP migration, modernizing your network infrastructure, or implementing quantum-agile security, CompConn delivers guaranteed execution.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button
                onClick={() => onBookConsultation('IT Consulting')}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#087FEA] hover:bg-[#0770D0] text-white text-[14.5px] font-semibold px-7 py-3.5 rounded-full shadow-[0_4px_16px_rgba(8,127,234,0.3)] hover:shadow-[0_6px_20px_rgba(8,127,234,0.4)] transition-all cursor-pointer transform active:scale-95"
              >
                <Calendar className="w-4 h-4" />
                <span>Book a Project Consultation</span>
              </button>

              <button
                onClick={onBackToHome}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white hover:bg-slate-50 text-[#062B55] border border-[#DCEAF5] text-[14.5px] font-semibold px-6 py-3.5 rounded-full transition-colors cursor-pointer shadow-xs"
              >
                <span>Return to Homepage</span>
              </button>
            </div>

            <div className="mt-8 pt-6 border-t border-[#DCEAF5] flex flex-wrap items-center justify-center gap-6 text-xs text-[#6F8299]">
              <div>Direct Inquiries: <a href="tel:876-670-6444" className="text-[#087FEA] font-semibold hover:underline">876-670-6444</a></div>
              <div>•</div>
              <div>Email: <a href="mailto:bizdev@compconn.biz" className="text-[#087FEA] font-semibold hover:underline">bizdev@compconn.biz</a></div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};
