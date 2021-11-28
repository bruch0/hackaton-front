import styled from 'styled-components';

const Container = styled.main`
  .Calls {
    display: flex;
    flex-direction: column;
    width: 700px;
    border: 1px solid red;
    justify-content: center;
    align-items: center;
  }

  .Calls .Head {
    display: flex;
    gap: 40px;
  }

  font-family: Arial, Helvetica, sans-serif;
  .Lawyer {
  }

  .Lawyer img {
    width: 200px;
    border-radius: 50%;
  }

  .Lawyer h2 {
    font-size: 34px;
    font-weight: bold;
  }
`;

export default Container;
