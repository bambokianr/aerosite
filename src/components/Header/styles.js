import styled from 'styled-components';

export const Container = styled.header`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  width: 100%;
  padding: 7px 0;
  padding-right: 35px;
  background: rgb(46, 49, 146);

  img {
    width: 110px;
    position: absolute;
    left: 40px;
  }
`;

export const Nav = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  padding: 7px 0;
  /* padding-right: 35px; */

  li {
    a {
      margin: 0 5px;
      padding: 10px;
      color: ${props => props.main ? '#000000' : '#FFFFFF'};
      text-decoration: none;
      font-size: 13px;

      &:hover {
        color: rgb(255, 242, 0);
        font-weight: bold;
      }
    }
  }
`;
