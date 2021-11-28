import styled from 'styled-components';

const Container = styled.section`
  width: 100vw;
  display: flex;
  flex-direction: column;
  background: #f5f5f5;
  justify-content: center;
  align-items: center;
  padding: 40px;
  padding-bottom: 80px;

  > h1 {
    font-size: 34px;
    text-align: center;
    font-weight: bold;
    margin-bottom: 46px;
  }

  .Cards {
    width: 900px;
    display: flex;
    gap: 26px;
  }

  .Card {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: 46px;
    width: 312px;
  }

  .Card h1 {
    font-size: 70px;
    font-weight: bold;
    color: #434343;
    margin-bottom: 34px;
    padding-top: 80px;
  }

  .Card p:nth-child(2) {
    text-align: center;
    width: 229px;
    color: #737b7d;
  }

  .Card p:nth-child(3) {
    color: #434343;
    font-weight: bold;
    margin-top: 16px;
  }

  .Card p:nth-child(4) {
    padding-bottom: 44px;
    color: #434343;
  }

  .Card:nth-child(1) {
    background: #ffd6e0;
  }

  .Card:nth-child(2) {
    background: #ead6ff;
  }

  .Card:nth-child(3) {
    background: #90f1ef;
  }
`;

export default Container;
