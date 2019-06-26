import styled from 'styled-components';

export const FormContato = styled.div`
  display: flex;
  flex-direction: column;
  /* width: 50% !important; */
  /* align-items: center;
  justify-content: center; */


  input, textarea {
    width: 350px;
    /* margin-right: 0; */
    padding: 8px;
    border: none;
    margin-bottom: 12px;
    font-size: 15px;
    /* height: 150px;
    resize: none; */
  }

  input[type=text]:focus, textarea:focus {
    background-color: lightgrey; 
    /* color: rgb(246, 195, 9); */
    /* MUDAR COR ^ */
  }
`;

export const InputBtn = styled.input`
  font-size: 18px !important;
  font-weight: bold;
  margin-bottom: 20px !important;

  &:hover {
    color: rgb(46, 49, 146);
    background: rgb(255, 242, 0);
    cursor: pointer;
  }
`;

