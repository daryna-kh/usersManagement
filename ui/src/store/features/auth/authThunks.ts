import { createAsyncThunk } from "@reduxjs/toolkit";
import { fetchAuth } from "../../../api/auth/fetchAuth";
import { authRequestParamsType } from "../../../api/auth/types";

export const fetchTokenAndAuth = createAsyncThunk(
  "auth/",
  async (params: authRequestParamsType, thunkAPI) => {
    try {
      const user = await fetchAuth(params);
      return user.token;
    } catch (err) {
      return thunkAPI.rejectWithValue(err);
    }
  }
);
