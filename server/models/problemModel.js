import mongoose from "mongoose";

const ProblemSchema = mongoose.Schema(
  {
    title: { type: String, required: true },
    statement: { type: String, required: true },
    author: { type: mongoose.Types.ObjectId, ref: "Profile" },
    difficulty: { type: String, enum: ["Easy", "Medium", "Hard"] },
    problem_tag: [{ type: String }],
    examples: [{type: String}],
    constraints: [String],
  },
  {
    timestamps: true,
  }
);

ProblemSchema.statics.FindProblemByTitle = async ({ title }) => {
  const problem = await problemModel.findOne({ title });
  if (problem) {
    throw new Error("The Problem with the same title already exist");
  }
};

export const problemModel = mongoose.model("Problems", ProblemSchema);
