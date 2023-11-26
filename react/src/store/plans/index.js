import { createSlice } from '@reduxjs/toolkit';

import { status } from 'utils/const';
import { thunks } from './thunks';
import { selectors } from './selectors';

const initialState = {
  plans: [],
  plansStatus: status.IDLE,
};

const slice = createSlice({
  name: 'plans',
  initialState: { ...initialState },
  reducers: {
    RESET_STATE: (state) => {
      Object.assign(state, initialState);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(thunks.deletePlan.fulfilled, (state, { payload }) => {
        const { planId } = payload;
        state.plans = state.plans.filter((item) => item.id !== planId);
      })
      .addCase(thunks.getPlans.pending, (state) => {
        state.plansStatus = status.PENDING;
      })
      .addCase(thunks.getPlans.fulfilled, (state, { payload }) => {
        state.plans = payload;
        state.plansStatus = status.SUCCESS;
      })
      .addCase(thunks.getPlans.rejected, (state) => {
        state.plansStatus = status.FAIL;
      });
  },
});

const plans = {
  actions: slice.actions,
  thunks,
  selectors,
};

export { plans };
export default slice.reducer;
