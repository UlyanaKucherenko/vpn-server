const prepareSelectField = (options = []) => {
  if (!Array.isArray(options) && !options.length) return [];
  return options.map((option) => ({
    value: option,
    label: option,
  }));
};

const getValueFromOptions = (objectData = {}) => {
  if (!Object.keys(objectData).length) return {};
  const newObjectData = {};
  Object.entries(objectData).forEach(([key, value]) => {
    if (typeof value === 'object') newObjectData[key] = value.value;
    else newObjectData[key] = value;
  });
  return newObjectData;
};

const getObjectFromValue = (value = '') => {
  if (value && value.length > 0) {
    return {
      value,
      label: value,
    };
  }
  return {};
};

const checkOptionAll = (option) => {
  return option.value !== 'All' ? option.value : null;
};

export {
  prepareSelectField,
  getValueFromOptions,
  getObjectFromValue,
  checkOptionAll,
};
