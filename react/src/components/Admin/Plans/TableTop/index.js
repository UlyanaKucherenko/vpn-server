import { ReactComponent as IconAdd } from 'assets/img/icons/add.svg';

import { Wrap, Btn, BtnText } from './styled';

export function TableTop() {
  return (
    <Wrap>
      <Btn to="/admin/plans/create-plan">
        <BtnText>Add new plan</BtnText>
        <IconAdd />
      </Btn>
    </Wrap>
  );
}
