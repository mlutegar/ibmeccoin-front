import {BotaoPrimario, BotaoPrimarioInvertido, BotaoSecundario, MiniBotao, MiniBotaoInvertido, SelectBotao, BackBotao} from "./Style";
import Textos from "../Textos/Textos";

const Botao = ({tipo = 1, children, versaoInvertido = false, type, onClick, submit}) => {

    if (tipo === 1) {
        return (
            <BotaoPrimario versaoInvertido={versaoInvertido} type={type} onClick={onClick} submit={submit}>
                {children}
            </BotaoPrimario>
        )
    }

    if (tipo === 2) {
        return (
            <BotaoPrimarioInvertido versaoInvertido={versaoInvertido} type={type} onClick={onClick} submit={submit}>
                {children}
            </BotaoPrimarioInvertido>
        )
    }

    if (tipo === 3) {
        return (
            <BotaoSecundario type={type} onClick={onClick} submit={submit}>
                <Textos
                    versao={4}
                >
                    {children}
                </Textos>
            </BotaoSecundario>
        )
    }

    if (tipo === 4) {
        return (
            <MiniBotao versaoInvertido={versaoInvertido} type={type} onClick={onClick} submit={submit}>
                <Textos
                    versao={4}
                >
                    {children}
                </Textos>
            </MiniBotao>
        )
    }

    if (tipo === 5) {
        return (
            <MiniBotaoInvertido versaoInvertido={versaoInvertido} type={type} onClick={onClick} submit={submit}>
                <Textos
                    versao={4}
                >
                    {children}
                </Textos>
            </MiniBotaoInvertido>
        )
    }

    if (tipo === 6) {
        return (
            <SelectBotao versaoInvertido={versaoInvertido} type={type} onClick={onClick} submit={submit}>
                <Textos
                    versao={4}
                >
                    {children}
                </Textos>
            </SelectBotao>
        )
    }

    if (tipo === 7) {
        return (
            <BackBotao versaoInvertido={versaoInvertido} type={type} onClick={onClick} submit={submit}>
                <Textos
                    versao={6}
                >
                    {children}
                </Textos>
            </BackBotao>
        )
    }
}

export default Botao;