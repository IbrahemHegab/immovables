import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import Cookies from "js-cookie";
import { setOpenTaskModel, setOpenToast } from "../SharedStore";
import { axiosInstance } from "../Config";

const initialState = {
  isLoading: false,
  data: [],
  token: Cookies.get("token") ?? null,
  itemsCount: 0,
  pages: 0,

  error: null,
};

const url = "http://localhost:3000/api/v1";
// كل مهام الموظفيين
export const getMyTask = createAsyncThunk(
  "task/getMyTasks",
  async (_, thunkApi) => {
    const token = thunkApi.getState().auth.token;
    try {
      const { data } = await axios.get(`${url}/task/all-task`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return data;
    } catch (e) {
      return thunkApi.rejectWithValue(e.response?.data || e.message);
    }
  }
);

export const getMyTaskAssignedTo = createAsyncThunk(
  "task/getMyTasksAssignedTo",
  async (_, thunkApi) => {
    const token = thunkApi.getState().auth.token;
    try {
      const { data } = await axios.get(`${url}/task/myTaskAssignedTo`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return data;
    } catch (e) {
      return thunkApi.rejectWithValue(e.response?.data || e.message);
    }
  }
);

export const createTask = createAsyncThunk(
  "task/createTask",
  async (args, thunkApi) => {
    const { dispatch } = thunkApi;

    try {
      const { data } = await axiosInstance
        .post(`${url}/task/assignTask`, args, {
          headers: {
            Accept: "application/json, text/plain, */*",
          },
        })
        .then(() => {
          dispatch(setOpenToast({ msg: "تم انشاء مهمة جديدة", status: true }));
          dispatch(setOpenTaskModel({ status: false }));
          setTimeout(() => {
            dispatch(setOpenToast({ msg: null, status: false }));
          }, 3000);
        });
      return data;
    } catch (e) {
      return thunkApi.rejectWithValue(e.response?.data || e.message);
    }
  }
);

export const updateTask = createAsyncThunk(
  "task/updateTask",
  async (args, thunkApi) => {
    const { dispatch } = thunkApi;
    console.log(args);

    try {
      const { data } = await axiosInstance
        .put(`${url}/task/${args.id}`, args, {
          headers: {
            Accept: "application/json, text/plain, */*",
          },
        })
        .then(() => {
          dispatch(setOpenToast({ msg: "تم تعديل مهمة جديدة", status: true }));
          setTimeout(() => {
            dispatch(setOpenToast({ msg: null, status: false }));
          }, 3000);
        });
      return data;
    } catch (e) {
      return thunkApi.rejectWithValue(e.response?.data || e.message);
    }
  }
);

export const deleteTask = createAsyncThunk(
  "task/deleteTask",
  async (taskId, thunkApi) => {
    try {
      const { data } = await axios.delete(`${url}/task/${taskId}`);
      return data;
    } catch (e) {
      return thunkApi.rejectWithValue(e.response?.data || e.message);
    }
  }
);
export const completeTask = createAsyncThunk(
  "task/completeTask",
  async (args, thunkApi) => {
    const { dispatch } = thunkApi;

    try {
      const { data } = await axiosInstance
        .post(`${url}/task/complete/${args}`, {
          headers: {
            Accept: "application/json, text/plain, */*",
          },
        })
        .then(() => {
          dispatch(
            setOpenToast({ msg: "تم تحويل المهمة الي المسؤول", status: true })
          );
          setTimeout(() => {
            dispatch(setOpenToast({ msg: null, status: false }));
          }, 3000);
        });
      return data;
    } catch (e) {
      return thunkApi.rejectWithValue(e.response?.data || e.message);
    }
  }
);
export const rejectedTask = createAsyncThunk(
  "task/rejectedTask",
  async (args, thunkApi) => {
    const { dispatch } = thunkApi;

    try {
      const { data } = await axiosInstance
        .post(`${url}/task/rejected/${args}`, {
          headers: {
            Accept: "application/json, text/plain, */*",
          },
        })
        .then(() => {
          dispatch(
            setOpenToast({ msg: "تم تحويل المهمة الي المسؤول", status: true })
          );
          setTimeout(() => {
            dispatch(setOpenToast({ msg: null, status: false }));
          }, 3000);
        });
      return data;
    } catch (e) {
      return thunkApi.rejectWithValue(e.response?.data || e.message);
    }
  }
);
export const fulfilledTask = createAsyncThunk(
  "task/rejectedTask",
  async (args, thunkApi) => {
    const { dispatch } = thunkApi;

    try {
      const { data } = await axiosInstance
        .post(`${url}/task/rejected/${args}`, {
          headers: {
            Accept: "application/json, text/plain, */*",
          },
        })
        .then(() => {
          dispatch(
            setOpenToast({ msg: "تم تحويل المهمة الي المسؤول", status: true })
          );
          setTimeout(() => {
            dispatch(setOpenToast({ msg: null, status: false }));
          }, 3000);
        });
      return data;
    } catch (e) {
      return thunkApi.rejectWithValue(e.response?.data || e.message);
    }
  }
);
const TaskSlice = createSlice({
  name: "task",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(getMyTask.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(getMyTask.fulfilled, (state, { payload }) => {
        state.data = payload.data;
        state.isLoading = false;
        state.error = null;
      })
      .addCase(getMyTask.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      })
      .addCase(getMyTaskAssignedTo.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(getMyTaskAssignedTo.fulfilled, (state, { payload }) => {
        state.data = payload.data;
        state.isLoading = false;
        state.error = null;
      })
      .addCase(getMyTaskAssignedTo.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      })
      .addCase(createTask.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(createTask.fulfilled, (state, { payload }) => {
        state.data.push(payload.data);
        state.itemsCount++;
        state.isLoading = false;

        state.error = null;
      })
      .addCase(createTask.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      })
      .addCase(updateTask.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(updateTask.fulfilled, (state, { payload }) => {
        state.data = state.data.map((task) =>
          task._id === payload.data._id ? payload.data : task
        );
        state.isLoading = false;
        state.error = null;
      })
      .addCase(updateTask.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      })
      .addCase(deleteTask.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(deleteTask.fulfilled, (state, { payload }) => {
        state.data = state.data.filter((task) => task._id !== payload.data._id);
        state.itemsCount--;
        state.isLoading = false;
        state.error = null;
      })
      .addCase(deleteTask.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      });
  },
});

export default TaskSlice.reducer;
