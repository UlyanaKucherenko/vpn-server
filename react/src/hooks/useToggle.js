import { useCallback, useState } from 'react';

export const useToggle = (defaultValue = false) => {
  const [toggle, setToggle] = useState(defaultValue);

  const onToggle = useCallback(() => {
    setToggle(!toggle);
  }, [toggle]);

  return [toggle, onToggle];
};
