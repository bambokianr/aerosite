import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  background: rgb(46, 49, 146);
  color: rgb(255, 255, 255);
  padding: 30px 60px;

  img {
    width: 300px;
  }
`;

export const BoxText = styled.div`
  margin: 15px 0px;
`;

export const BoxInfo = styled.div`
  margin: 0 70px;
  display: flex;
  flex-direction: column;

  img {
    margin-top: 30px;
  }
`;

export const BoxTitle = styled.div`
  margin-bottom: 10px;
  display: flex;
  flex-direction: column;
`;

export const Title = styled.span`
  font-family: 'Quicksand';
  color: rgb(255, 242, 0);
  font-weight: bold;
  font-size: ${props => props.strong ? '22px' : '20px'};
`;

export const InfoFooter = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  
  i {
    padding: 10px;
  }

  p {
    width: 300px;
  }
`;

export const Copyright = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 7px;
  background: rgb(0,7, 105);
  color: rgb(255, 242, 0);
  font-size: 13px;
`;


// amarelo1: rgb(255, 242, 0)
// laranja1: rgb(246, 195, 9)
// laranja2: rgb(248, 160, 14)
// laranja3: rgb(245, 95, 25)
// azul: rgb(46, 49, 146)