import axios from "axios";

import { SUBMIT_A_SOLUTION } from "./solutionTypes";

const submitSolution =
  ({ problemData, _id }) =>
  async (dispatch) => {
    try {
      const solution = await axios({
        url: `http://localhost:4000/OJ/solutions/submit/${_id}`,
        method: "POST",
        data: problemData,

    });

      return dispatch({ type: SUBMIT_A_SOLUTION, payload: solution });
    } catch (error) {
      return dispatch({ type: "ERROR", payload: error });
    }
  };

export { submitSolution };
