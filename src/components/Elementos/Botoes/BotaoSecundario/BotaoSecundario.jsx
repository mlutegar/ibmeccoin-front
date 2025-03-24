import {BotaoSecundarioStyle} from "./Style";


const BotaoSecundario = ({children, type, onClick}) => {
    return (
        <BotaoSecundarioStyle type={type} onClick={onClick}>
            {children}
        </BotaoSecundarioStyle>
    )
}

export default BotaoSecundario;