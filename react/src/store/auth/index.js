import { createSlice } from '@reduxjs/toolkit';

import { status } from 'utils/const';
import { thunks } from './thunks';
import { selectors } from './selectors';

const setAuthData = (state, payload) => {
  const { token } = payload;
  state.token = token;
  // state.user = user;
};

const initialState = {
  token: null,
  // user: {},
  loginStatus: status.IDLE,
  logoutStatus: status.IDLE,
};

const slice = createSlice({
  name: 'auth',
  initialState: { ...initialState },
  reducers: {
    RESET_STATE: (state) => {
      Object.assign(state, initialState);
    },
    RESET_STATUS: (state, { payload }) => {
      state[payload] = status.IDLE;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(thunks.authLogin.pending, (state) => {
        state.loginStatus = status.PENDING;
      })
      .addCase(thunks.authLogin.fulfilled, (state, { payload }) => {
        setAuthData(state, payload);
        state.loginStatus = status.SUCCESS;
      })
      .addCase(thunks.authLogin.rejected, (state) => {
        state.loginStatus = status.FAIL;
      })

      .addCase(thunks.authLogout.pending, (state) => {
        state.logoutStatus = status.PENDING;
      })
      .addCase(thunks.authLogout.fulfilled, (state) => {
        Object.assign(state, initialState);
        state.logoutStatus = status.SUCCESS;
      })
      .addCase(thunks.authLogout.rejected, (state) => {
        state.logoutStatus = status.FAIL;
      });
  },
});

const auth = {
  actions: slice.actions,
  thunks,
  selectors,
};

export { auth };
export default slice.reducer;
