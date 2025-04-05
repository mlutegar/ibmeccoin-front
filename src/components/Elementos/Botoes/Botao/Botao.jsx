import {BotaoSecundario} from "./Style";
import Textos from "../../Textos/Textos";

const Botao = ({tipo = 3, children, type, onClick, submit}) => {

    if (tipo === 3) {
        return (
            <BotaoSecundario type={type} onClick={onClick} submit={submit}>
                <Textos
                    versao={5}
                >
                    {children}
                </Textos>
            </BotaoSecundario>
        )
    }
}

export default Botao;