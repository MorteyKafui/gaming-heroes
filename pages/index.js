import styled from 'styled-components';
import AllGames from '../components/AllGames';
import Layout from '../components/Layout';
import StyledGrid from '../styles/StyledGrid';

const API_URL =
  'https://api.rawg.io/api/platforms?key=9334c51261834dab8b09ba0ddadf9333';

const StyledTitle = styled.h1`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  font-size: 5rem;
  letter-spacing: 1px;
  margin-bottom: 4rem;
  padding: 1rem;
`;

const HomePage = ({ games }) => {
  const results = games.results;
  console.log(results);

  return (
    <Layout>
      <StyledTitle>Browse The Latest Games In The World</StyledTitle>
      <StyledGrid>
        {results ? (
          results.map(game => <AllGames key={game.id} game={game} />)
        ) : (
          <p>Failed to load games!</p>
        )}
      </StyledGrid>
    </Layout>
  );
};

export const getStaticProps = async () => {
  const res = await fetch(`${API_URL}`);
  const data = await res.json();

  return {
    props: {
      games: data,
    },
  };
};

export default HomePage;
