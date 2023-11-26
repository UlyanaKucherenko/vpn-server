import { useDispatch, useSelector } from 'react-redux';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import { AppLogo } from 'components/AppLogo';
import { RTextField } from 'components/Form/RTextField';
import { RButton } from 'components/Form/RButton';
import { RLoadingOverlay } from 'components/RLoadingOverlay';
import { status } from 'utils/const';
import { auth } from 'store/auth';
import { defaultValues, schema } from './config';
import { Form, LogoContainer, ButtonContainer } from './styled';

function SignInPage() {
  const dispatch = useDispatch();
  const loginStatus = useSelector(auth.selectors.loginStatus);
  const { control, handleSubmit } = useForm({
    defaultValues,
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data) => {
    await dispatch(auth.thunks.authLogin(data));
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <RLoadingOverlay isVisible={loginStatus === status.PENDING} />
      <LogoContainer>
        <AppLogo />
      </LogoContainer>
      <RTextField
        label="Email"
        name="email"
        control={control}
        fullWidth
      />
      <RTextField
        label="Password"
        name="password"
        control={control}
        type="password"
        fullWidth
      />
      <ButtonContainer>
        <RButton
          type="submit"
          height={40}
        >
          Log in
        </RButton>
      </ButtonContainer>
    </Form>
  );
}

export default SignInPage;
