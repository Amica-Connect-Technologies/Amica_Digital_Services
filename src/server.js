import dotenv from "dotenv";
import express from "express";
import cors from "cors";
import emailRoutes from "./routes/emailRoutes.js";

if (process.env.NODE_ENV !== "production") dotenv.config();

const app = express();
const PORT = Number(process.env.PORT) || 3000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use("/api", emailRoutes);

app.listen(PORT, "0.0.0.0", () => {
  // console.log(`🚀 Server running on port ${PORT}`);
  // console.log(
  //   `📧 Main email endpoint: http://localhost:${PORT}/api/send-email`
  // );
  // console.log(
  //   `📧 Qualified email endpoint: http://localhost:${PORT}/api/send-qualified-email`
  // );
  // console.log(
  //   `📧 Semi-qualified email endpoint: http://localhost:${PORT}/api/send-semiqualified-email`
  // );
});
