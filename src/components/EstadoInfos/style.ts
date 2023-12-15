import styled from 'styled-components';

export const ParagrafoLink = styled.p<{tema: string}>`
    background-color: ${(props) => props.tema === 'light'? 'rgb(63, 72, 204)': '#000000'};
    border-radius: 5px;
    padding: 6px;
    transition: all 0.5s ease;

    *{
        color: white;
        text-decoration: none;
    }
    
    &:hover{
        background-color: ${(props) => props.tema === 'light'? 'rgb(108, 116, 224)': '#333335'};
    }
`;
