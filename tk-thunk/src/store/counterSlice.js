import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';


// Action이 dispatch되어 reducer로 들어가기 전 특정 로직을 수행할 수 있다.
const asyncUpFetch = createAsyncThunk(
  'counterSlice/asyncUpFetch',
  async () => {
    const resp = await fetch('https://api.countapi.xyz/hit/opesaljkdfslkjfsadf.com/visits')
    const data = await resp.json();
    return data.value;
  }
)

const counterSlice = createSlice({
  name: 'counterSlice',
  initialState: { value: 0, status: 'welcome' },
  reducers: {
    up: (state, action) => {
      console.log(action);
      state.value = state.value + action.payload;
    },
    down: (state, action) => {
      console.log(action);
      state.value = state.value - action.payload;
    }
  },
  extraReducers: (builder) => {
    builder.addCase(asyncUpFetch.fulfilled, (state, action) => {
      state.value = action.payload;
      state.status = 'complete';
    })
    builder.addCase(asyncUpFetch.rejected, (state, action) => {
      state.status = 'fail';
    })
  }
});

export default counterSlice;
export const { up, down } = counterSlice.actions;
export { asyncUpFetch };