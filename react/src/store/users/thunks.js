import { createAsyncThunk } from '@reduxjs/toolkit';

import { api } from 'api';
import { handleServerErrors } from 'utils/serverErrors';

const getUsers = createAsyncThunk(
  'users/getUsers',
  async ({ page, filters }) => {
    try {
      const { data } = await api.users.getUsers({
        page,
        ...filters,
      });
      return data;
    } catch (err) {
      handleServerErrors(err);
      throw err;
    }
  }
);

const getPlans = createAsyncThunk('users/getPlans', async () => {
  try {
    const { data } = await api.users.getPlans();
    return data.data;
  } catch (err) {
    handleServerErrors(err);
    throw err;
  }
});

const thunks = {
  getUsers,
  getPlans,
};

export { thunks };
