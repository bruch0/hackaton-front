/* eslint-disable react/prop-types */
import React from 'react';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import Container from './styles';

function Navbar({ isNotHome }) {
  return (
    <Container isNotHome={isNotHome ? 1 : 0}>
      <ul>
        <li>
          <HashLink to="#our-work">QUEM SOMOS</HashLink>
        </li>
        <li>CADASTRE-SE</li>
        <li>
          <Link to="/login">LOGIN</Link>
        </li>
        <li>NOTÍCIAS</li>
      </ul>
    </Container>
  );
}

export default Navbar;
