import PropTypes from 'prop-types';

import { ReactComponent as IconInfoSvg } from 'assets/img/global/alert/icon-info.svg';
import { Alert, Text } from './styled';

RAlert.propTypes = {
  variant: PropTypes.string,
  children: PropTypes.node,
};

function RAlert({ variant = 'info', children }) {
  return (
    <Alert>
      {variant === 'info' && <IconInfoSvg />}
      <Text>{children}</Text>
    </Alert>
  );
}

export { RAlert };
