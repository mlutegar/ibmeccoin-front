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

const Titulo = styled.div`
    color: #fff;
    font-family: Krub;
    font-size: 1.25rem;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    text-transform: uppercase;

    text-align: left;
    display: flex;
    width: 100%;
    justify-content: flex-start;
    margin-left: 3rem;
    margin-bottom: 1rem;
`;

const Subtitulo = styled.div`
    color: #000;
    font-family: Krub;
    font-size: 1rem;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
`;

const SubtituloInvertido = styled.div`
    color: #FFF;
    font-family: Krub;
    font-size: 1rem;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const Texto = styled.div`
    color: #000;
    font-family: Krub;
    font-size: 0.875rem;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
`;


export {Texto1, Texto2, Titulo, Subtitulo, SubtituloInvertido, Texto};