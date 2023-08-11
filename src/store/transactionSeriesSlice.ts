import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import API from "../api";

import { RootState } from '.';

export interface transactionSeriesState {
  transactionSeries: any;
  status: 'loading' | 'idle' | 'failed';
}

const initialState: transactionSeriesState = {
  transactionSeries: [],
  status: 'idle',
};

export const getTransactionSeries = createAsyncThunk(
  'auth/getTransactionSeries',
  async (): Promise<any> => API.transactionSeries(),
);

// https://redux.js.org/recipes/usage-with-typescript#standard-redux-toolkit-project-setup-with-typescript
// https://redux-toolkit.js.org/usage/usage-with-typescript
export const transactionSeriesSlice = createSlice({
  name: 'transactionSeries',
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  // Redux Toolkit allows us to write "mutating" logic in reducers. It
  // doesn't actually mutate the state because it uses the Immer library,
  // which detects changes to a "draft state" and produces a brand new
  // immutable state based off those changes
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getTransactionSeries.pending, (state, action) => {
      state.status = 'loading';
    });
    builder.addCase(getTransactionSeries.rejected, (state, { payload }) => {
      state.status = 'failed';
    });
    builder.addCase(getTransactionSeries.fulfilled, (state, { payload }) => {
      state.status = 'idle';
      state.transactionSeries = payload;
    });
  },
});

export const transactionSeries = (state: RootState) =>
  state.transactionSeries.transactionSeries;

export default transactionSeriesSlice.reducer;
