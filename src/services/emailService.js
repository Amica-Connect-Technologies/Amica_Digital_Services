import { transporter } from "../config/mailer.js";

export const sendEmail = async (formData) => {
  const formattedData = Object.entries(formData)
    .map(([key, value]) => {
      if (Array.isArray(value)) {
        return `<p><b>${key}:</b> ${value.join(", ")}</p>`;
      }
      return `<p><b>${key}:</b> ${value}</p>`;
    })
    .join("");

  return await transporter.sendMail({
    from: `"Amica Website" <${process.env.EMAIL_USER}>`,
    to: process.env.EMAIL_TO,
    replyTo: formData.email,
    subject: "New Amica Smart Intake Submission",
    html: `
      <h2>New Intake Form Submission</h2>
      ${formattedData}
    `,
  });
};
