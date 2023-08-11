import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { UserResponse, User } from "../types/entities/user";
import { CreateUser } from "../types/request/user";
import API from "../api";

import { RootState } from ".";

// https://redux.js.org/recipes/structuring-reducers/normalizing-state-shape#designing-a-normalized-state
export interface UsersState {
  usersById: { [id: string]: User };
  status: "idle" | "loading" | "failed";
  activeUserId: string | null;
  errorMessage: string | null;
}

const initialState: UsersState = {
  usersById: {},
  status: "idle",
  activeUserId: null,
  errorMessage: null,
};

export const createUser = createAsyncThunk(
  "auth/createUser",
  async (userInfo: CreateUser): Promise<UserResponse> =>
    API.createUser(userInfo)
);

// https://redux.js.org/recipes/usage-with-typescript#standard-redux-toolkit-project-setup-with-typescript
// https://redux-toolkit.js.org/usage/usage-with-typescript
export const usersSlice = createSlice({
  name: "users",
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  // Redux Toolkit allows us to write "mutating" logic in reducers. It
  // doesn't actually mutate the state because it uses the Immer library,
  // which detects changes to a "draft state" and produces a brand new
  // immutable state based off those changes
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(createUser.pending, (state, action) => {
      state.status = "loading";
    });
    builder.addCase(createUser.rejected, (state, action) => {
      state.status = "failed";
    });
    builder.addCase(createUser.fulfilled, (state, { payload }) => {
      state.status = "idle";
      state.usersById[payload.data.id] = payload.data;
    });
  },
});

export const getUser = (state: RootState, userId: string) =>
  state.users.usersById[userId];
export const getStatus = (state: RootState) => state.users.status;

export default usersSlice.reducer;
