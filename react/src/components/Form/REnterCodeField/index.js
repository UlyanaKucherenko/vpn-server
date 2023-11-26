import PropTypes from 'prop-types';
import { useEffect, useRef, useState } from 'react';

import { Input, Wrap } from './styled';

REnterCodeField.propTypes = {
  amountInputs: PropTypes.array,
  error: PropTypes.bool,
  getCode: PropTypes.func,
};

function REnterCodeField({
  amountInputs = [0, 1, 2, 3, 4, 5],
  error,
  getCode = () => {},
}) {
  const [inputIndex, setInputIndex] = useState(0);
  const [code, setCode] = useState(
    amountInputs.reduce((acc, item) => {
      acc[item] = '';
      return acc;
    }, {})
  );
  const wrapRef = useRef();

  const onInput = (e) => {
    const { children } = wrapRef.current;

    if (children[inputIndex + 1] && e.target.value.length > 0) {
      children[inputIndex + 1].focus();
      setInputIndex(inputIndex + 1);
    }

    if (children[inputIndex - 1] && e.target.value.length === 0) {
      children[inputIndex - 1].focus();
      setInputIndex(inputIndex - 1);
    }

    setCode({ ...code, [inputIndex]: children[inputIndex].value });
  };

  useEffect(() => {
    if (!Object.values(code).includes('')) {
      getCode(Object.values(code).join(''));
    } else {
      getCode(null);
    }
  }, [code]);

  return (
    <Wrap
      amountCols={amountInputs.length}
      ref={wrapRef}
    >
      {amountInputs.map((idx) => (
        <Input
          key={idx}
          type="text"
          min={0}
          max={9}
          maxLength={1}
          autoComplete="off"
          error={error}
          onFocus={() => setInputIndex(idx)}
          onInput={onInput}
        />
      ))}
    </Wrap>
  );
}

export default REnterCodeField;
