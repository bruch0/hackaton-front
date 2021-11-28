import styled from 'styled-components';

const Container = styled.main`
  margin-top: 40px;
  font-family: Arial, Helvetica, sans-serif;
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

  .Lawyer {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    .Profile {
      width: 200px;
      border-radius: 50%;
      margin-bottom: 20px;
    }

    .Stars {
      border-radius: none;
      margin-bottom: 70px;
    }

    h2 {
      font-size: 40px;
      font-weight: bold;
      color: #373f41;
      margin: 10px 0;
    }

    h4 {
      color: #9d9d9d;
      font-size: 25px;
      margin-bottom: 30px;
    }
  }

  .Mural {
    width: 900px;
    margin: auto;
    background: #c1fba4;
    border-radius: 50px;
    padding: 30px;

    > h2 {
      font-size: 30px;
      font-weight: bold;
      margin-bottom: 17px;
    }

    h2:nth-child(4) {
      font-size: 30px;
      margin-top: 20px;
    }

    h3 {
      font-size: 26px;
      font-weight: bold;
      margin-bottom: 40px;
      color: #505050;
    }

    .CardCalls {
      width: 100%;
      display: flex;
      gap: 18px;
      justify-content: flex-start;

      .card {
        width: 300px;
        background: rgba(244, 244, 244, 0.6);
        padding: 20px 15px;
        border-radius: 31px;

        p {
          font-weight: bold;
          margin-bottom: 30px;
        }

        p:nth-last-child(1) {
          margin-bottom: 0;
        }

        span {
          font-weight: normal;
        }
      }
    }
  }

  .Extract {
    margin: 20px auto 20px auto;
    width: 900px;
    background: #c1fba4;
    border-radius: 50px;
    padding: 30px;
    display: flex;
    flex-direction: column;
    gap: 30px;

    section {
      display: flex;
      align-items: center;
      gap: 10px;

      p {
        font-size: 25px;
        background: rgba(244, 244, 244, 0.6);
        padding: 10px;
        width: 400px;
        border-radius: 30px;
      }
    }

    h2 {
      font-size: 30px;
      font-weight: bold;
    }
  }

  .Evaluation {
    span {
      font-weight: normal;
    }
    h2 {
      margin-bottom: 30px;
    }

    margin-bottom: 40px;
  }

  .Expand {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: #434343;
    cursor: pointer;
    p {
      margin-bottom: 10px;
      font-size: 18px;
    }
    svg {
      width: 24px;
      height: 24px;
    }
  }
`;

export default Container;
