import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Form = styled.form`
  margin-top: 20px;
  width: 100%;
  max-width: 400px;
  display: flex;

  input {
    flex: 1;
    height: 55px;
    padding: 0 10px;
    background: #FFFFFF;
    border: 0;
    font-size: 15px;
    color: #444;
    border-radius: 3px;
  }

  button {
    flex: 1;
    height: 55px;
    /* padding: 0 10px; */
    margin-left: 20px;
    background: #63F;
    color: #FFFFFF;
    border: 0;
    font-size: 20px;
    font-weight: bold;
    border-radius: 3px;

    &:hover {
      background: #000;
    }
  }
`;