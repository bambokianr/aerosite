import styled from 'styled-components';

export const Container = styled.div`
  height: 400px;
  background: rgb(248, 160, 14);
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
  flex-direction: row;
  align-items: center;
  justify-content: center;
  
  div {
    display: flex;
    flex-direction: column;

    span {

    }

    p {
      color: rgb(0, 0, 0);
      margin: 0 90px;
      max-width: 900px;
      text-align: center;
    }
  }
`;
