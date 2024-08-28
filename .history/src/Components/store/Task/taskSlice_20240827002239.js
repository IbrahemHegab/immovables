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
console.log(initialState.token);
const url = "http://localhost:3000/api/v1";
export const getMyTask = createAsyncThunk(
  "task/getTask",
  async (args, thunkApi) => {
    try {
      const { data } = await axios.get(`${url}/task/assignTask`, {
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
export const getMyTaskAssignedTo = createAsyncThunk(
  "task/getMyTasks",
  async (args, thunkApi) => {
    console.log(args);
    
    try {
      const { data } = await axios.get(`${url}/task/myTaskAssignedTo`, {
        headers: {
          Authorization: `Bearer ${initialState.token}`,
        },
      });
console.log(data);

      return thunkApi.fulfillWithValue(data);
    } catch (e) {
      return thunkApi.rejectWithValue(e.response.data);
    }
  }
);

export const createTask = createAsyncThunk(
  "task/createTask",
  async (args, thunkApi) => {
    console.log(args);
    
    try {
      const { data } = await axios.post(`${url}/task/assignTask`, args, {
        headers: {
          Accept: "application/json, text/plain, */*",
          Authorization: `Bearer ${args.token}`,
        },
      });
      return thunkApi.fulfillWithValue(data);
    } catch (e) {
      return thunkApi.rejectWithValue(e.response.data);
    }
  }
);

export const updateTask = createAsyncThunk(
  "task/updateTask",
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

export const deleteTask = createAsyncThunk(
  "task/deleteTask",
  async (args, thunkApi) => {
    try {
      const { data } = await axios.delete(`${url}/employees/${args}`);
      return thunkApi.fulfillWithValue(data);
    } catch (e) {
      return thunkApi.rejectWithValue(e.response.data);
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

        state.error = null;
      })
      .addCase(getMyTask.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload.msg;
      })
      .addCase(getMyTaskAssignedTo.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(getMyTaskAssignedTo.fulfilled, (state, { payload }) => {
        state.data = payload.data;
console.log(payload);

        state.error = null;
      })
      .addCase(getMyTaskAssignedTo.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload.msg;
      })

      .addCase(createTask.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(createTask.fulfilled, (state, { payload }) => {
        state.data.push(payload.data);

        state.error = null;
      })
      .addCase(createTask.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload.msg;
      })

      .addCase(updateTask.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(updateTask.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.data = payload.data;
        state.error = null;
      })
      .addCase(updateTask.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload.msg;
      })
      .addCase(deleteTask.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(deleteTask.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.data = payload.data;
        state.itemsCount--;
        state.error = null;
      })
      .addCase(deleteTask.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload.msg;
      });
  },
});

export default TaskSlice.reducer;
