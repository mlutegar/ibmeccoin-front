import OpcoesHome from "../components/OpcoesHome/OpcoesHome";
import GrupoMembros from "../components/GrupoMembros/GrupoMembros";
import Base from "./Base";
import Textos from "../components/Textos/Textos";

const Grupo = () => {
    return (
        <Base>
            <Textos
                versao={3}
            >
                Grupo
            </Textos>
            <GrupoMembros/>
        </Base>
    );
}

export default Grupo;