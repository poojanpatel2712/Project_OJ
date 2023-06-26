import mongoose from "mongoose";

const testCaseSchema = mongoose.Schema({
  problemId: { type: mongoose.Types.ObjectId, ref: "Problems" },
  author: { type: mongoose.Types.ObjectId, ref: "Profile" },
  input: { type: String, required: true },
  output: { type: String, required: true },
  isExample: { type: Boolean, default: false },
});

export const testcaseModel = mongoose.model("testcases", testCaseSchema);