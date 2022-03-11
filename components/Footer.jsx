import StyledFooter from '../styles/StyledFooter';

const Footer = () => {
  return (
    <StyledFooter>
      <div className='container'>
        <h1>Gaming Heroes</h1>
        <p>Copyright &copy; {new Date().getFullYear()} All rights reserved.</p>
      </div>
    </StyledFooter>
  );
};

export default Footer;
