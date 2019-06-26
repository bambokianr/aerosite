import React from 'react';
import { Container, Nav } from './styles';
import logoaviao from '../../assets/logoaviao.png';
import { Link } from 'react-router-dom';

const Header = () => (
  <Container>
    <img src={logoaviao} alt="AeroDesign ITA" />
    {/* <Nav main> */}
    <Nav>
      <li><Link to="/">HOME</Link></li>
      <li><a href="">QUEM SOMOS</a></li>
      <li><a href="">NOTÍCIAS</a></li>
      <li><Link to="/apoioepatrocinio">APOIO E PATROCÍNIO</Link></li>
      <li><a href="">PROCESSO SELETIVO</a></li>
      <li><Link to="/contato">CONTATO</Link></li>
      <li><Link to="/areamembros">ÁREA DE MEMBROS</Link></li>
    </Nav>

    {/* <p>HOME</p>
    <p>QUEM SOMOS</p>
    <p>NOTÍCIAS</p>
    <p>APOIO E PATROCÍNIO</p>
    <p>PROCESSO SELETIVO</p>
    <p>CONTATO</p>
    <p>ÁREA DE MEMBROS</p> */}
  </Container>
);

export default Header;