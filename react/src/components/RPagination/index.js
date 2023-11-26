import RcPagination from 'rc-pagination';
import PropTypes from 'prop-types';

import { IconPagNext, IconPagPrev } from 'components/Icons';

RPagination.propTypes = {
  current: PropTypes.number,
  total: PropTypes.number,
  perPage: PropTypes.number,
  onChange: PropTypes.func,
};

export function RPagination({
  current = 1,
  total = 0, // total rows,
  perPage = 10, // rows per page
  onChange = () => {},
}) {
  const RenderPages = ({ current, type, element }) => {
    return type === 'page' ? current : element;
  };

  const itemRender = (current, type, element) => (
    <RenderPages
      current={current}
      type={type}
      element={element}
    />
  );

  return (
    <RcPagination
      current={current}
      total={total}
      pageSize={perPage}
      onChange={onChange}
      itemRender={itemRender}
      prevIcon={<IconPagPrev />}
      nextIcon={<IconPagNext />}
      jumpPrevIcon="..."
      jumpNextIcon="..."
    />
  );
}
