import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import Cookies from "js-cookie";
import { setOpenPermissionModelModel, setOpenToast } from "../SharedStore";
import { axiosInstance } from "../Config";
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
      const { data } = await axiosInstance.get(`${url}/employees`, {
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
      const { data } = await axiosInstance
        .post(`${url}/employees`, args, {
          headers: {
            Accept: "application/json, text/plain, */*",
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
    const { dispatch } = thunkApi;
    console.log(args);

    try {
      const { data } = await axiosInstance
        .put(`${url}/employees/${args.id}`, args, {
          headers: {
            Accept: "application/json, text/plain, */*",
          },
        })
        .then(() => {
          dispatch(
            setOpenToast({ msg: "تم تعديل البيانات بنجاح", status: true })
          );
          dispatch(setOpenPermissionModelModel({ update: false }));
          dispatch(getEmployees({ update: false }));
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

export const deleteEmployees = createAsyncThunk(
  "employees/deleteEmployees",
  async (args, thunkApi) => {
    const { dispatch } = thunkApi;
    try {
      const { data } = await axiosInstance.delete(`${url}/employees/${args}`);
      dispatch(setOpenToast({ msg: "تم حذف  الموظف بنجاح", status: true }));

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
      const { data } = await axiosInstance.delete(
        `${url}/employees/notifcation/${args.id}`,
        {
          headers: {
            Accept: "application/json, text/plain, */*",
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
      .addCase(getEmployees.rejected, (state) => {
        state.isLoading = false;
        // state.error = payload.msg;
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
        state.error = payload;
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
      .addCase(updateEmployees.rejected, (state) => {
        state.isLoading = false;
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
