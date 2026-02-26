// src/helpers/servicesData.jsx
import React from "react";
import AILeadGeneration from "../assets/AI Lead Generation & Growth Marketing.jpg";
import AIAutomationCRM from "../assets/AI Automation & CRM Systems.jpg";
import AIVirtual from "../assets/AI Virtual Assistants & Intelligent Agents.jpg";
import CareAgency from "../assets/Care Agency Recruitment & Compliance Automation System.jpg";
import ResponsibleAI from "../assets/Responsible AI & Compliance.jpg";
import SEO from "../assets/SEO & Content Systems.jpg";
import WebCustomSoftware from "../assets/Web & Custom Software.jpg";

const servicesData = {
  "ai-lead-generation": {
    serviceName: "AI Lead Generation & Growth Marketing",
    badge: "AI Lead Generation & Growth Marketing",
    tagline: (
      <>
        Leads That <span className="text-primary">Convert</span> – Not Just
        Traffic
      </>
    ),
    description: (
      <>
        In 2026, traffic is easy. Conversion is not. <br />
        Most businesses are running ads, posting content, and hoping something
        works. But hope is not a strategy.
      </>
    ),
    heroImage: AILeadGeneration,
    features: [
      {
        icon: "person_search",
        title: "Identify high-intent audiences",
        description:
          "AI-powered targeting that finds people actively searching for solutions like yours.",
      },
      {
        icon: "ads_click",
        title: "Engage with precision targeting",
        description:
          "Reach the right people at the right time with messaging that resonates.",
      },
      {
        icon: "verified",
        title: "Qualify them automatically",
        description:
          "Intelligent scoring separates ready-to-buy leads from browsers.",
      },
      {
        icon: "route",
        title: "Route to your team ready to convert",
        description:
          "Pre-qualified leads delivered directly to your sales team with full context.",
      },
    ],
    whatWeOffer: {
      title: "What Makes Us Different?",
      subtitle: "We don't just 'run ads.' We build an integrated system:",
      items: [
        "AI-assisted Google & Meta campaigns",
        "Conversion-optimised landing funnels",
        "Lead scoring & behaviour tracking",
        "Automated follow-up sequences",
        "CRM integration",
        "Revenue attribution tracking",
      ],
    },
    forWhom: [
      {
        title: "For healthcare providers, this means:",
        points: [
          "Fewer unqualified enquiries",
          "Faster patient or staff acquisition",
          "Measurable ROI",
        ],
      },
      {
        title: "For service businesses:",
        points: [
          "Predictable lead flow",
          "Automated follow-ups",
          "Higher close rates",
        ],
      },
    ],
    primaryCTA: "Get More Qualified Leads",
  },

  "ai-automation": {
    serviceName: "AI Automation & CRM Systems",
    badge: "AI Automation & CRM Systems",
    tagline: (
      <>
        Stop Managing Tasks.{" "}
        <span className="text-primary">Start Running a System</span>.
      </>
    ),
    description:
      "In UK healthcare and service sectors, the biggest challenge in 2026 is  not demand — it's operational overload.",
    heroImage: AIAutomationCRM,
    features: [
      {
        icon: "autorenew",
        title: "End-to-end enquiry automation",
        description:
          "Automatically capture, respond to, nurture, and convert enquiries without manual follow-up.",
      },
      {
        icon: "event_available",
        title: "Automated appointment booking",
        description:
          "Enable clients to view real-time availability and schedule appointments instantly.",
      },
      {
        icon: "device_hub",
        title: "CRM pipeline design",
        description:
          "Custom-built sales pipelines that track, organise, and optimise every opportunity.",
      },
      {
        icon: "person_add_alt_1",
        title: "Staff onboarding workflows",
        description:
          "Automate contracts, document collection, task assignments, and compliance steps for new hires.",
      },
      {
        icon: "school",
        title: "Training tracking systems",
        description:
          "Monitor staff certifications, course progress, and ongoing training requirements in one system.",
      },
      {
        icon: "psychology",
        title: "AI-powered reminders and notifications",
        description:
          "Smart, behaviour-based alerts and follow-ups to keep prospects and teams on track.",
      },
      {
        icon: "rule",
        title: "Lead qualification & routing logic",
        description:
          "Automatically score, segment, and assign leads to the right team member based on predefined criteria.",
      },
    ],
    whatWeOffer: {
      title: "We design intelligent automation systems",
      subtitle: "Using AI, CRM architecture, and workflow engineering.",
      items: [
        "Manual follow-ups.",
        "Slow onboarding.",
        "Compliance paperwork.",
        "Staff admin.",
        "Missed enquiries.",
      ],
    },
    benefits: {
      title: "Our automation reduces:",
      items: [
        "Admin workload",
        "Response times",
        "Human error",
        "Compliance risk",
      ],
      footer: "Built by operators who understand what delays actually cost.",
    },
    primaryCTA: "Automate My Business",
  },

  "ai-virtual-assistants": {
    serviceName: "AI Virtual Assistants & Intelligent Agents",
    badge: "AI Virtual Assistants & Intelligent Agents",
    tagline: (
      <>
        24/7 Digital Staff That{" "}
        <span className="text-primary">Work Without Burnout</span>
      </>
    ),
    description:
      "Healthcare businesses, clinics, and agencies lose revenue simply because nobody responds fast enough.",
    heroImage: AIVirtual,
    features: [
      {
        icon: "question_answer",
        title: "Answer FAQs instantly",
        description:
          "Deliver accurate, real-time responses to common questions around the clock without human intervention.",
      },
      {
        icon: "fact_check",
        title: "Pre-qualify patients or job candidates",
        description:
          "Automatically assess eligibility, capture key information, and filter applicants before passing them to your team.",
      },
      {
        icon: "folder_open",
        title: "Collect required documents",
        description:
          "Securely request and store forms, certifications, and supporting documents in one streamlined workflow.",
      },
      {
        icon: "priority_high",
        title: "Route urgent cases correctly",
        description:
          "Identify high-priority enquiries and instantly direct them to the appropriate department or staff member.",
      },
      {
        icon: "support_agent",
        title: "Support internal staff queries",
        description:
          "Provide employees with quick answers, policy guidance, and process support through an AI assistant.",
      },
    ],
    deployment: {
      title: "We deploy assistants across:",
      channels: [
        "Website chat",
        "WhatsApp",
        "Email",
        "Social media messaging",
        "Internal operations",
      ],
    },
    additionalNote:
      "Designed with responsible AI principles and human handover controls. This is not hype AI. It's structured, controlled automation built for real businesses.",
    primaryCTA: "Deploy an AI Assistant",
  },

  "seo-content-social": {
    serviceName: "SEO & Content Systems",
    badge: "SEO & Content Systems",
    tagline: (
      <>
        Visibility That{" "}
        <span className="text-primary">Compounds Over Time</span>
      </>
    ),
    description:
      "Most SEO agencies chase keywords. We build authority systems. Using AI-enhanced keyword intelligence and structured content strategies.",
    heroImage: SEO,
    features: [
      {
        icon: "insights",
        title: "Identify high-value search opportunities",
        description:
          "Uncover high-intent keywords and untapped search gaps that attract qualified traffic ready to convert.",
      },
      {
        icon: "web_asset",
        title: "Build conversion-focused landing pages",
        description:
          "Design and optimise landing pages that rank well and guide visitors toward clear, measurable actions.",
      },
      {
        icon: "verified",
        title: "Develop trust-building content",
        description:
          "Create authoritative, value-driven content that strengthens credibility and nurtures long-term trust.",
      },
      {
        icon: "bolt",
        title: "Optimise technical performance",
        description:
          "Improve site speed, mobile responsiveness, and core technical SEO to maximise search visibility.",
      },
      {
        icon: "monitoring",
        title: "Track ranking and engagement impact",
        description:
          "Monitor keyword rankings, user behaviour, and conversion metrics to continuously refine performance.",
      },
    ],
    forWhom: [
      {
        title: "For UK healthcare providers:",
        points: [
          "Local visibility",
          "Trust signals",
          "Authority positioning",
          "Reputation strength",
        ],
      },
      {
        title: "For other sectors:",
        points: [
          "Sustainable inbound traffic",
          "Lower ad dependency",
          "Long-term brand equity",
        ],
      },
    ],
    primaryCTA: "Grow My Online Presence",
  },

  "websites-custom-software": {
    serviceName: "Web & Custom Software",
    badge: "Web & Custom Software",
    tagline: (
      <>
        Built to Scale -{" "}
        <span className="text-primary">Engineered for Performance</span>
      </>
    ),
    description:
      "Your website is not just a brochure. It is your conversion engine.",
    heroImage: WebCustomSoftware,
    features: [
      {
        icon: "public",
        title: "High-performance business websites",
        description:
          "Optimised, responsive websites built for speed, SEO, and high conversion performance.",
      },
      {
        icon: "vpn_key",
        title: "Secure client portals",
        description:
          "Encrypted, access-controlled portals where clients can securely manage documents and communications.",
      },
      {
        icon: "insights",
        title: "Staff dashboards",
        description:
          "Custom internal dashboards providing real-time data, reporting, and operational oversight.",
      },
      {
        icon: "integration_instructions",
        title: "Custom software tools",
        description:
          "Tailor-made applications designed to automate and enhance your specific business workflows.",
      },
      {
        icon: "cloud",
        title: "SaaS architecture support",
        description:
          "Scalable cloud-based systems with user authentication, subscription billing, and performance optimisation.",
      },
      {
        icon: "storefront",
        title: "Marketplace systems",
        description:
          "Multi-vendor platforms with product listings, payment processing, and user management capabilities.",
      },
    ],
    builtWith: {
      title: "All built with:",
      items: [
        "Scalable backend architecture",
        "Secure authentication",
        "Role-based access controls",
        "Automation integrations",
        "API connectivity",
      ],
      footer:
        "For healthcare clients, security and compliance awareness is embedded from the start.",
    },
    pricingPackages: [
      {
        title: "Business Websites",
        price: "£950",
        features: [
          "Conversion-focused design",
          "CMS setup",
          "Performance optimisation",
          "Analytics & tracking",
        ],
      },
      {
        title: "Client Portals & Dashboards",
        price: "£2,500",
        features: [
          "Secure login & user roles",
          "Data dashboards",
          "CRM or system integrations",
          "Access & permission controls",
        ],
      },
      {
        title: "Custom Software & Integrations",
        price: "£4,500",
        features: [
          "Bespoke functionality",
          "API integrations",
          "Workflow automation",
          "Scalability & security planning",
        ],
        highlighted: true,
      },
      {
        title: "SaaS & Marketplace Support",
        price: "£7,500+",
        description: "Project-based or retainer.",
        features: [
          "Platform architecture",
          "Feature development",
          "Optimisation & scaling",
          "Ongoing technical support",
        ],
      },
    ],
    pricingNote:
      "We do not offer 'one-size-fits-all' development. Final pricing is confirmed after a technical discovery session.",
    primaryCTA: "Request a Technical Discovery Call",
    secondaryCTA: "Get a Project Cost Estimate",
  },

  "responsible-ai-compliance": {
    serviceName: "Responsible AI & Compliance",
    badge: "Responsible AI & Compliance",
    tagline: (
      <>
        AI Done Properly – <span className="text-primary">Not Recklessly</span>
      </>
    ),
    description: (
      <>
        2026 UK businesses face:
        <li>Data sensitivity.</li>
        <li>Compliance pressure.</li>
        <li>AI misuse risks.</li>
        <li>Reputational damage concerns.</li>
        <br />
        We help organisations adopt AI responsibly.
      </>
    ),
    heroImage: ResponsibleAI,
    features: [
      {
        icon: "architecture",
        title: "AI usage frameworks",
        description:
          "Structured governance models that define responsible AI implementation, risk boundaries, and accountability.",
      },
      {
        icon: "shield",
        title: "Data handling best practice guidance",
        description:
          "Establish secure data collection, storage, and processing standards aligned with compliance requirements.",
      },
      {
        icon: "privacy_tip",
        title: "Consent-aware automation",
        description:
          "Design workflows that automatically respect user consent, opt-ins, and privacy regulations.",
      },
      {
        icon: "manage_accounts",
        title: "Role-based system controls",
        description:
          "Implement tiered access permissions to ensure users only access what their role requires.",
      },
      {
        icon: "gavel",
        title: "Human override safeguards",
        description:
          "Embed escalation paths and manual review checkpoints for critical or sensitive decisions.",
      },
    ],
    additionalNote:
      "We are not just technologists. We understand operational and regulatory realities.",
    primaryCTA: "Discuss Compliance & AI",
  },

  "care-agency-recruitment": {
    serviceName: "Care Agency Recruitment & Compliance Automation System",
    badge: "Care Agency Recruitment & Compliance Automation System",
    tagline: (
      <>
        Stop Losing Time <span className="text-primary">Chasing Documents</span>{" "}
        and Delaying Onboarding
      </>
    ),
    description: (
      <>
        Reduce compliance admin.
        <br />
        Automate recruitment workflows.
        <br />
        Build a predictable pipeline of fully compliant staff.
        <br />
        <br />
        Built specifically for UK domiciliary care and supported living
        providers.
      </>
    ),
    heroImage: CareAgency,
    theProblem: {
      title: "If you run a care agency in 2026, you already know:",
      issues: [
        "Applications come from Indeed, CV Library, Facebook, Google, word of mouth",
        "Documents are missing",
        "Staff take weeks to become fully compliant",
        "Managers spend hours chasing paperwork",
        "Service users become available but staff are not ready",
        "Or staff are ready and demand slows",
      ],
      conclusion:
        "This is not a recruitment problem. It is a workflow problem.",
    },
    systemOverview: {
      title: "The Care Agency Automation System",
      description:
        "We install a structured, automated recruitment and compliance system in your business within 14 days.",
      benefits: [
        "No more fragmented intake.",
        "No more manual chasing chaos.",
        "No more guessing who is compliant.",
      ],
    },
    features: [
      {
        icon: "input",
        title: "Centralised Applicant Intake",
        description: "All applications from:",
        details: [
          "Indeed",
          "CV Library",
          "Facebook",
          "Website",
          "Word of mouth",
        ],
        shortDescription: "Flow into one structured pipeline.",
      },
      {
        icon: "verified_user",
        title: "Automated Compliance Workflow",
        shortDescription: (
          <>
            Managers see exactly who is:
            <div className="pl-6">
              <li>Ready</li>
              <li>Missing documents</li>
              <li>Awaiting training</li>
              <li>Fully compliant</li>
            </div>
          </>
        ),
        details: [
          "Document upload links",
          "Automated reminders",
          "Stage tracking",
          "Role-based onboarding (Care Worker vs Senior)",
          "Compliance status dashboard",
        ],
      },
      {
        icon: "speed",
        title: "Faster Onboarding",
        description: (
          <>
            Reduce onboarding cycle time by up to 30–40 percent. <br />
            <br />
            Automated reminders mean: <br />
            Less chasing <br />
            Less admin <br />
            Less delay
          </>
        ),
        details: [],
      },
      {
        icon: "dashboard",
        title: "Staff Readiness Dashboard",
        description: "See your workforce pipeline clearly.",
        details: [
          "In application",
          "In compliance",
          "Ready to deploy",
          "Expiring documents",
        ],
        shortDescription: "No more spreadsheet confusion.",
      },
    ],
    whyDifferent: {
      title: "Why We Are Different",
      intro: "We are not generic software sellers. We understand:",
      points: [
        "CQC expectations",
        "Compliance risk",
        "Care recruitment pressure",
        "Operational gaps between service user demand and staff availability",
      ],
      conclusion:
        "This system was built by operators who understand the care sector — not marketers.",
    },
    results: {
      title: "Results You Can Expect",
      subtitle: "Within 90 days most agencies experience:",
      metrics: [
        "30–50 percent reduction in document chasing",
        "Faster compliance completion",
        "Improved recruitment visibility",
        "Reduced admin overload",
        "Better alignment between staff availability and service user demand",
      ],
    },
    pricingPackages: [
      {
        title: "Growth Commitment",
        price: "£490",
        priceUnit: "per month",
        features: [
          "12-month agreement",
          "No setup fee",
          "Best for agencies serious about long-term operational stability",
        ],
        highlighted: true,
      },
      {
        title: "Flexible Start",
        price: "£490",
        priceUnit: "per month",
        features: [
          "Cancel anytime",
          "£990 setup fee",
          "Ideal if you prefer flexibility",
        ],
      },
    ],
    pricingNote: "No hidden fees. No complicated licensing.",
    whoIsThisFor: {
      title: "Who This Is For",
      subtitle: "This system is ideal for:",
      points: [
        "Domiciliary care agencies",
        "Supported living providers",
        "Agencies onboarding 5+ carers per month",
        "Providers overwhelmed with compliance admin",
      ],
    },
    primaryCTA: "Book My Free Workflow Review",
    secondaryCTA: null,
    finalCTAMessage: (
      <>
        Ready to reduce onboarding delays and compliance pressure? <br />
        Book a free 15-minute workflow review. <br />
        We will assess your current process and show you exactly where
        automation will save time.
      </>
    ),
  },
};

export default servicesData;
