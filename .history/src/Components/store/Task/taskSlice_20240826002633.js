import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

let initialState = {
  isLoading: false,
  data: [],
  itemsCount: 0,
  pages: 0,
  error: null,
};
const url = "http://localhost:3000/api/v1";
export const getMyTask = createAsyncThunk(
  "task/getTask",
  async (args, thunkApi) => {
 

    try {
      const { data } = await axios.get(`${url}/task/my-task`, {
        headers: {
          Authorization: `Bearer ${args}`,
        },
      });
     

      return thunkApi.fulfillWithValue(data);
    } catch (e) {
      return thunkApi.rejectWithValue(e.response.data);
    }
  }
);
export const getMyTaskAssignedTo = createAsyncThunk(
  "task/getTaskAssignedTo",
  async (args, thunkApi) => {
 

    try {
      const { data } = await axios.get(`${url}/task/AssignedTo`, {
        headers: {
          Authorization: `Bearer ${args}`,
        },
      });
     

      return thunkApi.fulfillWithValue(data);
    } catch (e) {
      return thunkApi.rejectWithValue(e.response.data);
    }
  }
);

export const createTask = createAsyncThunk(
  "task/createTask",
  async (args, thunkApi) => {
    try {
      const { data } = await axios.post(`${url}/employees`, args, {
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
