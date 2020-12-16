import styled from 'styled-components';

const Item = styled.li`
  display: flex;
  flex-direction: column;
  position: relative;

  @media (max-width: 599px) {
    text-align: center;
  }

  @media (min-width: 600px) {
    padding-right: 1rem;
  }

  @media (min-width: 900px) {
    padding-right: 3.75rem;
  }

  &:not(:first-child) {
    @media (max-width: 599px) {
      padding-top: 1.5rem;
    }
    @media (min-width: 600px) {
      padding-left: 2rem;
    }

    &::before {
      @media (min-width: 600px) {
        background-color: rgba(0, 0, 0, 0.1);
        content: '';
        display: block;
        height: 100%;
        position: absolute;
        width: 1px;
        left: 0;
      }
    }
  }

  span {
    &:first-of-type {
      color: var(--second-color);
      font-size: 0.5625rem;
      font-weight: 700;
      letter-spacing: 0.2em;
      padding-bottom: 1.375rem;
      text-transform: uppercase;

      @media (max-width: 599px) {
        padding-bottom: 0.5rem;
      }
    }

    &:last-of-type {
      font-size: 1.125rem;
      font-weight: 500;
    }
  }
`;

const InfoItem = ({ title, content }) => {
  return (
    <Item>
      <span>{title}</span>
      <span>{content}</span>
    </Item>
  );
};

export default InfoItem;
