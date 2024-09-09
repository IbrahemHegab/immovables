import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import Cookies from "js-cookie";
let initialState = {
  isLoading: false,
  data: [],
  token: Cookies.get("token") ?? null,
  itemsCount: 0,
  pages: 0,
  error: null,
};
const url = "http://localhost:3000/api/v1";
export const getCustomer = createAsyncThunk(
  "customer/getCustomer",
  async (args, thunkApi) => {
    try {
      const { data } = await axios.get(`${url}/user`, {
        headers: {
          Authorization: `Bearer ${initialState.token}`,
        },
      });
      return thunkApi.fulfillWithValue(data);
    } catch (e) {
      return thunkApi.rejectWithValue(e.response.data);
    }
  }
);

export const createCustomer = createAsyncThunk(
  "customer/createCustomer",
  async (args, thunkApi) => {
    try {
      const { data } = await axios.post(`${url}/user`, args, {
        headers: {
          Accept: "application/json, text/plain, */*",
        },
      });
      return thunkApi.fulfillWithValue(data);
    } catch (e) {
      return thunkApi.rejectWithValue(e.response.data);
    }
  }
);

export const updateCustomer = createAsyncThunk(
  "customer/updateCustomer",
  async (args, thunkApi) => {
    console.log(args);
    
    try {
      const { data } = await ax.put(`${url}/user/${args.ID}`, args, {
        headers: {
          Accept: "application/json, text/plain, */*",
        },
      });
      return thunkApi.fulfillWithValue(data);
    } catch (e) {
      return thunkApi.rejectWithValue(e.response.data);
    }
  }
);

export const deleteCustomer = createAsyncThunk(
  "customer/deleteCustomer",
  async (args, thunkApi) => {
    try {
      const { data } = await axios.delete(`${url}/user/${args}`);
      return thunkApi.fulfillWithValue(data);
    } catch (e) {
      return thunkApi.rejectWithValue(e.response.data);
    }
  }
);

const CustomerSlice = createSlice({
  name: "customer",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(getCustomer.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(getCustomer.fulfilled, (state, { payload }) => {
        state.data = payload.data;

        state.error = null;
      })
      .addCase(getCustomer.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload.msg;
      })

      .addCase(createCustomer.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(createCustomer.fulfilled, (state, { payload }) => {
        state.data.push(payload.data);

        state.error = null;
      })
      .addCase(createCustomer.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload.msg;
      })

      .addCase(updateCustomer.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(updateCustomer.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.data = payload.data;
        state.error = null;
      })
      .addCase(updateCustomer.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload.msg;
      })

      .addCase(deleteCustomer.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(deleteCustomer.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.data = payload.data;
        state.itemsCount--;
        state.error = null;
      })
      .addCase(deleteCustomer.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload.msg;
      });
  },
});

export default CustomerSlice.reducer;
