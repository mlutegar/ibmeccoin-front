import {CardConviteStyle} from "./Style";
import Subtitulo from "../../Textos/Subtitulo/Subtitulo";
import TextoSimples from "../../Textos/TextoSimples/TextoSimples";
import SelectBotao from "../../Botoes/SelectBotao/SelectBotao";

const CardConvite = ({titulo, subtitulo, onClickSim, onClickNao}) => {
    return (
        <CardConviteStyle>
            <div className={'parte1'}>
                <Subtitulo>
                    {titulo}
                </Subtitulo>
                <TextoSimples>
                    {subtitulo}
                </TextoSimples>
            </div>

            <div className={'parte2'}>
                <button className={'btn1'} onClick={onClickSim}>
                    Sim
                </button>
                <button className={'btn2'} onClick={onClickNao}>
                    Não
                </button>
            </div>
        </CardConviteStyle>
    );
}

export default CardConvite;