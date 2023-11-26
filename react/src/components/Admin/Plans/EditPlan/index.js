import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { plans } from 'store/plans';
import { Container, Main } from './styled';
import { PlansForm } from '../PlansForm';
import { HeaderPlan } from '../HeaderPlan';

export function EditPlan() {
  const { id } = useParams();
  const data = useSelector(plans.selectors.plans);
  const plan = data.find((obj) => obj.id === Number(id));

  return (
    <>
      <HeaderPlan />
      <Main>
        <Container>
          <PlansForm plan={plan} />
        </Container>
      </Main>
    </>
  );
}
