import { format, isToday, isYesterday } from 'date-fns';

import { appDateFormat } from 'utils/formats';

export const prepareDateFromServer = (date) => {
  if (!date) return '';
  const parseDate = typeof date === 'number' ? date : +date;
  return parseDate * 1000;
};

export const prepareDateToServer = (date) => {
  if (!date) return '';
  const parseDate = typeof date === 'number' ? date : +date;
  return parseDate / 1000;
};

export const prepareDateForNotifications = (date) => {
  if (!date) return 'Invalid date';
  if (isToday(date)) return 'Today';
  if (isYesterday(date)) return 'Yesterday';
  return format(date, appDateFormat);
};
