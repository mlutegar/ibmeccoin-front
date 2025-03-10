import styled from "styled-components";

const Texto1 = styled.div`
    color: ${((props) => (props.cor))};
    font-family: Krub, serif;
    font-size: ${(props => (props.tamanho))};
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    text-transform: uppercase;
`;

const Texto2 = styled.div`
    color: ${((props) => props.cor)};
    font-family: Krub, serif;
    font-size: ${((props) => props.tamanho)};
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    text-transform: uppercase;
`;

export {Texto1, Texto2};