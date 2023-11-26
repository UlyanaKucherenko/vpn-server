import { toast } from 'react-toastify';

export const handleServerErrors = (error) => {
  const { data, status, statusText } = error.response;
  console.log('%c => Error ', 'background: red; color: #000', error.response);
  if (data && data.errors) {
    Object.values(data.errors).forEach((errorMsg) => {
      toast.error(errorMsg[0]);
    });
  } else if (data && data.message) {
    toast.error(data.message);
  } else {
    toast.error(`Error ${status}: ${statusText}`);
  }
};
