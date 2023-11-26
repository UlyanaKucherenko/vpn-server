import PropTypes from 'prop-types';

import { Header, Icon, Wrap } from './styled';

TableHeader.propTypes = {
  header: PropTypes.string,
  icon: PropTypes.element,
};

function TableHeader({ header, icon }) {
  return (
    <Wrap>
      <Icon>{icon}</Icon>
      <Header>{header}</Header>
    </Wrap>
  );
}
export default TableHeader;
