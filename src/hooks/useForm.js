import { useContext, useState } from 'react';
import { ErrorContext } from '../contexts/ErrorContext';

const types = {
  ip: {
    regex: /(\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3})/,
  },
  domain: {
    regex: /^(?!:\/\/)([a-zA-Z0-9-_]+\.)*[a-zA-Z0-9][a-zA-Z0-9-_]+\.[a-zA-Z]{2,11}?$/,
  },
  message: 'Enter a valid domain or IP address',
};

const useForm = (type) => {
  const [value, setValue] = useState('');
  const { error, setError } = useContext(ErrorContext);

  const validate = (value) => {
    if (type === false) return true;
    if (!value.length) {
      setError('The field cannot be empty');
      return false;
    } else if (
      types.ip &&
      !types.ip.regex.test(value) &&
      types.domain &&
      !types.domain.regex.test(value)
    ) {
      setError(types.message);
      return false;
    } else {
      setError(false);
      return true;
    }
  };

  const dataType = (value) => {
    if (types.ip.regex.test(value)) return 'ip';
    else if (types.domain.regex.test(value)) return 'domain';
  };

  const onChange = ({ target }) => {
    if (error) validate(target.value);
    setValue(target.value);
  };

  return {
    value,
    setValue,
    onChange,
    validate: () => validate(value),
    onBlur: () => validate(value),
    dataType: () => dataType(value),
  };
};

export default useForm;
