import { useDispatch } from 'react-redux';

import { ReactComponent as IconRefresh } from 'assets/img/icons/refresh.svg';
import { RButton } from 'components/Form/RButton';
import { plans } from 'store/plans';

export function PlansRefresh() {
  const dispatch = useDispatch();

  const refresh = () => {
    dispatch(plans.thunks.getPlans());
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
