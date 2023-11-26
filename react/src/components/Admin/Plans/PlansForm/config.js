import yup from 'plugins/yup-config';

import { duration } from 'utils/const';
import { transformNaN } from 'utils/prepare';

const durationOptions = Object.entries(duration).map(([key, value]) => ({
  value: Number(key),
  label: value,
}));

const defaultFields = {
  name: '',
  description: '',
  price: null,
  duration: durationOptions[0],
  ads: false,
};

const schema = yup.object().shape({
  name: yup.string().required(),
  description: yup.string().required(),
  price: yup.number().nullable().transform(transformNaN),
  ads: yup.boolean(),
});

export { defaultFields, schema, durationOptions };
