import styled from 'styled-components';

const Container = styled.nav`
  display: flex;

  ul {
    display: flex;

    li {
      padding: 0 16px;
      font-family: var(--title);
      font-weight: 500;
	  color: ${(props) => (props.isNotHome ? '#000000' : '#fff')};
      font-size: 20px;
      cursor: pointer;
    }
  
`;

export default Container;
