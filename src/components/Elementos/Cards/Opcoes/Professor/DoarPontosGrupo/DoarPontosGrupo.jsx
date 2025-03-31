import {DoarPontosGrupoStyle} from "./Style";
import CardTemplate from "../../CardTemplate/CardTemplate";
import {Pessoa} from "../../../../../Icones/Pessoa";
import {useNavigate} from "react-router-dom";

const DoarPontosGrupo = () => {
    const navigate = useNavigate();

    const handleHref = () => {
        navigate("/doar-pontos-grupo");
    }

    return (
        <DoarPontosGrupoStyle>
            <CardTemplate
                svg={<Pessoa/>}
                titulo={"Pontos Aluno"}
                texto={"Doe ponto para o aluno"}
                botao={"Ir para a página"}
                onClick={handleHref}
            />
        </DoarPontosGrupoStyle>
    );
}

export default DoarPontosGrupo;