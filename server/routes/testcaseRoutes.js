import express from "express";
import {
  GetTestcaseList,
  DeleteTestcase,
  updateTestcase,
  PostTestcase,
} from "../controllers/testcaseController.js";

const router = express.Router();

router.get("/GetTestcaseList/:_id", GetTestcaseList);
router.post("/PostTestcase", PostTestcase);
router.put("/updateTestcase/:_id", updateTestcase);
router.delete("/DeleteTestcase/:_id", DeleteTestcase);

export default router;
