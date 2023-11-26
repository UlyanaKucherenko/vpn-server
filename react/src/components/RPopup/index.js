import PropTypes from 'prop-types';

import { RButtonIcon } from 'components/Form/RButtonIcon';
import { IconClose } from 'components/Icons';
import { Popup, Header, Title, Close } from './styled';

RPopup.propTypes = {
  width: PropTypes.number,
  fullHeight: PropTypes.bool,
  maxHeight: PropTypes.number,
  onClose: PropTypes.func,
  popupTitle: PropTypes.string,
  children: PropTypes.node,
  headerCss: PropTypes.object,
};

function RPopup({
  width = 420,
  headerCss,
  fullHeight,
  maxHeight,
  onClose,
  popupTitle,
  children,
}) {
  return (
    <Popup {...{ width, fullHeight, maxHeight, popupTitle }}>
      <Header css={headerCss}>
        {popupTitle ? <Title>{popupTitle}</Title> : null}
        <Close>
          {onClose ? (
            <RButtonIcon
              size={16}
              color="#000000"
              onClick={onClose}
            >
              <IconClose />
            </RButtonIcon>
          ) : null}
        </Close>
      </Header>
      {children}
    </Popup>
  );
}

export { RPopup };
