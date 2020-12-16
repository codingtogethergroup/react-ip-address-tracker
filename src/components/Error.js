import { useContext } from 'react';
import styled from 'styled-components';
import { ErrorContext } from '../contexts/ErrorContext';

const ErrorWrapper = styled.div`
  background-color: #e63946;
  color: #fff;
  padding: 0.625rem 2rem;
  position: relative;
  text-align: center;
  z-index: 100;
`;

const Error = () => {
  const { error } = useContext(ErrorContext);

  if (error) return <ErrorWrapper>{error}</ErrorWrapper>;
  else return null;
};

export default Error;
