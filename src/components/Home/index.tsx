import React, { ButtonHTMLAttributes, useContext, useRef, useState } from 'react';
import './style.css';
import { InfosContext } from '../../contexts/InfosContext';
import Estado from '../Estado';

const Home: React.FC = () => {
   const {tema} = useContext(InfosContext);

    const refAltura = useRef<HTMLInputElement>(null!);
    const [peso, setPeso] = useState<string>('');
    const [imc, setImc] = useState<number>(0);

   function calculaIMC(event: React.FormEvent<HTMLButtonElement>){
    event?.preventDefault()

    if (refAltura.current?.value != '' && peso != ''){
        let tempIMC = parseFloat((Number(peso) / Number(refAltura.current?.value) ** 2).toFixed(2))
        setImc(tempIMC);
    }
   }

  return (
    <div className='conteudos-home' style={tema === 'light'? {'backgroundColor': '#FFFFFF', 'color': '#000000'}: {'backgroundColor': '#5e5e5e', 'color': '#FFFFFF'}}>
        <div className='dados'>
            <div className='dados-textos'>
                <h1>Calculadora de IMC</h1>
                <p>O Índice de Massa Corporal, conhecido pela sigla IMC, é um cálculo simples que permite medir se alguém está ou não com o peso ideal.</p>
                <p>Muitas pessoas buscam descobrir seu IMC quando iniciam uma dieta específica ou uma atividade física.</p>
            </div>
            <div className='dados-inputs'>
                <form>
                    <input type='number' ref={refAltura} placeholder='Digite sua altura. Ex 1.5 (em metros)'></input>
                    <input type='number' value={peso} onChange={(e) => setPeso(e.target.value)} placeholder='Digite o seu peso. Ex 65.3 (Em KG)'></input>
                    <button type='submit' onClick={(event) => calculaIMC(event)} style={tema === 'light'? {'backgroundColor': 'rgb(63, 72, 204)'}: {'backgroundColor': '#000000'}}>Calcular IMC</button>
                </form>
            </div>
        </div>
        <Estado imc={imc} />
    </div>
  );
}

export default Home;