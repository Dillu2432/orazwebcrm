import express from "express";
import crypto from "crypto";
import fetch from "node-fetch";

const router = express.Router();

// Hash function for FB user_data
const sha256 = (value) =>
  crypto.createHash("sha256").update(value).digest("hex");

router.post("/send-capi", async (req, res) => {
  try {
    const { event_name, email, phone, event_id } = req.body;

    const payload = {
      data: [
        {
          event_name,
          event_time: Math.floor(Date.now() / 1000),
          event_id: event_id || undefined,
          action_source: "website",
          user_data: {
            em: email ? [sha256(email.trim().toLowerCase())] : [],
            ph: phone ? [sha256(phone.trim())] : [],
            client_user_agent: req.headers["user-agent"],
            fbc: req.body.fbc || "",
            fbp: req.body.fbp || "",
          },
        },
      ],
    };

    const response = await fetch(
      `https://graph.facebook.com/v18.0/2456747194718674/events?access_token=${process.env.FB_CONVERSION_TOKEN}`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      }
    );

    const result = await response.json();
    return res.json(result);
  } catch (err) {
    console.error("CAPI Error:", err);
    res.status(500).json({ error: "Conversion API failed" });
  }
});

export default router;
