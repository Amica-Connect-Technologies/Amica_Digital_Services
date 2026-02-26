import React from "react";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import Button from "../components/Button";
import SectionHeader from "../components/SectionHeader";
import { Link } from "react-router-dom";
import AILeadGeneration from "../assets/AI Lead Generation & Growth Marketing.jpg";
import AIAutomationCRM from "../assets/AI Automation & CRM Systems.jpg";
import AIVirtual from "../assets/AI Virtual Assistants & Intelligent Agents.jpg";
import CareAgency from "../assets/Care Agency Recruitment & Compliance Automation System.jpg";
import ResponsibleAI from "../assets/Responsible AI & Compliance.jpg";
import SEO from "../assets/SEO & Content Systems.jpg";
import WebCustomSoftware from "../assets/Web & Custom Software.jpg";

const Services = () => {
  const services = [
    {
      slug: "ai-lead-generation",
      icon: "trending_up",
      title: "AI Lead Generation & Growth Marketing",
      description: "Leads that convert — not just traffic.",
      features: [
        "AI-assisted Google & social ads",
        "Conversion-optimised funnels",
        "SEO with AI keyword intelligence",
        "Lead quality scoring & tracking",
        "Multi-channel attribution",
      ],
      image: AILeadGeneration,
      imagePosition: "right",
      cta: "Get More Qualified Leads",
    },
    {
      slug: "ai-automation",
      icon: "settings_suggest",
      title: "AI Automation & CRM Systems",
      description: "Automate the work your team shouldn't be doing.",
      features: [
        "CRM setup (HubSpot, Zoho, custom)",
        "Automated follow-ups (email / WhatsApp*)",
        "Booking & scheduling systems",
        "Pipeline automation & reporting",
        "Internal workflow optimisation",
      ],
      image: AIAutomationCRM,
      imagePosition: "left",
      cta: "Automate My Business",
    },
    {
      slug: "ai-virtual-assistants",
      icon: "smart_toy",
      title: "AI Virtual Assistants & AI Agents",
      description: "24/7 intelligent digital staff.",
      features: [
        "Website AI chat assistants",
        "Lead qualification agents",
        "Customer support automation",
        "Multilingual AI agents (UK / EU / UAE)",
        "Human handover when required",
      ],
      subtitle: "Ethical. Transparent. Controlled.",
      image: AIVirtual,
      imagePosition: "right",
      cta: "Deploy an AI Assistant",
    },
    {
      slug: "seo-content-social",
      icon: "search",
      title: "SEO, Content & Social Media Systems",
      description: "Visibility that compounds.",
      features: [
        "Technical & on-page SEO",
        "AI-assisted content strategy",
        "Social media frameworks",
        "Content repurposing systems",
        "Authority & trust building",
      ],
      image: SEO,
      imagePosition: "left",
      cta: "Grow My Online Presence",
    },
    {
      slug: "care-agency-recruitment",
      icon: "verified_user",
      title: "Care Agency Recruitment & Compliance Automation System",
      description: "Stop chasing documents and start onboarding faster.",
      features: [
        "Centralised applicant intake from all sources",
        "Automated compliance workflow",
        "Document collection & verification",
        "Staff readiness dashboard",
        "CQC-ready compliance tracking",
      ],
      image: CareAgency,
      imagePosition: "right",
      cta: "Book a Free 15-Minute Workflow Review",
      badge: "Care Sector Specialist",
    },
    {
      slug: "responsible-ai-compliance",
      icon: "security",
      title: "Responsible AI & Digital Compliance",
      description: "AI done right.",
      features: [
        "AI usage policies",
        "Consent-aware automation",
        "GDPR & data best-practice guidance",
        "Regulated-industry awareness",
        "Ethical AI frameworks",
      ],
      subtitle: "(Guidance, not legal certification)",
      image: ResponsibleAI,
      imagePosition: "right",
      cta: "Discuss Compliance & AI",
    },
  ];

  const softwarePackages = [
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
  ];

  return (
    <div className="bg-background-light dark:bg-background-dark">
      <Navigation />

      {/* Hero Section */}
      <header className="relative pt-24 pb-20 overflow-hidden mesh-gradient dark:bg-background-dark">
        <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
          <SectionHeader
            badge="Innovative Digital Agency"
            title={
              <>
                Next-Generation Digital <br /> &{" "}
                <span className="text-primary">AI Services</span>
              </>
            }
            description="We provide end-to-end digital growth solutions, enhanced with AI automation, virtual assistants, and intelligent agents."
          />
        </div>
      </header>

      {/* Service Blocks */}
      <main className="py-20 space-y-32">
        {services.map((service, index) => {
          const isEven = index % 2 === 0; //for swapping the side of content and image of the services

          return (
            <section key={index} className="max-w-7xl mx-auto px-6">
              <div className="grid md:grid-cols-2 gap-16 items-center">
                {/* Text Column */}
                <div className={isEven ? "" : "md:order-2"}>
                  <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center mb-6">
                    <span className="material-icons text-primary text-3xl">
                      {service.icon}
                    </span>
                  </div>

                  <h2 className="text-4xl font-extrabold text-slate-900 dark:text-white mb-6">
                    {service.title}
                  </h2>

                  <p className="text-slate-600 dark:text-slate-400 text-lg mb-8 leading-relaxed">
                    {service.description}
                  </p>

                  <ul className="space-y-4 mb-10">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-3">
                        <span className="material-icons text-primary text-sm">
                          check_circle
                        </span>
                        <span className="font-medium">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {service.subtitle && (
                    <h3 className="text-2xl font-semibold text-primary mb-6">
                      {service.subtitle}
                    </h3>
                  )}

                  {service.cta && (
                    <Link to={`/services/${service.slug}`}>
                      <Button variant="primary" size="lg">
                        {service.cta}
                      </Button>
                    </Link>
                  )}
                </div>

                {/* Image Column */}
                <div className={isEven ? "" : "md:order-1"}>
                  <div className="relative">
                    <div className="absolute inset-0 bg-primary/5 rounded-3xl rotate-3 scale-105"></div>
                    <div className="relative rounded-3xl overflow-hidden shadow-2xl w-full h-[400px]">
                      {service.image && (
                        <img
                          src={service.image}
                          alt={service.title}
                          className="w-full h-[400px] object-cover"
                        />
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </section>
          );
        })}

        {/* Websites, Web Portals & Custom Software - CONSOLIDATED SERVICE */}
        <section className="max-w-7xl mx-auto px-6">
          <Link to="/services/websites-custom-software">
            <div className="grid md:grid-cols-2 gap-16 items-start">
              {/* Left Column - Service Description */}
              <div>
                <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center mb-6">
                  <span className="material-icons text-primary text-3xl">
                    language
                  </span>
                </div>
                <h2 className="text-4xl font-extrabold text-slate-900 dark:text-white mb-4">
                  Websites, Web Portals & Custom Software
                </h2>
                <h3 className="text-2xl font-semibold text-slate-800 dark:text-slate-200 mb-6 tracking-tight">
                  Built to scale. Engineered for performance.
                </h3>
                <p className="text-slate-600 dark:text-slate-400 text-lg mb-8 leading-relaxed">
                  Fast, secure, and conversion-focused digital platforms —
                  designed around your business processes, not templates.
                </p>

                <h4 className="text-lg font-bold text-slate-900 dark:text-white mb-4">
                  What We Build
                </h4>
                <ul className="space-y-4 mb-10">
                  <li className="flex items-center gap-3">
                    <span className="material-icons text-primary text-sm">
                      check_circle
                    </span>
                    <span className="font-medium">
                      High-performance business websites
                    </span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="material-icons text-primary text-sm">
                      check_circle
                    </span>
                    <span className="font-medium">
                      Secure client portals & dashboards
                    </span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="material-icons text-primary text-sm">
                      check_circle
                    </span>
                    <span className="font-medium">
                      Custom software & system integrations
                    </span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="material-icons text-primary text-sm">
                      check_circle
                    </span>
                    <span className="font-medium">
                      SaaS & marketplace platforms
                    </span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="material-icons text-primary text-sm">
                      check_circle
                    </span>
                    <span className="font-medium">
                      Role-based access control & security hardening
                    </span>
                  </li>
                </ul>

                {/* Image Placeholder */}
                <div className="relative mb-10">
                  <div className="absolute inset-0 bg-primary/5 rounded-3xl rotate-3 scale-105"></div>
                  <div className="relative rounded-3xl overflow-hidden shadow-2xl w-full h-[300px]">
                    <img
                      src={WebCustomSoftware}
                      alt="Websites, Web Portals & Custom Software"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>

              {/* Right Column - Pricing Guide */}
              <div>
                <div className="bg-slate-50 dark:bg-slate-900/50 rounded-3xl p-8 border border-slate-200 dark:border-slate-800">
                  <div className="text-center mb-8">
                    <div className="inline-flex items-center gap-2 mb-4">
                      <div className="w-8 h-px bg-primary"></div>
                      <span className="text-primary font-bold uppercase tracking-widest text-xs">
                        Pricing Guide
                      </span>
                      <div className="w-8 h-px bg-primary"></div>
                    </div>
                    <h3 className="text-2xl font-extrabold text-slate-900 dark:text-white mb-3">
                      Indicative Investment
                    </h3>
                    <p className="text-slate-600 dark:text-slate-400 text-sm">
                      Every project is different. The figures below are guides
                      only and depend on scope, integrations, and complexity.
                    </p>
                  </div>

                  <div className="space-y-6 mb-8">
                    {softwarePackages.map((pkg, index) => (
                      <div
                        key={index}
                        className={`p-6 rounded-xl border transition-all ${
                          pkg.highlighted
                            ? "bg-white dark:bg-slate-800 border-primary shadow-lg shadow-primary/10"
                            : "bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700 hover:border-primary/50"
                        }`}
                      >
                        {pkg.highlighted && (
                          <div className="inline-block bg-primary text-white px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest mb-3">
                            Most Popular
                          </div>
                        )}
                        <div className="flex items-baseline justify-between mb-3">
                          <h4 className="text-lg font-bold text-slate-900 dark:text-white">
                            {pkg.title}
                          </h4>
                          <div className="text-right">
                            <div className="flex items-baseline gap-1">
                              <span className="text-xs text-slate-400 font-medium">
                                from
                              </span>
                              <span className="text-2xl font-extrabold text-primary">
                                {pkg.price}
                              </span>
                            </div>
                            {pkg.description && (
                              <p className="text-xs text-slate-500 mt-1">
                                {pkg.description}
                              </p>
                            )}
                          </div>
                        </div>
                        <ul className="space-y-2">
                          {pkg.features.map((feature, idx) => (
                            <li
                              key={idx}
                              className="flex items-start gap-2 text-sm text-slate-600 dark:text-slate-400"
                            >
                              <span className="material-icons text-primary text-xs mt-0.5">
                                done
                              </span>
                              <span>{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>

                  {/* Important Note */}
                  <div className="bg-amber-50 dark:bg-amber-900/10 border border-amber-200 dark:border-amber-900/30 rounded-xl p-4 mb-6">
                    <div className="flex items-start gap-3">
                      <span className="material-icons text-amber-600 dark:text-amber-500 text-sm mt-0.5">
                        info
                      </span>
                      <div>
                        <h5 className="font-bold text-amber-900 dark:text-amber-200 text-sm mb-1">
                          Important Note
                        </h5>
                        <p className="text-xs text-amber-800 dark:text-amber-300">
                          We do not offer "one-size-fits-all" development. Final
                          pricing is confirmed after a technical discovery
                          session.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* CTA Buttons */}
                  <div className="space-y-3">
                    <Link to="/contact-us">
                      <Button
                        variant="primary"
                        className="w-full"
                        icon="calendar_today"
                        iconPosition="left"
                      >
                        Request a Technical Discovery Call
                      </Button>
                    </Link>
                    <Link to="/contact-us">
                      <Button
                        variant="outline"
                        className="w-full mt-2"
                        icon="calculate"
                        iconPosition="left"
                      >
                        Get a Project Cost Estimate
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </Link>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Services;
