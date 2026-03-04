import express from "express";
import { sendEmailController } from "../controllers/emailController.js";
import { emailValidator } from "../validators/emailValidator.js";

const router = express.Router();

router.post("/send-email", emailValidator, sendEmailController);

export default router;
