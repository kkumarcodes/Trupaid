import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import API from "../api";

import { RootState } from '.';

export interface ConnectionsState {
  connections: any;
  status: 'loading' | 'idle' | 'failed';
}

const initialState: ConnectionsState = {
  connections: [],
  status: 'idle',
};

export const getConnections = createAsyncThunk(
  'auth/getConnections',
  async (): Promise<any> => API.getConnections(),
);

export const newConnection = createAsyncThunk(
  'auth/addNewConnection',
  async (data: any): Promise<any> => API.createNewConnection(data),
);

// https://redux.js.org/recipes/usage-with-typescript#standard-redux-toolkit-project-setup-with-typescript
// https://redux-toolkit.js.org/usage/usage-with-typescript
export const connectionSlice = createSlice({
  name: 'connections',
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  // Redux Toolkit allows us to write "mutating" logic in reducers. It
  // doesn't actually mutate the state because it uses the Immer library,
  // which detects changes to a "draft state" and produces a brand new
  // immutable state based off those changes
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getConnections.pending, (state, action) => {
      state.status = 'loading';
    });
    builder.addCase(getConnections.rejected, (state, { payload }) => {
      state.status = 'failed';
    });
    builder.addCase(getConnections.fulfilled, (state, action) => {
      state.status = 'idle';
      console.log(action);
      state.connections = action.payload.data;
    });
    builder.addCase(newConnection.pending, (state, action) => {
      state.status = 'loading';
    });
    builder.addCase(newConnection.rejected, (state, { payload }) => {
      state.status = 'failed';
    });
    builder.addCase(newConnection.fulfilled, (state, { payload }) => {
      state.status = 'idle';
      console.log(payload.data);
      state.connections = [payload.data, ...state.connections];
    });
  },
});

export const Connections = (state: RootState) => state.connections.connections;
export const getStatus = (state: RootState) => state.connections.status;

export default connectionSlice.reducer;
