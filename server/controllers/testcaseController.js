import { testcaseModel } from "../models/testcaseModel.js";

const GetTestcaseList = async (req, res) => {
  try {
    const { problemid } = req.params;
    const testcaseList = await testcaseModel.find({ problemId: problemid });
    return res.status(200).json({ testcaseList });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: error.message });
  }
};

const DeleteTestcase = async (req, res) => {
  try {
    const { _id } = req.params;
    await testcaseModel.findByIdAndDelete(_id);
    return res.status(200).json({ message: "Testcase deleted." });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: error.message });
  }
};

const PostTestcase = async (req, res) => {
  try {
    const testcases = req.body;
    const testcase = await testcaseModel.create(testcases);
    return res.status(200).json({ testcase });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: error.message });
  }
};

const updateTestcase = async (req, res) => {
  try {
    const { _id } = req.params;
    const testcases = req.body;
    const testcase = await testcaseModel.findByIdAndUpdate(_id, testcases, {
      new: true,
    });
    return res.status(200).json({ testcase });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: error.message });
  }
};

export { GetTestcaseList, DeleteTestcase, updateTestcase, PostTestcase };
