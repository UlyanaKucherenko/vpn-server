import { Container, Main } from './styled';
import { ServersForm } from '../ServersForm';
import { HeaderServer } from '../HeaderServer';

export function CreateServer() {
  return (
    <>
      <HeaderServer />
      <Main>
        <Container>
          <ServersForm />
        </Container>
      </Main>
    </>
  );
}
