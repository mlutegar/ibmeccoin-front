import { BotaoVoltarStyle } from "./Style";

const BotaoVoltar = ({children, type, onClick}) => {
    return (
        <BotaoVoltarStyle type={type} onClick={onClick}>
            voltar
        </BotaoVoltarStyle>
    );
}

export default BotaoVoltar;