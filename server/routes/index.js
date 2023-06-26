import express from "express";
import authRoutes from "./authRoutes.js";
import problemRoutes from "./problemRoutes.js"
import solutioRoutes from "./solutionRoutes.js"
import editorialRoutes from "./editorialRoutes.js"
const router = express.Router();

router.use("/auth",authRoutes);
router.use("/problem",problemRoutes);
router.use("/solutions",solutioRoutes);
router.use("/editorials",editorialRoutes);
export default router;