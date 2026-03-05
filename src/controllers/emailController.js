import { validationResult } from "express-validator";
import { sendTeamEmail, sendWelcomeEmail } from "../services/emailService.js";
import {
  sendQualifiedEmail,
  sendSemiQualifiedEmail,
} from "../services/emailService.js";

// Main form submission controller - only sends team and welcome emails
export const sendEmailController = async (req, res) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  try {
    const formData = req.body;
    const { fitScore, qualificationStatus } = formData;

    console.log("📧 Processing main form submission...");
    console.log(`📊 Fit Score: ${fitScore}, Status: ${qualificationStatus}`);

    // Generate a unique lead ID
    const leadId = generateLeadId();

    // Send team notification and welcome email
    const emailResults = await Promise.all([
      sendTeamEmail(formData, leadId),
      sendWelcomeEmail(formData, leadId),
    ]);

    console.log(
      `✅ Team and welcome emails sent successfully! Lead ID: ${leadId}`
    );

    // Return success with qualification status so frontend knows what to send next
    res.json({
      success: true,
      leadId,
      qualificationStatus,
      fitScore,
      message:
        "Form submitted successfully. Please send qualification email separately.",
    });
  } catch (error) {
    console.error("❌ Error in sendEmailController:", error);
    res.status(500).json({
      success: false,
      error: error.message,
      message: "Failed to process form submission",
    });
  }
};

// Send qualified lead email
export const sendQualifiedEmailController = async (req, res) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  try {
    const { email, fullName, leadId } = req.body;

    if (!email || !fullName) {
      return res.status(400).json({
        success: false,
        error: "Email and fullName are required",
      });
    }

    console.log(
      `📧 Sending qualified email to: ${email} (Lead: ${leadId || "N/A"})`
    );

    const result = await sendQualifiedEmail({ email, fullName, leadId });

    console.log(`✅ Qualified email sent successfully!`);

    res.json({
      success: true,
      message: "Qualified email sent successfully",
      messageId: result.messageId,
    });
  } catch (error) {
    console.error("❌ Error in sendQualifiedEmailController:", error);
    res.status(500).json({
      success: false,
      error: error.message,
      message: "Failed to send qualified email",
    });
  }
};

// Send semi-qualified lead email
export const sendSemiQualifiedEmailController = async (req, res) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  try {
    const { email, fullName, leadId } = req.body;

    if (!email || !fullName) {
      return res.status(400).json({
        success: false,
        error: "Email and fullName are required",
      });
    }

    console.log(
      `📧 Sending semi-qualified email to: ${email} (Lead: ${leadId || "N/A"})`
    );

    const result = await sendSemiQualifiedEmail({ email, fullName, leadId });

    console.log(`✅ Semi-qualified email sent successfully!`);

    res.json({
      success: true,
      message: "Semi-qualified email sent successfully",
      messageId: result.messageId,
    });
  } catch (error) {
    console.error("❌ Error in sendSemiQualifiedEmailController:", error);
    res.status(500).json({
      success: false,
      error: error.message,
      message: "Failed to send semi-qualified email",
    });
  }
};

// Helper function to generate lead ID
const generateLeadId = () => {
  const now = new Date();
  const day = now.getDate().toString().padStart(2, "0");
  const month = (now.getMonth() + 1).toString().padStart(2, "0");
  const year = now.getFullYear();
  const hours = now.getHours().toString().padStart(2, "0");
  const minutes = now.getMinutes().toString().padStart(2, "0");
  return `LEAD-${day}:${month}:${year}-${hours}:${minutes}`;
};
