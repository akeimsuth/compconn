export interface ProjectItem {
  id: string;
  title: string;
  period: string;
  description: string;
  association?: string;
  skills: string[];
  moreSkillsCount?: number;
  moreSkills?: string[];
  category: 'ERP & Architecture' | 'Digital Transformation' | 'Cybersecurity' | 'Data Center & Infrastructure' | 'Virtualization' | 'Networking';
  role?: string;
  highlights?: string[];
  clientOrEntity?: string;
}

export const PROJECTS: ProjectItem[] = [
  {
    id: 'erp-migration-great-plains',
    title: 'ERP Migration from Microsoft Great Plains',
    period: 'Dec 2024 – Feb 2026',
    association: 'Associated with CompConn',
    skills: ['ERP', 'Enterprise Architecture'],
    moreSkillsCount: 1,
    moreSkills: ['Financial Systems & Data Migration'],
    category: 'ERP & Architecture',
    role: 'Lead Enterprise Architect & Implementation Consultant',
    description: 'Comprehensive enterprise resource planning migration from legacy Microsoft Great Plains to a modern, scalable cloud ERP architecture, ensuring financial ledger integrity, automated workflows, and robust executive analytics.',
    highlights: [
      'Seamless multi-entity financial ledger and data schema conversion',
      'Minimization of operational downtime during critical phase cutovers',
      'Integration with modern reporting and compliance pipelines'
    ]
  },
  {
    id: 'digital-transformation-programme',
    title: 'Digital Transformation Programme',
    period: 'Sep 2022 – Dec 2023',
    association: 'Associated with CompConn',
    skills: ['Enterprise Architecture Planning', 'Information Technology'],
    moreSkillsCount: 3,
    moreSkills: ['Cloud-Based Core Systems', 'API Integration', 'Digital Ecosystem Strategy'],
    category: 'Digital Transformation',
    role: 'Principal Digital Transformation Architect',
    description: 'Implementing a modern cloud-based insurance platform along with integrated solutions required to create a complete digital eco-system.',
    highlights: [
      'Modern cloud-native core platform replacement',
      'Unified digital ecosystem connecting customers, brokers, and back-office teams',
      'Real-time automated policy generation and claims processing workflows'
    ]
  },
  {
    id: 'cybersecurity-enhancement-project',
    title: 'Cybersecurity Enhancement Project',
    period: 'Sep 2020 – Dec 2020',
    association: 'Associated with CompConn',
    skills: ['Cybersecurity', 'Ransomware Remediation', 'Threat Elimination', 'Endpoint Security'],
    category: 'Cybersecurity',
    role: 'Lead Security Incident Responder & Infrastructure Consultant',
    description: 'Identified and removed malicious applications from servers and approximately 40 computers, replaced perimeter and end-point security tools/devices, restored data and rebuild systems which were affected by ransomware.',
    highlights: [
      'Complete remediation of ransomware payload across all affected endpoints and servers',
      'Full data recovery and verified rebuild of critical production systems',
      'Hardened perimeter firewall architecture and modernized EDR tooling'
    ]
  },
  {
    id: 'data-center-relocation',
    title: 'Data Center Relocation',
    period: 'Jan 2020 – Mar 2020',
    association: 'Associated with CompConn',
    skills: ['Infrastructure Design', 'Data Center Relocation', 'IT Operations', 'Disaster Recovery'],
    category: 'Data Center & Infrastructure',
    role: 'IT Consultant & Infrastructure Project Lead',
    description: 'Relocated a major client\'s data center. My role as IT Consultant invloved designing the target infrastructure and leading the implementation project while managing IT operations.',
    highlights: [
      'Architected resilient target infrastructure with power and cooling redundancy',
      'Maintained ongoing mission-critical business IT operations throughout transition',
      'Executed cutover with zero unplanned downtime for end-users'
    ]
  },
  {
    id: 'citrix-xendesktop-deployment',
    title: 'Citrix Xendesktop Deployment',
    period: 'Mar 2015 – Mar 2018',
    association: 'Associated with The CB Group',
    skills: ['Citrix XenDesktop', 'Virtual Desktop Infrastructure (VDI)', 'Thin Client Architecture'],
    category: 'Virtualization',
    role: 'VDI Project Lead & Systems Architect',
    description: 'Changed all desktop computers to thin clients.',
    highlights: [
      'Complete desktop estate transformation to standardized thin clients',
      'Centralized administration, patching, and policy deployment',
      'Substantial reduction in endpoint hardware replacement and maintenance costs'
    ]
  },
  {
    id: 'network-infrastructure-upgrade',
    title: 'Network Infrastructure Upgrade',
    period: 'Aug 2017 – Oct 2017',
    association: 'Associated with CompConn',
    skills: ['Project Management', 'Network Engineering', 'WAN/LAN Architecture', 'Fortinet Security Fabric', 'Cisco Migration'],
    category: 'Networking',
    role: 'Project Manager & Network Engineer Consultant',
    description: 'As Project Manager/Network Engineer Consultant I designed the new infrastructure, participated in the procurement activities and implementation of the entire network (WAN/LAN) for a large government agency. This entity upgraded from a Cisco based network to a Fortinet fabric.',
    highlights: [
      'Full architectural blueprint for multi-site WAN and high-availability LAN',
      'Managed competitive vendor procurement and equipment acquisition',
      'Turnkey migration from legacy Cisco topology to an integrated Fortinet Security Fabric'
    ]
  },
  {
    id: 'lascelles-ltd-data-center-relocation',
    title: 'Lascelles Ltd Data Center Relocation',
    period: 'Aug 2013 – Aug 2013',
    association: 'Associated with Lascelles Ltd.',
    skills: ['Data Center Lift & Shift', '50+ Server Relocation', 'Storage Infrastructure', 'Telecommunications Cutover'],
    category: 'Data Center & Infrastructure',
    role: 'Project Lead & Relocation Specialist',
    description: 'I led the relocation of Lascelles Ltd. data center from Newport West to Digicel\'s Caymanas Data Center. Over 50 servers, storage infrastructure and telecommunication services were relocated. The physical lift and shift activities took a weekend, however the design and planning took approximately 2 months.',
    highlights: [
      '2-month meticulous pre-planning and risk-mitigation engineering',
      'Relocation of 50+ enterprise servers, storage racks, and telecom circuits over a single weekend',
      'Successful Monday morning go-live without business disruption'
    ]
  }
];
