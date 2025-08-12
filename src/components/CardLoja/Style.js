import styled from "styled-components"

export const CardLojaStyle = styled.div`
    width: 21.125rem;
    height: 5.0625rem;
    flex-shrink: 0;
    border-radius: 1.25rem;
    background: #FFF;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 2rem;

    .info {

    }

    .nome-preco {
        width: 165px;
        color: #000;
        font-family: Krub;
        font-size: 1rem;
        font-style: normal;
        font-weight: 600;
        line-height: normal;
    }

    .descricao {
        color: #000;
        font-family: Krub;
        font-size: 0.875rem;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
    }

    .botao {
        display: flex;
        width: 4.875rem;
        height: 2.75rem;
        justify-content: center;
        align-items: center;
        flex-shrink: 0;

        border-radius: 0.625rem;
        background: #F5AC00;

        color: #FFF;
        font-family: Krub;
        font-size: 1rem;
        font-style: normal;
        font-weight: 600;
        line-height: normal;
        
        cursor: pointer;
        
        &:hover {
            background: #e59400;
        }
        
        &:active {
            background: #d88b00;
        }
    }
`
