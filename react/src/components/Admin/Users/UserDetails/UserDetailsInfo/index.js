import PropTypes from 'prop-types';
import { useRef } from 'react';

import { ReactComponent as IconCopy } from 'assets/img/icons/copy.svg';
import { RButtonIcon } from 'components/Form/RButtonIcon';
import {
  Wrap,
  Item,
  Subtitle,
  Active,
  Disabled,
  FieldCopy,
  Input,
} from './styled';

UserDetailsInfo.propTypes = {
  user: PropTypes.object,
};

export function UserDetailsInfo({ user = {} }) {
  const inputCopyRef = useRef(null);

  const copyCodeToClipboard = () => {
    const copiedText = inputCopyRef.current;
    copiedText.select();
    document.execCommand('copy');
  };

  return (
    <Wrap>
      <Item>
        <Subtitle size="sm">USER</Subtitle>
        <FieldCopy>
          <Input
            ref={inputCopyRef}
            type="text"
            value={user.email}
            readOnly
          />
          <RButtonIcon onClick={copyCodeToClipboard}>
            <IconCopy />
          </RButtonIcon>
        </FieldCopy>
      </Item>
      <Item>
        <Subtitle size="sm">Subscription</Subtitle>
        {user.subscription && user.subscription.isActive ? (
          <Active>active</Active>
        ) : (
          <Disabled>disabled</Disabled>
        )}
      </Item>
      <Item>
        <Subtitle size="sm">Plan</Subtitle>
        {(user.subscription && user.subscription.planName) || '-'}
      </Item>
    </Wrap>
  );
}
