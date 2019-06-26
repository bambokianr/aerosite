import styled from 'styled-components';
import areamembros from '../../assets/backgrounds/areamembros.png';

export const Parallax = styled.div`
  /* margin-top: 800px; */
  height: 100%;
  background: url(${areamembros}) no-repeat center;
  background-size: cover;
  min-height: 450px;
  background-attachment: fixed;
`;

export const BoxLogin = styled.div`
  background-color: rgba(46, 49, 146, 0.8);
  color: rgb(255, 255, 255);
  width: 450px;
  margin: 230px auto;
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

  img {
    width: 380px;
    padding-top: 30px;
    /* position: absolute; */
    /* left: 40px; */
  }
`;

export const FormAreaMembro = styled.div`
  display: flex;
  flex-direction: column;
  /* align-items: center;
  justify-content: center; */

  input {
    /* width: 350px; */
    padding: 8px;
    border: none;
    margin: 10px 20px;
    font-size: 15px;
    /* height: 150px;
    resize: none; */
  }

  input[type=text]:focus {
    background-color: lightgray; 
  }

  a {
    text-decoration:none; 
    color: rgb(255, 242, 0);

    &:hover {
      /* color: rgb(248, 160, 14); */
      font-weight: bold;
    }
  }

  div {
    display: flex;
    justify-content: flex-end;
    padding-right: 20px;
    padding-top: 5px;
    padding-bottom: 20px;
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