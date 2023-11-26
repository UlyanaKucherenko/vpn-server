import PropTypes from 'prop-types';

import { IconChevronLeft } from 'components/Icons';
import { Wrap } from './styled';

RLinkBack.propTypes = {
  text: PropTypes.string,
  onClick: PropTypes.func,
};

export function RLinkBack({ text = '', onClick }) {
  return (
    <Wrap onClick={onClick}>
      <IconChevronLeft />
      {text}
    </Wrap>
  );
}
