import mongoose from "mongoose";

const editorialSchema = mongoose.Schema({
    problemId: { type: mongoose.Types.ObjectId, ref: "Problems" },
    author: { type: mongoose.Types.ObjectId, ref: "Profile" },
    code: {type: String,required: true},
    explanation: {type: String, required: true}
});

export const editorialModel = mongoose.model("editorials",editorialSchema);
