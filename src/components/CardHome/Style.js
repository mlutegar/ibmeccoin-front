import styled from "styled-components";

const Fundo = styled.button`
    width: 21.125rem;
    height: 8.625rem;
    flex-shrink: 0;
    border: none;
    
    border-radius: 1.25rem;
    background: #FFF;

    .geral{
        display: flex;
        justify-content: flex-start; 
        padding: 0 2rem;
    }
    
    .conteudo {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        margin-left: 1rem;
    }
`;

export {Fundo};
