const selectors = {
  token: (state) => state.auth.token,
  role: (state) => state.auth.role,
  user: (state) => state.auth.user,
  loginStatus: (state) => state.auth.loginStatus,
  registerStatus: (state) => state.auth.registerStatus,
  logoutStatus: (state) => state.auth.logoutStatus,
};

export { selectors };
