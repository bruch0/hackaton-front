import styled from 'styled-components';

export const Container = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 720px;

  h1 {
    margin-top: 160px;
  }

  p {
    color: #737b7d;
    font-family: var(--text);
    font-size: 20px;
    max-width: 360px;
    margin-top: 24px;
  }
`;

export const PlanCards = styled.div`
  display: flex;
`;

export const Card = styled.div`
  width: 312px;
  height: 252px;
  border-radius: 46px;
  margin: 48px 16px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;

  span:first-of-type {
    color: #434343;
    font-weight: 700;
    font-size: 22px;
    line-height: 1.2;
  }

  span:nth-child(2) {
    font-size: 30px;
    font-weight: 700;
    color: #434343;
  }

  div {
    span:nth-child(1) {
      display: block;
      font-size: 18px;
    }

    span:nth-child(2) {
      font-weight: 400;
      font-size: 18px;
    }
  }

  &.basic {
    background-color: #ffd6e0;
  }

  &.intermediary {
    background-color: #ead6ff;
  }

  &.premium {
    background-color: #90f1ef;
  }
`;
