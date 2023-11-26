import PropTypes from 'prop-types';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';
import { yupResolver } from '@hookform/resolvers/yup';

import { RTextField } from 'components/Form/RTextField';
import { RTextareaField } from 'components/Form/RTextareaField';
import { RSelectField } from 'components/Form/RSelectField';
import { RSwitchField } from 'components/Form/RSwitchField';
import { RButton } from 'components/Form/RButton';
import { IconDollar } from 'components/Icons';
import { RLoadingOverlay } from 'components/RLoadingOverlay';
import { plans } from 'store/plans';
import { status } from 'utils/const';
import { defaultFields, durationOptions, schema } from './config';
import { ButtonsContainer, Form, LabelSwitch, WrapSwitch } from './styled';

PlansForm.propTypes = {
  plan: PropTypes.object,
};

export function PlansForm({ plan }) {
  const defaultValues = plan
    ? {
        ...plan,
        price: plan.price * 0.01,
        duration: durationOptions.find((item) => item.value === plan.duration),
      }
    : defaultFields;

  const { control, handleSubmit, reset } = useForm({
    defaultValues,
    resolver: yupResolver(schema),
  });
  const dispatch = useDispatch();
  const history = useHistory();
  const { id } = useParams();
  const planStatus = useSelector(plans.selectors.plansStatus);

  const onSubmit = async (data) => {
    if (plan) {
      await dispatch(plans.thunks.editPlan([data, id]));
      history.push(`/admin/plans/`);
      return;
    }
    const { payload } = await dispatch(plans.thunks.addPlan(data));
    if (payload?.status) reset();
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <RLoadingOverlay isVisible={planStatus === status.PENDING} />
      <RTextField
        type="text"
        label="Plan name"
        name="name"
        control={control}
        fullWidth
      />
      <RTextareaField
        type="text"
        label="Description"
        name="description"
        control={control}
        fullWidth
      />
      <RTextField
        type="number"
        isFieldIcon={<IconDollar />}
        label="Pricing"
        name="price"
        placeholder="00.00"
        control={control}
        fullWidth
      />
      <RSelectField
        label="Duration"
        labelStatic
        name="duration"
        options={durationOptions}
        control={control}
        helperTextStatic={false}
        fullWidth
      />
      <WrapSwitch>
        <LabelSwitch>Show ads</LabelSwitch>
        <RSwitchField
          label="Show ads"
          name="ads"
          size={23}
          control={control}
        />
      </WrapSwitch>

      <ButtonsContainer>
        <RButton type="submit">Save</RButton>
      </ButtonsContainer>
    </Form>
  );
}
