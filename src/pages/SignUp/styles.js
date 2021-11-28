import styled from 'styled-components';

const SignUpPage = styled.main`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 50px;

  a {
    width: 200px;
    text-align: center;
    font-size: 25px;
    padding: 10px 20px;
    border-radius: 30px;
    margin-bottom: 15px;

    :nth-of-type(1) {
      background-color: #ffef9f;
    }

    :nth-of-type(2) {
      background-color: #c1fba4;
    }
  }
`;

const Title = styled.p`
  width: 100%;
  font-size: 30px;
  font-weight: 700;
  text-align: center;
  margin-bottom: 50px;
`;

const Disclaimer = styled.p`
  width: 100%;
  text-align: center;
  font-size: 20px;
  line-height: 25px;
  margin-bottom: 50px;
`;

export { SignUpPage, Title, Disclaimer };
