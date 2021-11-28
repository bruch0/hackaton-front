import React from 'react';
import Header from '../../components/Header';
import {
  Dashboard,
  EmployeeInfo,
  Name,
  Company,
  ImgContainer,
  Img,
  Assistances,
  Title,
} from './styles';

function EmployeeDashboard() {
  return (
    <>
      <Header />
      <Dashboard>
        <EmployeeInfo>
          <ImgContainer>
            <Img src="https://pbs.twimg.com/profile_images/1449094521128689666/PHZuVxG3_400x400.jpg" />
          </ImgContainer>
          <Name>Carlos</Name>
          <Company>Show do milhão</Company>
        </EmployeeInfo>
        <Assistances>
          <Title>Atendimentos</Title>
        </Assistances>
      </Dashboard>
    </>
  );
}

export default EmployeeDashboard;
