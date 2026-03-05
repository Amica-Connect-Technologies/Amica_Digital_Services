import { sections, formatValue } from "../utils/emailHelpers.js";

export const getTeamEmailTemplate = (data) => {
  const {
    leadId,
    companyName,
    firstName,
    formattedServices,
    submissionTime,
    ...mappedData
  } = data;

  // Build sections HTML
  const sectionsHTML = Object.entries(sections)
    .map(([sectionTitle, fields]) => {
      const fieldsHTML = fields
        .map(({ key, label }) => {
          const value = mappedData[key];
          return `
            <tr>
              <td style="padding: 12px 16px; border-bottom: 1px solid #e5e7eb; font-weight: 600; color: #374151; width: 200px; vertical-align: top; background-color: #f9fafb;">
                ${label}
              </td>
              <td style="padding: 12px 16px; border-bottom: 1px solid #e5e7eb; color: #1f2937;">
                ${formatValue(value)}
              </td>
            </tr>
          `;
        })
        .join("");

      return `
        <div style="margin-bottom: 32px;">
          <h2 style="color: #137fec; font-size: 18px; font-weight: 700; margin-bottom: 16px; padding-bottom: 8px; border-bottom: 2px solid #137fec;">
            ${sectionTitle}
          </h2>
          <table style="width: 100%; border-collapse: collapse; background: white; border-radius: 8px; overflow: hidden; box-shadow: 0 1px 3px rgba(0,0,0,0.1);">
            ${fieldsHTML}
          </table>
        </div>
      `;
    })
    .join("");

  return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>New Intake Form Submission</title>
    </head>
    <body style="margin: 0; padding: 0; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif; background-color: #f3f4f6; line-height: 1.6;">
      
      <!-- Main Container -->
      <table role="presentation" style="width: 100%; border-collapse: collapse; background-color: #f3f4f6; padding: 40px 20px;">
        <tr>
          <td align="center">
            
            <!-- Email Card -->
            <table role="presentation" style="max-width: 700px; width: 100%; border-collapse: collapse; background: white; border-radius: 16px; overflow: hidden; box-shadow: 0 4px 6px rgba(0,0,0,0.1);">
              
              <!-- Header -->
              <tr>
                <td style="background: linear-gradient(135deg, #137fec 0%, #0c5fb3 100%); padding: 40px 32px; text-align: center;">
                  <div style="background: white; width: 60px; height: 60px; border-radius: 12px; display: inline-flex; align-items: center; justify-content: center; margin-bottom: 16px;">
                    <span style="font-size: 32px;">🚀</span>
                  </div>
                  <h1 style="color: white; margin: 0; font-size: 28px; font-weight: 800; letter-spacing: -0.5px;">
                    New Amica Smart Intake Submission!
                  </h1>
                  <p style="color: rgba(255,255,255,0.9); margin: 8px 0 4px 0; font-size: 14px;">
                    Received ${submissionTime}
                  </p>
                  <p style="color: #fef3c7; margin: 0; font-size: 16px; font-weight: 600;">
                    Lead ID: ${leadId}
                  </p>
                </td>
              </tr>

              <!-- Quick Summary Banner -->
              <tr>
                <td style="background: #fef3c7; padding: 24px 32px; border-left: 4px solid #f59e0b;">
                  <table style="width: 100%;">
                    <tr>
                      <td style="width: 50%; padding-right: 12px;">
                        <div style="font-size: 12px; color: #92400e; font-weight: 600; text-transform: uppercase; letter-spacing: 0.5px; margin-bottom: 4px;">
                          Company
                        </div>
                        <div style="font-size: 18px; font-weight: 700; color: #78350f;">
                          ${companyName}
                        </div>
                      </td>
                      <td style="width: 50%; padding-left: 12px;">
                        <div style="font-size: 12px; color: #92400e; font-weight: 600; text-transform: uppercase; letter-spacing: 0.5px; margin-bottom: 4px;">
                          Name
                        </div>
                        <div style="font-size: 18px; font-weight: 700; color: #78350f;">
                          ${mappedData.fullName || "Not provided"}
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td style="width: 50%; padding-right: 12px; padding-top: 12px;">
                        <div style="font-size: 12px; color: #92400e; font-weight: 600; text-transform: uppercase; letter-spacing: 0.5px; margin-bottom: 4px;">
                          Contact
                        </div>
                        <div style="font-size: 18px; font-weight: 700; color: #78350f;">
                          ${mappedData.phoneWhatsapp || "Not provided"}
                        </div>
                      </td>
                      <td style="width: 50%; padding-left: 12px; padding-top: 12px;">
                        <div style="font-size: 12px; color: #92400e; font-weight: 600; text-transform: uppercase; letter-spacing: 0.5px; margin-bottom: 4px;">
                          Services
                        </div>
                        <div style="font-size: 16px; font-weight: 700; color: #78350f;">
                          ${formattedServices}
                        </div>
                      </td>
                    </tr>
                  </table>
                </td>
              </tr>

              <!-- Content -->
              <tr>
                <td style="padding: 40px 32px;">
                  
                  <!-- Priority Actions -->
                  <div style="background: #eff6ff; border: 2px solid #3b82f6; border-radius: 12px; padding: 20px; margin-bottom: 32px;">
                    <div style="display: flex; align-items: center; margin-bottom: 12px;">
                      <span style="font-size: 20px; margin-right: 8px;">⚡</span>
                      <h3 style="margin: 0; color: #1e40af; font-size: 16px; font-weight: 700;">
                        Quick Actions
                      </h3>
                    </div>
                    ${
                      mappedData.email
                        ? `
                      <a href="mailto:${mappedData.email}" style="display: inline-block; background: #137fec; color: white; text-decoration: none; padding: 12px 24px; border-radius: 8px; font-weight: 600; margin-right: 12px; margin-bottom: 8px;">
                        📧 Email ${firstName}
                      </a>
                    `
                        : ""
                    }
                    ${
                      mappedData.website
                        ? `
                      <a href="${mappedData.website}" target="_blank" style="display: inline-block; background: #6366f1; color: white; text-decoration: none; padding: 12px 24px; border-radius: 8px; font-weight: 600; margin-bottom: 8px;">
                        🌐 Visit Website
                      </a>
                    `
                        : ""
                    }
                    ${
                      mappedData.phoneWhatsapp &&
                      mappedData.phoneWhatsapp !== "Not provided"
                        ? `
                      <a href="tel:${mappedData.phoneWhatsapp}" style="display: inline-block; background: #10b981; color: white; text-decoration: none; padding: 12px 24px; border-radius: 8px; font-weight: 600; margin-bottom: 8px;">
                        📞 Call ${firstName}
                      </a>
                    `
                        : ""
                    }
                  </div>

                  <!-- Form Details -->
                  ${sectionsHTML}

                  <!-- Additional Notes -->
                  ${
                    mappedData.biggestIssue &&
                    mappedData.biggestIssue !== "Not provided"
                      ? `
                    <div style="background: #fef2f2; border-left: 4px solid #ef4444; padding: 20px; margin-top: 32px; border-radius: 8px;">
                      <h3 style="color: #991b1b; font-size: 16px; font-weight: 700; margin: 0 0 12px 0;">
                        🎯 Biggest Issue / Challenge
                      </h3>
                      <p style="color: #7f1d1d; margin: 0; line-height: 1.6;">
                        ${mappedData.biggestIssue}
                      </p>
                    </div>
                  `
                      : ""
                  }

                </td>
              </tr>

              <!-- Footer -->
              <tr>
                <td style="background: #f9fafb; padding: 24px 32px; border-top: 1px solid #e5e7eb; text-align: center;">
                  <p style="color: #6b7280; font-size: 13px; margin: 0 0 8px 0;">
                    Lead ID: ${leadId} | This email was generated from your Amica Digital Services intake form
                  </p>
                  <p style="color: #9ca3af; font-size: 12px; margin: 0;">
                    © ${new Date().getFullYear()} Amica Digital Services. All rights reserved.
                  </p>
                </td>
              </tr>

            </table>
            
          </td>
        </tr>
      </table>

    </body>
    </html>
  `;
};
