import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import API from 'api';

import { RootState } from '.';

export interface OptionsState {
  splitOptions: any;
  status: 'loading' | 'idle' | 'failed';
}

const initialState: OptionsState = {
  splitOptions: [],
  status: 'idle',
};

export const getSplitOptions = createAsyncThunk(
  'auth/getOptions',
  async (): Promise<any> => API.getOptions(),
);

// https://redux.js.org/recipes/usage-with-typescript#standard-redux-toolkit-project-setup-with-typescript
// https://redux-toolkit.js.org/usage/usage-with-typescript
export const getSplitOptionSlice = createSlice({
  name: 'splitOptions',
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  // Redux Toolkit allows us to write "mutating" logic in reducers. It
  // doesn't actually mutate the state because it uses the Immer library,
  // which detects changes to a "draft state" and produces a brand new
  // immutable state based off those changes
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getSplitOptions.pending, (state, action) => {
      state.status = 'loading';
    });
    builder.addCase(getSplitOptions.rejected, (state, { payload }) => {
      state.status = 'failed';
    });
    builder.addCase(getSplitOptions.fulfilled, (state, action) => {
      state.status = 'idle';
      state.splitOptions = action.payload.data;
    });
  },
});

export const SplitOptions = (state: RootState) =>
  state.splitOptions.splitOptions;

export default getSplitOptionSlice.reducer;
