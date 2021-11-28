import styled from 'styled-components';

const SignUpContainer = styled.main`
  width: 100%;
  padding: 0px 15%;
  margin-top: 100px;

  .document {
    display: flex;

    div {
      margin-right: 40px;

      input {
        margin-top: 16px;
      }
    }
  }
`;

const Title = styled.p`
  font-size: 30px;
  font-weight: 700;
  margin-bottom: 30px;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;

  div {
    margin-bottom: 15px;
  }
`;

const Input = styled.input`
  width: 100%;
  border: 0px;
  font-size: 20px;
  border-bottom: 1px solid #c4c4c4;
  margin-bottom: 30px;
`;

const Submit = styled.button`
  color: black;
  padding: 10px 10px;
  background-color: #c1fba4;
  width: 20%;
  margin: 0px 40% 20px 40%;
  border-radius: 50px;
  font-weight: 700;
  font-size: 20px;
`;

export { SignUpContainer, Title, Form, Input, Submit };
