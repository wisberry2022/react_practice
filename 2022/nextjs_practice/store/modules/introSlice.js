import { createSlice } from '@reduxjs/toolkit';

const initialState = [
  { id: 1, title: 'lorem ipsum', desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente voluptatibus sequi, praesentium ducimus suscipit iste?' },
  { id: 2, title: 'lorem ipsum', desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente voluptatibus sequi, praesentium ducimus suscipit iste?' },
  { id: 3, title: 'lorem ipsum', desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente voluptatibus sequi, praesentium ducimus suscipit iste?' },
  { id: 4, title: 'lorem ipsum', desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente voluptatibus sequi, praesentium ducimus suscipit iste?' },
  { id: 5, title: 'lorem ipsum', desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente voluptatibus sequi, praesentium ducimus suscipit iste?' },
  { id: 6, title: 'lorem ipsum', desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente voluptatibus sequi, praesentium ducimus suscipit iste?' }
];

const introSlice = createSlice({
  name: 'introSlice',
  initialState,
  reducers: {
    GET: (state, action) => { return state; }
  }
})

export const { GET } = introSlice.actions;
export default introSlice.reducer;