import React, { Component } from 'react';
import { Container, Box, MenuOptions } from './styles';
import Header from '../../components/Header';
import PerfilMembro from '../../components/PerfilMembro';
import BoxMenu from '../../components/BoxMenu';

export default class IndexAreaMembros extends Component {
  render() {
    return (
      <Container>
        <Header />
        <Box>
          <PerfilMembro />
          {/* <iframe src="https://calendar.google.com/calendar/embed?height=600&amp;wkst=1&amp;bgcolor=%23ffffff&amp;ctz=America%2FSao_Paulo&amp;src=YWVyb2Rlc2lnbkBhbHVuby5pdGEuYnI&amp;src=YWRkcmVzc2Jvb2sjY29udGFjdHNAZ3JvdXAudi5jYWxlbmRhci5nb29nbGUuY29t&amp;src=cHQuYnJhemlsaWFuI2hvbGlkYXlAZ3JvdXAudi5jYWxlbmRhci5nb29nbGUuY29t&amp;color=%23039BE5&amp;color=%2333B679&amp;color=%230B8043" width="600" height="600" frameborder="0" scrolling="no"></iframe> */}
          {/* <MenuOptions>
            <div>
              <BoxMenu />
              <BoxMenu />
              <BoxMenu />
            </div>
            <div>
              <BoxMenu />
              <BoxMenu />
              <BoxMenu />
            </div>
          </MenuOptions> */}
        </Box>
      </Container>
    )
  }
}
