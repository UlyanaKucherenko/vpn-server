import { createAsyncThunk } from '@reduxjs/toolkit';

import { api } from 'api';
import { handleServerErrors } from 'utils/serverErrors';

const authLogin = createAsyncThunk(
  'auth/login',
  async (userData, { rejectWithValue }) => {
    try {
      const { data } = await api.auth.login(userData);
      return data.data;
    } catch (err) {
      // const { status } = err.response;
      handleServerErrors(err);
      throw rejectWithValue(err.response);
    }
  }
);

const authLogout = createAsyncThunk('auth/logout', async () => {
  try {
    const { data } = await api.auth.logout();
    return data.data;
  } catch (err) {
    handleServerErrors(err);
    throw err;
  }
});

const thunks = {
  authLogin,
  authLogout,
};

export { thunks };
