import {CardConviteStyle} from "./Style";
import Subtitulo from "../../Textos/Subtitulo/Subtitulo";
import TextoSimples from "../../Textos/TextoSimples/TextoSimples";
import BotaoPrimario from "../../Botoes/BotaoPrimario/BotaoPrimario";
import SelectBotao from "../../Botoes/SelectBotao/SelectBotao";

const CardConvite = ({titulo, subtitulo, botaoTexto, onClick}) => {
    return (
        <CardConviteStyle onClick={onClick}>
            <div className={'parte1'}>
                <Subtitulo>
                    {titulo}
                </Subtitulo>
                <TextoSimples>
                    {subtitulo}
                </TextoSimples>
            </div>

            <div className={'parte2'}>
                <SelectBotao>
                    {botaoTexto}
                </SelectBotao>
            </div>
        </CardConviteStyle>
    );
}

export default CardConvite;