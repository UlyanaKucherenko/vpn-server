const selectors = {
  servers: (state) => state.servers.servers,
  pagination: (state) => state.servers.pagination,
  filters: (state) => state.servers.filters,
  serversStatus: (state) => state.servers.serversStatus,
  countries: (state) => state.servers.countries,
};

export { selectors };
