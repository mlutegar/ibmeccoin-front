import OpcoesHome from "../components/Secoes/OpcoesHome/OpcoesHome";
import GrupoMembros from "../components/Secoes/GrupoMembros/GrupoMembros";
import Base from "./Base";
import Titulo from "../components/Elementos/Textos/Titulo/Titulo";

const Grupo = () => {
    return (
        <Base>
            <Titulo>
                Grupo
            </Titulo>
            <GrupoMembros/>
        </Base>
    );
}

export default Grupo;