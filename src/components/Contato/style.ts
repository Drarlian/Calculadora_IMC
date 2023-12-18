import styled from "styled-components";

export const DivLinkPersonalizado = styled.div<{tema: string}>`
    transition: background-color 1s ease;
    background-color: ${(props) => props.id == 'wpp' ? '#00a000': props.id == 'face' ? '#143faf': props.id == 'insta' ? '#9b5100': '#bc0b27'};

    a{
        display: flex;
        height: 100%;
        width: 100%;
        justify-content: center;
        align-items: center;
        color: black;
        text-decoration: none;
        font-size: 45px;
    }

    &:hover {
        background-color: rgb(147, 154, 241);
    }
`;