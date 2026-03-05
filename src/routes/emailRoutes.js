import express from "express";
import { body } from "express-validator";
import {
  sendEmailController,
  sendQualifiedEmailController,
  sendSemiQualifiedEmailController,
} from "../controllers/emailController.js";

const router = express.Router();

// Validation rules for main form submission
const formValidation = [
  body("fullName").notEmpty().withMessage("Full name is required"),
  body("email").isEmail().withMessage("Valid email is required"),
  body("phone").notEmpty().withMessage("Phone number is required"),
];

// Validation rules for qualification emails
const qualificationEmailValidation = [
  body("email").isEmail().withMessage("Valid email is required"),
  body("fullName").notEmpty().withMessage("Full name is required"),
  body("leadId").optional().isString().withMessage("Lead ID must be a string"),
];

// Main form submission endpoint - sends team and welcome emails only
router.post("/send-email", formValidation, sendEmailController);

// Qualified email endpoint
router.post(
  "/send-qualified-email",
  qualificationEmailValidation,
  sendQualifiedEmailController
);

// Semi-qualified email endpoint
router.post(
  "/send-semiqualified-email",
  qualificationEmailValidation,
  sendSemiQualifiedEmailController
);

export default router;
