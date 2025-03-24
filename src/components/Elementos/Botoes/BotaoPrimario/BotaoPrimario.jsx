import {BotaoPrimarioStyle} from "./Style";


const BotaoPrimario = ({children, type, onClick}) => {
    return (
        <BotaoPrimarioStyle type={type} onClick={onClick}>
            {children}
        </BotaoPrimarioStyle>
    )
}

export default BotaoPrimario;