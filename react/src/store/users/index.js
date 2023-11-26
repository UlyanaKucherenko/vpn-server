import { createSlice } from '@reduxjs/toolkit';

import { status } from 'utils/const';
import { pagination } from 'models/pagination';
import { thunks } from './thunks';
import { selectors } from './selectors';

const DEFAULT_FILTERS_NAMES = {
  user: 'user',
  plan: 'plan',
  expires: 'expires',
  subscription: 'subscription',
};

const initialState = {
  users: [],
  pagination: {},
  filters: {
    search: null,
    sortByPlan: null,
    sortBy: null,
    sortType: null,
  },
  usersStatus: status.IDLE,
  plansList: [],
  defaultFiltersNames: DEFAULT_FILTERS_NAMES,
};

const slice = createSlice({
  name: 'users',
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
      .addCase(thunks.getUsers.pending, (state) => {
        state.usersStatus = status.PENDING;
      })
      .addCase(thunks.getUsers.fulfilled, (state, { payload }) => {
        const {
          meta: { current_page, from, last_page, to, total, per_page },
          data,
        } = payload;
        state.usersStatus = status.SUCCESS;
        state.users = data;
        state.pagination = pagination(
          current_page,
          from,
          last_page,
          to,
          total,
          per_page
        );
      })
      .addCase(thunks.getUsers.rejected, (state) => {
        state.usersStatus = status.FAIL;
      })
      .addCase(thunks.getPlans.fulfilled, (state, { payload }) => {
        state.plansList = payload;
      });
  },
});

const users = {
  actions: slice.actions,
  thunks,
  selectors,
};

export { users };
export default slice.reducer;
