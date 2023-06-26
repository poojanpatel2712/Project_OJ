import { editorialModel } from "../models/editorialModel.js";

const GetEditorial = async (req, res) => {
  try {
    const { _id } = req.params;
    const editorial = await editorialModel.find({problemId: _id});
    return res.status(200).json({ editorial });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: error.message });
  }
};

const PostEditorial = async (req, res) => {
  try {
    const editorial = req.body;
    await editorialModel.create(editorial);
    return res.status(200).json({ editorial });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: error.message });
  }
};

export { GetEditorial, PostEditorial };
