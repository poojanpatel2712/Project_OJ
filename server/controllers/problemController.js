import { problemModel } from "../models/problemModel.js";

const GetProblem = async (req, res) => {
  try {
    const { _id } = req.params;
    const prob = await problemModel.findById(_id);
    return res.status(200).json({ prob });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: error.message });
  }
};

const PostProblem = async (req, res) => {
  try {
    const problem_data = req.body;
    await problemModel.FindProblemByTitle(problem_data);
    const problem = await problemModel.create(problem_data);
    return res.status(200).json({ success: true });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: error.message });
  }
};

const GetProblemList = async (req, res) => {
  try {
    const problems = await problemModel.find({});
    return res.status(200).json({ problems });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: error.message });
  }
};

const DeleteProblem = async (req, res) => {
  try {
    const { _id } = req.params;
    await problemModel.findByIdAndDelete(_id);
    return res.status(200).json({ message: "Problem successfully deleted !! " });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: error.message });
  }
};

export { GetProblem, PostProblem, GetProblemList, DeleteProblem };
