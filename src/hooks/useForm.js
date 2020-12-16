import { useContext, useState } from 'react';
import { ErrorContext } from '../contexts/ErrorContext';

const types = {
  ip: {
    regex: /(\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3})/,
    message: 'Enter a valid IP address',
  },
};

const useForm = (type) => {
  const [value, setValue] = useState('');
  const { error, setError } = useContext(ErrorContext);

  const validate = (value) => {
    if (type === false) return true;
    if (!value.length) {
      setError('The field cannot be empty');
      return false;
    } else if (types[type] && !types[type].regex.test(value)) {
      setError(types[type].message);
      return false;
    } else {
      setError(false);
      return true;
    }
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
  };
};

export default useForm;
