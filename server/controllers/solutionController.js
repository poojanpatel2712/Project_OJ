import { solutionModel } from "../models/solutionModel.js";

const GetSolution = async (req, res) => {
  try {
    const { problemId, userId } = req.params;
    const solutions = await solutionModel.find({
      problem: problemId,
      submittedBy: userId,
    });
    return res.status(200).json({ solutions });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: error.message });
  }
};

const PostSolution = async (req, res) => {
  try {
    const solution = req.body;
    const sol = await solutionModel.create(solution);
    return res.status(200).json({ sol });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: error.message });
  }
};

const submitProblem = async (req, res) => {
  try {
    const { language = "c++", code } = req.body;
    const { problemId } = req.params;
    const userId = req.session.passport.user._doc._id;

    const testcases = await TestcasesModel.find({
      problem: problemId,
    });

    if (!code) {
      return res.status(404).json({ success: false, error: "Empty code !!" });
    }

    for (let i = 0; i < testcases.length; i++) {
      const testcase = testcases[i];
      const filePath = await generateFile(language, code);
      const output = await executeCpp(filePath, testcase.input);
      const pureStringOutout = output.replace(/(?:\r\n|\r|\n)/g, "");
      const pureStringtestcaseOutput = testcase.output.replace(
        /(?:\r\n|\r|\n)/g,
        ""
      );
      const success =
        pureStringOutout.toLowerCase() ==
        pureStringtestcaseOutput.toLowerCase();

      if (!success) {
        const solution = await SolutionsModel.create({
          problem: problemId,
          verdict: "Fail",
          message: `Wrong Answer on testcase ${index + 1}`,
          submittedBy: userId,
          submittedAt: new Date(),
        });
        return res.staus(200).json({ solution });
      }
    }
    const solution = await SolutionsModel.create({
      problem: problemId,
      verdict: "Pass",
      message: `Accepted`,
      submittedBy: userId,
      submittedAt: new Date(),
    });

    return res.status(200).json({ solution });
  } catch (error) {
    return res.status(500).json({ error: error });
  }
};

export { GetSolution, PostSolution, submitProblem };
