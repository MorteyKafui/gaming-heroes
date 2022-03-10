import Link from 'next/link';
import StyledHeader from '../styles/StyledHeader';

const Header = () => {
  return (
    <StyledHeader>
      <div className='container'>
        <nav>
          <h1>
            <Link href='/'>
              <a>GamesWay</a>
            </Link>
          </h1>
          <ul>
            <li>
              <Link href='/'>
                <a>Home</a>
              </Link>
            </li>
            <li>
              <Link href='/about'>
                <a>About</a>
              </Link>
            </li>
            <li>
              <Link href='/contact'>
                <a>Contact</a>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </StyledHeader>
  );
};

export default Header;
