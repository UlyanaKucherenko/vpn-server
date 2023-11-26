import yup from 'plugins/yup-config';

const defaultFields = {
  country: { value: 1, label: 'Aruba' },
  location: '',
  ip: '',
  isActive: false,
};

const schema = yup.object().shape({
  country: yup.object().required(),
  location: yup.string().required(),
  ip: yup.string().required(),
  isActive: yup.boolean(),
});

export { defaultFields, schema };
