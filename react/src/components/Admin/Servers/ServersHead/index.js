import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';

import { TableFilter } from 'components/RTable/TableFilter';
import { servers } from 'store/servers';

ServersHead.propTypes = {
  name: PropTypes.string,
  icon: PropTypes.element,
  options: PropTypes.array,
  displayValueKey: PropTypes.string,
};

function ServersHead({ name, icon, options = [], displayValueKey }) {
  const dispatch = useDispatch();

  const displayValue = useSelector(
    (state) => state.servers.defaultFiltersNames?.[displayValueKey]
  );
  const onChooseOptionFilter = (option) => {
    const isActiveFilters = {
      sortBy: name,
      sortType: option.value,
    };
    dispatch(servers.actions.RESET_DEFAULT_FILTERS_NAMES());
    dispatch(servers.actions.RESET_FILTERS());
    dispatch(servers.actions.SET_FILTERS(isActiveFilters));
    dispatch(
      servers.actions.UPDATE_DEFAULT_FILTERS_NAMES({
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
      onChooseOptionFilter={onChooseOptionFilter}
      fullWidth
      displayValue={displayValue}
    />
  );
}

export { ServersHead };
