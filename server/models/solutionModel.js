import mongoose from "mongoose";

const solutionShema = mongoose.Schema({
  problemId: { type: mongoose.Types.ObjectId, ref: "Problems" },
  author: { type: mongoose.Types.ObjectId, ref: "Profile" },
  code: { type: String },
  verdict: { type: String, enum: ["Accepted", "Failed"] },
  submittedAt: Date,
},{
    timestamps: true,
});

export const solutionModel = mongoose.model("solutions", solutionShema);
