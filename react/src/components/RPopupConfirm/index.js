import PropTypes from 'prop-types';

import { RButtonIcon } from 'components/Form/RButtonIcon';
import { IconClose } from 'components/Icons';
import { RButton } from 'components/Form/RButton';
import { RMask } from 'components/RMask';
import { RModalPortal } from 'components/RModalPortal';
import { Spacer } from 'components/App/GlobalStyled';
import { Popup, Header, Title, Close, Body, Footer } from './styled';

RPopupConfirm.propTypes = {
  width: PropTypes.number,
  fullHeight: PropTypes.bool,
  maxHeight: PropTypes.number,
  confirmButtonText: PropTypes.string,
  cancelButtonText: PropTypes.string,
  onClose: PropTypes.func,
  onConfirm: PropTypes.func,
  popupTitle: PropTypes.string,
  children: PropTypes.node,
};

export function RPopupConfirm({
  width = 420,
  fullHeight,
  maxHeight,
  confirmButtonText = 'Confirm',
  cancelButtonText = 'Cancel',
  onClose = () => {},
  onConfirm = () => {},
  popupTitle,
  children,
}) {
  return (
    <RModalPortal>
      <RMask>
        <Popup {...{ width, fullHeight, maxHeight, popupTitle }}>
          <Header>
            {popupTitle ? <Title>{popupTitle}</Title> : null}
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
          </Header>
          <Body>{children}</Body>
          <Footer>
            <RButton onClick={onConfirm}>{confirmButtonText}</RButton>
            <RButton onClick={onClose}>{cancelButtonText}</RButton>
            <Spacer m="0 8px" />
          </Footer>
        </Popup>
      </RMask>
    </RModalPortal>
  );
}
