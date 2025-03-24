import { DoarPontosAlunoStyle } from "./Style";
import CardTemplate from "../../CardTemplate/CardTemplate";
import {Pessoa} from "../../../../../Icones/Pessoa";

const DoarPontosAluno = () => {
    return (
        <DoarPontosAlunoStyle>
            <CardTemplate
                svg={<Pessoa/>
                }
                titulo={"Pontos Grupo"}
                texto={"Doe ponto para o grupo"}
                botao={"Ir para a página"}
                href="/doar-pontos-grupo"
            />
        </DoarPontosAlunoStyle>
    );
}

export default DoarPontosAluno;