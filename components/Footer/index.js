import React, { Fragment } from 'react';
import { Container, BoxInfo, BoxText, BoxTitle, Title, InfoFooter, Copyright } from './styles';
import logobranco from '../../assets/logobranco.png';

const Footer = () => (
  <Fragment>
    <Container>
      <BoxInfo>
        <BoxText>
          <BoxTitle><Title>Contato</Title></BoxTitle>
          <InfoFooter>
            <i className="fa fa-lg fa-map-o" />
            <p>H8 - Instituto Tecnológico de Aeronáutica São José dos Campos</p>
          </InfoFooter>
          <InfoFooter>
            <i className="fa fa-lg fa-envelope-o" />
            <p>aerodesign@ita.br</p>
          </InfoFooter>
          <InfoFooter>
            <i className="fa fa-lg fa-phone" />
            <p>(12) 3947-7867</p>
          </InfoFooter>
        </BoxText>

        <BoxText>
          <BoxTitle>
            <Title>Acompanhe nossos</Title>
            <Title strong>voos cada vez mais altos</Title>
          </BoxTitle>
          <InfoFooter>
            <i className="fa fa-lg fa-facebook-official" />
            <p>/AeroDesignITA</p>   
          </InfoFooter>
          <InfoFooter>
            <i className="fa fa-lg fa-instagram" />
            <p>@ita_aerodesign</p>
          </InfoFooter>
        </BoxText>
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