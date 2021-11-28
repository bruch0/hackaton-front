import styled from 'styled-components';

const Dashboard = styled.main`
  width: 100%;
`;

const EmployeeInfo = styled.div`
  width: 100%;
  padding: 0px 20%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  margin-top: 10vh;
`;

const ImgContainer = styled.div`
  width: 100%;
  display: flex;
  align-content: center;
  justify-content: center;
`;

const Img = styled.img`
  width: 150px;
  height: 150px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
`;

const Name = styled.p`
  width: 100%;
  text-align: center;
  font-size: 25px;
  margin-top: 15px;
  font-weight: 700;
`;

const Company = styled.p`
  width: 100%;
  text-align: center;
  font-size: 20px;
  color: grey;
  margin-top: 5px;
  font-weight: 700;
`;

const Assistances = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-top: 50px;
`;

const Title = styled.p`
  font-size: 30px;
  text-align: center;
`;

export {
  Dashboard,
  EmployeeInfo,
  Name,
  Company,
  ImgContainer,
  Img,
  Assistances,
  Title,
};
