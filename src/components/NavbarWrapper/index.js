import React from "react";
import Logo from "../Logo";
import Navbar from "../Navbar";
import SocialIcons from "../SocialIcons";

import { Container } from "./styles";

function NavbarWrapper() {
  return (
    <Container>
      <Logo />
      <Navbar />
      <SocialIcons />
    </Container>
  );
}

export default NavbarWrapper;
