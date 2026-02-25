import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import Button from "../components/Button";
import ServiceCard from "../components/ServiceCard";
import FeaturePoint from "../components/FeaturePoint";
import ProcessStep from "../components/ProcessStep";
import IndustryIcon from "../components/IndustryIcon";
import SectionHeader from "../components/SectionHeader";
import IndustriesWeServe from "../../public/Industries We Serve.jpg";

const heroImages = [
  "../../public/AI Lead Generation & Growth Marketing.jpg",
  "../../public/AI Automation & CRM Systems.jpg",
  "../../public/AI Virtual Assistants & Intelligent Agents.jpg",
  "../../public/Care Agency Recruitment & Compliance Automation System.jpg",
  "../../public/Responsible AI & Compliance.jpg",
  "../../public/SEO & Content Systems.jpg",
  "../../public/Web & Custom Software.jpg",
];

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [serviceSlide, setServiceSlide] = useState(0);

  const services = [
    {
      slug: "ai-lead-generation",
      icon: "rocket_launch",
      iconColor: "text-primary",
      title: "AI Lead Generation",
      description:
        "Hyper-personalized outreach sequences that convert prospects at 3x the industry average.",
      features: ["LinkedIn Automation", "AI Email Warmup"],
      featureIconColor: "text-primary",
    },
    {
      slug: "ai-automation",
      icon: "storage",
      iconColor: "text-accent-indigo",
      title: "Intelligent CRM",
      description:
        "Centralize your customer data with smart tagging and predictive lead scoring systems.",
      features: ["Hubspot/Salesforce Sync", "Pipeline Prediction"],
      featureIconColor: "text-accent-indigo",
    },
    {
      slug: "ai-virtual-assistants",
      icon: "smart_toy",
      iconColor: "text-accent-emerald",
      title: "AI Virtual Assistants",
      description:
        "Custom-trained LLM agents that handle customer support and sales bookings 24/7.",
      features: ["Voice AI Calling", "24/7 Web Chat"],
      featureIconColor: "text-accent-emerald",
    },
    {
      slug: "seo-content-social",
      icon: "search",
      iconColor: "text-amber-500",
      title: "Next-Gen SEO",
      description:
        "AI-optimized content strategies that dominate search engines for 2026's search behavior.",
      features: ["Semantic Optimization", "Authority Building"],
      featureIconColor: "text-amber-500",
    },
    {
      slug: "websites-custom-software",
      icon: "code",
      iconColor: "text-rose-500",
      title: "Web & Custom Software",
      description:
        "Bespoke digital tools built to solve your unique operational bottlenecks.",
      features: ["SaaS Development", "API Integrations"],
      featureIconColor: "text-rose-500",
    },
    {
      slug: "responsible-ai-compliance",
      icon: "security",
      iconColor: "text-slate-500",
      title: "Responsible AI",
      description:
        "Protect your business with ethical AI frameworks and data privacy safeguards.",
      features: ["Risk Assessment", "Governance Tools"],
      featureIconColor: "text-slate-500",
    },
    {
      slug: "care-agency-recruitment",
      icon: "verified_user",
      iconColor: "text-sky-500",
      title: "Care Agency Recruitment",
      description:
        "Automated compliance and recruitment workflows that reduce onboarding time by 40%.",
      features: ["Document Collection", "Compliance Tracking"],
      featureIconColor: "text-sky-500",
    },
  ];

  // Group services into rows of 3 for desktop
  const getVisibleServices = () => {
    const startIndex = serviceSlide * 3;
    return services.slice(startIndex, startIndex + 3);
  };

  const totalSlides = Math.ceil(services.length / 3);

  const nextServiceSlide = () => {
    setServiceSlide((prev) => (prev + 1) % totalSlides);
  };

  const prevServiceSlide = () => {
    setServiceSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  const whyChooseUs = [
    {
      icon: "psychology",
      iconColor: "text-accent-emerald",
      iconBg: "bg-accent-emerald/10",
      title: "AI-first Approach",
      description: "Not outdated agency methods.",
    },
    {
      icon: "auto_awesome",
      iconColor: "text-primary",
      iconBg: "bg-primary/10",
      title: "Smart Automation",
      description: "That reduces staff workload.",
    },
    {
      icon: "verified",
      iconColor: "text-emerald-500",
      iconBg: "bg-accent-indigo/10",
      title: "Responsible AI",
      description: "Ethical & responsible AI usage",
    },
    {
      icon: "shield",
      iconColor: "text-amber-500",
      iconBg: "bg-amber-500/10",
      title: "Compliance",
      description: "Aware digital systems.",
    },
    {
      icon: "engineering",
      iconColor: "text-rose-500",
      iconBg: "bg-rose-500/10",
      title: "Built by operators",
      description: "NOT “marketing influencers”",
    },
  ];

  const processSteps = [
    {
      number: 1,
      title: "Attract",
      description: "SMM, SEO, ads, content & visibility.",
      isActive: true,
    },
    {
      number: 2,
      title: "Engage",
      description: "AI chat, virtual assistants, lead capture.",
      isActive: true,
    },
    {
      number: 3,
      title: "Qualify",
      description: "AI agents score & route leads.",
      isActive: false,
    },
    {
      number: 4,
      title: "Convert",
      description: "CRM, bookings, follow-ups.",
      isActive: false,
    },
    {
      number: 5,
      title: "Optimise",
      description: "Data, reporting & continuous improvement.",
      isActive: false,
    },
  ];

  const slides = [
    "Amica Digital Services helps ambitious businesses grow using AI-driven marketing systems, intelligent automation, and next-generation digital infrastructure.",
    "We don't just market your business — we install scalable growth engines powered by AI.",
    "Built for service businesses, healthcare, medical tourism, and regulated industries.",
  ];

  useEffect(() => {
    let interval;
    if (!isHovered) {
      interval = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
      }, 3000);
    }
    return () => clearInterval(interval);
  }, [isHovered, slides.length]);

  const industries = [
    { icon: "health_and_safety", label: "Healthcare & Care Services" },
    { icon: "flight_takeoff", label: "Medical Tourism" },
    { icon: "gavel", label: "Law Firms" },
    { icon: "business_center", label: "Professional Services" },
    { icon: "spa", label: "Clinics & Wellness" },
    { icon: "computer", label: "SaaS & Marketplaces" },
  ];

  const visibleServices = getVisibleServices();

  return (
    <div className="bg-background-light dark:bg-background-dark">
      <Navigation variant="glass" />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-20 overflow-hidden dark:bg-background-dark hero-gradient pb-10">
        <div className="absolute inset-0 z-0">
          {heroImages.map((img, index) => (
            <img
              key={index}
              src={img}
              alt={`Hero ${index + 1}`}
              className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out ${
                index === currentSlide ? "opacity-100" : "opacity-0"
              }`}
            />
          ))}
          <div className="absolute inset-0 bg-black/30"></div>
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10 grid lg:grid-cols-2 gap-12 items-center">
          <div className="bg-slate-300/80 dark:bg-slate-900/40 backdrop-blur-sm rounded-3xl p-5  space-y-8">
            <div className="inline-flex items-center space-x-2 bg-primary/10 border border-primary/20 px-4 py-2 rounded-full">
              <span className="flex h-2 w-2 rounded-full bg-primary animate-pulse"></span>
              <span className="text-xs font-bold uppercase tracking-widest text-primary">
                Intelligent Growth Engine
              </span>
            </div>

            <h1 className="text-5xl lg:text-7xl font-extrabold leading-[1.1] text-slate-900 dark:text-white">
              AI-Powered Digital Growth for{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent-indigo">
                2026 Businesses
              </span>
            </h1>

            <h2 className="text-2xl lg:text-3xl font-semibold text-slate-700 dark:text-slate-300 mb-8  inline-block pb-2">
              Marketing. Automation. Intelligence. Results.
            </h2>

            <div
              className="relative h-20 flex overflow-hidden"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              {slides.map((slide, index) => (
                <p
                  key={index}
                  className={`
                absolute text-xl text-slate-600 dark:text-slate-400 max-w-xl mx-auto
                transition-all duration-700 ease-in-out transform
                ${
                  index === currentSlide
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-8"
                }
              `}
                >
                  {slide}
                </p>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/contact-us">
                <Button size="lg" variant="primary">
                  Book a Free AI Growth Consultation
                </Button>
              </Link>
              <a href="#services">
                <Button size="lg" variant="secondary">
                  Explore Our Services
                </Button>
              </a>
            </div>
          </div>

          <div className="relative hidden"></div>
        </div>
      </section>

      {/* Why Amica Section */}
      <section className="py-24 bg-white dark:bg-slate-950/50">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeader
            title="Why Amica Digital Services?"
            description="We don't just follow trends; we engineer the future of digital presence using proprietary AI models and battle-tested workflows."
            className="mb-16"
          />

          <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-6">
            {whyChooseUs.map((point, index) => (
              <FeaturePoint key={index} {...point} />
            ))}
          </div>
        </div>
      </section>

      {/* Core Capabilities with Slider */}
      <section
        className="py-24 bg-background-light dark:bg-background-dark"
        id="services"
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <SectionHeader
              align="left"
              title="Core Capabilities"
              description="Our suite of intelligent services designed to automate every touchpoint of your customer journey."
            />
            <div className="flex items-center gap-4">
              {/* Slide Indicators */}
              <div className="flex items-center gap-2">
                {Array.from({ length: totalSlides }).map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setServiceSlide(index)}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      index === serviceSlide
                        ? "w-6 bg-primary"
                        : "bg-slate-300 dark:bg-slate-600 hover:bg-primary/50"
                    }`}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>

              {/* Navigation Buttons */}
              <div className="flex space-x-2">
                <button
                  onClick={prevServiceSlide}
                  className="w-12 h-12 rounded-full border border-slate-200 dark:border-white/10 flex items-center justify-center hover:bg-primary hover:text-white transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                  disabled={totalSlides <= 1}
                  aria-label="Previous services"
                >
                  <span className="material-icons">chevron_left</span>
                </button>
                <button
                  onClick={nextServiceSlide}
                  className="w-12 h-12 rounded-full border border-slate-200 dark:border-white/10 flex items-center justify-center hover:bg-primary hover:text-white transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                  disabled={totalSlides <= 1}
                  aria-label="Next services"
                >
                  <span className="material-icons">chevron_right</span>
                </button>
              </div>
            </div>
          </div>

          {/* Services Grid with Animation */}
          <div className="relative overflow-hidden">
            <div
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 transition-all duration-500 ease-in-out"
              key={serviceSlide} // This forces re-render with animation
            >
              {visibleServices.map((service, index) => (
                <div
                  key={service.slug}
                  className="animate-fadeIn"
                  style={{
                    animationDelay: `${index * 100}ms`,
                  }}
                >
                  <ServiceCard {...service} slug={service.slug} />
                </div>
              ))}
            </div>
          </div>

          {/* Mobile View - Show all services stacked */}
          <div className="lg:hidden grid md:grid-cols-2 gap-8 mt-8">
            {services.map((service, index) => (
              <ServiceCard key={index} {...service} slug={service.slug} />
            ))}
          </div>
        </div>

        <div className="mt-12 w-full flex justify-center">
          <Link to="/services">
            <Button variant="ghost" icon="arrow_forward">
              See All Services
            </Button>
          </Link>
        </div>
      </section>

      {/* How We Work */}
      <section
        className="py-24 bg-slate-950 text-white relative overflow-hidden"
        id="process"
      >
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(#137fec_1px,transparent_1px)] [background-size:40px_40px]"></div>
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <SectionHeader
            title="How We Work"
            titleClass="text-white"
            description="A systematic, 5-step engine designed for rapid deployment and sustainable scale."
            className="mb-20 text-white"
          />

          <div className="relative">
            <div className="hidden lg:block absolute top-12 left-0 w-full h-0.5 bg-slate-800">
              <div className="absolute top-0 left-0 h-full w-1/2 bg-gradient-to-r from-primary to-accent-indigo shadow-[0_0_15px_rgba(19,127,236,0.8)]"></div>
            </div>

            <div className="grid lg:grid-cols-5 gap-12 lg:gap-8">
              {processSteps.map((step, index) => (
                <ProcessStep key={index} {...step} />
              ))}
            </div>
            <div className="mt-12 w-full flex justify-center">
              <Link to="/contact-us">
                <Button variant="primary" icon="arrow_forward">
                  Start Your 30-Day Launch
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Industry Focus */}
      <section
        className="py-24 bg-white dark:bg-background-dark"
        id="industries"
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-extrabold text-slate-900 dark:text-white mb-6">
                Industries We Serve
              </h2>
              <p className="text-slate-500 mb-10 text-lg">
                We build industry-specific AI brains that understand the
                nuances, jargon, and pain points of your unique market.
              </p>

              <div className="grid grid-cols-2 gap-y-6">
                {industries.map((industry, index) => (
                  <IndustryIcon key={index} {...industry} />
                ))}
              </div>

              <div className="mt-12">
                <Link to="/contact-us">
                  <Button variant="ghost" icon="arrow_forward">
                    Talk to an AI Growth Expert
                  </Button>
                </Link>
              </div>
            </div>

            <div className="relative">
              <div className="bg-gradient-to-br from-slate-100 to-slate-200 dark:from-slate-800 dark:to-slate-900 rounded-3xl p-4 overflow-hidden shadow-inner">
                <img
                  src={IndustriesWeServe}
                  alt="Industries We Serve"
                  className="w-full h-96 object-cover rounded-2xl"
                />
              </div>
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-primary/20 rounded-full blur-3xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="bg-primary rounded-3xl p-12 lg:p-20 text-center relative overflow-hidden">
            <div className="absolute inset-0 opacity-10">
              <svg
                className="w-full h-full"
                preserveAspectRatio="none"
                viewBox="0 0 100 100"
              >
                <path d="M0 100 C 20 0 50 0 100 100 Z" fill="white"></path>
              </svg>
            </div>

            <div className="relative z-10">
              <h2 className="text-4xl lg:text-6xl font-extrabold text-white mb-8">
                Ready to future-proof your
                <br />
                digital growth?
              </h2>
              <p className="text-white/80 text-xl max-w-2xl mx-auto mb-12">
                Stop paying for disconnected services.
                <br />
                Start building an AI-powered growth system.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                <Link to="/contact-us">
                  <Button
                    size="xl"
                    variant="secondary"
                    className="bg-white text-primary hover:bg-slate-100"
                  >
                    Book Your Free Strategy Call
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />

      {/* Add animation styles */}
      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.5s ease-out forwards;
        }
      `}</style>
    </div>
  );
};

export default Home;
