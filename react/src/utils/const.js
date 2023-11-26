export const appTheme = {
  light: 'LIGHT',
  dark: 'DARK',
};

const status = {
  IDLE: 'idle',
  PENDING: 'pending',
  SUCCESS: 'success',
  FAIL: 'fail',
};

const duration = {
  '': 'Unlimited',
  7: 'Weekly',
  30: 'Monthly',
  365: 'Yearly',
};

const sortAlphabet = {
  ASC: 'A – Z',
  DESC: 'Z – A',
};

const sortExpires = {
  ASC: 'Sooner',
  DESC: 'Later',
};
const sortSubscription = {
  DESC: 'Active',
  ASC: 'Disable',
};

const months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

export {
  status,
  months,
  duration,
  sortExpires,
  sortSubscription,
  sortAlphabet,
};
