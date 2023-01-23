import { configureStore } from '@reduxjs/toolkit';
import counterSlice from './counterSlice';
import inputSlice from './inputSlice';

const store = configureStore({
  reducer: {
    counter: counterSlice.reducer,
    input: inputSlice.reducer
  }
});

export default store;

