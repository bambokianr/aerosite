import React, { Component } from 'react';
import { Parallax, Title, Box, FormBox, MoreInfosBox } from './styles';
import Header from '../../components/Header';
import FormsContato from '../../components/FormsContato';
import FooterContato from '../../components/FooterContato';
import FooterRedesSociais from '../../components/FooterRedesSociais';

export default class Contato extends Component {
  render() {
    return (
      <Parallax>
        <Header />
        <Title>
          <span>C</span>ontate-nos
        </Title>
        <Box>
          <div>
            <FormBox>
              <p>Queremos conhecer você! Caso tenha críticas, sugestões, pedidos ou quer apoiar a iniciativa AeroDesign ITA, fique a vontade em entrar em contato por email <i>aerodesign@ita.br</i> ou pelo formulário abaixo:</p>
              <FormsContato />
            </FormBox>
          </div>
          <div>
          <MoreInfosBox>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3667.1239240234813!2d-45.87658878453884!3d-23.202153984862417!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94cc4a50b6540439%3A0x7c1660fb48f2794d!2sAeroDesign+ITA!5e0!3m2!1spt-BR!2sbr!4v1561489964649!5m2!1spt-BR!2sbr" width="400" height="400" frameborder="0" allowfullscreen></iframe>
            <FooterContato />
            <FooterRedesSociais />
          </MoreInfosBox>
          </div>
        </Box>
      </Parallax>
    )
  }
}
