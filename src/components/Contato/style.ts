import styled from "styled-components";

export const LinkPersonalizado = styled.a<{tema: string}>`
    background-color: pink;
    display: flex;
    height: 100%;
    width: 100%;
    justify-content: center;
    align-items: center;
    color: black;
    text-decoration: none;
    transition: background-color 0.5s ease;

    &:hover {
        background-color: orange;
    }
`;