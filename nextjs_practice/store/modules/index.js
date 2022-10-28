import { combineReducers } from "@reduxjs/toolkit";
import { HYDRATE } from 'next-redux-wrapper';

import introSlice from "./introSlice";

// server-side에서 생성된 store와 CSR에서 생성된 redux-store를 합쳐주기 위한 코드 
// NextJS를 통해 제공하는 getInitialProps 같은 메서드가 리덕스 스토어에 접근할 수 있게 된다.
const reducer = (state, action) => {
  if (action.type === HYDRATE) {
    return {
      ...state,
      ...action.payload,
    };
  }

  return combineReducers({
    intro: introSlice,
  })(state, action);
}

export default reducer;