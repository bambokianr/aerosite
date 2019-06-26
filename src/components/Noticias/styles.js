import styled from 'styled-components';
import noticias from '../../assets/backgrounds/noticias.png';

export const Parallax = styled.div`
  /* margin-top: 800px; */
  background: url(${noticias}) no-repeat center;
  background-size: cover;
  min-height: 300px;
  background-attachment: fixed;
`;

export const Container = styled.div`
  max-width: 1500px;
  margin: 0 auto;
`;

export const Title = styled.p`
  position: absolute; 
  margin-top: -50px;
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

export const Description = styled.div`
  margin-top: 120px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;

  p {
    /* color: rgb(0, 0, 0);
    max-width: 900px;
    text-align: center; */
  }
`;

export const Link = styled.div`
  /* max-width: 960px; */
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  margin: 0 40px;
  margin-bottom: 30px;
  /* margin-right: 22%; */

  a {
    color: rgb(248, 160, 14);
    font-weight: bold;
    text-decoration: none;
    font-size: 16px;
    padding: 5px;
  }
`;
