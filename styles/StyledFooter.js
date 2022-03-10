import styled from 'styled-components';

const StyledFooter = styled.footer`
  background-color: rgba(0, 0, 0, 0.5);

  .container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 4rem 0;
    gap: 2rem;

    h1 {
      font-size: 4rem;
      line-height: 1.7;
      letter-spacing: 1px;
    }

    p {
      font-size: 3rem;
      letter-spacing: 1px;
    }
  }
`;

export default StyledFooter;
