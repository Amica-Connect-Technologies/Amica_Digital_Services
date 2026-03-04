import { validationResult } from "express-validator";
import { sendEmail } from "../services/emailService.js";

export const sendEmailController = async (req, res) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  try {
    await sendEmail(req.body);
    res.json({ success: true, message: "Email sent successfully" });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};
