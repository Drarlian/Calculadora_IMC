// import './style.css'
import { ParagrafoLink } from './style.ts'

import { Link } from "react-router-dom"
import { useContext } from 'react'
import { InfosContext } from '../../contexts/InfosContext'

interface InfosAtributos{
    imc: number
    resultado: string
    emoji: string
}

const EstadoInfos = ({ imc, resultado, emoji }: InfosAtributos) => {
    const {tema} = useContext(InfosContext);

    return (
        <div className="container-estado">
            <h2>O seu resultado é: {imc}</h2>
            <div className='container-emoji'>
                <p style={imc >= 18.5 && imc <= 24.9 ? {'color': 'green'}: {'color': 'red'} }>{resultado}</p>
                <p className='estado-emoji'>{emoji}</p>
                <ParagrafoLink tema={tema}><Link to='contato'>Veja mais sobre</Link></ParagrafoLink>
            </div>
        </div>
    )
}

export default EstadoInfos
