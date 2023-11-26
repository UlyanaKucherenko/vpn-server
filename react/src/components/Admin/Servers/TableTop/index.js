import { useDispatch } from 'react-redux';

import { TableSearch } from 'components/RTable/TableSearch';
import { ReactComponent as IconAdd } from 'assets/img/icons/add.svg';
import { servers } from 'store/servers';
import { Wrap, Btn, BtnText } from './styled';

export function TableTop() {
  const dispatch = useDispatch();
  const onChange = (value) =>
    dispatch(servers.actions.SET_FILTERS({ search: value }));

  return (
    <Wrap>
      <Btn to="/admin/servers/create-server">
        <BtnText>Add server</BtnText>
        <IconAdd />
      </Btn>
      <TableSearch onChange={onChange} />
    </Wrap>
  );
}
