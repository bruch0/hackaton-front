import styled from 'styled-components';

const Container = styled.main`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: auto;
  overflow-y: hidden;

  .SearchContainer {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 23px;
    margin: 60px 0px;
    img {
      width: 540px;
      height: 383px;
    }

    div {
      h1 {
        color: #373f41;
        font-size: 34px;
        font-weight: bold;
        width: 540px;
        margin-bottom: 40px;
      }

      p {
        color: #737b7d;
        width: 500px;
        text-align: left;
        font-size: 20px;
        margin-bottom: 24px;
      }
    }

    form {
      display: flex;
      gap: 20px;
      input,
      button {
        border: none;
        border-radius: 20px;
        padding: 15px;
      }

      input {
        background: #f5f5f5;
        color: black;
        width: 300px;
        font-size: 16px;
      }

      button {
        width: 140px;
        font-size: 16px;
        background: #ffd6e0;
      }
    }
  }

  .Filter {
    width: 100%;
    background: #ff7294;
    display: flex;
    height: 98px;
    display: flex;
    gap: 24px;
    justify-content: center;
    align-items: center;

    select {
      color: #737b7d;
      background: white;
      width: 271px;
      height: 52px;
      font-size: 16px;
      outline: none;
      border-radius: 26px;
      padding: 10px;
      border: none;
    }

    select:invalid {
      color: gray;
    }
  }

  .ResultsStatus {
    width: 100%;
    height: 77px;
    background: rgba(255, 174, 194, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 24px;

    svg {
      width: 26px;
      height: 26px;
    }

    div {
      width: 271px;
      height: 52px;
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 10px;
      border: 3px solid #ffaec2;
      border-radius: 26px;
    }

    .circle {
      width: 15px;
      height: 15px;
      background: #77f139;
      font-size: 0px;
      border-radius: 50%;
    }
  }

  .LawyerSection {
    overflow-y: hidden;
    width: 100%;
    display: flex;
    flex-direction: column;
  }

  .AreaLawyer:nth-child(even) {
    background: rgba(255, 214, 224, 0.35);
  }

  .AreaLawyer {
    display: flex;
    width: 100%;
    justify-content: center;
    align-items: center;
    gap: 30px;
    padding: 40px 0px;
    overflow-y: hidden;

    .infos {
      display: flex;
      flex-direction: column;
      width: 800px;

      img {
        width: 120px;
        margin-bottom: 15px;
      }

      h1 {
        font-size: 28px;
        font-weight: bold;
        margin-bottom: 15px;
      }

      p:nth-child(2) {
        font-size: 16px;
        margin-bottom: 15px;
      }
      p:nth-child(3) {
        font-size: 16px;
        color: #434343;
      }
    }
  }
`;

export default Container;
