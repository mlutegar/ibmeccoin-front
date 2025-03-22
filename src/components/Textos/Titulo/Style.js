import styled from "styled-components";

const Titulo = styled.div`
    color: white;
    font-family: Krub, serif;
    font-size: ${(props => (props.tamanho))};
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    text-transform: uppercase;
`;