import React, { Component } from 'react';
import perfil_membro from '../../assets/perfil_membro.png';
import { PerfilBox, PerfilInfos, pNome } from './styles';

export default class PerfilMembro extends Component {
  render() {
    return (
      <PerfilBox>
        <img src={perfil_membro} ></img>
        <PerfilInfos>
          <p>Lívia Pimentel</p>
          <p>AER-20</p>
          <p><span>Equipe: </span>Leviatã</p>
          <p><span>Sistema: </span>Eletrônica</p>
        </PerfilInfos>
      </PerfilBox>
    )
  }
}