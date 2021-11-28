import React from "react";
import IntroductionText from "../IntroductionText";
import NavbarWrapper from "../NavbarWrapper";
import SignupButton from "../SignupButton";

import { Container } from "./styles";

function Header() {
  return (
    <Container>
      <NavbarWrapper />
      <IntroductionText />
    </Container>
  );
}

export default Header;
