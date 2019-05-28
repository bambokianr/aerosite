import React from 'react';
import { Container, Title, Description, LimitBox } from './styles';
import box_micro from '../../assets/box_micro.png';
import box_regular from '../../assets/box_regular.png';
import box_advanced from '../../assets/box_advanced.png';

const Equipes = () => (
  <Container>
    <Title>
      <span>E</span>quipes
    </Title>
    <LimitBox>
      <Description>
        <div><img src={box_micro} alt="Equipe Micro" /></div>
        <div><img src={box_regular} alt="Equipe Regular" /></div>
        <div><img src={box_advanced} alt="Equipe Advanced" /></div>
      </Description>
    </LimitBox>
  </Container>
);

export default Equipes;