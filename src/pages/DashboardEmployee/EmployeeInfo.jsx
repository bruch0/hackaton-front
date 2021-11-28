import React from 'react';
import {
  EmployeeInfo,
  Name,
  Disclaimer,
  ImgContainer,
  Img,
  Pronouns,
} from './styles';

function EmployeeInformation() {
  return (
    <EmployeeInfo>
      <Disclaimer>Área do colaboradore</Disclaimer>
      <ImgContainer>
        <Img src="https://pbs.twimg.com/profile_images/1449094521128689666/PHZuVxG3_400x400.jpg" />
      </ImgContainer>
      <Name>Henrique Schimidt</Name>
      <Pronouns>Elu/Delu</Pronouns>
    </EmployeeInfo>
  );
}

export default EmployeeInformation;
