import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  spaces: [],
  spacesWithStories: [],
};

export const spaceSlice = createSlice({
  name: "spaces",
  initialState,
  reducers: {
    setSpaces: (state, action) => {
      state.spaces = action.payload;
    },
    setSpacesWithStories: (state, action) => {
      state.spacesWithStories = action.payload;
    },
  },
});

export const { setSpaces, setSpacesWithStories } = spaceSlice.actions;
export default spaceSlice.reducer;
