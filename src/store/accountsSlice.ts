import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import {
  Account,
  AccountResponse,
  PrimaryAccount,
} from 'types/entities/accounts';
import API from "../api";

import { RootState } from '.';

export interface AccountsState {
  accounts: Array<Account>;
  status: 'idle' | 'loading' | 'failed';
  primaryAccount: Account | null;
  errorMessage: string | null;
}

const initialState: AccountsState = {
  accounts: [],
  status: 'idle',
  primaryAccount: null,
  errorMessage: null,
};

export const getAccounts = createAsyncThunk(
  'auth/getAccounts',
  async (): Promise<AccountResponse> => API.getAccounts(),
);

// https://redux.js.org/recipes/usage-with-typescript#standard-redux-toolkit-project-setup-with-typescript
// https://redux-toolkit.js.org/usage/usage-with-typescript
export const accountsSlice = createSlice({
  name: 'accounts',
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  // Redux Toolkit allows us to write "mutating" logic in reducers. It
  // doesn't actually mutate the state because it uses the Immer library,
  // which detects changes to a "draft state" and produces a brand new
  // immutable state based off those changes
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getAccounts.pending, (state, action) => {
      state.status = 'loading';
    });
    builder.addCase(getAccounts.rejected, (state, { payload }) => {
      state.status = 'failed';
    });
    builder.addCase(getAccounts.fulfilled, (state, { payload }) => {
      state.status = 'idle';
      state.accounts = payload.data;
    });
  },
});

export const Accounts = (state: RootState) => state.accounts.accounts;
export const getStatus = (state: RootState) => state.accounts.status;

export default accountsSlice.reducer;
