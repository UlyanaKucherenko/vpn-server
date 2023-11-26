import PropTypes from 'prop-types';
import { useContext, useRef } from 'react';
import { ThemeContext } from 'styled-components';

import { useOutsideClick } from 'hooks/useOutsideClick';
import { useToggle } from 'hooks/useToggle';
import { ReactComponent as IconOptions } from 'assets/img/icons/options.svg';
import { ReactComponent as IconDelete } from 'assets/img/icons/delete.svg';
import { ReactComponent as IconEdit } from 'assets/img/icons/edit.svg';
import { RConfirmDeletePopup } from 'components/RConfirmDeletePopup';
import { RButtonIcon } from 'components/Form/RButtonIcon';
import { Wrap, WrapOptions, Options, Option, TextOption } from './styled';

TableActions.propTypes = {
  deleteOption: PropTypes.bool,
  onEdit: PropTypes.func,
  onDelete: PropTypes.func,
  titlePopupDelete: PropTypes.string,
};

export function TableActions({
  deleteOption = false,
  onEdit = () => {},
  onDelete = () => {},
  titlePopupDelete,
}) {
  const [optionsIsOpened, setOptionsIsOpened] = useToggle();
  const [deletePopupIsOpened, setDeletePopupIsOpened] = useToggle();
  const ref = useRef();
  const theme = useContext(ThemeContext);

  const toggleIsOpenActions = () => {
    setOptionsIsOpened();
  };
  useOutsideClick(ref, () => {
    if (optionsIsOpened) {
      toggleIsOpenActions();
    }
  });
  const onCloseDeletePopup = () => {
    setDeletePopupIsOpened();
  };
  const onDeletePlan = async () => {
    onDelete();
    onCloseDeletePopup();
  };
  return (
    <Wrap ref={ref}>
      <RButtonIcon
        onClick={toggleIsOpenActions}
        css={{
          color: `${theme.table.optionBg}`,
          'z-index': '0',
        }}
      >
        <IconOptions />
      </RButtonIcon>
      {optionsIsOpened && (
        <WrapOptions>
          <Options>
            <Option onClick={onEdit}>
              <TextOption size="sm">Edit</TextOption>
              <IconEdit />
            </Option>
            {deleteOption && (
              <Option
                onClick={() => {
                  setDeletePopupIsOpened();
                }}
              >
                <TextOption size="sm">Delete admin</TextOption>
                <IconDelete />
              </Option>
            )}
          </Options>
        </WrapOptions>
      )}
      {deletePopupIsOpened && (
        <RConfirmDeletePopup
          title={titlePopupDelete}
          onClose={onCloseDeletePopup}
          onConfirm={onDeletePlan}
          width={484}
        />
      )}
    </Wrap>
  );
}
