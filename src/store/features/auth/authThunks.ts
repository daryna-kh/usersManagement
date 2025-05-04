import { createAsyncThunk } from "@reduxjs/toolkit";
import { getTokenAndAuth } from "../../../api/getTokenAndAuth/getTokenAndAuth";
import { authRequestParamsType } from "../../../api/getTokenAndAuth/types";

export const fetchTokenAndAuth = createAsyncThunk(
  "auth/",
  async (params: authRequestParamsType, thunkAPI) => {
    try {
      const user = await getTokenAndAuth(params);
      return user.accessToken;
    } catch (err) {
      return thunkAPI.rejectWithValue(err);
    }
  }
);
