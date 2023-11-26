import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { servers } from 'store/servers';
import { Container, Main } from './styled';
import { ServersForm } from '../ServersForm';
import { HeaderServer } from '../HeaderServer';

export function EditServer() {
  const { id } = useParams();
  const data = useSelector(servers.selectors.servers);
  const server = data.find((obj) => obj.id === Number(id));
  return (
    <>
      <HeaderServer />
      <Main>
        <Container>
          <ServersForm server={server} />
        </Container>
      </Main>
    </>
  );
}
