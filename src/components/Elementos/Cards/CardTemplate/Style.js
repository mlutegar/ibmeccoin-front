import styled from "styled-components";

const Fundo = styled.div`
    width: 21.125rem;
    height: 8.625rem;
    flex-shrink: 0;
    border: none;

    border-radius: 1.25rem;
    background: #FFF;
    display: flex;
    flex-direction: column;
    justify-content: center;

    .geral {
        display: flex;
        justify-content: space-around;
        padding: 0 2rem;
    }

    .botao {
        display: flex;
        justify-content: center;
    }

    .conteudo {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        margin-left: 1rem;
    }
`;

export {Fundo};
