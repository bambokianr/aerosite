import React from 'react';
import { Parallax, Title, Description, CarouselPage } from './styles';
import { Carousel } from 'react-responsive-carousel';
import icondepo from '../../assets/icondepo.png';

const Depoimentos = () => (
  <Parallax>
    <Title>
      <span>D</span>epoimentos
    </Title>
    <Description>
    </Description>

    <Carousel>
      <CarouselPage>
        <p>“O projeto SAE AeroDesign é um desafio lançado aos estudantes de Engenharia que tem como principal objetivo propiciar a difusão e o intercâmbio de técnicas e conhecimentos de Engenharia Aeronáutica entre estudantes e futuros profissionais da engenharia da mobilidade, através de aplicações práticas e da competição entre equipes.”</p>
        <span>Pessoa Aleatória - Diretora de Algo</span>
        <img src={icondepo} />
      </CarouselPage>
      <CarouselPage>
        <p>“O projeto SAE AeroDesign é um desafio lançado aos estudantes de Engenharia que tem como principal objetivo propiciar a difusão e o intercâmbio de técnicas e conhecimentos de Engenharia Aeronáutica entre estudantes e futuros profissionais da engenharia da mobilidade, através de aplicações práticas e da competição entre equipes.”</p>
        <span>Pessoa Aleatória - Diretora de Algo</span>
        <img src={icondepo} />
      </CarouselPage>
      <CarouselPage>
        <p>“O projeto SAE AeroDesign é um desafio lançado aos estudantes de Engenharia que tem como principal objetivo propiciar a difusão e o intercâmbio de técnicas e conhecimentos de Engenharia Aeronáutica entre estudantes e futuros profissionais da engenharia da mobilidade, através de aplicações práticas e da competição entre equipes.”</p>
        <span>Pessoa Aleatória - Diretora de Algo</span>
        <img src={icondepo} />
      </CarouselPage>
      <CarouselPage>
        <p>“O projeto SAE AeroDesign é um desafio lançado aos estudantes de Engenharia que tem como principal objetivo propiciar a difusão e o intercâmbio de técnicas e conhecimentos de Engenharia Aeronáutica entre estudantes e futuros profissionais da engenharia da mobilidade, através de aplicações práticas e da competição entre equipes.”</p>
        <span>Pessoa Aleatória - Diretora de Algo</span>
        <img src={icondepo} />
      </CarouselPage>
    </Carousel>
  </Parallax>
);

export default Depoimentos;