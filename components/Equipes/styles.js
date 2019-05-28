import styled from 'styled-components';

export const Container = styled.div`
  height: 400px;
  background: #f9f9f9;
`;

export const LimitBox = styled.div`
  max-width: 1500px;
  margin: 0 auto;
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

  div {
    align-items: center;
    justify-content: center;
    margin: 30px 120px 0;

    img {
      width: 180px;
    }
  }
`;
