import React from 'react';
import './style.css';

interface EstadoAtributos {
    imc: number;
}

const Estado = ({ imc }: EstadoAtributos) => {
    return (
        <div className='estado'>
            <div className='estado-itens'>
                {
                    imc > 0 && imc < 18.5 ? (
                        <div>
                            <h2>O seu resultado é:</h2>
                            <div className='container-emoji'>
                                <p>Magreza</p>
                                <p className='estado-emoji'>😟</p>
                                <p className='paragrafoSobre'>Veja mais sobre</p>
                            </div>
                        </div>
                    ) : imc >= 18.5 && imc <= 24.9 ? (
                        <div>
                            <h2>O seu resultado é:</h2>
                            <div className='container-emoji'>
                                <p>Normal. Tudo Tranquilo</p>
                                <p className='estado-emoji'>😎</p>
                                <p className='paragrafoSobre'>Veja mais sobre</p>
                            </div>
                        </div>
                    ) : imc >= 25 && imc <= 29.9 ? (
                        <div>
                            <h2>O seu resultado é:</h2>
                            <div className='container-emoji'>
                                <p>Sobrepeso</p>
                                <p className='estado-emoji'>😓</p>
                                <p className='paragrafoSobre'>Veja mais sobre</p>
                            </div>
                        </div>
                    ): imc >= 30 && imc <= 39.9 ? (
                        <div>
                            <h2>O seu resultado é:</h2>
                            <div className='container-emoji'>
                                <p>Obesidade</p>
                                <p className='estado-emoji'>😥</p>
                                <p className='paragrafoSobre'>Veja mais sobre</p>
                            </div>
                        </div>
                    ): imc > 40 ? (
                        <div>
                            <h2>O seu resultado é:</h2>
                            <div className='container-emoji'>
                                <p>Obesidade Grave</p>
                                <p className='estado-emoji'>😰</p>
                                <p className='paragrafoSobre'>Veja mais sobre</p>
                            </div>
                        </div>
                    ): (
                        <div>
                            <h2>Realize o cálculo do seu IMC</h2>
                            <div className='container-emoji'>
                                <p>Nada aqui ainda.</p>
                                <p className='estado-emoji'>🙂</p>
                            </div>
                        </div>
                    )
                }
            </div>
        {/* | 😎 | 😰 | 😥 | 🤨 | 😓 | 😟 | */}
        </div>
    );
}

export default Estado;