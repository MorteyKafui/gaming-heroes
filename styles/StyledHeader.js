import styled from 'styled-components';

const StyledHeader = styled.header`
  background-color: rgba(0, 0, 0, 0.5);
  height: 10vh;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.3);
  margin-bottom: 5rem;

  nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 10vh;
  }

  h1 {
    font-size: 4rem;
    letter-spacing: 1px;
    font-weight: 700;
  }

  ul {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 2rem;
  }

  nav ul li a {
    font-size: 3rem;
    font-weight: 500;
    padding: 1rem 2rem;
    transition: all 0.3s ease-in;

    &:hover {
      color: #aaa;
    }
  }
`;

export default StyledHeader;
