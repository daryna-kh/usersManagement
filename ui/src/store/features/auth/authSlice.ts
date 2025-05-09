import { createSlice } from "@reduxjs/toolkit";
import { AuthInitialStateType } from "./types";
import { fetchTokenAndAuth } from "./authThunks";
import { tokenService } from "../../../service/tokenService";

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
  extraReducers: (builder) => {
    builder
      .addCase(fetchTokenAndAuth.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchTokenAndAuth.fulfilled, (state, action) => {
        state.loading = false;
        state.success = true;
        state.userToken = action.payload;
        tokenService.create(action.payload);
      })
      .addCase(fetchTokenAndAuth.rejected, (state) => {
        state.loading = false;
        state.success = false;
      });
  },
});

export default authSlice.reducer;
