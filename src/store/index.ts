import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';

import users from './usersSlice';
import accounts from './accountsSlice';
import connections from './connectionSlice';
import transactionSeries from './transactionSeriesSlice';
import splitOptions from './splitOptionSlice';

// https://redux-toolkit.js.org/api/configureStore
export const store = configureStore({
  reducer: {
    users,
    accounts,
    connections,
    transactionSeries,
    splitOptions,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
// https://redux.js.org/recipes/usage-with-typescript#type-checking-redux-thunks
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
