import styled from "styled-components"

export const BotaoVoltarStyle = styled.button`
    border-radius: 0.625rem;
    background: #FFF;
    width: 5.6875rem;
    height: 1.875rem;
    flex-shrink: 0;

    color: #0935AA;
    text-align: center;
    font-family: Krub;
    font-size: 0.875rem;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    border: none;
    transition: 0.5s all ease;
    
    &:hover {
        background: #0935AA;
        color: #FFF;
        cursor: pointer;
    }
    
    &:active {
        background: #FFF;
        color: #0935AA;
        cursor: pointer;
    }
`
