import React from 'react';
import './style.css';
import EstadoInfos from '../EstadoInfos';

interface EstadoAtributos {
    imc: number;
}

const Estado = ({ imc }: EstadoAtributos) => {
    return (
        <div className='estado'>
            <div className='estado-itens'>
                {
                    imc > 0 && imc < 18.5 ? (
                        <EstadoInfos imc={imc} resultado='Magreza' emoji='😟' />
                    ) : imc >= 18.5 && imc <= 24.9 ? (
                        <EstadoInfos imc={imc} resultado='Normal. Tudo Tranquilo' emoji='😎' />
                    ) : imc >= 25 && imc <= 29.9 ? (
                        <EstadoInfos imc={imc} resultado='Sobrepeso' emoji='😓' />
                    ): imc >= 30 && imc <= 39.9 ? (
                        <EstadoInfos imc={imc} resultado='Obesidade' emoji='😥' />
                    ): imc > 40 ? (
                        <EstadoInfos imc={imc} resultado='Obesidade Grave' emoji='😰' />
                    ): (
                        <div className="container-estado">   
                            <h2>Descubra seu IMC</h2>
                            <div className='container-emoji'>
                                <p>Nada aqui ainda.</p>
                                <p className='estado-emoji'>🙂</p>
                            </div>
                        </div>
                    )
                }
            </div>
        </div>
    );
}

export default Estado;