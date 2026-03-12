import nodemailer from "nodemailer";
import dotenv from "dotenv";

dotenv.config();

console.log("SMTP Config:", {
  host: process.env.SMTP_HOST,
  port: process.env.SMTP_PORT,
  user: process.env.EMAIL_USER,
  pass: process.env.EMAIL_PASS,
});

export const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST || "smtp.titan.email",
  port: parseInt(process.env.SMTP_PORT) || 465,
  secure: true, // true for 465
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
  debug: true, // Enable debug logs
  logger: true, // Log information
});

transporter.verify(function (error, success) {
  if (error) {
    console.log("❌ Connection verification failed:");
    console.log("Error details:", error);

    // Log specific error information
    if (error.code === "EAUTH") {
      console.log("Authentication failed - check username and password");
    } else if (error.code === "ECONNECTION") {
      console.log("Connection failed - check host and port");
    } else if (error.responseCode === 535) {
      console.log("Authentication credentials invalid");
    }
  } else {
    console.log("✅ Server is ready to take messages");
    console.log("SMTP Connection successful!");
    console.log("Connected to:", process.env.SMTP_HOST);
    console.log("Using port:", process.env.SMTP_PORT);
    console.log("As user:", process.env.EMAIL_USER);
  }
});
