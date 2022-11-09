import { configureStore } from "@reduxjs/toolkit";
import { createWrapper } from "next-redux-wrapper";
import reducer from "./module";

const makeStore = (context) => configureStore({
  reducer,
});

export const wrapper = createWrapper(makeStore);