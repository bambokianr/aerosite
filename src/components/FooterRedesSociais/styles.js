import styled from 'styled-components';

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
  flex-direction: row !important;
  align-items: center;
  
  i {
    padding: 10px;
  }

  p {
    width: 300px;
  }
`;
