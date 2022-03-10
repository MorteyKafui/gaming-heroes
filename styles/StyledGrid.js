import styled from 'styled-components';

const StyledGrid = styled.section`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  justify-content: space-between;
  align-items: center;
  gap: 3rem;
`;

export default StyledGrid;
