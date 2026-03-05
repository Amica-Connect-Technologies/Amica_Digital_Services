// Generate lead ID in format: DD:MM:YYYY-HH:MM
export const generateLeadId = () => {
  const now = new Date();

  const day = now.getDate().toString().padStart(2, "0");
  const month = (now.getMonth() + 1).toString().padStart(2, "0");
  const year = now.getFullYear();
  const hours = now.getHours().toString().padStart(2, "0");
  const minutes = now.getMinutes().toString().padStart(2, "0");

  return `LEAD-${day}:${month}:${year}-${hours}:${minutes}`;
};

// Format services for display in welcome email
export const formatServicesForWelcome = (services) => {
  if (!services || services.length === 0) return "your enquiry";

  const serviceMap = {
    "growth-engine": "Growth Engine (SEO + Ads + Funnel)",
    "ai-automation": "AI Automation (CRM + workflows)",
    "ai-assistant": "AI Virtual Assistant / AI Agents",
    websites: "Websites / Portals / Custom software",
    content: "Content system (repurposing)",
    compliance: "Responsible AI / compliance support",
  };

  const formattedServices = services.map((s) => serviceMap[s] || s);

  if (formattedServices.length === 1) return formattedServices[0];
  if (formattedServices.length === 2) return formattedServices.join(" and ");
  return (
    formattedServices.slice(0, -1).join(", ") +
    ", and " +
    formattedServices.slice(-1)
  );
};

// Map country codes to display values
export const mapCountryValue = (countryCode) => {
  const countryMap = {
    uk: "United Kingdom",
    italy: "Italy",
    uae: "United Arab Emirates",
    other: "Other",
    "": "Not provided",
  };
  return countryMap[countryCode] || countryCode || "Not provided";
};

// Map role codes to display values
export const mapRoleValue = (roleCode) => {
  const roleMap = {
    owner: "Owner/Director",
    manager: "Manager",
    marketing: "Marketing",
    operations: "Operations",
    other: "Other",
    "": "Not provided",
  };
  return roleMap[roleCode] || roleCode || "Not provided";
};

// Map yes/no values
export const mapYesNoValue = (value) => {
  if (value === "yes") return "Yes";
  if (value === "no") return "No";
  if (value === "in-progress") return "In Progress";
  return value || "Not provided";
};

// Map CRM values
export const mapCRMValue = (crm, crmOther) => {
  if (crm === "other" && crmOther) return crmOther;
  if (crm === "none") return "None";
  if (crm === "hubspot") return "HubSpot";
  if (crm === "zoho") return "Zoho";
  if (crm === "salesforce") return "Salesforce";
  return crm || "Not provided";
};

// Map response time values
export const mapResponseTimeValue = (value) => {
  const responseMap = {
    "under-5": "Under 5 minutes",
    "within-1hr": "Within 1 hour",
    "same-day": "Same day",
    "next-day": "Next day",
    "not-sure": "Not sure",
    "": "Not provided",
  };
  return responseMap[value] || value || "Not provided";
};

// Map biggest issue values
export const mapBiggestIssueValue = (value) => {
  const issueMap = {
    "not-enough-leads": "Not enough leads",
    "poor-quality": "Lead quality is poor",
    "slow-response": "Slow response / no follow-up",
    "no-conversion": "Website doesn't convert",
    "no-tracking": "No tracking / don't know what works",
    "need-automation": "Need automation / reduce staff workload",
    compliance: "Need compliance/trust improvements",
    "": "Not provided",
  };
  return issueMap[value] || value || "Not provided";
};

// Map content ready values
export const mapContentReadyValue = (value) => {
  const contentMap = {
    yes: "Yes (text/images)",
    partially: "Partially",
    no: "No (need content help)",
    "": "Not provided",
  };
  return contentMap[value] || value || "Not provided";
};

// Map timeline values
export const mapTimelineValue = (value) => {
  const timelineMap = {
    asap: "ASAP (0–2 weeks)",
    "30days": "Within 30 days",
    "30-60days": "30–60 days",
    "60plus": "60+ days",
    "": "Not provided",
  };
  return timelineMap[value] || value || "Not provided";
};

// Map budget values
export const mapBudgetValue = (value) => {
  const budgetMap = {
    "under-200": "Under £200/month",
    "200-500": "£200–£500/month",
    "500-1000": "£500–£1,000/month",
    "1000-3000": "£1,000–£3,000/month",
    "3000plus": "£3,000+/month",
    "": "Not provided",
  };
  return budgetMap[value] || value || "Not provided";
};

// Map setup budget values
export const mapSetupBudgetValue = (value) => {
  const setupMap = {
    "under-500": "Under £500",
    "500-1500": "£500–£1,500",
    "1500-3000": "£1,500–£3,000",
    "3000-8000": "£3,000–£8,000",
    "8000plus": "£8,000+",
    "": "Not provided",
  };
  return setupMap[value] || value || "Not provided";
};

// Map regulated industry values
export const mapRegulatedValue = (value) => {
  const regulatedMap = {
    healthcare: "Healthcare / clinic",
    care: "Care services",
    recruitment: "Recruitment Services",
    "medical-tourism": "Medical tourism",
    "finance-legal": "Finance / legal",
    "not-regulated": "Not regulated",
    "not-sure": "Not sure",
    "": "Not provided",
  };
  return regulatedMap[value] || value || "Not provided";
};

// Format value for display in tables
export const formatValue = (value, formatType = "numbered") => {
  if (
    value === undefined ||
    value === null ||
    value === "undefined" ||
    value === "null"
  ) {
    return '<span style="color: #9ca3af; font-style: italic;">Not provided</span>';
  }
  if (value === "") {
    return '<span style="color: #9ca3af; font-style: italic;">Not provided</span>';
  }
  if (Array.isArray(value)) {
    if (value.length === 0) {
      return '<span style="color: #9ca3af; font-style: italic;">None selected</span>';
    }

    // Special formatting for servicesInterested to show full names
    if (value[0] && value[0].includes("-")) {
      const serviceMap = {
        "growth-engine": "Growth Engine (SEO + Ads + Funnel)",
        "ai-automation": "AI Automation (CRM + workflows)",
        "ai-assistant": "AI Virtual Assistant / AI Agents",
        websites: "Websites / Portals / Custom software",
        content: "Content system (repurposing)",
        compliance: "Responsible AI / compliance support",
      };
      value = value.map((v) => serviceMap[v] || v);
    }

    // Default: New lines with bullets (most readable)
    return `<div style="line-height: 1.6;">${value
      .map(
        (item) =>
          `<div style="display: flex; align-items: flex-start; gap: 8px; margin-bottom: 4px;">
           <span style="color: #137fec; font-weight: bold;">•</span>
           <span>${item}</span>
         </div>`
      )
      .join("")}</div>`;
  }
  if (typeof value === "boolean") {
    return value ? "Yes" : "No";
  }
  return value;
};

// Main mapping function
export const mapFormData = (formData) => {
  return {
    // Screen 1 - Contact Information
    fullName: formData.fullName || "",
    company: formData.companyName || "",
    email: formData.email || "",
    phoneWhatsapp: formData.phone || "",
    country: mapCountryValue(formData.country),
    website: formData.website || "",
    role: mapRoleValue(formData.role),
    decisionMaker: formData.decisionMaker || "",
    decisionMakerDetails: formData.decisionMakerDetails || "",

    // Screen 2 - Business Goals
    primaryGoals: formData.goals || [],
    servicesInterested: formData.servicesInterested || [],

    // Screen 3 - Current Setup
    hasWebsite: mapYesNoValue(formData.hasWebsite),
    hasDomain: mapYesNoValue(formData.hasDomain),
    runsPaidAds: mapYesNoValue(formData.runsPaidAds),
    adSpendMonthly: formData.adSpend || "",
    hasCRM: mapCRMValue(formData.crm, formData.crmOther),
    enquiryChannels: formData.enquiryChannels || [],
    responseTime: mapResponseTimeValue(formData.responseTime),
    biggestIssue: mapBiggestIssueValue(formData.biggestIssue),

    // Screen 4 - Project Details
    whatToBuild: formData.websiteNeeds || "",
    integrationsNeeded: formData.integrations || [],
    contentReady: mapContentReadyValue(formData.contentReady),
    assistantLocation: formData.aiLocation || "",
    assistantTasks: formData.aiTasks || [],
    assistantLanguages: formData.aiLanguages || "",
    automationTasks: formData.automationTasks || [],
    communicationChannel: formData.communicationChannel || "",

    // Screen 5 - Budget & Timeline
    startTimeline: mapTimelineValue(formData.startTimeline),
    monthlyBudget: mapBudgetValue(formData.monthlyBudget),
    setupBudget: mapSetupBudgetValue(formData.setupBudget),
    regulatedIndustry: mapRegulatedValue(formData.regulated),
    consentContact: formData.consentContact || false,
    consentMarketing: formData.consentMarketing || false,
  };
};

// Define sections for team email
export const sections = {
  "Contact Information": [
    { key: "fullName", label: "Full Name" },
    { key: "company", label: "Company" },
    { key: "email", label: "Email" },
    { key: "phoneWhatsapp", label: "Phone/WhatsApp" },
    { key: "country", label: "Country" },
    { key: "website", label: "Website" },
    { key: "role", label: "Role" },
    { key: "decisionMaker", label: "Decision Maker" },
  ],
  "Business Goals": [
    { key: "primaryGoals", label: "Primary Goals" },
    { key: "servicesInterested", label: "Services Interested" },
  ],
  "Current Setup": [
    { key: "hasWebsite", label: "Has Website" },
    { key: "hasDomain", label: "Has Domain" },
    { key: "runsPaidAds", label: "Runs Paid Ads" },
    { key: "adSpendMonthly", label: "Monthly Ad Spend" },
    { key: "hasCRM", label: "CRM System" },
    { key: "enquiryChannels", label: "Enquiry Channels" },
    { key: "responseTime", label: "Response Time" },
    { key: "biggestIssue", label: "Biggest Issue" },
  ],
  "Project Details": [
    { key: "whatToBuild", label: "What to Build" },
    { key: "integrationsNeeded", label: "Integrations Needed" },
    { key: "contentReady", label: "Content Ready" },
    { key: "assistantLocation", label: "Assistant Location" },
    { key: "assistantTasks", label: "Assistant Tasks" },
    { key: "assistantLanguages", label: "Languages" },
    { key: "automationTasks", label: "Automation Tasks" },
    { key: "communicationChannel", label: "Communication Channel" },
  ],
  "Budget & Timeline": [
    { key: "startTimeline", label: "Start Timeline" },
    { key: "monthlyBudget", label: "Monthly Budget" },
    { key: "setupBudget", label: "Setup Budget" },
    { key: "regulatedIndustry", label: "Regulated Industry" },
  ],
  Consent: [
    { key: "consentContact", label: "Contact Consent" },
    { key: "consentMarketing", label: "Marketing Consent" },
  ],
};
