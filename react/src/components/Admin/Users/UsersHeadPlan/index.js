import { useSelector } from 'react-redux';

import { users } from 'store/users';
import { ReactComponent as IconPlan } from 'assets/img/icons/plan.svg';
import { UsersHead } from '../UsersHead';

function UsersHeadPlan() {
  const plans = useSelector(users.selectors.plansList);

  const planOptions = plans.map((plan) => ({
    value: plan.name,
    label: plan.name,
  }));

  return (
    <UsersHead
      name="planName"
      icon={<IconPlan />}
      options={planOptions}
      displayValueKey="plan"
    />
  );
}

export { UsersHeadPlan };
