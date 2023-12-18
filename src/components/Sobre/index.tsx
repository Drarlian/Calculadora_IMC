import React, { useContext, useState } from 'react';

import { DivConteudosSobre } from './style.ts';
import { InfosContext } from '../../contexts/InfosContext.tsx';

const Sobre: React.FC = () => {
    const { tema } = useContext(InfosContext);

    const [infoAtual, setInfoAtual] = useState<string>('obesidade');
    const textoDefault = "Para saber mais sobre o IMC, clique em outra opção acima.";
    const textoMagreza = "Indica que a pessoa pode estar abaixo do peso considerado saudável para a sua altura. Pode ser associado a uma falta de nutrientes e ser indicativo de subnutrição.";
    const textoNormal = "Nesta faixa, o peso é considerado saudável para a altura. Indica que a pessoa está mantendo um equilíbrio adequado entre peso e altura.";
    const textoSobrepeso = "Indica um excesso de peso corporal em relação à altura. O sobrepeso pode estar associado a um aumento do risco de desenvolver condições de saúde como diabetes tipo 2, doenças cardiovasculares e hipertensão.";
    const textoObesidade = "Indica obesidade leve. O risco de desenvolver doenças relacionadas ao peso aumenta nesta faixa.";
    const textoObesidadeG = "Também conhecida como obesidade grave ou mórbida, esta faixa indica um risco muito elevado de complicações relacionadas ao peso, como diabetes tipo 2, doenças cardíacas e outras condições graves.";

    function teste(event: React.MouseEvent<HTMLDivElement>){
        setInfoAtual(event.currentTarget.id);
    }

    return (
        // Criar um styled component para a div principal
        <DivConteudosSobre tema={tema}>
            <div className='titulo-sobre'><h1>Sobre</h1></div>
            <div className='container-sobre'>
                <div className='opcoes-sobre'>
                    <div onClick={(e) => teste(e)} id='default' className='opcao'><p className='emoji-sobre'>🙂</p></div>
                    <div onClick={(e) => teste(e)} id='magreza' className='opcao'><p className='emoji-sobre'>😟</p></div>
                    <div onClick={(e) => teste(e)} id='normal' className='opcao'><p className='emoji-sobre'>😎</p></div>
                    <div onClick={(e) => teste(e)} id='sobrepeso' className='opcao'><p className='emoji-sobre'>😓</p></div>
                    <div onClick={(e) => teste(e)} id='obesidade' className='opcao'><p className='emoji-sobre'>😥</p></div>
                    <div onClick={(e) => teste(e)} id='obesidadeG' className='opcao'><p className='emoji-sobre'>😰</p></div>
                </div>
                <div className='infos-sobre'>
                    {infoAtual === 'default' ? (
                        <>
                            <h2>IMC</h2>
                            <p>{textoDefault} </p>
                        </>
                    ): infoAtual === 'magreza' ? (
                        <>
                            <h2>Magreza</h2>
                            <p>{textoMagreza}</p>
                        </>
                    ): infoAtual === 'normal' ? (
                        <>
                            <h2>Normal</h2>
                            <p>{textoNormal}</p>
                        </>
                    ): infoAtual === 'sobrepeso'? (
                        <>
                            <h2>Sobrepeso</h2>
                            <p>{textoSobrepeso}</p>
                        </>
                    ): infoAtual === 'obesidade'? (
                        <>
                            <h2>Obesidade</h2>
                            <p>{textoObesidade}</p>
                        </>
                    ): (
                        <>
                            <h2>Obesidade Grave</h2>
                            <p>{textoObesidadeG}</p>
                        </>
                    )}
                    {/* Criar um componente paragrafo */}
                </div>
            </div>
        </DivConteudosSobre>
    );
}

export default Sobre;