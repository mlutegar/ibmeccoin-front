import GrupoMembros from "../components/Secoes/GrupoMembros/GrupoMembros";
import Base from "./Base";
import Titulo from "../components/Elementos/Textos/Titulo/Titulo";
import SubtituloInvertido from "../components/Elementos/Textos/SubtituloInvertido/SubtituloInvertido";
import InputPuro from "../components/Elementos/InputPuro/InputPuro";
import BotaoPrimario from "../components/Elementos/Botoes/BotaoPrimario/BotaoPrimario";
import ConvitesLista from "../components/Secoes/ConvitesLista/ConvitesLista";

const Convites = () => {
    return (
        <Base>
            <Titulo>
                Convites
            </Titulo>

            <ConvitesLista/>

            <div style={{display: "flex", flexDirection: "column", gap: "2rem"}}>
                <div style={{textAlign: "center"}}>
                    <SubtituloInvertido>
                        Nome Grupo
                    </SubtituloInvertido>
                    <InputPuro
                        texto="Digite o nome do grupo"
                        value={""}
                        type={"text"}
                        onChange={() => {
                        }}
                    />
                </div>
                <BotaoPrimario
                    type={"button"}
                    onClick={() => {
                    }}
                >
                    Criar Grupo
                </BotaoPrimario>
            </div>
        </Base>
    );
}

export default Convites;