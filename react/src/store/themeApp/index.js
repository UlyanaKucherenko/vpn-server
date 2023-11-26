import { createSlice } from '@reduxjs/toolkit';

import { appTheme } from 'utils/const';
import { selectors } from './selectors';

const initialState = {
  themeApp: appTheme.light,
};

const slice = createSlice({
  name: 'themeApp',
  initialState: { ...initialState },
  reducers: {
    SET_THEME: (state, { payload }) => {
      state.themeApp = payload;
    },
  },
});

const themeApp = {
  actions: slice.actions,
  selectors,
};

export { themeApp };
export default slice.reducer;
