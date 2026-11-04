export interface ServiceKpi {
  label: string;
  value: string;
  description: string;
  targetNote?: string;
  badge?: string;
}

export interface ServiceItem {
  id: string;
  title: string;
  tagline: string;
  description: string;
  iconName: 'users' | 'code' | 'shield' | 'cloud' | 'automation' | 'server' | 'quantum' | 'awareness';
  image: string;
  secondaryImage: string;
  stats: { label: string; value: string }[];
  kpis?: ServiceKpi[];
  fullDetails: {
    summary: string;
    benefits: string[];
    capabilities: { title: string; desc: string }[];
    deliverables: string[];
    regionalRelevance: string;
    faqs: { q: string; a: string }[];
  };
}

export const SERVICES: ServiceItem[] = [
  {
    id: 'it-consulting',
    title: 'IT Consulting',
    tagline: 'Strategic Technology Advisory for Growing Enterprises',
    description: 'Strategic guidance to align your technology with your business goals.',
    iconName: 'users',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1200&q=80',
    secondaryImage: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=800&q=80',
    stats: [
      { label: 'Strategic ROI', value: '4.2x' },
      { label: 'DPA Compliance', value: '100%' },
      { label: 'Cost Reduction', value: '32%' }
    ],
    fullDetails: {
      summary: 'Comprehensive enterprise IT advisory tailored for modern corporations navigating digital modernization, vendor consolidation, and strict regulatory compliance.',
      benefits: [
        'Multi-year IT strategy aligned directly with board-level KPIs',
        'Comprehensive technology vendor audit and licensing cost optimization',
        'Business continuity and disaster recovery planning for operational resilience',
        'Full compliance with statutory Data Protection Act standards'
      ],
      capabilities: [
        { title: 'Digital Transformation Roadmaps', desc: 'Phase-by-phase blueprints to retire legacy bottlenecks and adopt modern agile workflows.' },
        { title: 'Vendor & Software Audits', desc: 'Eliminate duplicate tool subscriptions and negotiate optimal enterprise contracts.' },
        { title: 'Governance & Risk Advisory', desc: 'Enterprise data governance, risk scoring, and executive technology steering.' }
      ],
      deliverables: [
        'Enterprise IT Architecture Blueprint',
        'Technology Maturity & Gap Analysis',
        'Executive Technology Steering Retainer'
      ],
      regionalRelevance: 'Designed specifically to help enterprises modernize legacy operational systems into scalable regional powerhouses.',
      faqs: [
        { q: 'How does CompConn align with statutory Data Protection Acts (DPA)?', a: 'Our consultants include certified data privacy advisors who audit your data flows, access controls, and retention rules to ensure full statutory compliance.' },
        { q: 'Can we retain CompConn as our virtual Chief Information Officer (vCIO)?', a: 'Yes, we provide ongoing executive technology leadership to attend board meetings and direct your IT roadmap.' }
      ]
    }
  },
  {
    id: 'custom-software',
    title: 'Custom Software',
    tagline: 'Tailored Web & Enterprise Platforms Built to Scale',
    description: 'Tailored applications that solve real problems and drive efficiency.',
    iconName: 'code',
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1200&q=80',
    secondaryImage: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80',
    stats: [
      { label: 'Code Test Coverage', value: '98%' },
      { label: 'Processing Speed', value: '10x' },
      { label: 'Mobile Ready', value: '100%' }
    ],
    fullDetails: {
      summary: 'Bespoke web applications, internal operational tooling, distributor portals, and API integrations built on high-performance cloud stacks.',
      benefits: [
        'Eliminate manual Excel spreadsheets and double-entry bottlenecks',
        'Seamless integration with regional payment gateways and international ERPs',
        'High-security role-based access control (RBAC) and audit trails',
        'Responsive mobile-first interfaces for distributed field agents'
      ],
      capabilities: [
        { title: 'Enterprise Web Applications', desc: 'High-throughput portals engineered with React, TypeScript, and microservices.' },
        { title: 'API & Gateway Integrations', desc: 'Connect legacy SQL databases with modern payment rails, SMS, and dispatch.' },
        { title: 'Offline-First Progressive Web Apps', desc: 'Equip drivers and field inspectors with apps that work seamlessly without cellular data.' }
      ],
      deliverables: [
        'Full-Stack Production Web & Mobile Web Apps',
        'Restful / GraphQL APIs & Webhook Pipelines',
        '100% Client Source Code Ownership & Documentation'
      ],
      regionalRelevance: 'Solving distinct local workflows from distributed branch networks to multinational commerce.',
      faqs: [
        { q: 'Do we own the software code when the project finishes?', a: 'Yes. 100% of custom source code, documentation, and IP belongs entirely to your business.' },
        { q: 'Can your software integrate with regional and international payment gateways?', a: 'Yes, we integrate with regional banks, commercial payment gateways, and international processors like Stripe.' }
      ]
    }
  },
  {
    id: 'cybersecurity',
    title: 'Cybersecurity',
    tagline: 'Proactive Defense & Statutory Regulatory Safeguards',
    description: 'Proactive protection for your data, your people and your reputation.',
    iconName: 'shield',
    image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=1200&q=80',
    secondaryImage: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=800&q=80',
    stats: [
      { label: 'Mean Time to Detect (MTTD)', value: '1 Hour' },
      { label: 'Mean Time to Respond / Resolve (MTTR)', value: '<5 Hours' },
      { label: 'Patch Compliance Rate', value: '7 Days' }
    ],
    kpis: [
      {
        label: 'Mean Time to Detect (MTTD)',
        value: '1 Hour',
        description: "Tracks the average time it takes the provider's Security Operations Center (SOC) to identify and begin investigating a security alert or intrusion.",
        targetNote: 'Target: 1 Hour',
        badge: 'Detection SLA'
      },
      {
        label: 'Mean Time to Respond / Resolve (MTTR)',
        value: '<5 Hours',
        description: 'Measures how quickly the provider neutralizes, contains, or remediates a security incident once it has been detected.',
        targetNote: 'Target: <5 Hours',
        badge: 'Containment SLA'
      },
      {
        label: 'Vulnerability Remediation / Patch Compliance Rate',
        value: '7 Days',
        description: 'Tracks the percentage of identified critical and high-risk vulnerabilities that are patched or mitigated within an agreed-upon service-level timeframe (7 days).',
        targetNote: 'SLA: 7-Day Mitigation Timeframe',
        badge: 'Remediation SLA'
      }
    ],
    fullDetails: {
      summary: 'Defense-in-depth security architectures, employee phishing simulations, endpoint hardening, vulnerability penetration tests, and incident response.',
      benefits: [
        'Guaranteed adherence to statutory Data Protection Act mandates',
        'Zero-Trust network segmentation and Multi-Factor Identity protection',
        '24/7 proactive security operations (SOC) monitoring and containment',
        'Protection against ransomware, business email compromise (BEC), and wire fraud'
      ],
      capabilities: [
        { title: 'Penetration Testing & Audits', desc: 'Identify exploitable vulnerabilities before malicious actors find them.' },
        { title: 'Security Awareness Training', desc: 'Simulated phishing attacks and staff workshops to prevent social engineering.' },
        { title: 'Endpoint Detection & Response (EDR)', desc: 'AI-driven threat hunting across all employee laptops, servers, and devices.' }
      ],
      deliverables: [
        'Penetration Testing & Remediation Reports',
        'DPA Compliance Matrix & Policy Handbook',
        'Rapid Threat Containment & Recovery SLA'
      ],
      regionalRelevance: 'Defending corporations against escalating ransomware syndicates and avoiding catastrophic statutory penalties.',
      faqs: [
        { q: 'What happens in the event of a security alert?', a: 'Our automated EDR isolates the machine within seconds while our rapid incident response team analyzes and remediates the threat.' },
        { q: 'Can you help prepare our company for ISO 27001 or SOC 2 certification?', a: 'Yes, we implement the controls and provide the technical artifacts required for successful auditor sign-off.' }
      ]
    }
  },
  {
    id: 'cloud-infrastructure',
    title: 'Cloud & Infrastructure',
    tagline: 'Resilient, Hurricane-Proof Multi-Cloud Infrastructure',
    description: 'Scalable, secure and reliable cloud solutions for modern business.',
    iconName: 'cloud',
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1200&q=80',
    secondaryImage: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=800&q=80',
    stats: [
      { label: 'Uptime SLA', value: '99.99%' },
      { label: 'Failover Time', value: '<30 sec' },
      { label: 'OpEx Savings', value: '45%' }
    ],
    fullDetails: {
      summary: 'Multi-cloud architecture, AWS/Azure/GCP management, hybrid on-premise bridging, and resilient database replication designed for Caribbean resilience.',
      benefits: [
        'Sub-minute disaster recovery failover during severe storms and local grid outages',
        'Eliminate large capital expenditures on depreciating physical server rooms',
        'Elastic autoscaling during peak seasonal, holiday, and payroll traffic spikes',
        'Ultra-fast secure VPN/Zero-Trust access for distributed remote teams'
      ],
      capabilities: [
        { title: 'Cloud Migration & Modernization', desc: 'Seamlessly transition legacy on-premise workloads to AWS, Azure, or Google Cloud.' },
        { title: 'Automated Disaster Recovery (DR)', desc: 'Continuous geo-redundant backups ensuring zero data loss.' },
        { title: 'FinOps & Cost Optimization', desc: 'Right-size cloud instances to eliminate wasteful monthly cloud spend.' }
      ],
      deliverables: [
        'Cloud Migration Roadmap & Execution',
        'Automated Backup & Geo-Replication Architecture',
        'Monthly Cloud Infrastructure Health & Cost Report'
      ],
      regionalRelevance: 'Overcoming power fluctuations and regional disruptions through off-site, bulletproof cloud architectures.',
      faqs: [
        { q: 'Where will our data reside geographically?', a: 'We configure data residency according to your regulatory needs, typically leveraging US-East or secure regional compliant cloud zones.' },
        { q: 'Can you migrate our legacy Windows / SQL servers without downtime?', a: 'Yes, we execute parallel cutover strategies that ensure zero interruption to daily business operations.' }
      ]
    }
  },
  {
    id: 'business-automation',
    title: 'Business Automation',
    tagline: 'Intelligent Workflows That Eliminate Manual Labor',
    description: 'Streamline operations and eliminate manual work with smart automation.',
    iconName: 'automation',
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=80',
    secondaryImage: 'https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&w=800&q=80',
    stats: [
      { label: 'Processing Speed', value: '8x' },
      { label: 'Error Rate', value: '0.0%' },
      { label: 'Hours Saved/Wk', value: '120+' }
    ],
    fullDetails: {
      summary: 'Automate repetitive back-office tasks, PDF invoice extraction, approval hierarchies, customer notifications, and cross-platform ERP synchronization.',
      benefits: [
        'Reduce order-to-dispatch turnaround time by up to 75%',
        'Zero manual data-entry errors between QuickBooks, SAP, and internal databases',
        'Automated WhatsApp and SMS client dispatch notifications',
        'Real-time automated management notifications and exception alerts'
      ],
      capabilities: [
        { title: 'Intelligent Document Processing', desc: 'Auto-extract invoices, purchase orders, and customs manifests into accounting.' },
        { title: 'Cross-System Middleware', desc: 'Seamlessly link disparate CRMs, warehouse software, and payment systems.' },
        { title: 'Automated Customer Journeys', desc: 'Trigger automated onboarding, contract renewals, and dispatch updates.' }
      ],
      deliverables: [
        'Custom Workflow Automation Pipelines',
        'OCR & Auto-Invoicing Connectors',
        'Staff Training & Automation Maintenance Support'
      ],
      regionalRelevance: 'Empowering enterprises to run at 24/7 velocity with lean, highly productive teams.',
      faqs: [
        { q: 'Will automation require us to replace our existing software?', a: 'No, our automation solutions integrate directly into the software you already use via APIs and secure connectors.' },
        { q: 'How quickly do we see return on investment (ROI)?', a: 'Most clients recover their investment within 60 to 90 days from saved labor hours and eliminated errors.' }
      ]
    }
  },
  {
    id: 'managed-it',
    title: 'Managed IT',
    tagline: '24/7 Dedicated IT Monitoring, Helpdesk & Infrastructure Care',
    description: '24/7 monitoring, support and maintenance for uninterrupted business.',
    iconName: 'server',
    image: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?auto=format&fit=crop&w=1200&q=80',
    secondaryImage: 'https://images.unsplash.com/photo-1563770660941-20978e870e26?auto=format&fit=crop&w=800&q=80',
    stats: [
      { label: 'Average Response', value: '12 min' },
      { label: 'First-Contact Fix', value: '94%' },
      { label: 'Support Coverage', value: '24/7/365' }
    ],
    fullDetails: {
      summary: 'Complete outsourced enterprise IT department providing proactive workstation monitoring, server patching, network administration, and rapid local helpdesk support.',
      benefits: [
        'Predictable, transparent monthly IT operational budget without surprise bills',
        'Guaranteed SLA response times with rapid technician dispatch when required',
        'Proactive hardware lifecycle tracking and software license compliance',
        'Continuous uptime tracking across all branch networks'
      ],
      capabilities: [
        { title: '24/7 Network Operations Center (NOC)', desc: 'Continuous monitoring of servers, routers, firewalls, and cloud services.' },
        { title: 'Remote & On-Site Helpdesk', desc: 'Friendly, expert tech support ready to resolve staff issues immediately.' },
        { title: 'Proactive Patch & Asset Management', desc: 'Automatic system updates, antivirus definition maintenance, and device inventory.' }
      ],
      deliverables: [
        '24/7 Enterprise Help Desk & Ticket Portal',
        'Monthly IT Health, Security & Performance Audits',
        'Dedicated Technical Account Manager'
      ],
      regionalRelevance: 'Allowing business leaders to focus on revenue while CompConn guarantees technology never stalls.',
      faqs: [
        { q: 'Do you provide on-site support when required?', a: 'Yes! While 95% of issues are resolved remotely in minutes, our field engineers provide rapid on-site dispatch when needed.' },
        { q: 'Can you co-manage IT alongside our existing internal staff?', a: 'Yes, we frequently partner with in-house IT managers to offload routine support and provide tier-3 escalation.' }
      ]
    }
  },
  {
    id: 'quantum-agility',
    title: 'Quantum Agility',
    tagline: 'Cryptographic Estate Discovery, Post-Quantum Roadmap & Quantum Agility',
    description: 'We discover businesses cryptographic estate, develop Post-Quantum roadmap and implement quantum agility.',
    iconName: 'quantum',
    image: 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?auto=format&fit=crop&w=1200&q=80',
    secondaryImage: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=800&q=80',
    stats: [
      { label: 'Estate Visibility', value: '100%' },
      { label: 'PQC Readiness', value: 'NIST-Aligned' },
      { label: 'Crypto-Agility', value: 'Modular' }
    ],
    fullDetails: {
      summary: 'We discover your business\'s cryptographic estate, develop a comprehensive Post-Quantum roadmap, and implement quantum agility across your enterprise architecture to protect against emerging quantum computing decryption risks.',
      benefits: [
        'Complete inventory of certificates, cipher suites, tokens, and cryptographic assets across your enterprise',
        'Mitigate "Harvest Now, Decrypt Later" (HNDL) attacks targeting long-term confidential business records',
        'Prioritized Post-Quantum Cryptography (PQC) migration roadmap adhering to emerging NIST standards',
        'Modular crypto-agile architecture enabling swift algorithmic swapping without system re-architecting'
      ],
      capabilities: [
        { title: 'Cryptographic Estate Discovery', desc: 'Automated scanning and cataloging of all asymmetric keys, public-key algorithms, TLS certificates, and HSM configurations across cloud and on-premise infrastructure.' },
        { title: 'Post-Quantum Roadmap Development', desc: 'Risk-prioritized migration strategy identifying vulnerable long-lived data, regulatory compliance milestones, and phased implementation of quantum-safe algorithms.' },
        { title: 'Quantum Agility Implementation', desc: 'Deploying modular abstraction layers and crypto-agile security frameworks so your systems can rotate cryptographic primitives seamlessly as standards advance.' }
      ],
      deliverables: [
        'Cryptographic Bill of Materials (CBOM) & Asset Catalog',
        'Post-Quantum Transition Roadmap & Risk Matrix',
        'Crypto-Agile Architecture Reference Blueprint & Implementation Plan'
      ],
      regionalRelevance: 'Guarding critical corporate data, proprietary IP, and financial transactions against the quantum transition before regulatory mandates take effect.',
      faqs: [
        { q: 'Why do we need Quantum Agility now if quantum computers are still evolving?', a: 'Adversaries are actively executing "Harvest Now, Decrypt Later" attacks—exfiltrating encrypted confidential business data today to decrypt it once quantum decryption becomes viable. Transitioning enterprise cryptography takes years, making early action essential.' },
        { q: 'What is cryptographic estate discovery?', a: 'It is the rigorous discovery, identification, and cataloging of every cryptographic algorithm, key, certificate, and protocol deployed across your applications, servers, databases, and networks.' },
        { q: 'What does implementing "quantum agility" mean for our systems?', a: 'Quantum agility creates a modular architecture where cryptographic algorithms can be swapped or upgraded with minimal operational disruption and without having to rewrite underlying application code.' }
      ]
    }
  },
  {
    id: 'quantum-era-awareness',
    title: 'Quantum Era Awareness',
    tagline: 'Strategic Education & Board Governance for the Emerging Quantum Threat Landscape',
    description: 'Quantum Era awareness, threat landscape education, and governance workshops for executives and business leaders.',
    iconName: 'awareness',
    image: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=1200&q=80',
    secondaryImage: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=800&q=80',
    stats: [
      { label: 'Executive Briefings', value: 'Board-Ready' },
      { label: 'Governance Impact', value: '100% Clarity' },
      { label: 'Threat Translation', value: 'Jargon-Free' }
    ],
    fullDetails: {
      summary: 'Tailored executive briefings and interactive governance workshops designed to demystify the emerging quantum computing threat landscape, establish corporate risk governance, and guide senior leadership in strategic cybersecurity planning.',
      benefits: [
        'Executive and board-level clarity on quantum decryption timelines, Q-Day implications, and commercial risk',
        'Fiduciary compliance and cyber governance preparedness for board audit and risk committees',
        'Strategic capital allocation guidance to prevent costly last-minute emergency migrations',
        'Empowered business leaders capable of evaluating vendor and partner quantum readiness'
      ],
      capabilities: [
        { title: 'Executive Threat Briefings', desc: 'High-impact, business-focused sessions translating quantum physics and cryptographic risks into boardroom-ready risk models and commercial implications.' },
        { title: 'Board Risk & Governance Workshops', desc: 'Structured guidance to integrate quantum security risks into enterprise risk management (ERM) frameworks, corporate disclosures, and fiduciary oversight.' },
        { title: 'Vendor & Supply Chain Quantum Diligence', desc: 'Equipping procurement, legal, and technology leaders with audit questionnaires and contract riders to evaluate third-party software vendor preparedness.' }
      ],
      deliverables: [
        'Executive Quantum Risk Briefing Deck & Summary Report',
        'Board-Level Quantum Cybersecurity Governance Checklist',
        'Third-Party Vendor Quantum Readiness Audit Questionnaire'
      ],
      regionalRelevance: 'Positioning executive boards and business leaders at the forefront of digital resilience and forward-looking enterprise security.',
      faqs: [
        { q: 'Who should attend Quantum Era awareness sessions?', a: 'CEOs, CFOs, Chief Risk Officers, CIOs, CISOs, board directors, general counsel, and enterprise business unit leaders responsible for data confidentiality and long-term compliance.' },
        { q: 'Are these briefings technical or business-oriented?', a: 'Our sessions are specifically crafted for executives and business leaders, translating complex technical concepts into clear risk registers, budget considerations, and governance actions.' },
        { q: 'Can sessions be delivered in-person or virtually?', a: 'Yes, we provide interactive executive board retreats, keynote presentations, and remote virtual workshops tailored to your organization\'s schedule.' }
      ]
    }
  }
];
