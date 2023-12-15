import React from 'react';

import './style.css'
import { LinkPersonalizado } from './style';
import { useContext } from 'react';
import { InfosContext } from '../../contexts/InfosContext';

const Contato: React.FC = () => {
  const { tema } = useContext(InfosContext);

  return (
    <div className="conteudos-contado">
        <div className='titulo-contato'>
          <h1 >Contato</h1>
        </div>
        <div className='container-contatos'>
          <div className='opcao-contato'>
            <h2>Dados de Contato</h2>
            <p>Ficou com alguma duvida ou precisa falar conosco?</p>
            <p>Entre em contato:</p>
            <div className='formulario-contato'>
              <form>
                <label>Nome:</label>
                <input></input>
                <label>Email:</label>
                <input></input>
                <label>Telefone:</label>
                <input></input>
                <label>Tipo de Problema:</label>
                <input></input>
                <label>Descrição:</label>
                <input></input>
                <button>Enviar</button>
              </form>
            </div>
          </div>
          <div className='opcao-contato'>
            <h2>Redes Sociais</h2>
            <p>Se preferir nos siga nas redes sociais para obter mais informações.</p>
            <div className='container-redes'>
              <div className='redes'><LinkPersonalizado tema={tema} href="">Wpp</LinkPersonalizado></div>
              <div className='redes'><LinkPersonalizado tema={tema} href="">Face</LinkPersonalizado></div>
              <div className='redes'><LinkPersonalizado tema={tema} href="">Insta</LinkPersonalizado></div>
              <div className='redes'><LinkPersonalizado tema={tema} href="">Twitter</LinkPersonalizado></div>
            </div>
          </div>
        </div>
    </div>
    );
}

export default Contato;