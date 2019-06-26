import React, { Fragment } from 'react';
import { BoxText, BoxTitle, Title, InfoFooter } from './styles';

const FooterContato = () => (
  <Fragment>
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
  </Fragment>
);

export default FooterContato;