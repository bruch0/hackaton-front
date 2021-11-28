import styled from 'styled-components';

const Container = styled.main`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 50px;

  form {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  label {
    margin-bottom: 5px;
    font-size: 15px;
  }

  input {
    border: 2px solid #90f1ef;
    border-radius: 35px;
    height: 35px;
    font-size: 20px;
    margin-bottom: 30px;
    padding: 0px 0px 0px 5px;

    :active {
      outline: none;
    }
  }

  button {
    background-color: #90f1ef;
    border-radius: 35px;
    height: 35px;
    font-size: 20px;
    margin-bottom: 15px;
  }

  a {
    margin-bottom: 30px;
  }
`;

const Title = styled.p`
  width: 100%;
  font-size: 30px;
  font-weight: 700;
  text-align: center;
  margin-bottom: 50px;
`;

const Option = styled.p`
  width: 100%;
  text-align: center;
  font-size: 30px;
  margin-bottom: 50px;
`;

const Log = styled.button`
  width: 18%;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: start;
  font-size: 20px;
  border-radius: 35px;
  color: white;
  margin-bottom: 10px;
  padding: 0px 15px;

  :nth-of-type(1) {
    background-color: #2e48a7;
  }

  :nth-of-type(2) {
    background-color: #d04835;
  }

  :nth-of-type(3) {
    background-color: #040404;
  }

  svg {
    margin-right: 5px;
  }
`;

export { Container, Title, Option, Log };
