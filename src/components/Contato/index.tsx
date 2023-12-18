import React from 'react';

import './style.css'
import { DivLinkPersonalizado } from './style';
import { useContext } from 'react';
import { InfosContext } from '../../contexts/InfosContext';
import { FaFacebook } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { FaWhatsappSquare } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import FormularioContato from '../FormularioContato';

const Contato: React.FC = () => {
  const { tema } = useContext(InfosContext);

  return (
    <div className="conteudos-contado" style={tema === 'light'? {'backgroundColor': '#FFFFFF', 'color': '#000000'}: {'backgroundColor': '#5e5e5e', 'color': '#FFFFFF'}}>
        <div className='titulo-contato'>
          <h1 >Contato</h1>
        </div>
        <div className='container-contatos'>
          <div className='opcao-contato' style={tema === 'light'? {'backgroundColor': '#3F48CC', 'borderColor': 'black'}: {'backgroundColor': '#000000', 'borderColor': 'white'}}>
            <h2>Dados de Contato</h2>
            <p>Ficou com alguma duvida ou precisa falar conosco?</p>
            <p>Entre em contato:</p>
            <FormularioContato />
          </div>
          <div className='opcao-contato' style={tema === 'light'? {'backgroundColor': '#3F48CC', 'borderColor': 'black'}: {'backgroundColor': '#000000', 'borderColor': 'white'}}>
            <h2>Redes Sociais</h2>
            <p>Se preferir nos siga nas redes sociais para obter mais informações.</p>
            <div className='container-redes'>
              <DivLinkPersonalizado tema={tema} className='redes' id='wpp' style={tema === 'light'? {'borderColor': 'black'}: {'borderColor': 'white'}}><a href=""><FaWhatsappSquare /></a></DivLinkPersonalizado>
              <DivLinkPersonalizado tema={tema} className='redes' id='face' style={tema === 'light'? {'borderColor': 'black'}: {'borderColor': 'white'}}><a href=""><FaFacebook /></a></DivLinkPersonalizado>
              <DivLinkPersonalizado tema={tema} className='redes' id='insta' style={tema === 'light'? {'borderColor': 'black'}: {'borderColor': 'white'}}><a href=""><RiInstagramFill /></a></DivLinkPersonalizado>
              <DivLinkPersonalizado tema={tema} className='redes' id='twit' style={tema === 'light'? {'borderColor': 'black'}: {'borderColor': 'white'}}><a href=""><FaSquareXTwitter /></a></DivLinkPersonalizado>
            </div>
          </div>
        </div>
    </div>
    );
}

export default Contato;