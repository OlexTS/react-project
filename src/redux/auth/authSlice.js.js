import { createSlice } from "@reduxjs/toolkit";
import { register } from "./authOps";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: {
      name: null,
      email: null,
    },
    token: null,
    isLoggedIn: false,
    isRefreshing: false,
  },
  extraReducers: (builder) => {
    builder.addCase(register.pending, (state)=>{
      state.isLoggedIn = true;
    }).addCase(register.fulfilled, (state, action)=>{
      state.isLoggedIn = false;
      state.user = action.payload.user;
      state.token = action.payload.token;
    });
  },
});

export const authReducer = authSlice.reducer;
