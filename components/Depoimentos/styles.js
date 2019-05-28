import styled from 'styled-components';
import "react-responsive-carousel/lib/styles/carousel.css";
import depoimentos from '../../assets/backgrounds/depoimentos.png';

export const Parallax = styled.div`
  /* margin-top: 800px; */
  background: url(${depoimentos}) no-repeat center;
  background-size: cover;
  min-height: 450px;
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
  color: rgb(248, 160, 14);
  border-bottom-style: solid;
  border-bottom-width: 2.5px;
  border-bottom-color: rgb(46, 49, 146);
  border-radius: 3px; 

  span {
    font-size: 40px;
    color: rgb(46, 49, 146);
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

export const CarouselPage = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  
  p {
    color: rgb(255, 255, 255);
    margin-top: 20px;
    max-width: 900px;
  }

  span {
    color: rgb(255, 255, 255);
    margin-top: 20px;
    font-size: 14px;
    font-weight: bold;
  }

  img {
    width: 100px;
    padding: 30px 0;
    /* padding-top: 50px;
    padding-bottom: 50px; */
    /* padding-top: 40px; */
  }
`;