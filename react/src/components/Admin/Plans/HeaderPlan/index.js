import { ReactComponent as IconBack } from 'assets/img/icons/back.svg';
import { Container, Header, BtnBack, Text } from './styled';

export function HeaderPlan() {
  return (
    <Header>
      <Container>
        <BtnBack to="/admin/plans">
          <IconBack />
          <Text>Back to all plans</Text>
        </BtnBack>
      </Container>
    </Header>
  );
}
