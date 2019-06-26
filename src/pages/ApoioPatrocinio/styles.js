import styled from 'styled-components';
import apoioepatrocinio from '../../assets/backgrounds/apoiopatrocinio.png';

export const Parallax = styled.div`
  /* margin-top: 800px; */
  background: url(${apoioepatrocinio}) no-repeat center;
  /* background-color: rgb(255, 255, 255); */
  background-size: cover;
  min-height: 300px;
  background-attachment: fixed;
`;

export const Title = styled.p`
  position: absolute; 
  margin-top: -60px;
  left: 50%;
  transform: translate(-50%, -50%);
  text-transform: uppercase;
  padding: 7px;
  font-family: 'Quicksand', sans-serif;
  font-size: 28px;
  color: rgb(248, 160, 14);
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
  padding-bottom: 40px;
`;

export const BoxInfo = styled.div`

`;

export const PdfLink = styled.div`
  width: 60%;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-end;
  margin: 5px;

  img {
    width: 23px;
    height: 27px;
    margin-right: 10px;
  }
`;

export const TextInfo = styled.div`
  /* width: 80%; */
  margin-top: 130px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  p {
    width: 60%;
    font-size: 18px;
    margin-bottom: 5px;
    color: rgb(0, 0, 0);
  }
`;