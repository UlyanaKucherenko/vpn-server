import yup from 'plugins/yup-config';

const defaultValues = {
  email: '',
  password: '',
};

const schema = yup.object().shape({
  email: yup.string().required(),
  password: yup.string().min(8).max(32).required(),
});

export { defaultValues, schema };
