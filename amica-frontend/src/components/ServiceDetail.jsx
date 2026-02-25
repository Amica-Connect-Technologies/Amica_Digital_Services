import React from "react";
import { useParams, Link, Navigate } from "react-router-dom";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import Button from "../components/Button";
import servicesData from "../helpers/servicesData";

const ServiceDetail = () => {
  const { slug } = useParams();

  // Get the service data based on the URL slug
  const service = servicesData[slug];

  // If service doesn't exist, redirect to services page
  if (!service) {
    return <Navigate to="/services" replace />;
  }

  return (
    <div className="bg-background-light dark:bg-background-dark font-display text-slate-accent dark:text-gray-200">
      <Navigation />

      <main>
        {/* Breadcrumb */}
        <div className="max-w-7xl mx-auto px-6 pt-8">
          <nav className="flex items-center gap-2 text-sm font-medium text-slate-500 dark:text-slate-400">
            <Link
              className="hover:text-primary transition-colors"
              to="/services"
            >
              Services
            </Link>
            <span className="material-icons text-sm">chevron_right</span>
            <span className="text-primary font-semibold">
              {service.serviceName}
            </span>
          </nav>
        </div>

        {/* Hero Background Split */}
        <section className="relative overflow-hidden">
          {/* Background Image */}
          {service.heroImage && (
            <div
              className="absolute inset-0 bg-cover bg-right bg-no-repeat"
              style={{
                backgroundImage: `url(${service.heroImage})`,
              }}
            />
          )}

          {/* Dark Overlay for readability */}
          <div className="absolute inset-0 bg-slate-900/70"></div>

          {/* Content */}
          <div className="relative max-w-7xl mx-auto px-6 py-20 lg:py-32">
            <div className="grid lg:grid-cols-2 items-center">
              {/* LEFT CONTENT */}
              <div className="text-white">
                {service.badge && (
                  <span className="inline-block px-4 py-1.5 bg-white/10 backdrop-blur text-white text-xs font-bold rounded-full mb-6 uppercase tracking-widest">
                    {service.badge}
                  </span>
                )}

                <h1 className="text-5xl lg:text-6xl font-extrabold leading-[1.1] mb-8">
                  {service.tagline}
                </h1>

                <p className="text-lg lg:text-xl text-slate-200 leading-relaxed mb-10 max-w-xl">
                  {service.description}
                </p>

                <div className="flex flex-wrap gap-4">
                  <Link to="/contact-us">
                    <Button variant="primary" size="xl">
                      {service.primaryCTA}
                    </Button>
                  </Link>

                  {service.secondaryCTA && (
                    <Link to="/contact-us">
                      <Button
                        variant="secondary"
                        className="text-primary"
                        size="xl"
                      >
                        {service.secondaryCTA}
                      </Button>
                    </Link>
                  )}
                </div>
              </div>

              {/* RIGHT SIDE EMPTY (for visual balance) */}
              <div className="hidden lg:block"></div>
            </div>
          </div>
        </section>

        {/* The Problem Section (Care Agency specific) */}
        {service.theProblem && (
          <section className="py-16 bg-red-50 dark:bg-red-900/10">
            <div className="max-w-4xl mx-auto px-6">
              <div className="flex items-center gap-3 mb-6">
                <div className="bg-red-100 dark:bg-red-900/30 text-red-600 dark:text-red-400 p-2.5 rounded-xl">
                  <span className="material-icons">warning</span>
                </div>
                <h2 className="text-3xl font-bold text-slate-900 dark:text-white">
                  The Problem
                </h2>
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-6">
                {service.theProblem.title}
              </h3>
              <ul className="space-y-3 mb-6">
                {service.theProblem.issues.map((issue, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="material-icons text-red-500 text-sm mt-1">
                      close
                    </span>
                    <span className="text-slate-700 dark:text-slate-300">
                      {issue}
                    </span>
                  </li>
                ))}
              </ul>
              <p className="text-lg font-bold text-slate-900 dark:text-white italic">
                {service.theProblem.conclusion}
              </p>
            </div>
          </section>
        )}

        {/* System Overview (Care Agency specific) */}
        {service.systemOverview && (
          <section className="py-16 bg-primary/5 dark:bg-primary/10">
            <div className="max-w-4xl mx-auto px-6">
              <div className="flex items-center gap-3 mb-6">
                <div className="bg-primary text-white p-2.5 rounded-xl">
                  <span className="material-icons">lightbulb</span>
                </div>
                <h2 className="text-3xl font-bold text-slate-900 dark:text-white">
                  The Solution
                </h2>
              </div>
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
                {service.systemOverview.title}
              </h3>
              <p className="text-lg text-slate-600 dark:text-slate-400 mb-6">
                {service.systemOverview.description}
              </p>
              <ul className="space-y-3">
                {service.systemOverview.benefits.map((benefit, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <span className="material-icons text-primary text-sm">
                      check_circle
                    </span>
                    <span className="font-semibold text-slate-700 dark:text-slate-300">
                      {benefit}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </section>
        )}

        {/* What We Offer / What Makes Us Different */}
        {service.whatWeOffer && (
          <section className="bg-primary/5 dark:bg-primary/10 py-16">
            <div className="max-w-4xl mx-auto px-6">
              <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">
                {service.whatWeOffer.title}
              </h2>
              <p className="text-lg text-slate-600 dark:text-slate-400 mb-6">
                {service.whatWeOffer.subtitle}
              </p>
              <ul className="grid md:grid-cols-2 gap-4">
                {service.whatWeOffer.items.map((item, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <span className="material-icons text-primary text-sm">
                      check_circle
                    </span>
                    <span className="font-medium text-slate-700 dark:text-slate-300">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </section>
        )}

        {/* Feature Grid */}
        <section className="bg-white dark:bg-background-dark/50 py-24">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white mb-4">
                {service.systemOverview ? "What You Get" : "What We Build"}
              </h2>
              <p className="text-slate-500 dark:text-slate-400 max-w-2xl mx-auto">
                Everything you need to transform your business.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {service.features.map((feature, index) => (
                <div
                  key={index}
                  className="p-8 bg-background-light dark:bg-slate-800/50 rounded-xl border border-primary/5 hover:border-primary/30 transition-all group"
                >
                  <div className="w-14 h-14 bg-white dark:bg-slate-700 rounded-lg flex items-center justify-center mb-6 shadow-sm group-hover:bg-primary transition-colors">
                    <span className="material-icons text-primary group-hover:text-white transition-colors">
                      {feature.icon}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold mb-4 text-slate-900 dark:text-white">
                    {feature.title}
                  </h3>
                  <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-4">
                    {feature.description}
                  </p>

                  {feature.details && feature.details.length > 0 && (
                    <ul className="space-y-2 mt-4 pt-4 border-t border-slate-200 dark:border-slate-700">
                      {feature.details.map((detail, idx) => (
                        <li
                          key={idx}
                          className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400"
                        >
                          <span className="material-icons text-primary text-xs">
                            arrow_forward
                          </span>
                          {detail}
                        </li>
                      ))}
                    </ul>
                  )}

                  {/* Display shortDescription if it exists */}
                  {feature.shortDescription && (
                    <p className="text-slate-600 dark:text-slate-400 font-medium pt-4 mb-4">
                      {feature.shortDescription}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Different (Care Agency specific) */}
        {service.whyDifferent && (
          <section className="py-16 bg-slate-50 dark:bg-slate-900/30">
            <div className="max-w-4xl mx-auto px-6">
              <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">
                {service.whyDifferent.title}
              </h2>
              <p className="text-lg text-slate-600 dark:text-slate-400 mb-6">
                {service.whyDifferent.intro}
              </p>
              <ul className="grid md:grid-cols-2 gap-4 mb-6">
                {service.whyDifferent.points.map((point, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <span className="material-icons text-primary text-sm">
                      check_circle
                    </span>
                    <span className="font-medium text-slate-700 dark:text-slate-300">
                      {point}
                    </span>
                  </li>
                ))}
              </ul>
              <p className="text-lg font-semibold text-slate-900 dark:text-white italic">
                {service.whyDifferent.conclusion}
              </p>
            </div>
          </section>
        )}

        {/* Results (Care Agency specific) */}
        {service.results && (
          <section className="py-16 bg-emerald-50 dark:bg-emerald-900/10">
            <div className="max-w-4xl mx-auto px-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-emerald-100 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400 p-2.5 rounded-xl">
                  <span className="material-icons">trending_up</span>
                </div>
                <h2 className="text-3xl font-bold text-slate-900 dark:text-white">
                  {service.results.title}
                </h2>
              </div>
              <p className="text-lg text-slate-600 dark:text-slate-400 mb-6">
                {service.results.subtitle}
              </p>
              <ul className="space-y-3">
                {service.results.metrics.map((metric, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <span className="material-icons text-emerald-500 text-sm">
                      check_circle
                    </span>
                    <span className="text-slate-700 dark:text-slate-300 font-medium">
                      {metric}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </section>
        )}

        {/* For Whom Section */}
        {service.forWhom && (
          <section className="py-16 bg-slate-50 dark:bg-slate-900/30">
            <div className="max-w-5xl mx-auto px-6">
              <div className="grid md:grid-cols-2 gap-12">
                {service.forWhom.map((segment, index) => (
                  <div key={index}>
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4">
                      {segment.title}
                    </h3>
                    <ul className="space-y-3">
                      {segment.points.map((point, idx) => (
                        <li key={idx} className="flex items-center gap-3">
                          <span className="material-icons text-primary text-sm">
                            arrow_forward
                          </span>
                          <span className="text-slate-700 dark:text-slate-300">
                            {point}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Who Is This For (Care Agency specific) */}
        {service.whoIsThisFor && (
          <section className="py-16 bg-slate-50 dark:bg-slate-900/30">
            <div className="max-w-4xl mx-auto px-6">
              <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">
                {service.whoIsThisFor.title}
              </h2>
              <p className="text-lg text-slate-600 dark:text-slate-400 mb-6">
                {service.whoIsThisFor.subtitle}
              </p>
              <ul className="grid md:grid-cols-2 gap-4">
                {service.whoIsThisFor.points.map((point, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <span className="material-icons text-primary text-sm">
                      check_circle
                    </span>
                    <span className="font-medium text-slate-700 dark:text-slate-300">
                      {point}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </section>
        )}

        {/* Deployment Channels */}
        {service.deployment && (
          <section className="py-16 bg-white dark:bg-slate-900">
            <div className="max-w-4xl mx-auto px-6">
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-6 text-center">
                {service.deployment.title}
              </h3>
              <div className="flex flex-wrap justify-center gap-4">
                {service.deployment.channels.map((channel, index) => (
                  <div
                    key={index}
                    className="px-6 py-3 bg-primary/10 text-primary border border-primary/20 rounded-full font-semibold"
                  >
                    {channel}
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Benefits Section */}
        {service.benefits && (
          <section className="py-16 bg-slate-50 dark:bg-slate-900/30">
            <div className="max-w-4xl mx-auto px-6 text-center">
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
                {service.benefits.title}
              </h3>
              <div className="grid md:grid-cols-4 gap-6 mb-8">
                {service.benefits.items.map((item, index) => (
                  <div
                    key={index}
                    className="p-6 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl"
                  >
                    <span className="material-icons text-primary text-3xl mb-2">
                      trending_down
                    </span>
                    <p className="font-bold text-slate-900 dark:text-white">
                      {item}
                    </p>
                  </div>
                ))}
              </div>
              <p className="text-lg italic text-slate-600 dark:text-slate-400">
                {service.benefits.footer}
              </p>
            </div>
          </section>
        )}

        {/* Built With Section */}
        {service.builtWith && (
          <section className="py-16 bg-primary/5 dark:bg-primary/10">
            <div className="max-w-4xl mx-auto px-6">
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
                {service.builtWith.title}
              </h3>
              <ul className="grid md:grid-cols-2 gap-4 mb-6">
                {service.builtWith.items.map((item, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <span className="material-icons text-primary text-sm">
                      check_circle
                    </span>
                    <span className="font-medium text-slate-700 dark:text-slate-300">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
              <p className="text-sm italic text-slate-600 dark:text-slate-400 mt-6">
                {service.builtWith.footer}
              </p>
            </div>
          </section>
        )}

        {/* Pricing Section */}
        {service.pricingPackages && (
          <section className="py-24 bg-background-light dark:bg-background-dark">
            <div className="max-w-7xl mx-auto px-6">
              <div className="text-center mb-16">
                <div className="inline-flex items-center gap-2 mb-4">
                  <div className="w-8 h-px bg-primary"></div>
                  <span className="text-primary font-bold uppercase tracking-widest text-sm">
                    Pricing
                  </span>
                  <div className="w-8 h-px bg-primary"></div>
                </div>
                <h2 className="text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white mb-4">
                  {service.systemOverview
                    ? "Simple, Transparent Pricing"
                    : "Indicative Investment"}
                </h2>
                {!service.systemOverview && (
                  <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
                    Every project is different. The figures below are guides
                    only and depend on scope, integrations, and complexity.
                  </p>
                )}
              </div>

              <div
                className={`grid ${
                  service.pricingPackages.length === 2
                    ? "md:grid-cols-2 max-w-4xl mx-auto"
                    : "md:grid-cols-2 lg:grid-cols-4"
                } gap-6 mb-12`}
              >
                {service.pricingPackages.map((pkg, index) => (
                  <div
                    key={index}
                    className={`p-8 rounded-2xl flex flex-col group ${
                      pkg.highlighted
                        ? "bg-white dark:bg-slate-800 border-2 border-primary/20 shadow-lg shadow-primary/5 hover:shadow-xl hover:border-primary relative scale-105 z-10"
                        : "bg-white dark:bg-slate-800 border border-slate-100 dark:border-slate-700 shadow-sm hover:shadow-xl hover:border-primary/50"
                    } transition-all`}
                  >
                    {pkg.highlighted && (
                      <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-white px-4 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest">
                        Best Value
                      </div>
                    )}
                    <h3 className="text-xl font-bold mb-2 min-h-16">
                      {pkg.title}
                    </h3>
                    <div className="flex items-baseline gap-1 mb-6">
                      {!pkg.priceUnit && (
                        <span className="text-slate-400 text-sm font-medium">
                          from
                        </span>
                      )}
                      <span className="text-3xl font-extrabold text-slate-900 dark:text-white">
                        {pkg.price}
                      </span>
                      {pkg.priceUnit && (
                        <span className="text-slate-500 text-sm ml-1">
                          {pkg.priceUnit}
                        </span>
                      )}
                    </div>
                    {pkg.description && (
                      <p className="text-slate-500 text-sm mb-6 pb-6 border-b border-slate-100 dark:border-slate-700">
                        {pkg.description}
                      </p>
                    )}
                    <ul className="space-y-4 mb-8 flex-grow">
                      {pkg.features.map((feature, idx) => (
                        <li
                          key={idx}
                          className="flex items-start gap-3 text-sm"
                        >
                          <span className="material-icons text-primary text-xs mt-0.5">
                            done
                          </span>
                          <span
                            className={pkg.highlighted ? "font-semibold" : ""}
                          >
                            {feature}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>

              {service.pricingNote && (
                <div className="bg-amber-50 dark:bg-amber-900/10 border border-amber-200 dark:border-amber-900/30 rounded-xl p-6 max-w-3xl mx-auto mb-12">
                  <div className="flex items-start gap-3">
                    <span className="material-icons text-amber-600 dark:text-amber-500 text-sm mt-0.5">
                      info
                    </span>
                    <div>
                      <h5 className="font-bold text-amber-900 dark:text-amber-200 text-sm mb-1">
                        {service.systemOverview ? "Note" : "Important Note"}
                      </h5>
                      <p className="text-xs text-amber-800 dark:text-amber-300">
                        {service.pricingNote}
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </section>
        )}

        {/* Additional Note */}
        {service.additionalNote && (
          <section className="py-12 bg-slate-50 dark:bg-slate-900/30">
            <div className="max-w-4xl mx-auto px-6">
              <div className="bg-blue-50 dark:bg-blue-900/10 border border-blue-200 dark:border-blue-900/30 rounded-xl p-6">
                <div className="flex items-start gap-3">
                  <span className="material-icons text-blue-600 dark:text-blue-400">
                    info
                  </span>
                  <p className="text-sm text-blue-900 dark:text-blue-200 italic font-semibold">
                    {service.additionalNote}
                  </p>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Final CTA for Care Agency */}
        {service.finalCTAMessage && (
          <section className="py-20 bg-white dark:bg-slate-900">
            <div className="max-w-3xl mx-auto px-6 text-center">
              <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-6">
                Ready to Get Started?
              </h2>
              <p className="text-lg text-slate-600 dark:text-slate-400 mb-8 leading-relaxed">
                {service.finalCTAMessage}
              </p>
              <Link to="/contact-us">
                <Button variant="primary" size="xl">
                  {service.primaryCTA}
                </Button>
              </Link>
            </div>
          </section>
        )}
      </main>

      <Footer />
    </div>
  );
};

export default ServiceDetail;
