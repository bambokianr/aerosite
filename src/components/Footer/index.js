import React, { Fragment } from 'react';
import { Container, BoxInfo, Copyright } from './styles';
import logobranco from '../../assets/logobranco.png';
import FooterContato from '../FooterContato';
import FooterRedesSociais from '../FooterRedesSociais';

const Footer = () => (
  <Fragment>
    <Container>
      <BoxInfo>
        <FooterContato />
        <FooterRedesSociais />
      </BoxInfo>

      <BoxInfo>
        <object width="305" height="230" data="https://www.youtube.com/v/SJBJQgb7SVE"></object>
        <img src={logobranco} alt="AeroDesign ITA" /> 
      </BoxInfo>
    </Container>
    <Copyright>
      <p>Copyright © 2019 AeroDesign ITA - Todos os direitos reservados</p>
    </Copyright>
  </Fragment>
);

export default Footer;