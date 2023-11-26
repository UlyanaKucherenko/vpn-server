import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { auth } from 'store/auth';

export function AppIsCrashed() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(auth.thunks.authLogout());
  }, []);

  return null;
}
