import axios from "axios";
import { GET_PROBLEMS_LIST, GET_PROBLEM_BY_ID } from "./problemTypes";

export const getProblemList = () => async (dispatch) => {
  try {
    const problems = await axios({
      url: "http://localhost:4000/OJ/problem/GetProblemList",
      method: "GET",
    });

    return dispatch({ type: GET_PROBLEMS_LIST, payload: problems });
  } catch (error) {
    return dispatch({ type: "ERROR", payload: error });
  }
};

export const getProblemByID = (_id) => async (dispatch) => {
  try {
    const problem = await axios({
      url: `http://localhost:4000/OJ/problem/GetProblem/${_id}`,
      method: "GET",
    });
    return dispatch({ type: GET_PROBLEM_BY_ID, payload: problem });
  } catch (error) {
    return dispatch({ type: "ERROR", payload: error });
  }
};
