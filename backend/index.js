import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import leadRoutes from "./routes/leadRoutes.js"; // ✅ add .js
import adminRoutes from "./routes/adminRoutes.js";
import NorthleadRoutes from "./routes/northleadRoutes.js"; // ✅ add .js
import appointmentRoutes from "./routes/homeRoute.js";
import facebookCapiRoute from "./routes/facebookCapiRoute.js";

const app = express();
const PORT = 5000;
dotenv.config();
// ✅ Middleware to parse JSON
app.use(express.json());

// ✅ Middleware for CORS
app.use(cors());

// ✅ Mount your routes
app.use("/api/leads", leadRoutes);
app.use("/api/northleads", NorthleadRoutes);
app.use("/api/admin", adminRoutes);
app.use("/api/home", appointmentRoutes);
app.use("/api/meta", facebookCapiRoute);



// Verify token route
import jwt from "jsonwebtoken";
app.get("/api/verify-token", (req, res) => {
  const authHeader = req.headers.authorization;
  if (!authHeader) return res.status(401).json({ error: "No token provided" });

  const token = authHeader.split(" ")[1];
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    res.json({ valid: true, user: decoded });
  } catch (err) {
    res.status(401).json({ error: "Invalid token" });
  }
});

// ✅ Test route
app.get("/", (req, res) => {
  res.send("API running...");
});

app.listen(PORT, () => {
  console.log(`✅ Server running on http://localhost:${PORT}`);
});
