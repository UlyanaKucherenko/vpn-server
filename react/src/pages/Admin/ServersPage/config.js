import { MemoizedServerCountryCell } from 'components/Admin/Servers/TableCells/ServerCountryCell';
import { MemoizedServerLocationCell } from 'components/Admin/Servers/TableCells/ServerLocationCell';
import { MemoizedServerIpCell } from 'components/Admin/Servers/TableCells/ServerIpCell';
import { MemoizedServerActiveCell } from 'components/Admin/Servers/TableCells/ServerActiveCell';
import { MemoizedServerActionsCell } from 'components/Admin/Servers/TableCells/ServerActionsCell';
import { ServersRefresh } from 'components/Admin/Servers/ServersRefresh';
import { ServersHead } from 'components/Admin/Servers/ServersHead';
import { ReactComponent as IconCountry } from 'assets/img/icons/country.svg';
import { ReactComponent as IconLocation } from 'assets/img/icons/location.svg';
import { ReactComponent as IconIp } from 'assets/img/icons/ip.svg';
import { ReactComponent as IconActive } from 'assets/img/icons/active.svg';
import { sortAlphabet, sortSubscription } from 'utils/const';

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
      <ServersHead
        name="country"
        icon={<IconCountry />}
        options={formattedOptions(sortAlphabet)}
        displayValueKey="country"
      />
    ),
    accessor: 'country',
    maxWidth: 247,
    Cell: MemoizedServerCountryCell,
  },
  {
    Header: (
      <ServersHead
        name="location"
        icon={<IconLocation />}
        options={formattedOptions(sortAlphabet)}
        displayValueKey="location"
      />
    ),
    maxWidth: 247,
    accessor: 'location',
    Cell: MemoizedServerLocationCell,
  },
  {
    Header: (
      <ServersHead
        name="ip"
        icon={<IconIp />}
        options={formattedOptions(sortAlphabet)}
        displayValueKey="ipAddress"
      />
    ),
    maxWidth: 247,
    accessor: 'ip',
    Cell: MemoizedServerIpCell,
  },
  {
    Header: (
      <ServersHead
        name="isActive"
        icon={<IconActive />}
        options={formattedOptions(sortSubscription)}
        displayValueKey="active"
      />
    ),
    maxWidth: 164,
    accessor: 'isActive',
    Cell: MemoizedServerActiveCell,
  },
  {
    Header: <ServersRefresh />,
    accessor: 'id',
    maxWidth: 30,
    Cell: MemoizedServerActionsCell,
  },
];
