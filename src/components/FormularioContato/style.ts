import styled from "styled-components";

export const DivFormularioC = styled.div<{tema: string}>`
    /* background-color: brown; */
    display: flex;
    justify-content: center;

    form{
        display: flex;
        flex-direction: column;
    }

    form *{
        width: 250px;
        margin-bottom: 3px;
    }

    input, select{
        padding: 4px;
        border-radius: 5px;
    }

    select{
        width: 100%;
    }

    textarea{
        max-width: 252px;
        max-height: 50px;
        width: 252px;
        height: 50px;
        border-radius: 5px;
        padding: 4px;
    }

    button{
        width: 100%;
        margin-top: 10px;
        border-radius: 5px;
        /* padding: 5px; */ 
        padding-top: 10px;
        padding-bottom: 10px;
        cursor: pointer;
        background-color: ${(props) => props.tema === 'light'? 'rgb(108, 116, 224)': 'rgb(32, 31, 31)'};
        color: white;
        transition: background-color 1s ease;
    }

    button:hover{
        background-color: ${(props) => props.tema === 'light'? 'rgb(147, 154, 241)': '#3d3d42'};
    }
`;