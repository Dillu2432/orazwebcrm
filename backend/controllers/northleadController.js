import db from "../config/database.js";
import nodemailer from "nodemailer";

// ✅ Create a new lead (Step 1) and send email to 3 recipients

export const createLead = async (req, res) => {
  const {
    name,
    phone,
    email,
    utm_source,
    utm_medium,
    utm_campaign,
    fbclid,
    from_source,
  } = req.body;

  if (!name || !phone || !email) {
    return res.status(400).json({ error: "All fields are required" });
  }

  // ✅ Fallback value for from_source
  const source = from_source || "new patient";

  const sql = `
    INSERT INTO northentalleads
      (name, phone, email, step, utm_source, utm_medium, utm_campaign, fbclid, from_source)
    VALUES (?, ?, ?, '1', ?, ?, ?, ?, ?)
  `;

  db.query(
    sql,
    [
      name,
      phone,
      email,
      utm_source || "",
      utm_medium || "",
      utm_campaign || "",
      fbclid || "",
      source,
    ],
    async (err, result) => {
      if (err) {
        console.error("❌ Error inserting lead:", err);
        return res.status(500).json({ error: "Database error" });
      }

      const leadId = result.insertId;

      try {
        const transporter = nodemailer.createTransport({
          host: "smtp.gmail.com",
          port: 587,
          secure: false,
          auth: {
            user: "manhasrushal@gmail.com",
            pass: "grzvokcwzdzaoziw",
          },
        });

        // 📩 Email to user
        const userMailOptions = {
          from: '"North Dental Studio" <manhasrushal@gmail.com>',
          to: email,
          subject: "Thank you for contacting North Dental Studio 🦷✨",
          html: `
             <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
              <h2 style="color: #FF9800;">Hi ${name},</h2>
              <p>Thank you for reaching out to <strong>North Dental Studio</strong>.</p>
              <p>We’ve received your request regarding <strong>${from_source}</strong>. Our team will contact you shortly.</p>

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
                  <td style="padding: 5px;">${from_source}</td>
                </tr>
              </table>

              <p style="margin-top: 15px;">
                <strong>What happens next?</strong><br/>
                Our team will get in touch within 24 hours to confirm your consultation and answer any questions.
              </p>

              <p style="margin-top: 20px; color: #24382D; font-weight: bold;">
                We’re excited to help you achieve a healthier, brighter smile! 😁
              </p>
            </div>
          `,
        };

        // 📩 Email to internal team
        const clientMailOptions = {
          from: '"North Dental Studio" <manhasrushal@gmail.com>',
          to: "hello@northdentalstudio.ca", // ✅ internal notification email
          subject: `🚀 New Lead: ${source}`,
          html: `
             <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
              <h5>Hello Team</h5>
              <p>You have a new lead from the [Service Option] campaign:</p>
              <p>👤 Lead Details:</p>
              <p><strong>Name:</strong> ${name}</p>
              <p><strong>Email:</strong> ${email}</p>
              <p><strong>Phone:</strong> ${phone}</p>
              <p><strong>Looking for</strong> ${from_source}</p>
              <p>Follow up with the lead as soon as possible.</p>
            </div>
          `,
        };

        await transporter.sendMail(userMailOptions);
        await transporter.sendMail(clientMailOptions);

        console.log("✅ Emails sent successfully for lead:", leadId);
      } catch (emailErr) {
        console.error("⚠️ Error sending email:", emailErr);
      }

      res.status(201).json({
        id: leadId,
        name,
        phone,
        email,
        step: "1",
        from_source: source,
      });
    }
  );
};

// ✅ Get all leads
export const getLeads = (req, res) => {
  const sql = "SELECT * FROM northentalleads ORDER BY created_at DESC";
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

  const sql = "UPDATE northentalleads SET step = ? WHERE id = ?";
  db.query(sql, [step, id], (err, result) => {
    if (err) {
      console.error("Error updating lead step:", err);
      return res.status(500).json({ error: "Database error" });
    }
    res.json({ id, step });
  });
};
