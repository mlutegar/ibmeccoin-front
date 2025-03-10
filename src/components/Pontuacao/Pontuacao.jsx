import {Style} from "./Style";
import Textos from "../Textos/Textos";

const Pontuacao = ({}) => (
    <Style>
        <Textos
            texto={"Pontuação"}
            versao={2}
            tamanho={"1.25rem"}
            color={"rgba(255, 255, 255, 0.60)"}
        />
        <Textos
            texto={"200IC"}
            versao={1}
            tamanho={"4rem"}
            color={"white"}
        />
        <Textos
            texto={"Pontuação"}
            versao={2}
            tamanho={"0.9375rem"}
            color={"white"}
        />
    </Style>
)

export default Pontuacao;