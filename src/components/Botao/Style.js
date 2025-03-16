import styled from "styled-components";

const BotaoPrimario = styled.button`
    width: 16.8125rem;
    height: 2.75rem;
    flex-shrink: 0;
    border-radius: 2.3125rem;
    background: #F5AC00;
    border: none;

    color: #FFF;
    text-align: center;
    font-family: Krub;
    font-size: 1.5rem;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    cursor: pointer;
    
    &:hover {
        background: #F5C22D;
    }
`;

const BotaoPrimarioInvertido = styled.button`
    width: 16.8125rem;
    height: 2.75rem;
    flex-shrink: 0;
    border-radius: 2.3125rem;
    background: #0935AA;
    border: none;

    color: #FFF;
    text-align: center;
    font-family: Krub;
    font-size: 1.5rem;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    cursor: pointer;
    
    &:hover {
        background: #0D4BCF;
    }
`;

const BotaoSecundario = styled.button`
    width: 16.8125rem;
    height: 1.875rem;
    flex-shrink: 0;

    border-radius: 2.3125rem;
    background: #F5AC00;

    &:hover {
        background: #F5C22D;
    }
`;

const MiniBotao = styled.button`
    width: 3.375rem;
    height: 2.75rem;
    flex-shrink: 0;

    border-radius: 0.625rem;
    background: #F5AC00;

    &:hover {
        background: #F5C22D;
    }
`;

const MiniBotaoInvertido = styled.button`
    width: 3.375rem;
    height: 2.75rem;
    flex-shrink: 0;

    border-radius: 0.625rem;
    background: #0935AA;
    
    &:hover {
        background: #0D4BCF;
    }
`;

const SelectBotao = styled.button`
    width: 8.8125rem;
    height: 1.75rem;
    flex-shrink: 0;

    border-radius: 0.625rem;
    background: #F5AC00;
    
    &:hover {
        background: #F5C22D;
    }
`;

const BackBotao = styled.button`
    width: 5.6875rem;
    height: 1.875rem;
    flex-shrink: 0;

    border-radius: 0.625rem;
    background: #FFF;
    
    &:hover {
        background: #F5AC00;
    }
`;

export {BotaoPrimario, BotaoPrimarioInvertido, BotaoSecundario, MiniBotao, MiniBotaoInvertido, SelectBotao, BackBotao};