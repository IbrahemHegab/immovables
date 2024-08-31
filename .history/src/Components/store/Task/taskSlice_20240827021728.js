import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import Cookies from "js-cookie";
import { getMe } from "../auth/authSlice";

const initialState = {
  isLoading: false,
  data: [],
  token: Cookies.get("token") ?? null,
  itemsCount: 0,
  pages: 0,
  error: null,
};

const url = "http://localhost:3000/api/v1";

export const getMyTask = createAsyncThunk(
  "task/getMyTasks",
  async (args, thunkApi) => {
    const token = thunkApi.getState().auth.token;
    const user = thunkApi.dispatch().getMe()
    console.log(user);
    
    try {
      const { data } = await axios.get(
        `${url}/task/${args !== "manager" ? "my-task" : "assignTask"}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
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
    const token = thunkApi.getState().auth.token;
    try {
      const { data } = await axios.post(`${url}/task/assignTask`, args, {
        headers: {
          Accept: "application/json, text/plain, */*",
          Authorization: `Bearer ${token}`,
        },
      });
      return data;
    } catch (e) {
      return thunkApi.rejectWithValue(e.response?.data || e.message);
    }
  }
);

export const updateTask = createAsyncThunk(
  "task/updateTask",
  async ({ ID, ...args }, thunkApi) => {
    try {
      const { data } = await axios.put(`${url}/task/${ID}`, args, {
        headers: {
          Accept: "application/json, text/plain, */*",
        },
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
