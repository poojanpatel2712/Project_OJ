import  express  from "express";
import { GetProblem, GetProblemList, PostProblem, DeleteProblem } from "../controllers/problemController.js";
const router = express.Router();

router.get("/GetProblem/:_id", GetProblem);
router.post("/PostProblem",PostProblem);
router.get("/GetProblemList", GetProblemList);
router.delete("/DeleteProblem/:_id", DeleteProblem);
export default router;