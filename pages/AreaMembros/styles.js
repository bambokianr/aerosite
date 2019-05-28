import styled from 'styled-components';

export const Container = styled.div`
  background-color: #999999;
  color: rgb(255, 255, 255);
  width: 100%;
`;

export const BoxLogin = styled.div`
  background-color: rgb(245, 95, 25);
  color: rgb(255, 255, 255);
  width: 450px;
  margin: 150px auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;

  form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;  
  }

  span {
    font-size: 22px;
    padding: 15px;
  }
`;