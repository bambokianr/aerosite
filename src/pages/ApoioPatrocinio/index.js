import React, { Component } from 'react';
import { Parallax, Box, Title, TextInfo, BoxInfo, PdfLink } from './styles';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import planomkt from '../../assets/planomkt_aerodesignITA.pdf';
import pdf from '../../assets/pdf.png';
import BoxMenu from '../../components/BoxMenu';

export default class ApoioPatrocinio extends Component {
  render() {
    return (
      <div>
      <Parallax>
        <Header />
        <Box>
          <BoxInfo>
            <Title>
              <span>P</span>atrocínio
            </Title>
            <TextInfo>
              <p>A equipe AeroDesign ITA desenvolveu o seu próprio Plano de Marketing, focado em permitir ao patrocinador flexibilizar suas ações de marketing visando maior visibilidade. Estamos abertos para formar parcerias visando divulgação da sua empresa dentro do ITA, atingindo um público-alvo de futuros engenheiros.</p>
              <p>Acesse o documento em:</p>
              <PdfLink>
                <img src={pdf}></img>
                <a href={planomkt} target="_blank">Plano de Marketing</a>
              </PdfLink>
            </TextInfo>
          </BoxInfo>
          <BoxInfo>
            <Title>
              <span>D</span>oações de materiais e <span>P</span>restação de serviços
            </Title>
            <TextInfo>
              <p>Se sua empresa possui material de consumo, ferramentas ou realiza algum serviço de manufatura e tem interesse em apoiar a iniciativa AeroDesign ITA, será muito bem-vinda!</p>
              <p>Alguns itens que sempre precisamos:</p>

              <p>Alguns serviços que necessitamos:</p>
            </TextInfo>
          </BoxInfo>
       
          <BoxInfo>
            <Title>
              <span>D</span>ivulgação
            </Title>
            <TextInfo>
              <p>A equipe AeroDesign ITA desenvolveu o seu próprio Plano de Marketing, focado em permitir ao patrocinador flexibilizar suas ações de marketing visando maior visibilidade.</p>
            </TextInfo>
          </BoxInfo>
        </Box>



        {/* <Title>
          <span>D</span>oações financeiras
        </Title>
        <Title>
          <span>D</span>oações de materiais
        </Title>
        <Title>
          <span>P</span>restação de serviço
        </Title>
        <Title>
          <span>D</span>ivulgação
        </Title> */}
      </Parallax>
      <Footer />
      </div>
      
    )
  }
}
