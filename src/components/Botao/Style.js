import styled from "styled-components";

const StyleBotao = styled.button`
    width: 16.8125rem;
    height: 2.75rem;
    flex-shrink: 0;
    border-radius: 2.3125rem;
    background: ${(props) => (props.versaoInvertido ? "#0935AA" : "#F5AC00")};
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
        background: ${(props) => (props.versaoInvertido ? "#0D4BCF" : "#F5C22D")};
    }
`;

export {StyleBotao};