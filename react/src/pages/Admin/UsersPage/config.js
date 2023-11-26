import { MemoizedUserPlanCell } from 'components/Admin/Users/TableCells/UserPlanCell';
import { MemoizedUserEmailCell } from 'components/Admin/Users/TableCells/UserEmailCell';
import { MemoizedUserExpiresCell } from 'components/Admin/Users/TableCells/UserExpiresCell';
import { MemoizedUserSubscriptionCell } from 'components/Admin/Users/TableCells/UserSubscriptionCell';
import { MemoizedUserActionsCell } from 'components/Admin/Users/TableCells/UserActionsCell';
import { UsersRefresh } from 'components/Admin/Users/UsersRefresh';
import { UsersHead } from 'components/Admin/Users/UsersHead';
import { UsersHeadPlan } from 'components/Admin/Users/UsersHeadPlan';
import { ReactComponent as IconUser } from 'assets/img/icons/user.svg';
import { ReactComponent as IconExpires } from 'assets/img/icons/expires.svg';
import { ReactComponent as IconSubscription } from 'assets/img/icons/subscription.svg';
import { sortExpires, sortSubscription, sortAlphabet } from 'utils/const';

const formattedOptions = (filterType) => {
  const filtersOptions = Object.entries(filterType).map(([key, value]) => ({
    value: key,
    label: value,
  }));
  return filtersOptions;
};

export const columns = [
  {
    Header: (
      <UsersHead
        name="email"
        icon={<IconUser />}
        options={formattedOptions(sortAlphabet)}
        displayValueKey="user"
      />
    ),
    accessor: 'email',
    maxWidth: 247,
    Cell: MemoizedUserEmailCell,
  },
  {
    Header: <UsersHeadPlan />,
    maxWidth: 247,
    accessor: 'subscription.planName',
    Cell: MemoizedUserPlanCell,
  },
  {
    Header: (
      <UsersHead
        name="expiredAt"
        icon={<IconExpires />}
        options={formattedOptions(sortExpires)}
        displayValueKey="expires"
      />
    ),
    maxWidth: 247,
    accessor: 'subscription.expiredAt',
    Cell: MemoizedUserExpiresCell,
  },
  {
    Header: (
      <UsersHead
        name="subscription"
        icon={<IconSubscription />}
        options={formattedOptions(sortSubscription)}
        displayValueKey="subscription"
      />
    ),
    maxWidth: 164,
    accessor: 'subscription.isActive',
    Cell: MemoizedUserSubscriptionCell,
  },
  {
    Header: <UsersRefresh />,
    accessor: 'id',
    maxWidth: 30,
    Cell: MemoizedUserActionsCell,
  },
];
