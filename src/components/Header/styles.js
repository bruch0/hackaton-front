import styled from 'styled-components';

export const Container = styled.header`
  height: 855px;
  margin: 0;
  align-items: center;
  display: flex;
  flex-direction: column;
  background-image: url('./images/bg-rainbow.png');
  background-size: cover;
`;

export const Gradient = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  background: linear-gradient(
    180deg,
    #097898 0%,
    rgba(141, 173, 183, 0.296875) 34.9%,
    rgba(196, 196, 196, 0) 100%
  );
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
