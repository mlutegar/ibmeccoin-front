import {Fundo} from "./Style";
import Textos from "../Textos/Textos";
import Botao from "../Botao/Botao";

const CardHome = ({svg, titulo, texto, botao, onClick}) => {
    return (
        <Fundo onClick={onClick}>
            <div className={"geral"}>
                <div>
                    {svg}
                </div>

                <div className={"conteudo"}>
                    <Textos
                        versao={4}
                    >
                        {titulo}
                    </Textos>
                    <Textos
                        versao={6}
                    >
                        {texto}
                    </Textos>
                </div>

            </div>
            <div>
                <Botao
                    tipo={3}
                >
                    {botao}
                </Botao>
            </div>
        </Fundo>
    );
}

export default CardHome;