import OpcoesHome from "../components/OpcoesHome/OpcoesHome";
import GrupoMembros from "../components/GrupoMembros/GrupoMembros";
import Base from "./Base";
import Titulo from "../components/Textos/Titulo/Titulo";

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