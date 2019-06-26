import React, { Component } from 'react';
import { Parallax, BoxLogin, FormAreaMembro, InputBtn } from './styles';
import Header from '../../components/Header';
import area_membros from '../../assets/area_membros.png';
import { Link } from 'react-router-dom';

export default class AreaMembros extends Component {
  render() {
    return (
      <Parallax>
        <Header />
        <BoxLogin>
          <div><img src={area_membros} alt="AeroDesign ITA" /></div>
          <FormAreaMembro>
            <input type="text" name="email" placeholder="E-mail"></input>
            <input type="password" name="password" placeholder="Senha"></input>
            <div><Link to="/indexmembros">Recuperar minha senha</Link></div>
            <InputBtn type="submit" value="Entrar"></InputBtn>
          </FormAreaMembro>
        </BoxLogin>
      </Parallax>
    )
  }
}
