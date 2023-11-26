import { useDispatch } from 'react-redux';

import { ReactComponent as IconRefresh } from 'assets/img/icons/refresh.svg';
import { RButton } from 'components/Form/RButton';
import { users } from 'store/users';

export function UsersRefresh() {
  const dispatch = useDispatch();

  const refresh = () => {
    dispatch(users.actions.RESET_DEFAULT_FILTERS_NAMES());
    dispatch(users.actions.RESET_FILTERS());
    dispatch(users.thunks.getUsers());
  };
  return (
    <RButton
      variant="refresh"
      onClick={refresh}
    >
      <IconRefresh />
    </RButton>
  );
}
