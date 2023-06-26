import { userModel } from "../models/userModel.js";

const signin = async (req, res) => {
  try {
    const userData = req.body;
    const user = await userModel.finduserNameEmailAndPassword(userData);
    const token = user.generateJWTtoken();
    return res.status(200).json({ token, success: true });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: error.message });
  }
};

const signup = async (req, res) => {
  try {
    const userData = req.body;
    await userModel.findUserNameAndEmail(userData);
    const user = await userModel.create(userData);
    const token = user.generateJWTtoken();

    return res.status(200).json({ token, success: true });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: error.message });
  }
};

export { signin, signup };
