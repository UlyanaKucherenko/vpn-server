import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';

import { TableFilter } from 'components/RTable/TableFilter';
import { users } from 'store/users';

UsersHead.propTypes = {
  name: PropTypes.string,
  icon: PropTypes.element,
  options: PropTypes.array,
  displayValueKey: PropTypes.string,
};

function UsersHead({ name, icon, options = [], displayValueKey }) {
  const dispatch = useDispatch();

  const displayValue = useSelector(
    (state) => state.users.defaultFiltersNames?.[displayValueKey]
  );

  const onChooseOptionFilter = (option) => {
    const isActiveFilters =
      name === 'planName'
        ? { sortByPlan: option.value }
        : {
            sortBy: name,
            sortType: option.value,
          };
    dispatch(users.actions.RESET_DEFAULT_FILTERS_NAMES());
    dispatch(users.actions.RESET_FILTERS());
    dispatch(users.actions.SET_FILTERS(isActiveFilters));
    dispatch(
      users.actions.UPDATE_DEFAULT_FILTERS_NAMES({
        key: displayValueKey,
        value: option.label,
      })
    );
  };
  return (
    <TableFilter
      name={name}
      icon={icon}
      options={options}
      displayValue={displayValue}
      onChooseOptionFilter={onChooseOptionFilter}
      fullWidth
    />
  );
}

export { UsersHead };
