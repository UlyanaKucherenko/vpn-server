import { createAsyncThunk } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';

import { api } from 'api';
import { handleServerErrors } from 'utils/serverErrors';

const getServers = createAsyncThunk(
  'servers/getServers',
  async ({ page, filters }) => {
    try {
      const { data } = await api.servers.getServers({
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

const addServer = createAsyncThunk('servers/createServer', async (userData) => {
  try {
    const { data } = await api.servers.addServer({
      ...userData,
      countryId: userData.country.value,
    });
    if (data.status) {
      toast.success(data.message);
    }
    return data;
  } catch (err) {
    handleServerErrors(err);
    throw err;
  }
});

const deleteServer = createAsyncThunk(
  'servers/deleteServer',
  async (serverId) => {
    try {
      const { data } = await api.servers.deleteServer(serverId);
      if (data.status) {
        toast.success(data.message);
      }
      return { serverId };
    } catch (err) {
      handleServerErrors(err);
      throw err;
    }
  }
);

const editServer = createAsyncThunk(
  'servers/editServer',
  async ([formData, serverId]) => {
    try {
      const { data } = await api.servers.editServer({
        formData: {
          ...formData,
          countryId: formData.country.value,
        },
        serverId,
      });
      if (data.status) {
        toast.success(data.message);
      }
      return data;
    } catch (err) {
      handleServerErrors(err);
      throw err;
    }
  }
);

const changeStatusServer = createAsyncThunk(
  'servers/changeStatusServer',
  async ([value, serverId]) => {
    try {
      const { data } = await api.servers.changeStatusServer({
        serverId,
        isActive: value,
      });
      if (data.status) {
        toast.success(data.message);
      }
      return { serverId, value };
    } catch (err) {
      handleServerErrors(err);
      throw err;
    }
  }
);

const getCountries = createAsyncThunk('servers/getCountries', async () => {
  try {
    const { data } = await api.servers.getCountries();
    return data.data;
  } catch (err) {
    handleServerErrors(err);
    throw err;
  }
});

const thunks = {
  getServers,
  addServer,
  deleteServer,
  editServer,
  getCountries,
  changeStatusServer,
};

export { thunks };
