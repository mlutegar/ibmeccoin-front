import {DoarPontosGrupoStyle} from "./Style";
import CardTemplate from "../../CardTemplate/CardTemplate";
import {Pessoa} from "../../../../../Icones/Pessoa";

const DoarPontosGrupo = () => {
    return (
        <DoarPontosGrupoStyle>
            <CardTemplate
                svg={<Pessoa/>}
                titulo={"Pontos Aluno"}
                texto={"Doe ponto para o aluno"}
                botao={"Ir para a página"}
                href="/doar-pontos-aluno"
            />
        </DoarPontosGrupoStyle>
    );
}

export default DoarPontosGrupo;