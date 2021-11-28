import styled from 'styled-components';

export const Container = styled.section`
  width: 100%;
  height: 440px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  background-color: #f5f5f5;
`;

export const Stats = styled.div`
  display: flex;
  justify-content: center;
  text-align: center;
  width: 80%;

  p {
    margin: 0 48px;
    font-size: 35px;
    font-weight: 700;

    &.stats-sessions {
      color: #ac5eff;
    }

    &.stats-lawyers {
      color: #2ce0dc;
      width: max-content;
    }

    &.stats-companies {
      color: #ffdb26;
    }
  }

  span {
    color: #434343;
  }

  span {
    display: block;
  }
`;
