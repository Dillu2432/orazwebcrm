import express from "express";
import { createLead, getLeads, updateLeadStep } from "../controllers/leadController.js";

const router = express.Router();

router.post("/", createLead);
router.get("/", getLeads);
router.put("/:id/step2", updateLeadStep); // update step

export default router;
