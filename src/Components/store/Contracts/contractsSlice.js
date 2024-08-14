import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "@/utils/axios";
import { filterRequest } from "@/utils/apiManager";

let initialState = {
  isLoading: false,
  data: [],
  itemsCount: 0,
  pages: 0,
  error: null,
};

export const getContracts = createAsyncThunk(
  "contracts/getContracts",
  async (args, thunkApi) => {
    try {
      const { page = 1, size = 10, search = "" } = args;
      const filter = filterRequest(args.filter);
      const { data } = await axios.get(
        `http://178.62.205.20:3006/api/v1/header`
        // ?page=${page}&size=${size}&search=${search}${filter}`
      );
      return thunkApi.fulfillWithValue(data);
    } catch (e) {
      return thunkApi.rejectWithValue(e.response.data);
    }
  }
);

export const createContracts = createAsyncThunk(
  "contracts/createContracts",
  async (args, thunkApi) => {
    console.log(args.image[0]);
    try {
      const { data } = await axios.post("http://178.62.205.20:3006/api/v1/header", {
        title:args.title,
        subtitle:args.subtitle,
        image:args.image[0],
        logo:args.logo[0]
      },{
        headers: {
          Accept: "application/json, text/plain, */*",
          "Content-Type": "multipart/form-data",
        }
      });
      return thunkApi.fulfillWithValue(data);
    } catch (e) {
      return thunkApi.rejectWithValue(e.response.data);
    }
  }
);

export const updateContracts = createAsyncThunk(
  "contracts/updateContracts",
  async (args, thunkApi) => {
    try {
      const { data } = await axios.put(
        `http://178.62.205.20:3006/api/v1/header/${args.id}`,
        args.values
      );
      return thunkApi.fulfillWithValue(data);
    } catch (e) {
      return thunkApi.rejectWithValue(e.response.data);
    }
  }
);

export const deleteContracts = createAsyncThunk(
  "contracts/deleteContracts",
  async (args, thunkApi) => {
    console.log(args);
    try {
      const { data } = await axios.delete(
        `http://178.62.205.20:3006/api/v1/header/${args._id}`
      );
      return thunkApi.fulfillWithValue(data);
    } catch (e) {
      return thunkApi.rejectWithValue(e.response.data);
    }
  }
);

const ContractsSlice = createSlice({
  name: "contracts",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(getContracts.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(getContracts.fulfilled, (state, { payload }) => {
        console.log(payload);
        state.isLoading = false;
        state.data = payload.data;
        state.itemsCount = payload.itemsCount;
        state.pages = payload.pages;
        state.error = null;
      })
      .addCase(getContracts.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload.msg;
      })

      .addCase(createContracts.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(createContracts.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.data.push(payload.Contracts);
        state.itemsCount++;
        state.error = null;
      })
      .addCase(createContracts.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload.msg;
      })

      .addCase(updateContracts.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(updateContracts.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.data = payload.data;
        state.error = null;
      })
      .addCase(updateContracts.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload.msg;
      })

      .addCase(deleteContracts.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(deleteContracts.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.data = payload.data;
        state.itemsCount--;
        state.error = null;
      })
      .addCase(deleteContracts.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload.msg;
      });
  },
});

export default ContractsSlice.reducer;
