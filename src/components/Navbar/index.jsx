/* eslint-disable react/prop-types */
import React from 'react';
import { Link } from 'react-router-dom';
import Container from './styles';

function Navbar({ isNotHome }) {
  return (
    <Container isNotHome={isNotHome ? 1 : 0}>
      <ul>
        <li>QUEM SOMOS</li>
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
