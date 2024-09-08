import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import { axiosInstance } from "../Config";

let initialState = {
  isLoading: false,
  status: false,
  data: [],
  itemsCount: 0,
  pages: 0,
  error: null,
};
const url = "http://localhost:3000/api/v1";
export const getGallery = createAsyncThunk(
  "cart/getCart",
  async (args, thunkApi) => {
    try {
      const { data } = await axiosInstance.get(
        `${url}/cart${args ? `?kind=${args}` : ""}`
      );
      return thunkApi.fulfillWithValue(data);
    } catch (e) {
      return thunkApi.rejectWithValue(e.response.data);
    }
  }
);

export const createGallery = createAsyncThunk(
  "cart/createCart",
  async (args, thunkApi) => {
    console.log(args);

    try {
      const { data } = await axiosInstance.post(`${url}/cart`, args, {
        headers: {
          Accept: "application/json, text/plain, */*",
          "cart-Type": "multipart/form-data",
        },
      });
      return thunkApi.fulfillWithValue(data);
    } catch (e) {
      return thunkApi.rejectWithValue(e.response.data);
    }
  }
);

export const updateGallery = createAsyncThunk(
  "cart/updateCart",
  async (args, thunkApi) => {
    try {
      const { data } = await axiosInstance.put(
        `${url}/cart/${args.ID}`,
        args,
        {
          headers: {
            Accept: "application/json, text/plain, */*",
            // "cart-Type": "multipart/form-data",
          },
        }
      );
      return thunkApi.fulfillWithValue(data);
    } catch (e) {
      return thunkApi.rejectWithValue(e.response.data);
    }
  }
);


export const deleteGallery = createAsyncThunk(
  "cart/deleteCart",
  async (args, thunkApi) => {
    try {
      const { data } = await axiosInstance.delete(`${url}/cart/${args}`);
      return thunkApi.fulfillWithValue(data);
    } catch (e) {
      return thunkApi.rejectWithValue(e.response.data);
    }
  }
);

const gallerySlice = createSlice({
  name: "cart",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(getGallery.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(getGallery.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.data = payload.data;
        state.itemsCount = payload.itemsCount;
        state.pages = payload.pages;
        state.error = null;
      })
      .addCase(getGallery.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload.msg;
      })

      .addCase(createGallery.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(createGallery.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        console.log(payload);
        state.data.push(payload.cart);
        state.itemsCount++;
        state.error = null;
      })
      .addCase(createGallery.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload.msg;
      })

      .addCase(updateGallery.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(updateGallery.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.data = payload.data;

        state.error = null;
      })
      .addCase(updateGallery.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload.msg;
      })

      .addCase(deleteGallery.pending, (state) => {
        state.status = true;
        state.error = null;
      })
      .addCase(deleteGallery.fulfilled, (state, { payload }) => {
        state.status = false;
        state.data = payload.data;
      })
      .addCase(deleteGallery.rejected, (state, { payload }) => {
        state.status = false;
        state.error = payload.msg;
      });
  },
});

export default gallerySlice.reducer;
