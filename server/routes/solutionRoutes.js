import express from "express"
import { GetSolution,PostSolution,submitProblem } from "../controllers/solutionController.js";
import passport from "passport";
const router = express.Router();

router.get("/:id",GetSolution);
router.post("/postsolution",PostSolution);
router.post(
    "/submit/:problemId",
    passport.authenticate("jwt"),
    submitProblem
  );
export default router;