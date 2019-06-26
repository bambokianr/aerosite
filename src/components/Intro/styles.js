import styled from 'styled-components';
import intro from '../../assets/backgrounds/intro2.png';

export const Parallax = styled.div`
  /* margin-top: 800px; */
  background: url(${intro}) no-repeat center;
  background-size: cover;
  width: 100%;
  min-height: 700px;
  background-attachment: fixed;
`;



export const Container = styled.div`
  height: 400px;
`;
