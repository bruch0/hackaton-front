import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 90%;
  position: relative;

  p {
    max-width: 556px;
    font-family: 'Noto Sans';
    line-height: 52px;
    font-size: 28px;
    margin-top: 10%;
    position: absolute;

    span {
      background-color: rgba(255, 255, 255, 0.85);
      display: inline-block;
      padding: 2px 4px;

      &:nth-child(n + 2) {
        margin-top: 24px;
      }
    }
  }
`;

export default Container;
