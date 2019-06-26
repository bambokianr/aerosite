import React, { Component } from 'react';
import { Container, Link } from './styles';

class Noticias extends Component {
  render() {
    return (
      <Container> 
        <img src={this.props.img} alt="Notícia" />
        <p>{this.props.title}</p>
        <Link>
          <a href="#">LEIA MAIS</a>
        </Link>
      </Container>
    );
  }

};

export default Noticias;