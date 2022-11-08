import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  token: localStorage.getItem("token"),
  profile: null,
  mySpace: null,
  message: "",
  form: false,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    loginSuccess: (state, action) => {
      console.log("payload in slice user", action.payload);
      localStorage.setItem("token", action.payload.token);
      state.token = action.payload.token;
      state.profile = action.payload.user;
      state.mySpace = action.payload.space;
    },
    logOut: (state, action) => {
      localStorage.removeItem("token");
      state.token = null;
      state.profile = null;
    },
    tokenStillValid: (state, action) => {
      state.profile = action.payload.user;
      state.mySpace = action.payload.space;
    },
    setPostMessage: (state, action) => {
      console.log("payload", action.payload.data);
      state.message = action.payload.data;
    },
    toggleForm: (state, action) => {
      state.form = !state.form;
    },
  },
});

export const {
  loginSuccess,
  logOut,
  tokenStillValid,
  setPostMessage,
  toggleForm,
} = userSlice.actions;

export default userSlice.reducer;
