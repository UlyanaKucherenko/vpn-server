import { useDispatch } from 'react-redux';

import { TableSearch } from 'components/RTable/TableSearch';
import { users } from 'store/users';
import { Wrap, Title } from './styled';

export function TableTop() {
  const dispatch = useDispatch();
  const onChange = (value) =>
    dispatch(users.actions.SET_FILTERS({ search: value }));

  return (
    <Wrap>
      <Title>Users</Title>
      <TableSearch onChange={onChange} />
    </Wrap>
  );
}
