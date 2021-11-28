import React from 'react';
import { AiOutlineFacebook, AiOutlineInstagram } from 'react-icons/ai';
import { BiEnvelopeOpen } from 'react-icons/bi';

import Container from './styles';

function SocialIcons() {
  return (
    <Container>
      <AiOutlineFacebook className="social-icon" />
      <AiOutlineInstagram className="social-icon" />
      <BiEnvelopeOpen className="social-icon" />
    </Container>
  );
}

export default SocialIcons;
