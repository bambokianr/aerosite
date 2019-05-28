import React from 'react';
import { Parallax, Container, Title, Description, Link } from './styles';
import TextPhotoCard from '../TextPhotoCard';
import news1 from '../../assets/news1.png';

const Noticias = () => (
  <Parallax>
    <Container>
      <Title>
        <span>N</span>otícias
      </Title>
      <Description>
        <TextPhotoCard 
          title='Diário de bordo #01 – Equipe Bismark'
          img={news1}
        />
        <TextPhotoCard 
          title='Diário de bordo #02 – Equipe Leviatã'
          img={news1}
        />
        <TextPhotoCard 
          title='Diário de bordo #01 – Equipe Bismark'
          img={news1}
        />
      </Description>
      <Link>
        <a href="#">MAIS NOTÍCIAS</a>
        <a href="#">></a> 
      </Link>
    </Container>
  </Parallax>
);

export default Noticias;