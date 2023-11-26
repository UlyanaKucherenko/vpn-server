import PropTypes from 'prop-types';

import { RSelectField } from 'components/Form/RSelectField';
import { Wrap, Select } from './styled';

RRowsOnPage.propTypes = {
  fromPage: PropTypes.number.isRequired,
  toPage: PropTypes.number.isRequired,
  value: PropTypes.shape({
    value: PropTypes.number,
    label: PropTypes.number,
  }),
  totalItems: PropTypes.number.isRequired,
  rowsPerPageOption: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.number,
      label: PropTypes.number,
    })
  ),
  setPageSize: PropTypes.func,
};

RRowsOnPage.defaultProps = {
  rowsPerPageOption: [
    { value: 15, label: 15 },
    { value: 20, label: 20 },
    { value: 25, label: 25 },
    { value: 50, label: 50 },
  ],
};

export function RRowsOnPage({
  rowsPerPageOption,
  fromPage = 0,
  toPage = 0,
  value = { value: 15, label: 15 },
  totalItems = 0,
  setPageSize = () => {},
}) {
  const onChange = (option) => {
    setPageSize(option);
  };

  return (
    <Wrap>
      <div>show rows on the page</div>
      <Select>
        <RSelectField
          name="rowsPage"
          options={rowsPerPageOption}
          value={value}
          onChange={onChange}
          height={30}
          helperTextStatic={false}
        />
      </Select>
      <div>
        {fromPage}-{toPage} of {totalItems}
      </div>
    </Wrap>
  );
}
