import styled from 'styled-components'

export const Botao = styled.button<{tema: string}>`
    margin-top: 10px;
    border-radius: 5px;
    /* padding: 5px; */ 
    padding-top: 10px;
    padding-bottom: 10px;
    cursor: pointer;
    background-color: ${(props) => props.tema === 'light'? 'rgb(63, 72, 204)': '#000000'};
    color: white;
    transition: background-color 1s ease;

    &:hover{
        background-color: ${(props) => props.tema === 'light'? 'rgb(108, 116, 224)': '#333335'};
    }
`;
