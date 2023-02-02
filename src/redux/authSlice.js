import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  email: "aa@aa.aa",
  password: "aa@aa.aa",
  isUserLoggedIn: false,
};

export const authSlice = createSlice({
  name: "userAuth",
  initialState,
  reducers: {
    signUpUser: (state, action) => {
      state.email = action.payload.email;
      state.password = action.payload.password;
    },
    userIsAuthorised: (state) => {
      state.isUserLoggedIn = true;
    },
  },
  extraReducers: {},
});

export const { signUpUser, userIsAuthorised } = authSlice.actions;
export default authSlice.reducer;
