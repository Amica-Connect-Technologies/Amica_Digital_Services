import React, { useState } from "react";
import FormInput from "../components/FormInput";
import Button from "../components/Button";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";

const IntakeForm = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const totalSteps = 5;
  const progress = (currentStep / totalSteps) * 100;

  // Form state
  const [formData, setFormData] = useState({
    // Screen 1
    fullName: "",
    companyName: "",
    email: "",
    phone: "",
    country: "",
    website: "",
    role: "",
    decisionMaker: "",
    decisionMakerDetails: "",

    // Screen 2
    goals: [],
    servicesInterested: [],

    // Screen 3
    hasWebsite: "",
    hasDomain: "",
    runsPaidAds: "",
    adSpend: "",
    crm: "",
    crmOther: "",
    enquiryChannels: [],
    responseTime: "",
    biggestIssue: "",

    // Screen 4 - Dynamic based on services
    websiteNeeds: "",
    integrations: [],
    contentReady: "",
    aiLocation: "",
    aiTasks: [],
    aiLanguages: "",
    automationTasks: [],
    communicationChannel: "",

    // Screen 5
    startTimeline: "",
    monthlyBudget: "",
    setupBudget: "",
    regulated: "",
    consentContact: false,
    consentMarketing: false,
  });

  const handleInputChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleNext = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:5000/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (data.success) {
        alert("Your enquiry has been sent successfully!");
      } else {
        alert("Something went wrong. Please try again.");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Server error. Please try again later.");
    }
  };

  // Get dynamic screen title
  const getScreenTitle = () => {
    switch (currentStep) {
      case 1:
        return "Contact & Business Basics";
      case 2:
        return "What Do You Want Help With?";
      case 3:
        return "Current Setup";
      case 4:
        return "Project Scope";
      case 5:
        return "Budget, Timeline & Compliance";
      default:
        return "";
    }
  };

  // Check which services require Screen 4
  const needsWebsiteQuestions =
    formData.servicesInterested.includes("websites");
  const needsAIQuestions = formData.servicesInterested.includes("ai-assistant");
  const needsAutomationQuestions =
    formData.servicesInterested.includes("ai-automation");

  return (
    <div className="bg-background-light dark:bg-background-dark min-h-screen flex flex-col font-display">
      <Navigation />

      <main className="flex-grow flex items-center justify-center py-12 px-6 pt-32">
        <div className="max-w-5xl w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Sidebar/Context Area */}
          <div className="lg:col-span-4 flex flex-col gap-8 order-2 lg:order-1">
            <div className="space-y-4">
              <h1 className="text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white leading-tight">
                Amica Smart Intake
              </h1>
              <p className="text-slate-600 dark:text-slate-400 text-lg leading-relaxed">
                2–3 minutes to help us understand your business and recommend
                the right AI growth system.
              </p>
            </div>

            <div className="p-6 bg-white dark:bg-white/5 rounded-xl border border-primary/10 space-y-4">
              <div className="flex items-start gap-4">
                <div className="p-2 bg-primary/10 rounded-lg">
                  <span className="material-icons text-primary">schedule</span>
                </div>
                <div>
                  <p className="font-semibold text-slate-800 dark:text-slate-200">
                    Quick Process
                  </p>
                  <p className="text-sm text-slate-500 dark:text-slate-400">
                    Takes approximately 2-3 minutes to complete.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="p-2 bg-primary/10 rounded-lg">
                  <span className="material-icons text-primary">
                    verified_user
                  </span>
                </div>
                <div>
                  <p className="font-semibold text-slate-800 dark:text-slate-200">
                    Secure & Confidential
                  </p>
                  <p className="text-sm text-slate-500 dark:text-slate-400">
                    Your information is encrypted and only used for your custom
                    proposal.
                  </p>
                </div>
              </div>
            </div>

            {/* Contact Information */}
            <div className="p-6 bg-white dark:bg-white/5 rounded-xl border border-primary/10">
              <h4 className="font-bold mb-4 text-slate-900 dark:text-white">
                Contact Us
              </h4>
              <ul className="space-y-4 text-sm text-slate-600 dark:text-slate-400">
                <li className="flex items-center space-x-3">
                  <span className="material-icons text-sm text-primary">
                    email
                  </span>
                  <a
                    href="mailto:growth@amica.digital"
                    className="hover:text-primary transition-colors"
                  >
                    growth@amica.digital
                  </a>
                </li>
                <li className="flex items-center space-x-3">
                  <span className="material-icons text-sm text-primary">
                    phone
                  </span>
                  <a
                    href="tel:+447808014132"
                    className="hover:text-primary transition-colors"
                  >
                    +44 7808 014132
                  </a>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="material-icons text-sm text-primary">
                    location_on
                  </span>
                  <span>
                    378 Claremont Road, Manchester
                    <br />
                    M14 7WB
                  </span>
                </li>
              </ul>
            </div>
          </div>

          {/* Main Form Card */}
          <div className="lg:col-span-8 order-1 lg:order-2">
            <div className="bg-white dark:bg-background-dark border border-primary/10 rounded-xl form-card-shadow overflow-hidden">
              <div className="p-8 lg:p-10">
                <div className="mb-8 border-b border-primary/5 pb-6">
                  <h2 className="text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
                    <span className="w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center text-sm">
                      {currentStep}
                    </span>
                    {getScreenTitle()}
                  </h2>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* SCREEN 1 - Contact & Business Basics */}
                  {currentStep === 1 && (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <FormInput
                        label="Full Name"
                        id="fullName"
                        value={formData.fullName}
                        onChange={(e) =>
                          handleInputChange("fullName", e.target.value)
                        }
                        placeholder="John Doe"
                        required
                      />
                      <FormInput
                        label="Company Name"
                        id="companyName"
                        value={formData.companyName}
                        onChange={(e) =>
                          handleInputChange("companyName", e.target.value)
                        }
                        placeholder="Acme Ltd"
                        required
                      />
                      <FormInput
                        label="Email"
                        type="email"
                        id="email"
                        value={formData.email}
                        onChange={(e) =>
                          handleInputChange("email", e.target.value)
                        }
                        placeholder="john@company.com"
                        required
                      />
                      <FormInput
                        label="Phone / WhatsApp Number"
                        type="tel"
                        id="phone"
                        value={formData.phone}
                        onChange={(e) =>
                          handleInputChange("phone", e.target.value)
                        }
                        placeholder="+44 7700 900000"
                        required
                      />
                      <FormInput
                        label="Country of Operation"
                        type="select"
                        id="country"
                        value={formData.country}
                        onChange={(e) =>
                          handleInputChange("country", e.target.value)
                        }
                        options={[
                          { value: "uk", label: "UK" },
                          { value: "italy", label: "Italy" },
                          { value: "uae", label: "UAE" },
                          { value: "other", label: "Other" },
                        ]}
                        required
                      />
                      <FormInput
                        label="Website URL"
                        type="url"
                        id="website"
                        value={formData.website}
                        onChange={(e) =>
                          handleInputChange("website", e.target.value)
                        }
                        placeholder="https://www.yourcompany.com"
                      />
                      <FormInput
                        label="Your Role"
                        type="select"
                        id="role"
                        value={formData.role}
                        onChange={(e) =>
                          handleInputChange("role", e.target.value)
                        }
                        options={[
                          { value: "owner", label: "Owner/Director" },
                          { value: "manager", label: "Manager" },
                          { value: "marketing", label: "Marketing" },
                          { value: "operations", label: "Operations" },
                          { value: "other", label: "Other" },
                        ]}
                        required
                      />
                      <FormInput
                        label="Are you the decision maker?"
                        type="select"
                        id="decisionMaker"
                        value={formData.decisionMaker}
                        onChange={(e) =>
                          handleInputChange("decisionMaker", e.target.value)
                        }
                        options={[
                          { value: "yes", label: "Yes" },
                          { value: "no", label: "No" },
                          { value: "not-sure", label: "Not sure" },
                        ]}
                        required
                      />
                      {formData.decisionMaker === "no" && (
                        <FormInput
                          label="Decision Maker Name & Role"
                          id="decisionMakerDetails"
                          value={formData.decisionMakerDetails}
                          onChange={(e) =>
                            handleInputChange(
                              "decisionMakerDetails",
                              e.target.value
                            )
                          }
                          placeholder="e.g. Jane Smith, CEO"
                          className="md:col-span-2"
                        />
                      )}
                    </div>
                  )}

                  {/* SCREEN 2 - What do you want help with? */}
                  {currentStep === 2 && (
                    <div className="space-y-6">
                      <div>
                        <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-4">
                          What are you looking to achieve?{" "}
                          <span className="text-red-500">*</span>
                          <span className="text-xs font-normal text-slate-500 ml-2">
                            (choose up to 2)
                          </span>
                        </label>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                          {[
                            "More qualified leads",
                            "More bookings / enquiries",
                            "Improve conversion rate (website/funnel)",
                            "Automate follow-ups & admin",
                            "AI assistant / chatbot",
                            "Build/upgrade website or portal",
                            "SEO / Google visibility",
                            "Social media system / content engine",
                            "Compliance & trust (regulated industry)",
                          ].map((goal) => (
                            <label
                              key={goal}
                              className="flex items-start gap-3 p-4 border border-slate-200 dark:border-slate-700 rounded-lg hover:border-primary/50 cursor-pointer transition-colors"
                            >
                              <input
                                type="checkbox"
                                checked={formData.goals.includes(goal)}
                                onChange={(e) => {
                                  const newGoals = e.target.checked
                                    ? [...formData.goals, goal].slice(0, 2)
                                    : formData.goals.filter((g) => g !== goal);
                                  handleInputChange("goals", newGoals);
                                }}
                                className="mt-0.5"
                              />
                              <span className="text-sm">{goal}</span>
                            </label>
                          ))}
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-4">
                          Which services are you interested in?{" "}
                          <span className="text-red-500">*</span>
                          <span className="text-xs font-normal text-slate-500 ml-2">
                            (multi-select)
                          </span>
                        </label>
                        <div className="space-y-3">
                          {[
                            {
                              value: "growth-engine",
                              label: "Growth Engine (SEO + Ads + Funnel)",
                            },
                            {
                              value: "ai-automation",
                              label: "AI Automation (CRM + workflows)",
                            },
                            {
                              value: "ai-assistant",
                              label: "AI Virtual Assistant / AI Agents",
                            },
                            {
                              value: "websites",
                              label: "Websites / Portals / Custom software",
                            },
                            {
                              value: "content",
                              label: "Content system (repurposing)",
                            },
                            {
                              value: "compliance",
                              label: "Responsible AI / compliance support",
                            },
                          ].map((service) => (
                            <label
                              key={service.value}
                              className="flex items-start gap-3 p-4 border border-slate-200 dark:border-slate-700 rounded-lg hover:border-primary/50 cursor-pointer transition-colors"
                            >
                              <input
                                type="checkbox"
                                checked={formData.servicesInterested.includes(
                                  service.value
                                )}
                                onChange={(e) => {
                                  const newServices = e.target.checked
                                    ? [
                                        ...formData.servicesInterested,
                                        service.value,
                                      ]
                                    : formData.servicesInterested.filter(
                                        (s) => s !== service.value
                                      );
                                  handleInputChange(
                                    "servicesInterested",
                                    newServices
                                  );
                                }}
                                className="mt-0.5"
                              />
                              <span className="text-sm font-medium">
                                {service.label}
                              </span>
                            </label>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}

                  {/* SCREEN 3 - Current Setup */}
                  {currentStep === 3 && (
                    <div className="space-y-6">
                      <FormInput
                        label="Do you currently have a website?"
                        type="select"
                        id="hasWebsite"
                        value={formData.hasWebsite}
                        onChange={(e) =>
                          handleInputChange("hasWebsite", e.target.value)
                        }
                        options={[
                          { value: "yes", label: "Yes" },
                          { value: "no", label: "No" },
                          { value: "in-progress", label: "In progress" },
                        ]}
                        required
                      />

                      {formData.hasWebsite === "no" && (
                        <FormInput
                          label="Do you have a domain name?"
                          type="select"
                          id="hasDomain"
                          value={formData.hasDomain}
                          onChange={(e) =>
                            handleInputChange("hasDomain", e.target.value)
                          }
                          options={[
                            { value: "yes", label: "Yes" },
                            { value: "no", label: "No" },
                          ]}
                        />
                      )}

                      <FormInput
                        label="Do you run paid ads currently?"
                        type="select"
                        id="runsPaidAds"
                        value={formData.runsPaidAds}
                        onChange={(e) =>
                          handleInputChange("runsPaidAds", e.target.value)
                        }
                        options={[
                          { value: "yes", label: "Yes" },
                          { value: "no", label: "No" },
                        ]}
                        required
                      />

                      {formData.runsPaidAds === "yes" && (
                        <FormInput
                          label="Monthly ad spend range"
                          type="select"
                          id="adSpend"
                          value={formData.adSpend}
                          onChange={(e) =>
                            handleInputChange("adSpend", e.target.value)
                          }
                          options={[
                            { value: "0-500", label: "£0–£500" },
                            { value: "500-1500", label: "£500–£1,500" },
                            { value: "1500-5000", label: "£1,500–£5,000" },
                            { value: "5000+", label: "£5,000+" },
                          ]}
                        />
                      )}

                      <FormInput
                        label="Do you have a CRM?"
                        type="select"
                        id="crm"
                        value={formData.crm}
                        onChange={(e) =>
                          handleInputChange("crm", e.target.value)
                        }
                        options={[
                          { value: "none", label: "None" },
                          { value: "hubspot", label: "HubSpot" },
                          { value: "zoho", label: "Zoho" },
                          { value: "salesforce", label: "Salesforce" },
                          { value: "other", label: "Other" },
                        ]}
                        required
                      />

                      {formData.crm === "other" && (
                        <FormInput
                          label="Which CRM?"
                          id="crmOther"
                          value={formData.crmOther}
                          onChange={(e) =>
                            handleInputChange("crmOther", e.target.value)
                          }
                          placeholder="Enter CRM name"
                        />
                      )}

                      <div>
                        <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-4">
                          How do enquiries arrive today?{" "}
                          <span className="text-red-500">*</span>
                        </label>
                        <div className="grid grid-cols-2 gap-3">
                          {[
                            "Phone calls",
                            "Website form",
                            "WhatsApp",
                            "Email",
                            "Social media DMs",
                            "Referral",
                            "Other",
                          ].map((channel) => (
                            <label
                              key={channel}
                              className="flex items-center gap-3 p-3 border border-slate-200 dark:border-slate-700 rounded-lg hover:border-primary/50 cursor-pointer transition-colors"
                            >
                              <input
                                type="checkbox"
                                checked={formData.enquiryChannels.includes(
                                  channel
                                )}
                                onChange={(e) => {
                                  const newChannels = e.target.checked
                                    ? [...formData.enquiryChannels, channel]
                                    : formData.enquiryChannels.filter(
                                        (c) => c !== channel
                                      );
                                  handleInputChange(
                                    "enquiryChannels",
                                    newChannels
                                  );
                                }}
                              />
                              <span className="text-sm">{channel}</span>
                            </label>
                          ))}
                        </div>
                      </div>

                      <FormInput
                        label="Average response time to new enquiries"
                        type="select"
                        id="responseTime"
                        value={formData.responseTime}
                        onChange={(e) =>
                          handleInputChange("responseTime", e.target.value)
                        }
                        options={[
                          { value: "under-5", label: "Under 5 minutes" },
                          { value: "within-1hr", label: "Within 1 hour" },
                          { value: "same-day", label: "Same day" },
                          { value: "next-day", label: "Next day" },
                          { value: "not-sure", label: "Not sure" },
                        ]}
                        required
                      />

                      <FormInput
                        label="Biggest issue right now"
                        type="select"
                        id="biggestIssue"
                        value={formData.biggestIssue}
                        onChange={(e) =>
                          handleInputChange("biggestIssue", e.target.value)
                        }
                        options={[
                          {
                            value: "not-enough-leads",
                            label: "Not enough leads",
                          },
                          {
                            value: "poor-quality",
                            label: "Lead quality is poor",
                          },
                          {
                            value: "slow-response",
                            label: "Slow response / no follow-up",
                          },
                          {
                            value: "no-conversion",
                            label: "Website doesn't convert",
                          },
                          {
                            value: "no-tracking",
                            label: "No tracking / don't know what works",
                          },
                          {
                            value: "need-automation",
                            label: "Need automation / reduce staff workload",
                          },
                          {
                            value: "compliance",
                            label: "Need compliance/trust improvements",
                          },
                        ]}
                        required
                      />
                    </div>
                  )}

                  {/* SCREEN 4 - Project Scope (Conditional) */}
                  {currentStep === 4 && (
                    <div className="space-y-6">
                      {/* Website Questions */}
                      {needsWebsiteQuestions && (
                        <>
                          <FormInput
                            label="What do you need built?"
                            type="select"
                            id="websiteNeeds"
                            value={formData.websiteNeeds}
                            onChange={(e) =>
                              handleInputChange("websiteNeeds", e.target.value)
                            }
                            options={[
                              {
                                value: "website",
                                label: "Website (5–10 pages)",
                              },
                              {
                                value: "landing",
                                label: "Landing page / funnel only",
                              },
                              {
                                value: "portal",
                                label: "Client portal / dashboard",
                              },
                              {
                                value: "custom",
                                label: "Custom software (workflow tool)",
                              },
                              {
                                value: "saas",
                                label: "SaaS / marketplace development",
                              },
                              {
                                value: "integrations",
                                label: "Integrations only",
                              },
                            ]}
                            required
                          />

                          <div>
                            <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-4">
                              Do you need any integrations?
                            </label>
                            <div className="grid grid-cols-2 gap-3">
                              {[
                                "CRM",
                                "Payments",
                                "Booking system",
                                "WhatsApp",
                                "Email marketing",
                                "Accounting (Xero/QuickBooks)",
                                "Other",
                              ].map((integration) => (
                                <label
                                  key={integration}
                                  className="flex items-center gap-3 p-3 border border-slate-200 dark:border-slate-700 rounded-lg hover:border-primary/50 cursor-pointer transition-colors"
                                >
                                  <input
                                    type="checkbox"
                                    checked={formData.integrations.includes(
                                      integration
                                    )}
                                    onChange={(e) => {
                                      const newIntegrations = e.target.checked
                                        ? [
                                            ...formData.integrations,
                                            integration,
                                          ]
                                        : formData.integrations.filter(
                                            (i) => i !== integration
                                          );
                                      handleInputChange(
                                        "integrations",
                                        newIntegrations
                                      );
                                    }}
                                  />
                                  <span className="text-sm">{integration}</span>
                                </label>
                              ))}
                            </div>
                          </div>

                          <FormInput
                            label="Do you have content ready?"
                            type="select"
                            id="contentReady"
                            value={formData.contentReady}
                            onChange={(e) =>
                              handleInputChange("contentReady", e.target.value)
                            }
                            options={[
                              { value: "yes", label: "Yes (text/images)" },
                              { value: "partially", label: "Partially" },
                              { value: "no", label: "No (need content help)" },
                            ]}
                            required
                          />
                        </>
                      )}

                      {/* AI Assistant Questions */}
                      {needsAIQuestions && (
                        <>
                          <FormInput
                            label="Where should the AI assistant work?"
                            type="select"
                            id="aiLocation"
                            value={formData.aiLocation}
                            onChange={(e) =>
                              handleInputChange("aiLocation", e.target.value)
                            }
                            options={[
                              { value: "website", label: "Website chat" },
                              { value: "whatsapp", label: "WhatsApp" },
                              {
                                value: "social",
                                label: "Instagram/Facebook DMs",
                              },
                              { value: "email", label: "Email" },
                              {
                                value: "internal",
                                label: "Internal staff assistant",
                              },
                            ]}
                            required
                          />

                          <div>
                            <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-4">
                              Main tasks <span className="text-red-500">*</span>
                              <span className="text-xs font-normal text-slate-500 ml-2">
                                (choose up to 3)
                              </span>
                            </label>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                              {[
                                "Answer FAQs",
                                "Qualify leads",
                                "Book appointments",
                                "Collect documents/info",
                                "Customer support",
                                "Follow-ups & reminders",
                                "Internal admin support",
                              ].map((task) => (
                                <label
                                  key={task}
                                  className="flex items-center gap-3 p-3 border border-slate-200 dark:border-slate-700 rounded-lg hover:border-primary/50 cursor-pointer transition-colors"
                                >
                                  <input
                                    type="checkbox"
                                    checked={formData.aiTasks.includes(task)}
                                    onChange={(e) => {
                                      const newTasks = e.target.checked
                                        ? [...formData.aiTasks, task].slice(
                                            0,
                                            3
                                          )
                                        : formData.aiTasks.filter(
                                            (t) => t !== task
                                          );
                                      handleInputChange("aiTasks", newTasks);
                                    }}
                                  />
                                  <span className="text-sm">{task}</span>
                                </label>
                              ))}
                            </div>
                          </div>

                          <FormInput
                            label="Languages required"
                            type="select"
                            id="aiLanguages"
                            value={formData.aiLanguages}
                            onChange={(e) =>
                              handleInputChange("aiLanguages", e.target.value)
                            }
                            options={[
                              { value: "english", label: "English only" },
                              {
                                value: "english-italian",
                                label: "English + Italian",
                              },
                              {
                                value: "english-arabic",
                                label: "English + Arabic",
                              },
                              { value: "other", label: "Other" },
                            ]}
                            required
                          />
                        </>
                      )}

                      {/* Automation Questions */}
                      {needsAutomationQuestions && (
                        <>
                          <div>
                            <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-4">
                              What should be automated?{" "}
                              <span className="text-red-500">*</span>
                            </label>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                              {[
                                "Lead capture → CRM",
                                "Follow-up messages",
                                "Appointment booking",
                                "Pipeline updates",
                                "Review requests",
                                "Reporting dashboards",
                                "Staff task assignment",
                              ].map((task) => (
                                <label
                                  key={task}
                                  className="flex items-center gap-3 p-3 border border-slate-200 dark:border-slate-700 rounded-lg hover:border-primary/50 cursor-pointer transition-colors"
                                >
                                  <input
                                    type="checkbox"
                                    checked={formData.automationTasks.includes(
                                      task
                                    )}
                                    onChange={(e) => {
                                      const newTasks = e.target.checked
                                        ? [...formData.automationTasks, task]
                                        : formData.automationTasks.filter(
                                            (t) => t !== task
                                          );
                                      handleInputChange(
                                        "automationTasks",
                                        newTasks
                                      );
                                    }}
                                  />
                                  <span className="text-sm">{task}</span>
                                </label>
                              ))}
                            </div>
                          </div>

                          <FormInput
                            label="Main communication channel"
                            type="select"
                            id="communicationChannel"
                            value={formData.communicationChannel}
                            onChange={(e) =>
                              handleInputChange(
                                "communicationChannel",
                                e.target.value
                              )
                            }
                            options={[
                              { value: "email", label: "Email" },
                              { value: "whatsapp", label: "WhatsApp" },
                              { value: "sms", label: "SMS" },
                              { value: "phone", label: "Phone calls" },
                            ]}
                            required
                          />
                        </>
                      )}

                      {/* If no specific services selected */}
                      {!needsWebsiteQuestions &&
                        !needsAIQuestions &&
                        !needsAutomationQuestions && (
                          <div className="text-center py-12">
                            <span className="material-icons text-6xl text-slate-300 dark:text-slate-600 mb-4">
                              info
                            </span>
                            <p className="text-slate-500 dark:text-slate-400">
                              No specific project questions for the services you
                              selected. Click Continue to proceed.
                            </p>
                          </div>
                        )}
                    </div>
                  )}

                  {/* SCREEN 5 - Budget, Timeline & Compliance */}
                  {currentStep === 5 && (
                    <div className="space-y-6">
                      <FormInput
                        label="When do you want to start?"
                        type="select"
                        id="startTimeline"
                        value={formData.startTimeline}
                        onChange={(e) =>
                          handleInputChange("startTimeline", e.target.value)
                        }
                        options={[
                          { value: "asap", label: "ASAP (0–2 weeks)" },
                          { value: "30days", label: "Within 30 days" },
                          { value: "30-60days", label: "30–60 days" },
                          { value: "60plus", label: "60+ days" },
                        ]}
                        required
                      />

                      <FormInput
                        label="Estimated monthly marketing/automation budget"
                        type="select"
                        id="monthlyBudget"
                        value={formData.monthlyBudget}
                        onChange={(e) =>
                          handleInputChange("monthlyBudget", e.target.value)
                        }
                        options={[
                          { value: "under-200", label: "Under £200/month" },
                          { value: "200-500", label: "£200–£500/month" },
                          { value: "500-1000", label: "£500–£1,000/month" },
                          { value: "1000-3000", label: "£1,000–£3,000/month" },
                          { value: "3000plus", label: "£3,000+/month" },
                        ]}
                        required
                      />

                      <FormInput
                        label="One-off setup budget comfort"
                        type="select"
                        id="setupBudget"
                        value={formData.setupBudget}
                        onChange={(e) =>
                          handleInputChange("setupBudget", e.target.value)
                        }
                        options={[
                          { value: "under-500", label: "Under £500" },
                          { value: "500-1500", label: "£500–£1,500" },
                          { value: "1500-3000", label: "£1,500–£3,000" },
                          { value: "3000-8000", label: "£3,000–£8,000" },
                          { value: "8000plus", label: "£8,000+" },
                        ]}
                        required
                      />

                      <FormInput
                        label="Are you in a regulated or sensitive-data industry?"
                        type="select"
                        id="regulated"
                        value={formData.regulated}
                        onChange={(e) =>
                          handleInputChange("regulated", e.target.value)
                        }
                        options={[
                          { value: "healthcare", label: "Healthcare / clinic" },
                          { value: "care", label: "Care services" },
                          {
                            value: "recruitment",
                            label: "Recruitment Services",
                          },
                          {
                            value: "medical-tourism",
                            label: "Medical tourism",
                          },
                          { value: "finance-legal", label: "Finance / legal" },
                          { value: "not-regulated", label: "Not regulated" },
                          { value: "not-sure", label: "Not sure" },
                        ]}
                        required
                      />

                      <div className="space-y-4 pt-4 border-t border-slate-200 dark:border-slate-700">
                        <label className="flex items-start gap-3 cursor-pointer">
                          <input
                            type="checkbox"
                            checked={formData.consentContact}
                            onChange={(e) =>
                              handleInputChange(
                                "consentContact",
                                e.target.checked
                              )
                            }
                            required
                            className="mt-1"
                          />
                          <span className="text-sm">
                            <span className="text-red-500">*</span> I agree to
                            be contacted by Amica Digital Services about my
                            enquiry.
                          </span>
                        </label>

                        <label className="flex items-start gap-3 cursor-pointer">
                          <input
                            type="checkbox"
                            checked={formData.consentMarketing}
                            onChange={(e) =>
                              handleInputChange(
                                "consentMarketing",
                                e.target.checked
                              )
                            }
                            className="mt-1"
                          />
                          <span className="text-sm">
                            I would like to receive updates and insights.
                            (optional)
                          </span>
                        </label>
                      </div>
                    </div>
                  )}

                  <div className="mt-12 flex items-center justify-between border-t border-primary/5 pt-8">
                    <button
                      type="button"
                      onClick={handleBack}
                      disabled={currentStep === 1}
                      className={`flex items-center gap-2 font-semibold transition-colors ${
                        currentStep === 1
                          ? "text-slate-300 dark:text-slate-700 cursor-not-allowed"
                          : "text-slate-500 dark:text-slate-400 hover:text-primary"
                      }`}
                    >
                      <span className="material-icons text-lg">arrow_back</span>
                      Back
                    </button>

                    {currentStep === totalSteps ? (
                      <Button
                        type="submit"
                        variant="primary"
                        size="lg"
                        icon="send"
                        className="transform hover:-translate-y-0.5 active:translate-y-0"
                      >
                        Get My Quote
                      </Button>
                    ) : (
                      <Button
                        type="button"
                        onClick={handleNext}
                        variant="primary"
                        size="lg"
                        icon="arrow_forward"
                        className="transform hover:-translate-y-0.5 active:translate-y-0"
                      >
                        Continue
                      </Button>
                    )}
                  </div>
                </form>
              </div>
            </div>
            <p className="mt-6 text-center text-xs text-slate-400 dark:text-slate-500">
              By continuing, you agree to our Terms of Service and Privacy
              Policy.
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default IntakeForm;
