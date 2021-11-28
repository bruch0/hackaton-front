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

const Disclaimer = styled.p`
  width: 100%;
  text-align: center;
  font-size: 20px;
  color: grey;
  margin-bottom: 25px;
  font-weight: 400;
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
  margin: 15px 0px 15px 0px;
  font-weight: 700;
`;

const Assistances = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-top: 30px;
`;

const Pronouns = styled.p`
  width: 100%;
  text-align: center;
  font-size: 20px;
  color: grey;
  margin-bottom: 25px;
  font-weight: 400;
`;

const MyPlan = styled.section`
  width: 80%;
  background-color: #d4abff;
  margin: 0px 10%;
  border-radius: 50px;
  font-size: 30px;
  font-weight: 700;
  padding: 20px 25px;

  p {
    margin-bottom: 15px;
  }
`;

const PlanDetails = styled.div`
  width: 100%;
  background-color: #f4f4f499;
  border-radius: 30px;
  padding: 15px 20px;
  display: flex;
`;

const PlanName = styled.p`
  font-size: 25px;
  font-weight: 700;
`;

const Company = styled.div`
  display: flex;
  align-items: center;
  font-size: 22px;
  font-weight: 400;

  img {
    margin-right: 10px;
  }
`;

const MyAppointments = styled.div`
  width: 80%;
  margin: 0px 10%;
  border-radius: 50px;
  font-size: 30px;
  font-weight: 700;
  padding: 20px 25px;
  background-color: #ead6ff;

  p {
    margin-bottom: 15px;
  }
`;

const Today = styled.p`
  font-size: 22px;
  color: #505050;
`;

const AppointmentDetails = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #f4f4f499;
  border-radius: 30px;
  padding: 15px 20px;
`;

const Detail = styled.div`
  font-weight: 400;
  color: ${(props) => (props.unavailable ? '#9D9D9D' : 'black')};
  font-size: 18px;
  margin-bottom: 30px;

  span {
    display: inline-block;
    font-weight: 700;
    color: black;
    width: 80px;
    padding-right: 10px;
    text-align: end;
  }
`;

const Ratings = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin: 30px 0px;
`;

const MyRatings = styled.div`
  width: 80%;
  margin: 0px 10%;
  border-radius: 50px;
  font-size: 30px;
  font-weight: 700;
  padding: 20px 25px;
  background-color: #ead6ff;

  p {
    margin-bottom: 15px;
  }
`;

const RatingDetails = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #f4f4f499;
  border-radius: 30px;
  padding: 15px 20px;

  .break {
    display: flex;
    align-items: center;
    justify-content: flex-start;
  }
`;

const RatingDetail = styled.div`
  font-weight: 400;
  color: black;
  font-size: 18px;
  margin: 0px 60px 30px 0px;
  display: ${(props) => (props.isRating ? 'flex' : '')};
  align-items: ${(props) => (props.isRating ? 'center' : '')};

  span {
    display: inline-block;
    font-weight: 700;
    color: black;
    padding-right: 10px;
    text-align: end;
  }
`;

const Actions = styled.div`
  width: 100%;
  padding: 0px 20%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin-bottom: 30px;

  button {
    height: 50px;
    padding: 0px 15px;
    color: white;
    font-family: 'Roboto', sans-serif;
    font-size: 18px;
    font-weight: 700;
    background: #ac5eff;
    border-radius: 35px;
  }
`;

export {
  Dashboard,
  EmployeeInfo,
  Disclaimer,
  Name,
  ImgContainer,
  Img,
  Assistances,
  Pronouns,
  MyPlan,
  PlanDetails,
  PlanName,
  Company,
  MyAppointments,
  Today,
  AppointmentDetails,
  Detail,
  Ratings,
  MyRatings,
  RatingDetails,
  RatingDetail,
  Actions,
};
