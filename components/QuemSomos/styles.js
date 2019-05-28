import styled from 'styled-components';
import quemsomos from '../../assets/backgrounds/qsomos.png';

export const Parallax = styled.div`
  /* margin-top: 800px; */
  background: url(${quemsomos}) no-repeat center;
  background-size: cover;
  min-height: 300px;
  background-attachment: fixed;
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
  border-bottom-color: rgb(246, 195, 9);
  border-radius: 3px; 

  span {
    font-size: 40px;
    color: rgb(246, 195, 9);
  }
`;

export const Description = styled.div`
  margin-top: 120px;
  display: flex;
  align-items: center;
  justify-content: center;

  p {
    color: rgb(255, 255, 255);
    margin: 0 90px;
    max-width: 900px;
    text-align: center;
  }
`;
