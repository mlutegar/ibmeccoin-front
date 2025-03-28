import { DoarPontosAlunoStyle } from "./Style";
import CardTemplate from "../../CardTemplate/CardTemplate";
import {Pessoa} from "../../../../../Icones/Pessoa";

const DoarPontosAluno = () => {
    return (
        <DoarPontosAlunoStyle>
            <CardTemplate
                svg={<Pessoa/>
                }
                titulo={"DOAR PONTOS"}
                texto={"Doe pontos para grupos ou pessoal"}
                botao={"Ir para a tela de doação"}
                href="/doar-pontos-grupo"
            />
        </DoarPontosAlunoStyle>
    );
}

export default DoarPontosAluno;