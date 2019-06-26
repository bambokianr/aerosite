import React from 'react';
import { FormContato, InputBtn } from './styles';

const FormsContato = () => (
  <div>
    <FormContato>
      <input type="text" placeholder="Seu nome" />
      <input type="text" placeholder="Seu e-mail" />
      <input type="text" placeholder="Telefone e/ou celular" />
      <input type="text" placeholder="Como conheceu a AeroDesign ITA?"/>
      <textarea name="mensagem" cols="35" rows="8" placeholder="Mensagem para nós"></textarea>
      {/* <input type="text" placeholder="Mensagem para nós" /> */}
      {/* <input type="submit" value="Enviar" /> */}
      <InputBtn type="submit" value="Enviar"></InputBtn>
    </FormContato>
  </div>
);

export default FormsContato;