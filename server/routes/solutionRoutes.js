import express from "express"
import { GetSolution,PostSolution } from "../controllers/solutionController.js";
const router = express.Router();

router.get("/:id",GetSolution);
router.post("/postsolution",PostSolution);

export default router;