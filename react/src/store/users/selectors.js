const selectors = {
  users: (state) => state.users.users,
  pagination: (state) => state.users.pagination,
  filters: (state) => state.users.filters,
  usersStatus: (state) => state.users.usersStatus,
  plansList: (state) => state.users.plansList,
};

export { selectors };
