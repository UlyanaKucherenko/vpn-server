import PropTypes from 'prop-types';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';
import { yupResolver } from '@hookform/resolvers/yup';

import { RTextField } from 'components/Form/RTextField';
import { RSelectField } from 'components/Form/RSelectField';
import { RButton } from 'components/Form/RButton';
import { RSwitchField } from 'components/Form/RSwitchField';
import { RLoadingOverlay } from 'components/RLoadingOverlay';
import { servers } from 'store/servers';
import { status } from 'utils/const';
import { defaultFields, schema } from './config';
import { ButtonsContainer, Form, LabelSwitch, WrapSwitch } from './styled';

ServersForm.propTypes = {
  server: PropTypes.object,
};

export function ServersForm({ server }) {
  const countries = useSelector(servers.selectors.countries);
  const countriesOptions = countries.map((country) => ({
    value: country.id,
    label: country.name,
    icon: country.picture.image,
  }));
  const defaultValues = server
    ? {
        ...server,
        country: countriesOptions.find((item) => item.value === server.id),
      }
    : defaultFields;

  const { control, handleSubmit, reset } = useForm({
    defaultValues,
    resolver: yupResolver(schema),
  });
  const dispatch = useDispatch();
  const history = useHistory();
  const { id } = useParams();
  const serversStatus = useSelector(servers.selectors.serversStatus);

  const onSubmit = async (data) => {
    if (server) {
      await dispatch(servers.thunks.editServer([data, id]));
      history.push(`/admin/servers/`);
      return;
    }
    const { payload } = await dispatch(servers.thunks.addServer(data));
    if (payload?.status) reset();
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <RLoadingOverlay isVisible={serversStatus === status.PENDING} />
      <RSelectField
        label="Country"
        labelStatic
        name="country"
        options={countriesOptions}
        control={control}
        fullWidth
        optionIcon
      />
      <RTextField
        type="text"
        label="Location"
        name="location"
        control={control}
        fullWidth
      />
      <RTextField
        type="text"
        label="ip address"
        name="ip"
        control={control}
        fullWidth
      />
      <WrapSwitch>
        <LabelSwitch>Active</LabelSwitch>
        <RSwitchField
          label="Active"
          name="isActive"
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
