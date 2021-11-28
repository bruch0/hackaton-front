/* eslint-disable react/prop-types */
import React from 'react';
import Logo from '../Logo';
import Navbar from '../Navbar';
import SocialIcons from '../SocialIcons';

import Container from './styles';

function NavbarWrapper({ isNotHome }) {
  return (
    <Container>
      <Logo />
      <Navbar isNotHome={isNotHome ? 1 : 0} />
      <SocialIcons isNotHome={isNotHome ? 1 : 0} />
    </Container>
  );
}

export default NavbarWrapper;
