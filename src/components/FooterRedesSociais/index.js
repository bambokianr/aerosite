import React, { Fragment } from 'react';
import { BoxText, BoxTitle, Title, InfoFooter } from './styles';

const FooterRedesSociais = () => (
  <Fragment>
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
  </Fragment>
);

export default FooterRedesSociais;