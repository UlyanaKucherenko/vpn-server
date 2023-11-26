import { ReactComponent as IconBack } from 'assets/img/icons/back.svg';
import { Container, Header, BtnBack, Text } from './styled';

export function HeaderServer() {
  return (
    <Header>
      <Container>
        <BtnBack to="/admin/servers">
          <IconBack />
          <Text>Back to all servers</Text>
        </BtnBack>
      </Container>
    </Header>
  );
}
