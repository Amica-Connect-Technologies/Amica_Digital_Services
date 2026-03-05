export const getWelcomeEmailTemplate = (data) => {
  const { firstName, formattedServices, leadId, website } = data;

  return `
      <!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>We received your request</title>
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
                      <span style="font-size: 32px;">🚀</span>
                    </div>
                    <h1 style="color: white; margin: 0 0 8px 0; font-size: 28px; font-weight: 700;">
                      Thanks for reaching out, ${firstName}! 👋
                    </h1>
                    <p style="color: rgba(255,255,255,0.9); margin: 0; font-size: 16px;">
                      We've received your enquiry about ${formattedServices}
                    </p>
                  </td>
                </tr>
  
                <!-- Content -->
                <tr>
                  <td style="padding: 40px 32px;">
                    
                    <!-- What happens next -->
                    <h2 style="color: #1f2937; font-size: 20px; font-weight: 700; margin: 0 0 24px 0;">
                      What happens next:
                    </h2>
                    
                    <div style="margin-bottom: 32px;">
                      <div style="display: flex; align-items: flex-start; gap: 16px; margin-bottom: 20px;">
                        <div style="background: #e8f0fe; width: 40px; height: 40px; border-radius: 40px; display: flex; align-items: center; justify-content: center; flex-shrink: 0;">
                          <span style="color: #137fec; font-weight: 700; font-size: 18px;">1</span>
                        </div>
                        <div>
                          <h3 style="color: #1f2937; font-size: 16px; font-weight: 700; margin: 0 0 4px 0;">
                            We review your answers
                          </h3>
                          <p style="color: #6b7280; margin: 0;">
                            Our team will carefully review your requirements and goals.
                          </p>
                        </div>
                      </div>
                      
                      <div style="display: flex; align-items: flex-start; gap: 16px; margin-bottom: 20px;">
                        <div style="background: #e8f0fe; width: 40px; height: 40px; border-radius: 40px; display: flex; align-items: center; justify-content: center; flex-shrink: 0;">
                          <span style="color: #137fec; font-weight: 700; font-size: 18px;">2</span>
                        </div>
                        <div>
                          <h3 style="color: #1f2937; font-size: 16px; font-weight: 700; margin: 0 0 4px 0;">
                            We match you to the right specialist
                          </h3>
                          <p style="color: #6b7280; margin: 0;">
                            Based on your needs, we'll connect you with the most suitable expert.
                          </p>
                        </div>
                      </div>
                      
                      <div style="display: flex; align-items: flex-start; gap: 16px; margin-bottom: 32px;">
                        <div style="background: #e8f0fe; width: 40px; height: 40px; border-radius: 40px; display: flex; align-items: center; justify-content: center; flex-shrink: 0;">
                          <span style="color: #137fec; font-weight: 700; font-size: 18px;">3</span>
                        </div>
                        <div>
                          <h3 style="color: #1f2937; font-size: 16px; font-weight: 700; margin: 0 0 4px 0;">
                            You'll receive the next step
                          </h3>
                          <p style="color: #6b7280; margin: 0;">
                            We'll send you a calendar link or any clarifying questions we might have.
                          </p>
                        </div>
                      </div>
                    </div>
  
                    <!-- Reference Box -->
                    <div style="background: #f3f4f6; border-radius: 12px; padding: 24px; margin-bottom: 32px; border-left: 4px solid #137fec;">
                      <p style="color: #4b5563; margin: 0 0 8px 0; font-size: 14px;">
                        Your reference:
                      </p>
                      <p style="color: #137fec; font-size: 24px; font-weight: 700; margin: 0 0 4px 0; font-family: monospace;">
                        ${leadId}
                      </p>
                      <p style="color: #9ca3af; margin: 0; font-size: 13px;">
                        Please quote this reference if you contact us
                      </p>
                    </div>
  
                    <!-- Speed up section -->
                    <div style="background: #fef3c7; border-radius: 12px; padding: 24px; margin-bottom: 32px;">
                      <h3 style="color: #92400e; font-size: 16px; font-weight: 700; margin: 0 0 12px 0;">
                        ⚡ Want to speed this up?
                      </h3>
                      <p style="color: #78350f; margin: 0 0 16px 0;">
                        Reply to this email with:
                      </p>
                      <ol style="color: #78350f; margin: 0 0 0 20px; padding: 0;">
                        <li style="margin-bottom: 8px;">your website URL ${
                          website ? "(already provided)" : ""
                        }</li>
                        <li style="margin-bottom: 8px;">your main offer / service list</li>
                        <li style="margin-bottom: 8px;">the city/country you target</li>
                      </ol>
                    </div>
  
                    <!-- Signature -->
                    <div style="border-top: 2px solid #e5e7eb; padding-top: 24px;">
                      <p style="color: #1f2937; margin: 0 0 16px 0; font-weight: 500;">
                        Best regards,<br>
                        <strong style="color: #137fec;">Amica Digital Services Team</strong>
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
                    <p style="color: #6b7280; font-size: 13px; margin: 0 0 8px 0;">
                      © ${new Date().getFullYear()} Amica Digital Services. All rights reserved.
                    </p>
                    <p style="color: #9ca3af; font-size: 12px; margin: 0;">
                      378 Claremont Road, Manchester, M14 7WB
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
