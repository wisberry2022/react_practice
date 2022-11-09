import { combineReducers } from "@reduxjs/toolkit";
import { HYDRATE } from "next-redux-wrapper";
import introSlice from "./introData";

const reducer = (state, action) => {
  if (action.type === 'HYDRATE') {
    return {
      ...state,
      ...action.payload,
    };
  }
  return combineReducers({
    introSlice,
  })(state, action);
}

export default reducer;
