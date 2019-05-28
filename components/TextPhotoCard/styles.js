import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 400px;
  margin: 0 50px;
  margin-top: 20px;
  margin-bottom: 60px;
  background-color: rgb(255, 255, 255);
  padding: 5px;

  p {
    padding: 15px 5px;
    color: rgb(46, 49, 146);
    font-size: 18px;
  }

  img {
    width: 100%;
  }

  a {
    color: rgb(46, 49, 146);
    font-weight: bold;
    text-decoration: none;
    font-size: 14px;
    margin: 0 5px;
    padding: 10px;
    /* float: right; */
    width: 90px;
    /* display: flex; */
    /* justify-content: flex-end; */

    &:hover {
      color: rgb(248, 160, 14);
    }
  }
`;

export const Link = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
`;