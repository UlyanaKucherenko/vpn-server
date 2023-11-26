import { Container, Main } from './styled';
import { PlansForm } from '../PlansForm';
import { HeaderPlan } from '../HeaderPlan';

export function CreatePlan() {
  return (
    <>
      <HeaderPlan />
      <Main>
        <Container>
          <PlansForm />
        </Container>
      </Main>
    </>
  );
}
