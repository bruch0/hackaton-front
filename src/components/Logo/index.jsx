import React from 'react';
import { Link } from 'react-router-dom';
import Container from './styles';

function Logo() {
  return (
    <Container>
      <Link to="/">
        <img src="./images/logo.png " alt="" />
      </Link>
    </Container>
  );
}

export default Logo;
