import { createSlice } from "@reduxjs/toolkit";
import { AuthInitialStateType } from "./types";

const initialState: AuthInitialStateType = {
  loading: false,
  userInfo: {},
  userToken: null,
  error: null,
  success: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  // extraReducers: {},
});

export default authSlice.reducer;
