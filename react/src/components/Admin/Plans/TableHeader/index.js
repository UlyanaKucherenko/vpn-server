import PropTypes from 'prop-types';

import { Header, Icon, Wrap } from './styled';

TableHeader.propTypes = {
  header: PropTypes.string,
  icon: PropTypes.element,
  css: PropTypes.object,
};

function TableHeader({ header, icon, css }) {
  return (
    <Wrap css={css}>
      <Icon>{icon}</Icon>
      <Header>{header}</Header>
    </Wrap>
  );
}
export default TableHeader;
