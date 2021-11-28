import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px 60px;
  height: 60px;

  img {
    filter: grayscale(100%) contrast(20%);
  }

  span {
    color: #434343;
  }
`;

export default Container;
