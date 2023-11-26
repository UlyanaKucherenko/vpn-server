import { MemoizedPlanNameCell } from 'components/Admin/Plans/TableCells/PlanNameCell';
import { MemoizedPlanPriceCell } from 'components/Admin/Plans/TableCells/PlanPriceCell';
import { MemoizedPlanDurationCell } from 'components/Admin/Plans/TableCells/PlanDurationCell';
import { MemoizedPlanAdsCell } from 'components/Admin/Plans/TableCells/PlanAdsCell';
import { MemoizedPlanActionsCell } from 'components/Admin/Plans/TableCells/PlanActionsCell';
import { MemoizedPlanUserCountCell } from 'components/Admin/Plans/TableCells/PlanUserCountCell';
import TableHeader from 'components/Admin/Plans/TableHeader';
import { PlansRefresh } from 'components/Admin/Plans/PlansRefresh';
import { ReactComponent as IconPlan } from 'assets/img/icons/plan.svg';
import { ReactComponent as IconDuration } from 'assets/img/icons/duration.svg';
import { ReactComponent as IconAds } from 'assets/img/icons/ads.svg';
import { ReactComponent as IconDollar } from 'assets/img/icons/dollar.svg';
import { ReactComponent as IconUser } from 'assets/img/icons/user.svg';

export const columns = [
  {
    Header: (
      <TableHeader
        header="Plan"
        icon={<IconPlan />}
      />
    ),
    accessor: 'name',
    maxWidth: 164,
    Cell: MemoizedPlanNameCell,
  },
  {
    Header: (
      <TableHeader
        header="Duration"
        icon={<IconDuration />}
      />
    ),
    accessor: 'duration',
    maxWidth: 164,
    Cell: MemoizedPlanDurationCell,
  },
  {
    Header: (
      <TableHeader
        icon={<IconDollar />}
        css={{ 'justify-content': 'center' }}
      />
    ),
    accessor: 'price',
    maxWidth: 79,
    Cell: MemoizedPlanPriceCell,
  },
  {
    Header: (
      <TableHeader
        header="ADS"
        icon={<IconAds />}
        css={{ 'justify-content': 'center' }}
      />
    ),
    accessor: 'isActive',
    maxWidth: 164,
    Cell: MemoizedPlanAdsCell,
  },
  {
    Header: (
      <TableHeader
        icon={<IconUser />}
        css={{ 'justify-content': 'center' }}
      />
    ),
    accessor: 'userCount',
    maxWidth: 79,
    Cell: MemoizedPlanUserCountCell,
  },
  {
    Header: <PlansRefresh />,
    accessor: 'id',
    maxWidth: 30,
    Cell: MemoizedPlanActionsCell,
  },
];
