import React from 'react';
import { Container} from './styles';
import Header from '../../components/Header';
import Intro from '../../components/Intro';
import QuemSomos from '../../components/QuemSomos';
import Equipes from '../../components/Equipes';
import Noticias from '../../components/Noticias';
import Fatos from '../../components/Fatos';
import Depoimentos from '../../components/Depoimentos';
import Footer from '../../components/Footer';



const Home = () => (
  <Container>
    <Header />
    <Intro />
    <QuemSomos />
    <Equipes />
    <Noticias />
    {/* <Fatos /> */}
    <Depoimentos />
    {/* <Form>
      <input type="text" placeholder="teste"></input>
      <button type="submit">OK</button>
    </Form> */}

    <Footer />

    
  </Container>
);

export default Home;