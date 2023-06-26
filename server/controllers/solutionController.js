import {solutionModel} from "../models/solutionModel.js";

const GetSolution = async(req,res) => {
    try{
        const {_id} = req.params;
        const solution = await solutionModel.findById(_id);
        return res.status(200).json({solution});
    }
    catch(error){
        console.log(error);
        return res.status(500).json({ error: error.message });
    }
}

const PostSolution = async(req,res) => {
    try{
        const solution = req.body;
        const sol = await solutionModel.create(solution);
        return res.status(200).json({sol});
    }
    catch(error){
        console.log(error);
        return res.status(500).json({ error : error.message});
    }
}


export {GetSolution, PostSolution};