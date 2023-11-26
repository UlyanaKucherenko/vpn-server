import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { users } from 'store/users';
import { Container, Main } from './styled';
import { HeaderUser } from '../HeaderUser';
import { UserDetailsInfo } from './UserDetailsInfo';

export function UserDetails() {
  const { id } = useParams();
  const data = useSelector(users.selectors.users);
  const user = data.find((obj) => obj.id === Number(id));
  return (
    <>
      <HeaderUser />
      <Main>
        <Container>
          <UserDetailsInfo user={user} />
        </Container>
      </Main>
    </>
  );
}
