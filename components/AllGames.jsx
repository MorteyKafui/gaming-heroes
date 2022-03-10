import Image from 'next/image';

const AllGames = ({ game }) => {
  return (
    <section>
      <div className='container'>
        <Image
          src={game.image_background}
          width={400}
          height={400}
          priority
          alt='game'
        />
        <h2>{game.games[0].name}</h2>
      </div>
    </section>
  );
};

export default AllGames;
