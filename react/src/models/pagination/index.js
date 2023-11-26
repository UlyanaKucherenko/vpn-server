export const pagination = (current, from, lastPage, to, total, perPage) => {
  return {
    current,
    from,
    lastPage,
    to,
    total,
    perPage,
  };
};
