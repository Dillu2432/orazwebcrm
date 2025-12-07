import express from "express";
import { loginAdmin, changePassword } from "../controllers/adminController.js";
import { authenticate } from "../middlewares/auth.js";

const router = express.Router();

router.post("/login", loginAdmin);
router.put("/change-password", authenticate, changePassword);

export default router;
