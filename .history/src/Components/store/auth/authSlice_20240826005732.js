import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import Cookies from "js-cookie";
import axios from "axios";

let initialState = {
  isLoading: false,
  isAuth: false,
  token: Cookies.get("token") ?? null,
  user: null,
  error: null,
};
const url = "http://localhost:3000/api/v1";
export const login = createAsyncThunk("auth/login", async (args, thunkApi) => {
  try {
    const { data } = await axios.post(`${url}/auth/login`, args);
    return thunkApi.fulfillWithValue(data);
  } catch (e) {
    return thunkApi.rejectWithValue(e.response.data);
  }
});
export const getMe = createAsyncThunk("user/getMe", async (args, thunkApi) => {
  try {
    const { data } = await axios.post(`${url}/user/getMe`, args);
    return thunkApi.fulfillWithValue(data);
  } catch (e) {
    return thunkApi.rejectWithValue(e.response.data);
  }
});
const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logout: (state) => {
      state.token = null;
      state.isAuth = false;
      state.user = null;
      state.error = null;
      // cookie.removeData("token");
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(login.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(login.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.error = null;
        state.isAuth = true;
        state.user = payload.data;
        state.token = payload.token;
      })
      .addCase(login.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload.msg;
        state.isAuth = false;

        state.user = null;

        state.token = null;
        // cookie.removeData("token");
      })
      .addCase(getMe.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(getMe.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.error = null;
      
        state.user = payload.data;
       
      })
      .addCase(getMe.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload.msg;
       

        state.user = null;

        state.token = null;
        // cookie.removeData("token");
      });
  },
});

export const { logout } = authSlice.actions;

export default authSlice.reducer;
