import Link from 'next/link';
import StyledHeader from '../styles/StyledHeader';

const Header = () => {
  return (
    <StyledHeader>
      <div className='container'>
        <nav>
          <h1>
            <Link href='/'>
              <a>Gaming Heroes</a>
            </Link>
          </h1>
          <ul>
            <li>
              <Link href='/'>
                <a>Home</a>
              </Link>
            </li>
            <li>
              <Link href='/'>
                <a>All Games</a>
              </Link>
            </li>
            <li>
              <Link href='/contact'>
                <a>About Us</a>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </StyledHeader>
  );
};

export default Header;
