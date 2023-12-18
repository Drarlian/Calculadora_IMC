import styled from "styled-components";

export const DivConteudosSobre = styled.div<{tema: string}>`
    background-color:  ${(props) => props.tema === 'light'? '#FFFFFF' : '#5e5e5e'};
    color: ${(props) => props.tema === 'light'? '#000000': '#FFFFFF'};
    display: flex;
    flex-direction: column;
    font-size: large;
    box-sizing: border-box;
    width: 100%;
    justify-content: start;  /* OCUPAR APENAS O ESPAÇO DO CONTEUDO */
    align-items: center;     /* OCUPAR APENAS O ESPAÇO DO CONTEUDO */
    box-sizing: border-box;

    /* DESCOMENTAR ISSO PARA FICAR MAIS BONITO O SITE*/
    height: calc(100vh - 5rem);  /* Fazendo essa div ocupar todo o espaço restante da tela */
    transition: all 1s ease;

    .titulo-sobre{
        /* background-color: pink; */
    }

    .container-sobre{
        background-color: ${(props) => props.tema === 'light'? '#3F48CC': '#000000'};
        color: white;
        border: solid;
        border-width: 1px;
        border-radius: 5px;
        border-color: ${(props) => props.tema === 'light'? 'black': 'white'};
        display: flex;
        flex-direction: column;
        width: 1000px;
        box-sizing: border-box;
        transition: background-color 1s ease;
        transition: border-color 1s ease;
    }

    .opcoes-sobre{
        /* background-color: red; */
        display: flex;
        justify-content: center;
        width: 100%;
    }

    .opcao{
        /* background-color: burlywood; */
        display: flex;
        justify-content: center;
        border: solid;
        border-width: 1px;
        border-color: ${(props) => props.tema === 'light'? 'black': 'white'};
        transition: border-color 1s ease;
        /* margin-left: 1px; */
        /* margin-right: 1px; */
        width: 180px;
        font-size: 40px;
        cursor: pointer;
    }

    .opcao:hover{
        background-color: rgb(147, 154, 241);
    }

    .emoji-sobre{
        /* font-size: 10vh; */
    }

    .infos-sobre{
        /* background-color: yellow; */
        /* max-width: 935px; */
        padding: 5px;
        padding-left: 15px;
        border: solid;
        border-width: 1px;
        border-color: ${(props) => props.tema === 'light'? 'black': 'white'};
        transition: border-color 1s ease;
        overflow: auto;
    }

    .infos-sobre p{
    }

    @media (min-height: 900px){
        height: calc(100vh - 50px);
    }

    @media (max-width: 1000px){
        height: calc(100vh - 2rem);
        /* justify-content: center; */

        .container-sobre{
            max-width: 100%;
            /* min-width: 100%; */
        }

        .opcoes-sobre{
            display: grid;
            grid-template-columns: 1fr 1fr 1fr;
            max-width: 100vw;
            width: 100%;
            justify-content: center;
        }

        .opcao{
            display: flex;
            justify-content: center;
            width: auto;
            height: auto;
            margin: 0px;
            font-size: 5vh;
        }

        .infos-sobre{
            max-width: 100%;
            width: auto;
            /* padding: 5px; */
        }
    }
`;