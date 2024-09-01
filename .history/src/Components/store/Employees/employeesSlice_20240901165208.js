import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import Cookies from "js-cookie";
import { setOpenToast } from "../SharedStore";
let initialState = {
  isLoading: false,
  data: [],
  token: Cookies.get("token") ?? null,
  itemsCount: 0,
  pages: 0,
  error: null,
};
const url = "http://localhost:3000/api/v1";
export const getEmployees = createAsyncThunk(
  "employees/getEmployees",
  async (args, thunkApi) => {
    try {
      const { data } = await axios.get(`${url}/employees`, {
        headers: {
          Authorization: `Bearer ${args.token}`,
        },
      });
      return thunkApi.fulfillWithValue(data);
    } catch (e) {
      return thunkApi.rejectWithValue(e.response.data);
    }
  }
);

export const createEmployees = createAsyncThunk(
  "employees/createEmployees",
  async (args, thunkApi) => {
    const { dispatch } = thunkApi;

    try {
      const { data } = await axios
        .post(`${url}/employees`, args, {
          headers: {
            Accept: "application/json, text/plain, */*",
            Authorization: `Bearer ${args.token}`,
          },
        })
        .then(() => {
          dispatch(setOpenToast({ msg: "تم اضافه موظف جديد", status: true }));
          setTimeout(() => {
            dispatch(setOpenToast({ msg: null, status: false }));
          }, 3000);
        });
      return thunkApi.fulfillWithValue(data);
    } catch (e) {
      return thunkApi.rejectWithValue(e.response.data);
    }
  }
);

export const updateEmployees = createAsyncThunk(
  "employees/updateEmployees",
  async (args, thunkApi) => {
    try {
      const { data } = await axios.put(`${url}/employees/${args.ID}`, args, {
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

export const deleteEmployees = createAsyncThunk(
  "employees/deleteEmployees",
  async (args, thunkApi) => {
    const { dispatch } = thunkApi;
    try {
      const { data } = await axios.delete(`${url}/employees/${args}`);
      dispatch(
        setOpenToast({ msg: "تم تعديل  حاله المهمة جديدة", status: true })
      );
      setTimeout(() => {
        dispatch(setOpenToast({ msg: null, status: false }));
      }, 3000);
      return thunkApi.fulfillWithValue(data);
    } catch (e) {
      return thunkApi.rejectWithValue(e.response.data);
    }
  }
);
export const deleteNotifcation = createAsyncThunk(
  "employees/deleteNotifcation",
  async (args, thunkApi) => {
    try {
      const { data } = await axios.delete(
        `${url}/employees/notifcation/${args.id}`,
        {
          headers: {
            Authorization: `Bearer ${args.token}`,
          },
        }
      );
      return thunkApi.fulfillWithValue(data);
    } catch (e) {
      return thunkApi.rejectWithValue(e.response.data);
    }
  }
);

const EmployeesSlice = createSlice({
  name: "employees",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(getEmployees.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(getEmployees.fulfilled, (state, { payload }) => {
        state.data = payload.data;
        state.isLoading = false;
        state.error = null;
      })
      .addCase(getEmployees.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload.msg;
      })

      .addCase(createEmployees.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(createEmployees.fulfilled, (state, { payload }) => {
        state.data.push(payload.data);
        state.isLoading = false;
        state.error = null;
      })
      .addCase(createEmployees.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload.msg;
      })

      .addCase(updateEmployees.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(updateEmployees.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.data = payload.data;
        state.error = null;
      })
      .addCase(updateEmployees.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload.msg;
      })
      .addCase(deleteEmployees.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(deleteEmployees.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.data = payload.data;
        state.itemsCount--;
        state.error = null;
      })
      .addCase(deleteEmployees.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload.msg;
      })
      .addCase(deleteNotifcation.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(deleteNotifcation.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.data = payload.data;
        state.itemsCount--;
        state.error = null;
      })
      .addCase(deleteNotifcation.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload.msg;
      });
  },
});

export default EmployeesSlice.reducer;
