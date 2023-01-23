import axios from 'axios';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const getData = createAsyncThunk(
  'dataSlice/getData',
  async (argv) => {
    let data = await axios.get(argv.url + `?key=${argv.key}&itemPerPage=${argv.totalList}`);
    return data.data.peopleListResult.peopleList;
  }
)

const dataSlice = createSlice({
  name: 'dataSlice',
  initialState: { state: 'welcome', data: [] },
  reducers: {
    GET: (state, action) => {
      return state;
    },
    SEARCH: (state, action) => {
      state.data = state.data.filter(it => { return it.name === action.payload });
    }
  },
  extraReducers: (builder) => {
    builder.addCase(getData.pending, (state, action) => {
      state.status = 'wait a minute...';
    })
    builder.addCase(getData.fulfilled, (state, action) => {
      state.status = 'complete';
      console.log(`payload:`, action.payload);
      state.data = action.payload.map((it, idx) => {
        return {
          id: idx,
          name: it.peopleNm,
          role: it.repRoleNm,
          filmo: it.filmoNames.split('|'),
        }
      })
    })
  }
})

export default dataSlice;
export { getData };
export const { SEARCH } = dataSlice.actions;