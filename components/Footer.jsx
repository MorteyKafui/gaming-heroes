import React from 'react';
import StyledFooter from '../styles/StyledFooter';

const Footer = () => {
  return (
    <StyledFooter>
      <div className='container'>
        <h1>GamezWay</h1>
        <p>Copyright &copy; {new Date().getFullYear()} All rights reserved.</p>
      </div>
    </StyledFooter>
  );
};

export default Footer;
