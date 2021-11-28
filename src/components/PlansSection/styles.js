import styled from 'styled-components';

export const Container = styled.div`
  text-align: center;

  h1 {
    margin-top: 160px;
  }
`;

export const PlanCards = styled.div`
  display: flex;
`;

export const Card = styled.div`
  width: 312px;
  height: 378px;
  border-radius: 46px;
  margin: 48px 16px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;

  span {
    &:nth-child(n + 1) {
      font-family: var(--text);
    }
  }

  &.small-plan {
    background-color: #ffd6e0;
  }

  &.medium-plan {
    background-color: #ead6ff;
  }

  &.large-plan {
    background-color: #90f1ef;
  }

  .plan-price {
    font-size: 70px;
    color: #434343;
    font-weight: 700;
    position: relative;

    span {
      font-size: 22px;
      font-family: var(--text);
      font-weight: 400;
    }
  }

  .monthly-text {
    display: block;
    font-weight: 400;
    position: absolute;
    right: 0;
  }

  .plan-description {
    color: #737b7d;
    max-width: 60%;
  }

  .description-company-size {
    font-weight: 400;
    span {
      font-weight: 700;
      display: block;
    }
  }
`;
