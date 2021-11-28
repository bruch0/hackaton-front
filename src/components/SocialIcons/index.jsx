/* eslint-disable react/prop-types */
import React from 'react';
import { AiOutlineFacebook, AiOutlineInstagram } from 'react-icons/ai';
import { BiEnvelopeOpen } from 'react-icons/bi';

import Container from './styles';

function SocialIcons({ isNotHome }) {
  return (
    <Container>
      <AiOutlineFacebook
        className="social-icon"
        color={isNotHome ? 'black' : 'white'}
      />
      <AiOutlineInstagram
        className="social-icon"
        color={isNotHome ? 'black' : 'white'}
      />
      <BiEnvelopeOpen
        className="social-icon"
        color={isNotHome ? 'black' : 'white'}
      />
    </Container>
  );
}

export default SocialIcons;
