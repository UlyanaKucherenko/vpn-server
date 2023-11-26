import { ReactComponent as IconBack } from 'assets/img/icons/back.svg';
import { Container, Header, BtnBack, Text } from './styled';

export function HeaderUser() {
  return (
    <Header>
      <Container>
        <BtnBack to="/admin/users">
          <IconBack />
          <Text>Back to all users</Text>
        </BtnBack>
      </Container>
    </Header>
  );
}
