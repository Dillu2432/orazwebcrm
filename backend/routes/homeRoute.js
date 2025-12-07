import express from "express";
import { createAppointment, getAppointments } from "../controllers/homeController.js";

const router = express.Router();

// POST /api/appointments
router.post("/appointments", createAppointment);

// GET /api/appointments
router.get("/leadsappointments", getAppointments);

export default router;
