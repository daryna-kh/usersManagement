import { createAsyncThunk } from "@reduxjs/toolkit";
import { getTokenAndAuth } from "../../../api/getTokenAndAuth/getTokenAndAuth";

export const fetchUserById = createAsyncThunk(
  "auth/fetchById",
  async (userName, thunkAPI) => {
    try {
      const user = await getTokenAndAuth();
      return user;
    } catch (err) {
      return thunkAPI.rejectWithValue(err);
    }
  }
);
