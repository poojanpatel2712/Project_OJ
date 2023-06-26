import express from "express";
import {
  GetEditorial,
  PostEditorial,
} from "../controllers/editorialController.js";

const router = express.Router();

router.get("/:_id", GetEditorial);
router.post("/posteditorial", PostEditorial);

export default router;
