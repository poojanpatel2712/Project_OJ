import express from "express";
import authRoutes from "./authRoutes.js";
import problemRoutes from "./problemRoutes.js"
import solutioRoutes from "./solutionRoutes.js"
const router = express.Router();

router.use("/auth",authRoutes);
router.use("/problem",problemRoutes);
router.use("/solutions",solutioRoutes);
export default router;