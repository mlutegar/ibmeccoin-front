// ConvitesListaStyles.js
import styled from "styled-components";

export const Container = styled.div`
    max-width: 800px;
    background-color: #fff;
    border-radius: 0.5rem;
`;

export const Lista = styled.ul`
    list-style: none;
    padding: 0;
    margin: 0;
`;

export const ItemLista = styled.li`
    background-color: #F5F5F5;
    border: 1px solid #ccc;
    border-radius: 0.5rem;
    padding: 1rem;
    margin-bottom: 1rem;
    font-family: Krub;
    font-size: 1rem;
    line-height: 1.5;
    color: black;

    & > strong {
        font-weight: 700;
    }

    hr {
        margin: 1rem 0;
        border: none;
        border-top: 1px solid #ccc;
    }

    button {
        margin-top: 1rem;
        display: block;
        width: fit-content;
    }
`;

export const Mensagem = styled.p`
    font-family: Krub;
    font-size: 1.25rem;
    text-align: center;
    color: #0935AA;
`;

export const Erro = styled.p`
    font-family: Krub;
    font-size: 1.25rem;
    text-align: center;
    color: red;
`;
