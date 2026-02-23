import React, { useState, useRef, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

const Navigation = ({ variant = "default", isDark = false }) => {
  const [isServicesDropdownOpen, setIsServicesDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);
  const dropdownRef = useRef(null);
  const timeoutRef = useRef(null);
  const location = useLocation();

  const navLinks = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    {
      label: "Services",
      href: "/services",
      hasDropdown: true,
    },
    { label: "Pricing", href: "/pricing" },
    { label: "Case Study", href: "/rsm-case-study" },
    { label: "Contact Us", href: "/contact-us" },
  ];

  // Services dropdown items
  const serviceLinks = [
    {
      slug: "ai-lead-generation",
      icon: "trending_up",
      label: "AI Lead Generation",
      description: "Hyper-personalized outreach & growth marketing",
    },
    {
      slug: "ai-automation",
      icon: "settings_suggest",
      label: "AI Automation & CRM",
      description: "Intelligent workflows & system integration",
    },
    {
      slug: "ai-virtual-assistants",
      icon: "smart_toy",
      label: "AI Virtual Assistants",
      description: "24/7 intelligent digital staff",
    },
    {
      slug: "seo-content-social",
      icon: "search",
      label: "SEO & Content Systems",
      description: "Visibility that compounds",
    },
    {
      slug: "websites-custom-software",
      icon: "code",
      label: "Web & Custom Software",
      description: "Built to scale. Engineered for performance",
    },
    {
      slug: "responsible-ai-compliance",
      icon: "security",
      label: "Responsible AI & Compliance",
      description: "AI done right",
    },
    {
      slug: "care-agency-recruitment",
      icon: "verified_user",
      label: "Care Agency Recruitment & Compliance Automation System",
      description: "Stop chasing documents and start onboarding faster",
    },
  ];

  // Handle mouse enter with delay (desktop only)
  const handleMouseEnter = () => {
    if (window.innerWidth >= 1024) {
      // Only for desktop
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
      setIsServicesDropdownOpen(true);
    }
  };

  // Handle mouse leave with delay (desktop only)
  const handleMouseLeave = () => {
    if (window.innerWidth >= 1024) {
      // Only for desktop
      timeoutRef.current = setTimeout(() => {
        setIsServicesDropdownOpen(false);
      }, 200);
    }
  };

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMobileMenuOpen(false);
    setIsMobileServicesOpen(false);
  }, [location]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMobileMenuOpen]);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsServicesDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  // Handle window resize
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIsMobileMenuOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const getNavClass = () => {
    if (variant === "glass") {
      return "fixed top-0 w-full z-50 glass-nav";
    }
    return "sticky top-0 z-50 bg-background-dark/80 backdrop-blur-md border-b border-primary/10";
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    if (!isMobileMenuOpen) {
      setIsMobileServicesOpen(false);
    }
  };

  return (
    <>
      <nav className={getNavClass()}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 h-20 flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
              <span className="material-icons text-white">bolt</span>
            </div>
            <span className="text-2xl font-extrabold tracking-tight text-white dark:text-white uppercase">
              Amica
            </span>
          </Link>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center space-x-8 text-sm font-semibold">
            {navLinks.map((link) => (
              <div key={link.href} className="relative">
                {link.hasDropdown ? (
                  <div
                    ref={dropdownRef}
                    className="relative"
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                  >
                    <Link
                      to={link.href}
                      className="hover:text-primary transition-colors text-white dark:text-slate-300 flex items-center gap-1"
                    >
                      {link.label}
                      <span className="material-icons text-sm">
                        {isServicesDropdownOpen ? "expand_less" : "expand_more"}
                      </span>
                    </Link>

                    {/* Desktop Dropdown Menu */}
                    {isServicesDropdownOpen && (
                      <div
                        className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-80 bg-white dark:bg-slate-900 rounded-xl shadow-2xl border border-slate-200 dark:border-slate-800 overflow-hidden"
                        onMouseEnter={handleMouseEnter}
                        onMouseLeave={handleMouseLeave}
                      >
                        {/* Dropdown Header */}
                        <div className="p-4 bg-primary/5 border-b border-slate-200 dark:border-slate-800">
                          <Link
                            to="/services"
                            className="flex items-center justify-between group"
                            onClick={() => setIsServicesDropdownOpen(false)}
                          >
                            <span className="font-bold text-slate-900 dark:text-white">
                              All Services
                            </span>
                            <span className="material-icons text-primary text-sm group-hover:translate-x-1 transition-transform">
                              arrow_forward
                            </span>
                          </Link>
                        </div>

                        {/* Service Links */}
                        <div className="max-h-96 overflow-y-auto">
                          {serviceLinks.map((service) => (
                            <Link
                              key={service.slug}
                              to={`/services/${service.slug}`}
                              className="block px-4 py-3 hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors border-b border-slate-100 dark:border-slate-800 last:border-0"
                              onClick={() => setIsServicesDropdownOpen(false)}
                            >
                              <div className="flex items-start gap-3">
                                <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                                  <span className="material-icons text-primary text-sm">
                                    {service.icon}
                                  </span>
                                </div>
                                <div>
                                  <div className="font-bold text-slate-900 dark:text-white text-sm mb-0.5">
                                    {service.label}
                                  </div>
                                  <div className="text-xs text-slate-500 dark:text-slate-400">
                                    {service.description}
                                  </div>
                                </div>
                              </div>
                            </Link>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    to={link.href}
                    className="hover:text-primary transition-colors text-white dark:text-slate-300"
                  >
                    {link.label}
                  </Link>
                )}
              </div>
            ))}
          </div>

          {/* Desktop CTA Button */}
          <Link to="/contact-us" className="hidden lg:block">
            <button className="bg-primary hover:bg-primary/90 text-white px-6 py-2.5 rounded-lg font-bold text-sm transition-all shadow-lg shadow-primary/25">
              Book AI Growth Consultation
            </button>
          </Link>

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={toggleMobileMenu}
            className="lg:hidden relative w-10 h-10 flex items-center justify-center rounded-lg bg-primary/10 hover:bg-primary/20 transition-colors"
            aria-label="Toggle menu"
          >
            <div className="relative w-6 h-5">
              <span
                className={`absolute left-0 w-6 h-0.5 bg-white transition-all duration-300 ${
                  isMobileMenuOpen ? "top-2 rotate-45" : "top-0"
                }`}
              ></span>
              <span
                className={`absolute left-0 w-6 h-0.5 bg-white transition-all duration-300 ${
                  isMobileMenuOpen ? "opacity-0" : "top-2"
                }`}
              ></span>
              <span
                className={`absolute left-0 w-6 h-0.5 bg-white transition-all duration-300 ${
                  isMobileMenuOpen ? "top-2 -rotate-45" : "top-4"
                }`}
              ></span>
            </div>
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay - Full Screen */}
      <div
        className={`fixed inset-0 z-40 lg:hidden transition-all duration-300 ${
          isMobileMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      >
        {/* Backdrop */}
        <div
          className={`absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity duration-300 ${
            isMobileMenuOpen ? "opacity-100" : "opacity-0"
          }`}
          onClick={toggleMobileMenu}
        ></div>

        {/* Sidebar Menu */}
        <div
          className={`absolute top-0 right-0 h-full w-full sm:w-96 bg-background-dark/95 backdrop-blur-xl shadow-2xl border-l border-primary/10 transition-transform duration-300 ease-out ${
            isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="relative h-full overflow-y-auto">
            {/* Mobile Menu Header */}
            <div className="sticky top-0 bg-background-dark/95 backdrop-blur-xl border-b border-primary/10 p-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                    <span className="material-icons text-white text-sm">
                      bolt
                    </span>
                  </div>
                  <span className="text-xl font-extrabold text-white uppercase">
                    Amica
                  </span>
                </div>
                <button
                  onClick={toggleMobileMenu}
                  className="w-10 h-10 rounded-lg bg-primary/10 hover:bg-primary/20 flex items-center justify-center"
                >
                  <span className="material-icons text-white">close</span>
                </button>
              </div>
            </div>

            {/* Mobile Navigation Links */}
            <div className="p-6 space-y-2">
              {navLinks.map((link) => (
                <div key={link.href}>
                  {link.hasDropdown ? (
                    <div className="mb-2">
                      <button
                        onClick={() =>
                          setIsMobileServicesOpen(!isMobileServicesOpen)
                        }
                        className="w-full flex items-center justify-between px-4 py-3 rounded-lg hover:bg-primary/10 transition-colors"
                      >
                        <span className="font-semibold text-white">
                          {link.label}
                        </span>
                        <span className="material-icons text-white">
                          {isMobileServicesOpen ? "expand_less" : "expand_more"}
                        </span>
                      </button>

                      {/* Mobile Services Submenu */}
                      <div
                        className={`overflow-hidden transition-all duration-300 ${
                          isMobileServicesOpen
                            ? "max-h-[600px] opacity-100"
                            : "max-h-0 opacity-0"
                        }`}
                      >
                        <div className="pl-4 pr-2 py-2 space-y-1">
                          {/* All Services Link */}
                          <Link
                            to="/services"
                            className="block px-4 py-3 rounded-lg bg-primary/5 hover:bg-primary/10 transition-colors"
                            onClick={toggleMobileMenu}
                          >
                            <div className="flex items-center justify-between">
                              <span className="font-bold text-primary">
                                All Services
                              </span>
                              <span className="material-icons text-primary">
                                arrow_forward
                              </span>
                            </div>
                          </Link>

                          {/* Service Links */}
                          {serviceLinks.map((service) => (
                            <Link
                              key={service.slug}
                              to={`/services/${service.slug}`}
                              className="block px-4 py-3 rounded-lg hover:bg-primary/10 transition-colors"
                              onClick={toggleMobileMenu}
                            >
                              <div className="flex items-start gap-3">
                                <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                                  <span className="material-icons text-primary text-sm">
                                    {service.icon}
                                  </span>
                                </div>
                                <div>
                                  <div className="font-bold text-white text-sm mb-0.5">
                                    {service.label}
                                  </div>
                                  <div className="text-xs text-slate-400">
                                    {service.description}
                                  </div>
                                </div>
                              </div>
                            </Link>
                          ))}
                        </div>
                      </div>
                    </div>
                  ) : (
                    <Link
                      to={link.href}
                      className="block px-4 py-3 rounded-lg hover:bg-primary/10 transition-colors font-semibold text-white"
                      onClick={toggleMobileMenu}
                    >
                      {link.label}
                    </Link>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navigation;
