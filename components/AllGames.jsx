import Image from 'next/image';
import Link from 'next/link';

import styled from 'styled-components';

const API_URL =
  'https://api.rawg.io/api/platforms?key=9334c51261834dab8b09ba0ddadf9333';

const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 2rem;
`;

const StyledCard = styled.section`
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.5);
  border-radius: 10px;
  overflow: hidden;
`;

const StyledImage = styled(Image)`
  transition: all 0.3s ease-in;

  &:hover {
    transform: scale(1.03);
  }
`;

const AllGames = ({ game }) => {
  return (
    <StyledCard>
      <StyledImage
        src={game.image_background}
        width={600}
        height={400}
        priority
        alt='game'
      />
      <StyledDiv>
        <h2>{game.games[0].name}</h2>
        <h2>Platform: {game.name} </h2>
      </StyledDiv>
    </StyledCard>
  );
};

export default AllGames;
