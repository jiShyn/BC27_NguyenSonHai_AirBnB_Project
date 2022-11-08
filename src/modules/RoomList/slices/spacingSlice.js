import { createSlice } from "@reduxjs/toolkit";

const initialState = {
   heightHeader: 0,
};

const spacingSlice = createSlice({
   name: "spacingHeader",
   initialState,
   reducers: {
      getHeightHeader: (state, { payload }) => {
         state.heightHeader = payload;
         console.log("heightHeader slices", state.heightHeader);
      },
   },
});

export const { getHeightHeader } = spacingSlice.actions;
export default spacingSlice.reducer;
