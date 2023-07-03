import { GET_PROBLEMS_LIST, GET_PROBLEM_BY_ID } from "./problemTypes";

const initialState = { problems: [], problem: {} };

const problemReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_PROBLEMS_LIST:
      return {
        ...state,
        problems: action.payload,
      };
    case GET_PROBLEM_BY_ID:
      return {
        ...state,
        problem: action.payload,
      };
    default:
      return {
        ...state,
      };
  }
};


export default problemReducer;