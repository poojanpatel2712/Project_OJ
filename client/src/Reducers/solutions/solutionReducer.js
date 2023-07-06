import { RUN_A_PROGRAM, SUBMIT_A_SOLUTION } from "./solutionTypes";

const initialState = {
  solution: {},
};

const solutionReducer = (state = initialState, action) => {
  switch (action.type) {
    case RUN_A_PROGRAM:
      return {
        ...state,
      };
    case SUBMIT_A_SOLUTION:
      return {
        ...state,
        solution: action.payload,
      };
    default:
      return {
        ...state,
      };
  }
};

export default solutionReducer;
