import React, { useRef, useState } from 'react';

import { DivFormularioC } from './style.ts';
import { useContext } from 'react';
import { InfosContext } from '../../contexts/InfosContext.tsx';
import { toast } from 'react-toastify';



const FormularioContato: React.FC = () => {
  const { tema } = useContext(InfosContext);
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [telefone, setTelefone] = useState('');
  const refTipo = useRef<HTMLSelectElement>(null!);
  const [descricao, setDescricao] = useState('');
  
  function enviarFormulario(e: React.FormEvent<HTMLButtonElement>){
    e.preventDefault();

    toast.success('Dados Enviados!');

    setNome('');
    setEmail('');
    setTelefone('');
    refTipo.current.value = 'Site';
    setDescricao('');
  }

  return (
    <DivFormularioC tema={tema}>
        <form>
            <label>Nome:</label>
            <input type='text' value={nome} onChange={(e) => setNome(e.target.value)} placeholder='Nome'/>
            <label>Email:</label>
            <input type='email' value={email} onChange={(e) => setEmail(e.target.value)} placeholder='Email'/>
            <label>Telefone:</label>
            <input type='tel' value={telefone} onChange={(e) => setTelefone(e.target.value)} placeholder='Telefone'/>
            <label>Tipo de Problema:</label>
            <select ref={refTipo}>
                <option value='Site'>Site</option>
                <option value='Valores'>Valores</option>
                <option value='Outro'>Outro</option>
            </select>
            <label>Descrição:</label>
            <textarea value={descricao} onChange={(e) => setDescricao(e.target.value)} placeholder='Descreva seu problema.'></textarea>
            <button onClick={(e) => enviarFormulario(e)}>Enviar</button>
        </form>
    </DivFormularioC>
  );
}

export default FormularioContato;