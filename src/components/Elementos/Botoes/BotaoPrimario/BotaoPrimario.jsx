import {BotaoPrimarioStyle} from "./Style";


const BotaoPrimario = ({children, type, onClick, submit}) => {
    return (
        <BotaoPrimarioStyle type={type} onClick={onClick} submit={submit}>
            {children}
        </BotaoPrimarioStyle>
    )
}

export default BotaoPrimario;