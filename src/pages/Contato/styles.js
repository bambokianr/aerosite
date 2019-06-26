import styled from 'styled-components';
import contato from '../../assets/backgrounds/contato.png';

// export const Container = styled.div`
//   background-color: #999999;
//   color: rgb(255, 255, 255);
// `;

export const Parallax = styled.div`
  /* margin-top: 800px; */
  background: url(${contato}) no-repeat center;
  background-size: cover;
  min-height: 300px;
  height: 100%;
  background-attachment: fixed;
  color: rgb(255, 255, 255);
`;

export const Title = styled.p`
  position: absolute; 
  margin-top: 70px;
  left: 50%;
  transform: translate(-50%, -50%);
  text-transform: uppercase;
  padding: 7px;
  font-family: 'Quicksand', sans-serif;
  font-size: 28px;
  color: rgb(255, 255, 255);
  border-bottom-style: solid;
  border-bottom-width: 2.5px;
  border-bottom-color: rgb(248, 160, 14);
  border-radius: 3px; 

  span {
    font-size: 40px;
    color: rgb(248, 160, 14);
  }
`;

export const Box = styled.div`
  width: 100%;
  margin-top: 130px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    /* margin-left: 150px; */

  }

  p {
    width: 75%;
    font-size: 18px;
    /* margin-bottom: 30px; */
  }
`;

export const FormBox = styled.div`
  margin-top: 50px;
  margin-left: 200px;

  p {
    margin-bottom: 30px;
  }
`;

export const MoreInfosBox = styled.div`
  /* margin-top: 50px; */
  margin-right: 200px;
`;