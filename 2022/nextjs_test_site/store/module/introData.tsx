import { createSlice } from "@reduxjs/toolkit";

const introSlice = createSlice({
  name: 'introSlice',
  initialState: [
    { id: 1, title: "ELM SOFT's TECH", content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum, nobis consequatur minima natus ducimus ipsam' },
    { id: 2, title: "ELM SOFT's TECH", content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum, nobis consequatur minima natus ducimus ipsam' },
    { id: 3, title: "ELM SOFT's TECH", content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum, nobis consequatur minima natus ducimus ipsam' },
    { id: 4, title: "ELM SOFT's TECH", content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum, nobis consequatur minima natus ducimus ipsam' },
    { id: 5, title: "ELM SOFT's TECH", content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum, nobis consequatur minima natus ducimus ipsam' },
    { id: 6, title: "ELM SOFT's TECH", content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum, nobis consequatur minima natus ducimus ipsam' },
  ],
  reducers: ({
    GET: (state, action) => {
      return state;
    }
  })
})

export default introSlice.reducer;