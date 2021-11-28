import React from "react";
import { AiOutlineFacebook, AiOutlineInstagram } from "react-icons/ai";
import { BiEnvelopeOpen } from "react-icons/bi";

import { Container } from "./styles";

function SocialIcons() {
  return (
    <Container>
      <AiOutlineFacebook />
      <AiOutlineInstagram />
      <BiEnvelopeOpen />
    </Container>
  );
}

export default SocialIcons;
