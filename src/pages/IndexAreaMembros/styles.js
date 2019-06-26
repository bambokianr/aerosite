import styled from 'styled-components';

export const Container = styled.div`
  /* margin-top: 800px; */
  background-color: #999999;
`;

export const Box = styled.div`
  display: flex;
  flex-direction: row;
`;

export const MenuOptions = styled.div`
  width: 80%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 150px;

  div {
    display: flex;
    flex-direction: row;  
  }
`;