import db from "../config/database.js";
import nodemailer from "nodemailer";

// ✅ Create a new lead (Step 1) and send email to 3 recipients
export const createLead = async (req, res) => {
 const { name, phone, email, utm_source, utm_medium, utm_campaign, fbclid } = req.body;


  if (!name || !phone || !email) {
    return res.status(400).json({ error: "All fields are required" });
  }

   const sql = `
    INSERT INTO hadentalleads
      (name, phone, email,  step, utm_source, utm_medium, utm_campaign, fbclid)
    VALUES (?, ?, ?, '1', ?, ?, ?, ?)
  `;
  
   db.query(sql, [name, phone, email,  utm_source || "", utm_medium || "", utm_campaign || "", fbclid || ""], async (err, result) => {
    if (err) {
      console.error("Error inserting lead:", err);
      return res.status(500).json({ error: "Database error" });
    }

    const leadId = result.insertId;

    // Send email on Step 1 completion
    try {
      const transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 587,
        secure: false,
        auth: {
          user: "manhasrushal@gmail.com",        // replace with your clinic email
          pass: "grzvokcwzdzaoziw",         // app password if using Gmail
        },
      });

      const userMailOptions = {
          from: '"H. A. Dental Group" <your-email@gmail.com>',
          to: email,
          subject: "Thank you for contacting H.A. Dental Group 🦷✨",
          html: `
            <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
              <h2 style="color: #FF9800;">Hi ${name},</h2>
              <p>Thank you for reaching out to <strong>H.A. Dental Group</strong>.</p>
              <p>We’ve received your request regarding <strong>New Patient Exam</strong>. Our team will contact you shortly.</p>

              <h3 style="color: #007BFF;">Your Submitted Details:</h3>
              <table style="border-collapse: collapse; width: 100%; max-width: 500px;">
                <tr>
                  <td style="padding: 5px; font-weight: bold;">Name:</td>
                  <td style="padding: 5px;">${name}</td>
                </tr>
                <tr style="background-color: #f7f7f7;">
                  <td style="padding: 5px; font-weight: bold;">Phone:</td>
                  <td style="padding: 5px;">${phone}</td>
                </tr>
                <tr>
                  <td style="padding: 5px; font-weight: bold;">Email:</td>
                  <td style="padding: 5px;">${email}</td>
                </tr>
                <tr style="background-color: #f7f7f7;">
                  <td style="padding: 5px; font-weight: bold;">Service:</td>
                  <td style="padding: 5px;">New Patient Exam</td>
                </tr>
              </table>

              <p style="margin-top: 15px;">
                <strong>What happens next?</strong><br/>
                Our team will get in touch within 24 hours to confirm your consultation and answer any questions.
              </p>

              <p style="margin-top: 20px; color: #3156A3; font-weight: bold;">
                We’re excited to help you achieve a healthier, brighter smile! 😁
              </p>
            </div>
          `,
        };

        // --- Email for the Client/Internal Team ---
        const clientMailOptions = {
          from: '"H. A. Dental Group" <your-email@gmail.com>',
          to: "contact@hadentalgroup.com", // replace with your internal email
          subject: `New Patient Lead from Meta Ads 🚀`,
          html: `
            <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
              <h5>Hello Team</h5>
              <p>You have a new lead from the [Service Option] campaign:</p>
              <p>👤 Lead Details:</p>
              <p><strong>Name:</strong> ${name}</p>
              <p><strong>Email:</strong> ${email}</p>
              <p><strong>Phone:</strong> ${phone}</p>
              <p><strong>Service:</strong> New Patient Exam</p>
              <p>Follow up with the lead as soon as possible.</p>
            </div>
          `,
        };

        // Send both emails
        const userMailInfo = await transporter.sendMail(userMailOptions);
        const clientMailInfo = await transporter.sendMail(clientMailOptions);

      await transporter.sendMail(mailOptions);
      console.log(`Email sent successfully to: ${recipients.join(", ")}`);
    } catch (emailErr) {
      console.error("Error sending email:", emailErr);
    }

    res.status(201).json({ id: leadId, name, phone, email, step: '1' });
  });
};

// ✅ Get all leads
export const getLeads = (req, res) => {
  const sql = "SELECT * FROM hadentalleads ORDER BY created_at DESC";
  db.query(sql, (err, results) => {
    if (err) {
      console.error("Error fetching leads:", err);
      return res.status(500).json({ error: "Database error" });
    }
    res.json(results);
  });
};

// ✅ Update lead step (Step 2)
export const updateLeadStep = (req, res) => {
  const { id } = req.params;
  const { step } = req.body;

  if (!['1','2'].includes(step)) {
    return res.status(400).json({ error: "Invalid step" });
  }

  const sql = "UPDATE hadentalleads SET step = ? WHERE id = ?";
  db.query(sql, [step, id], (err, result) => {
    if (err) {
      console.error("Error updating lead step:", err);
      return res.status(500).json({ error: "Database error" });
    }
    res.json({ id, step });
  });
};
