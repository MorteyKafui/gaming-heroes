// import React from 'react';

// const API_URL =
//   'https://api.rawg.io/api/platforms?key=9334c51261834dab8b09ba0ddadf9333';

// const Game = ({ game }) => {
//   return <div>Game</div>;
// };

// export default Game;

// export const getStaticPaths = async () => {
//   const res = await fetch(`${API_URL}`);
//   const data = await res.json();
//   return {
//     paths: [{ params: data.id }],
//   };
// };

// export const getStaticProps = async ({ params: { id } }) => {
//   const res = await fetch(`${API_URL}/${id}`);
//   const data = await res.json();

//   return {
//     props: {
//       game: data,
//     },
//   };
// };
