import { configureStore } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
// eslint-disable-next-line import/no-extraneous-dependencies
import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
// eslint-disable-next-line import/no-extraneous-dependencies
import thunk from 'redux-thunk';

// MODULES
import auth from 'store/auth';
import plans from 'store/plans';
import users from 'store/users';
import servers from 'store/servers';
import themeApp from 'store/themeApp';

const appReducer = combineReducers({
  auth,
  plans,
  users,
  servers,
  themeApp,
});

const rootReducer = (state, action) => {
  if (action.type === 'auth/logout/fulfilled') {
    return appReducer(undefined, action);
  }
  return appReducer(state, action);
};

const persistConfig = {
  key: 'harbor',
  storage,
  blacklist: [],
  whitelist: ['auth', 'themeApp'],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  devTools: process.env.NODE_ENV !== 'production',
  middleware: [thunk],
});

export default store;
