import { transporter } from "../config/mailer.js";
import { getTeamEmailTemplate } from "./emailTemplates/teamNotification.js";
import { getWelcomeEmailTemplate } from "./emailTemplates/welcomeEmail.js";
import { getQualifiedEmailTemplate } from "./emailTemplates/qualifiedEmail.js";
import { getSemiQualifiedEmailTemplate } from "./emailTemplates/semiQualifiedEmail.js";
import { mapFormData, formatServicesForWelcome } from "./utils/emailHelpers.js";

// Send team notification email
export const sendTeamEmail = async (formData, leadId) => {
  try {
    const mappedData = mapFormData(formData);
    const formattedServices = formatServicesForWelcome(
      formData.servicesInterested
    );
    const firstName = mappedData.fullName
      ? mappedData.fullName.split(" ")[0]
      : "there";
    const companyName = mappedData.company || "Not provided";

    const mailOptions = {
      from: `"Amica Digital Services" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_USER,
      cc: mappedData.email,
      replyTo: mappedData.email || process.env.EMAIL_USER,
      subject: `🚀 New Amica Smart Intake Submission - ${companyName} (${leadId})`,
      html: getTeamEmailTemplate({
        ...mappedData,
        leadId,
        companyName,
        firstName,
        formattedServices,
        submissionTime: new Date().toLocaleString("en-GB", {
          dateStyle: "full",
          timeStyle: "short",
        }),
      }),
    };

    return await transporter.sendMail(mailOptions);
  } catch (error) {
    console.error("Error in sendTeamEmail:", error);
    throw error;
  }
};

// Send welcome email to lead
export const sendWelcomeEmail = async (formData, leadId) => {
  try {
    const mappedData = mapFormData(formData);
    const firstName = mappedData.fullName
      ? mappedData.fullName.split(" ")[0]
      : "there";
    const formattedServices = formatServicesForWelcome(
      formData.servicesInterested
    );

    const mailOptions = {
      from: `"Amica Digital Services" <${process.env.EMAIL_USER}>`,
      to: mappedData.email,
      replyTo: process.env.EMAIL_USER,
      subject: "We received your request — next steps (Amica Digital Services)",
      html: getWelcomeEmailTemplate({
        firstName,
        formattedServices,
        leadId,
        website: formData.website,
      }),
    };

    return await transporter.sendMail(mailOptions);
  } catch (error) {
    console.error("Error in sendWelcomeEmail:", error);
    throw error;
  }
};

// Send qualified lead email
export const sendQualifiedEmail = async ({ email, fullName, leadId }) => {
  try {
    const firstName = fullName ? fullName.split(" ")[0] : "there";

    const mailOptions = {
      from: `"Amica Digital Services" <${process.env.EMAIL_USER}>`,
      to: email,
      cc: process.env.EMAIL_USER,
      replyTo: process.env.EMAIL_USER,
      subject: "Book your consultation — choose a time",
      html: getQualifiedEmailTemplate({ firstName, leadId }),
    };

    return await transporter.sendMail(mailOptions);
  } catch (error) {
    console.error("Error in sendQualifiedEmail:", error);
    throw error;
  }
};

// Send semi-qualified lead email
export const sendSemiQualifiedEmail = async ({ email, fullName, leadId }) => {
  try {
    const firstName = fullName ? fullName.split(" ")[0] : "there";

    const mailOptions = {
      from: `"Amica Digital Services" <${process.env.EMAIL_USER}>`,
      to: email,
      cc: process.env.EMAIL_USER,
      replyTo: process.env.EMAIL_USER,
      subject: "Quick questions to prepare your proposal",
      html: getSemiQualifiedEmailTemplate({ firstName, leadId }),
    };

    return await transporter.sendMail(mailOptions);
  } catch (error) {
    console.error("Error in sendSemiQualifiedEmail:", error);
    throw error;
  }
};
