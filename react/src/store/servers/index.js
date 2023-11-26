import { createSlice } from '@reduxjs/toolkit';

import { status } from 'utils/const';
import { pagination } from 'models/pagination';
import { thunks } from './thunks';
import { selectors } from './selectors';

const DEFAULT_FILTERS_NAMES = {
  country: 'country',
  location: 'location',
  ipAddress: 'ip address',
  active: 'active',
};

const initialState = {
  servers: [],
  pagination: {},
  filters: {
    search: null,
    sortBy: null,
    sortType: null,
  },
  serversStatus: status.IDLE,
  countries: [],
  defaultFiltersNames: DEFAULT_FILTERS_NAMES,
};

const slice = createSlice({
  name: 'servers',
  initialState: { ...initialState },
  reducers: {
    SET_FILTERS: (state, { payload }) => {
      state.filters = { ...state.filters, ...payload };
    },
    RESET_FILTERS: (state) => {
      state.filters = initialState.filters;
    },
    RESET_STATE: (state) => {
      Object.assign(state, initialState);
    },
    UPDATE_DEFAULT_FILTERS_NAMES: (state, { payload: { key, value } }) => {
      state.defaultFiltersNames[key] = value;
    },
    RESET_DEFAULT_FILTERS_NAMES: (state) => {
      state.defaultFiltersNames = DEFAULT_FILTERS_NAMES;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(thunks.deleteServer.fulfilled, (state, { payload }) => {
        const { serverId } = payload;
        state.servers = state.servers.filter((item) => item.id !== serverId);
      })
      .addCase(thunks.changeStatusServer.fulfilled, (state, { payload }) => {
        const { serverId, value } = payload;
        const itemIndex = state.servers.findIndex(
          (item) => item.id === serverId
        );
        if (itemIndex !== -1) {
          state.servers[itemIndex].isActive = value;
        }
      })
      .addCase(thunks.getServers.pending, (state) => {
        state.serversStatus = status.PENDING;
      })
      .addCase(thunks.getServers.fulfilled, (state, { payload }) => {
        const {
          meta: { current_page, from, last_page, to, total, per_page },
          data,
        } = payload;
        state.serversStatus = status.SUCCESS;
        state.servers = data;
        state.pagination = pagination(
          current_page,
          from,
          last_page,
          to,
          total,
          per_page
        );
      })
      .addCase(thunks.getServers.rejected, (state) => {
        state.serversStatus = status.FAIL;
      })
      .addCase(thunks.getCountries.fulfilled, (state, { payload }) => {
        state.countries = payload;
      });
  },
});

const servers = {
  actions: slice.actions,
  thunks,
  selectors,
};

export { servers };
export default slice.reducer;
