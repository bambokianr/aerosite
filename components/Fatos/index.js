import React from 'react';
import { Container, Title, Description } from './styles';

const Fatos = () => (
  <Container>
    <Title>
      <span>F</span>atos
    </Title>
    <Description>
      <div>
        <p>Pódios</p>
        <span>13</span>    
      </div>
      <div>
        <p>Aviões construídos</p>
        <span></span>    
      </div>
      <div>
        <p>Ensaios em voo</p>
        <span></span>    
      </div>
      {/* <div>
        <p>Dedos colados</p>
        <span></span>    
      </div> */}
      <div>
        <p>Balsas quebradas</p>
        <span></span>    
      </div>
    </Description>
  </Container>
);

export default Fatos;