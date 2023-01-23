import { createSlice } from '@reduxjs/toolkit';

const inputSlice = createSlice({
  name: 'inputSlice',
  initialState: { new: '', users: [] },
  reducers: {
    ADD: (state, action) => {
      console.log(action, state);
      state.users.push(action.payload);
    }
  }
})

export default inputSlice;
export const { ADD } = inputSlice.actions;