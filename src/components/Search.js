import useForm from '../hooks/useForm';
import styled from 'styled-components';
import { ReactComponent as Arrow } from '../assets/icon-arrow.svg';
import useSearch from '../hooks/useSearch';

const Form = styled.form`
  display: flex;
  margin: 0 auto;
  max-width: 35rem;
  width: 100%;

  & > * {
    border: none;
    outline: 0;
    line-height: 1;
  }

  input {
    border-radius: 1rem 0 0 1rem;
    color: var(--first-color);
    font-size: 0.875rem;
    font-weight: 500;
    padding: 1.375rem 1.5rem;
    width: 100%;
    &::placeholder {
      color: var(--second-color);
    }
  }

  button {
    background-color: var(--first-color);
    border-radius: 0 1rem 1rem 0;
    cursor: pointer;
    transition: all 0.3s ease-out;
    width: 3.625rem;

    &:hover {
      background-color: rgba(63, 63, 63);
    }
  }
`;

const Search = () => {
  const ip = useForm(true);
  const { request } = useSearch();

  const handleSubmit = (event) => {
    event.preventDefault();
    if (ip.validate()) {
      request(ip.dataType(), ip.value);
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <input
        aria-label="Search"
        type="text"
        placeholder="Search for any IP address or domain"
        value={ip.value}
        onChange={ip.onChange}
        onBlur={ip.onBlur}
      />
      <button>
        <Arrow />
      </button>
    </Form>
  );
};

export default Search;
