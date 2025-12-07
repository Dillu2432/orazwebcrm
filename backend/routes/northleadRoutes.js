import express from "express";
import { createLead, getLeads, updateLeadStep } from "../controllers/northleadController.js";

const router = express.Router();

router.post("/", createLead);
router.get("/", getLeads);
router.put("/:id/step2", updateLeadStep); // update step

export default router;
