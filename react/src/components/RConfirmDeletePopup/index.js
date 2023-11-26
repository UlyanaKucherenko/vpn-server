import PropTypes from 'prop-types';

import { RButtonIcon } from 'components/Form/RButtonIcon';
import { IconClose } from 'components/Icons';
import { RButton } from 'components/Form/RButton';
import { RMask } from 'components/RMask';
import { RModalPortal } from 'components/RModalPortal';
import { Spacer } from 'components/App/GlobalStyled';
import { Popup, Close, Body, Footer, Title, Text } from './styled';

RConfirmDeletePopup.propTypes = {
  title: PropTypes.string,
  width: PropTypes.number,
  fullHeight: PropTypes.bool,
  maxHeight: PropTypes.number,
  onClose: PropTypes.func,
  onConfirm: PropTypes.func,
};

export function RConfirmDeletePopup({
  width = 420,
  title = '',
  fullHeight,
  maxHeight,
  onClose = () => {},
  onConfirm = () => {},
}) {
  return (
    <RModalPortal>
      <RMask>
        <Popup {...{ width, fullHeight, maxHeight }}>
          <Close>
            {onClose ? (
              <RButtonIcon
                color="#C4C4C4"
                onClick={onClose}
              >
                <IconClose />
              </RButtonIcon>
            ) : null}
          </Close>
          <Body>
            <Title>{title}</Title>
            <Text>You won’t be able to undo this action</Text>
          </Body>
          <Footer>
            <RButton
              onClick={onConfirm}
              variant="confirm"
              height={34}
              css={{
                minWidth: '90px',
                marginRight: '44px',
              }}
            >
              Delete&nbsp;
            </RButton>
            <Spacer m="0 8px" />
            <RButton
              onClick={onClose}
              height={34}
              css={{
                minWidth: '90px',
              }}
            >
              Cancel&nbsp;
            </RButton>
          </Footer>
        </Popup>
      </RMask>
    </RModalPortal>
  );
}
