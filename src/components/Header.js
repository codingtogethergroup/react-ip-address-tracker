import styled from 'styled-components';
import headerBg from '../assets/pattern-bg.png';
import Info from './Info';
import Search from './Search';

const StyledHeader = styled.header`
  background: url(${headerBg}) no-repeat center center;
  background-size: cover;
  box-shadow: 0 0 1rem rgba(0, 0, 0, 0.5);
  height: 17.5rem;
  padding: 2.25rem 1.5rem 8rem;
  position: relative;

  h1 {
    color: #fff;
    font-size: 1.5rem;
    font-weight: 500;
    margin-bottom: 2.125rem;
    text-align: center;
  }
`;

const Header = () => {
  return (
    <StyledHeader>
      <h1>IP Address Tracker</h1>
      <Search />
      <Info />
    </StyledHeader>
  );
};

export default Header;
