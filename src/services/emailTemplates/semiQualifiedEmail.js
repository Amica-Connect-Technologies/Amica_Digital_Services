export const getSemiQualifiedEmailTemplate = (data) => {
  const { firstName } = data;

  return `
      <!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Quick questions for your proposal</title>
      </head>
      <body style="margin: 0; padding: 0; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif; background-color: #f3f4f6; line-height: 1.6;">
        
        <!-- Main Container -->
        <table role="presentation" style="width: 100%; border-collapse: collapse; background-color: #f3f4f6; padding: 40px 20px;">
          <tr>
            <td align="center">
              
              <!-- Email Card -->
              <table role="presentation" style="max-width: 600px; width: 100%; border-collapse: collapse; background: white; border-radius: 16px; overflow: hidden; box-shadow: 0 4px 6px rgba(0,0,0,0.1);">
                
                <!-- Header -->
                <tr>
                  <td style="background: linear-gradient(135deg, #137fec 0%, #0c5fb3 100%); padding: 40px 32px; text-align: center;">
                    <div style="background: white; width: 60px; height: 60px; border-radius: 12px; display: inline-flex; align-items: center; justify-content: center; margin-bottom: 16px;">
                      <span style="font-size: 32px;">❓</span>
                    </div>
                    <h1 style="color: white; margin: 0 0 8px 0; font-size: 28px; font-weight: 700;">
                      Thanks, ${firstName}!
                    </h1>
                    <p style="color: rgba(255,255,255,0.9); margin: 0; font-size: 16px;">
                      Before we send the right plan
                    </p>
                  </td>
                </tr>
  
                <!-- Content -->
                <tr>
                  <td style="padding: 40px 32px;">
                    
                    <p style="color: #1f2937; font-size: 16px; margin: 0 0 24px 0;">
                      Can you confirm:
                    </p>
  
                    <!-- Questions List -->
                    <div style="background: #e8f0fe; border-radius: 12px; padding: 24px; margin-bottom: 24px;">
                      <ol style="color: #1f2937; margin: 0; padding: 0 0 0 20px; font-size: 16px;">
                        <li style="margin-bottom: 16px;">
                          <strong>Do you currently track enquiries?</strong><br>
                          <span style="color: #6b7280;">(CRM / Spreadsheet / None)</span>
                        </li>
                        <li style="margin-bottom: 16px;">
                          <strong>Which channel matters most?</strong><br>
                          <span style="color: #6b7280;">(Google, Ads, WhatsApp, Social)</span>
                        </li>
                        <li style="margin-bottom: 8px;">
                          <strong>What is your ideal outcome in 90 days?</strong>
                        </li>
                      </ol>
                    </div>
  
                    <div style="background: #fef3c7; border-radius: 12px; padding: 20px; margin-bottom: 32px;">
                      <p style="color: #92400e; margin: 0;">
                        <strong>👉 Reply to this email</strong> with your answers and we'll proceed with your proposal.
                      </p>
                    </div>
  
                    <!-- Signature -->
                    <div style="border-top: 2px solid #e5e7eb; margin-top: 32px; padding-top: 24px;">
                      <p style="color: #1f2937; margin: 0 0 4px 0; font-weight: 500;">
                        Best regards,
                      </p>
                      <p style="color: #1f2937; margin: 0 0 16px 0; font-weight: 700; color: #137fec;">
                        Amica Digital Services
                      </p>
                      
                      <div style="background: #f9fafb; border-radius: 8px; padding: 16px;">
                        <div style="display: flex; align-items: center; gap: 8px; margin-bottom: 8px;">
                          <span style="color: #137fec;">📞</span>
                          <a href="tel:+447808014132" style="color: #4b5563; text-decoration: none;">+44 7808 014132</a>
                        </div>
                        <div style="display: flex; align-items: center; gap: 8px;">
                          <span style="color: #137fec;">🌐</span>
                          <a href="https://www.amicadigitalservices.com" style="color: #4b5563; text-decoration: none;">www.amicadigitalservices.com</a>
                        </div>
                      </div>
                    </div>
  
                  </td>
                </tr>
  
                <!-- Footer -->
                <tr>
                  <td style="background: #f9fafb; padding: 24px 32px; border-top: 1px solid #e5e7eb; text-align: center;">
                    <p style="color: #6b7280; font-size: 13px; margin: 0;">
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
