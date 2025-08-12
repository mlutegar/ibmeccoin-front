import styled from "styled-components";

const Fundo = styled.div`
    width: 100%;
    height: 8.625rem;
    flex-shrink: 0;
    border: none;
    cursor: pointer;
    transition: all 0.3s ease;

    border-radius: 1.25rem;
    background: #FFF;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
    display: flex;
    flex-direction: column;
    justify-content: center;

    &:hover {
        transform: translateY(-2px);
        box-shadow: 0 8px 24px rgba(0, 0, 0, 0.15);
        background: #FAFAFA;
    }

    &:active {
        transform: translateY(0);
        box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
    }

    .geral {
        display: flex;
        align-items: center;
        padding: 0 1.5rem;
        margin-bottom: 0.5rem;
        gap: 1rem;
    }

    .botao {
        display: flex;
        justify-content: center;
        padding: 0 1.5rem;
    }

    .conteudo {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: center;
        flex: 1;
        gap: 0.25rem;
    }
`;

export {Fundo};
