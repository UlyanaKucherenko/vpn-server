import { useDispatch } from 'react-redux';

import { ReactComponent as IconRefresh } from 'assets/img/icons/refresh.svg';
import { RButton } from 'components/Form/RButton';
import { servers } from 'store/servers';

export function ServersRefresh() {
  const dispatch = useDispatch();

  const refresh = () => {
    dispatch(servers.actions.RESET_DEFAULT_FILTERS_NAMES());
    dispatch(servers.actions.RESET_FILTERS());
    dispatch(servers.thunks.getServers());
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
