import { format } from 'date-fns';
import { appTimeFormat } from 'utils/formats';

const encodeString = (str = '', startPos = 5, amountSymbols = 5) => {
  if (!str && !str.length) return '';

  const arrayOfStrings = str.split('');
  const totalSymbols = startPos + amountSymbols;

  const replaceArrayOfStrings = arrayOfStrings.map((word, key) => {
    if (key >= startPos && key < totalSymbols) return '*';
    return word;
  });

  return replaceArrayOfStrings.join('');
};

const prepareFormData = (data) => {
  const form = new FormData();
  Object.entries(data).forEach((elem) => {
    form.append(elem[0], elem[1]);
  });
  return form;
};

const dataURLtoFile = (dataUrl, filename) => {
  const arr = dataUrl.split(',');
  const mime = arr[0].match(/:(.*?);/)[1];
  const bstr = atob(arr[1]); // deprecated for NodeJS only
  let n = bstr.length;
  const u8arr = new Uint8Array(n);

  // eslint-disable-next-line no-plusplus
  while (n--) {
    u8arr[n] = bstr.charCodeAt(n);
  }

  return new File([u8arr], filename, { type: mime });
};

const emailRegex = /^[\w.!#$%&'*+=?^_`{|}~-]+@([\w-]+\.)+[\w-]{2,4}$/;
const phoneRegex = /^[+]?[(]?\d{3}[)]?[-\s]?\d{3}[-\s]?\d{4,6}$/;
const priceRegex = /^\d{0,8}(\.\d{1,2})?$/;

const validateLogin = (value) => {
  const isValidEmail = emailRegex.test(value);
  const isValidPhone = phoneRegex.test(value);
  return !(!isValidEmail && !isValidPhone);
};

const isLoginEmail = (value) => {
  return !!value.match(emailRegex);
};

const isValidPrice = (value) => {
  return priceRegex.test(value);
};

const deleteObjInArrById = (arr, id) => {
  const arrCopy = [...arr];
  const objIdx = arr.findIndex((item) => item.id === id);
  arrCopy.splice(objIdx, 1);
  return arrCopy;
};

const transformNaN = (value) => (Number.isNaN(value) ? null : value);

const transformNumber = (num, digits = 3) => {
  return (!Number.isInteger(num) ? num.toFixed(digits) : num.toString())
    .replace(/\B(?=(\d{3})+(?!\d))/g, ' ')
    .replace('.', ',');
};

const formatTime = (time) => {
  if (time && typeof time === 'number')
    return format(time * 1000, `${appTimeFormat}`);
  return undefined;
};

export {
  encodeString,
  prepareFormData,
  dataURLtoFile,
  validateLogin,
  isLoginEmail,
  deleteObjInArrById,
  transformNaN,
  transformNumber,
  formatTime,
  isValidPrice,
};
