import React from 'react';
import './style.css';

const Home: React.FC = () => {
  return (
    <div className='conteudos-home'>
        <div className='dados'>
            <div className='dados-textos'>
                <h1>Calculadora de IMC</h1>
                <p>O Índice de Massa Corporal, conhecido pela sigla IMC, é um cálculo simples que permite medir se alguém está ou não com o peso ideal.</p>
                <p>Muitas pessoas buscam descobrir seu IMC quando iniciam uma dieta específica ou uma atividade física.</p>
            </div>
            <div className='dados-inputs'>
                <form>
                    <input type='number' placeholder='Digite sua altura. Ex 1.5 (em metros)'></input>
                    <input type='number' placeholder='Digite o seu peso. Ex 65.3 (Em KG)'></input>
                    <button type='submit'>Calcular IMC</button>
                </form>
            </div>
        </div>
        <div className='estado'>
            <div className='estado-itens'>
                <h2>Realize o cálculo do seu IMC</h2>
                <div className='container-emoji'>
                    <p>Nada por aqui ainda.</p>
                    <p className='estado-emoji'>🙂</p>
                </div>
                {/* | 😎 | 😰 | 😥 | 🤨 | 😓 | 😟 | */}
            </div>
        </div>
    </div>
  );
}

export default Home;