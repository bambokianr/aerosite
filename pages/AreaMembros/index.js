import React, { Component } from 'react';
import { Container, BoxLogin } from './styles';
import Header from '../../components/Header';

export default class Contato extends Component {
  render() {
    return (
      <Container>
        <Header />
        <BoxLogin>
          <span>Área de membros</span>
          <p>Logo da aero</p>
          <form>
            <input type="text" name="email" placeholder="E-mail"></input>
            <input type="password" name="password" placeholder="Senha"></input>
            <input type="submit" value="Enviar"></input>
          </form>
          {/* inserir campo de cadastre-se/esqueci minha senha? */}
        </BoxLogin>
      </Container>
    )
  }
}
