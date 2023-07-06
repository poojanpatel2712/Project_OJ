import { solutionModel } from "../models/solutionModel.js";
import { testcaseModel } from "../models/testcaseModel.js";
import { generateFile,executeCpp } from "../Helper/fileGenerator.js";


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
    const author = req.session.passport.user._doc._id;
    const testcases = await testcaseModel.find({
        problemId: problemId,
    });
    
    if (!code) {
        return res.status(404).json({ success: false, error: "Empty code !!" });
    }
    
    // console.log(testcases);
    for (let i = 0; i < testcases.length; i++) {
        const testcase = testcases[i];
        const filePath = await generateFile(language, code);
        const output = await executeCpp(filePath, testcase.input);
        const pureStringOutput = output.replace(/(?:\r\n|\r|\n)/g, "");
        const pureStringtestcaseOutput = testcase.output.replace(
          /(?:\r\n|\r|\n)/g,
          ""
          );
          const success =
          pureStringOutput.toLowerCase() ==
          pureStringtestcaseOutput.toLowerCase();
          
          if (!success) {
            const solution = await solutionModel.create({
              problemId: problemId,
              verdict: "Failed",
              // message: `Wrong Answer on testcase ${index + 1}`,
                submittedBy: author,
              submittedAt: new Date(),
            });
            console.log(i+1);
        return res.status(200).json({ solution });
      }
    }
    const solution = await solutionModel.create({
      problem: problemId,
      verdict: "Accepted",
    //   message: `Accepted`,
      submittedBy: author,
      submittedAt: new Date(),
    });

    return res.status(200).json({ solution });
  } catch (error) {
    return res.status(500).json({ error: error });
  }
};

export { GetSolution, PostSolution, submitProblem };
