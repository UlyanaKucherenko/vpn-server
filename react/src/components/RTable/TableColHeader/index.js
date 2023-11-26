import PropTypes from 'prop-types';

import { Header, Icon, Wrap } from './styled';

TableColHeader.propTypes = {
  header: PropTypes.string,
  icon: PropTypes.element,
};

function TableColHeader({ header, icon }) {
  return (
    <Wrap>
      <Icon>{icon}</Icon>
      <Header>{header}</Header>
    </Wrap>
  );
}
export default TableColHeader;
