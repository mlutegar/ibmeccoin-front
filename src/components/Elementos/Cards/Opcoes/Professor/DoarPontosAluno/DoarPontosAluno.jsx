import { DoarPontosAlunoStyle } from "./Style";
import CardTemplate from "../../CardTemplate/CardTemplate";
import {Pessoa} from "../../../../../Icones/Pessoa";
import {useNavigate} from "react-router-dom";

const DoarPontosAluno = () => {
    const navigate = useNavigate();

    const handleHref = () => {
        navigate("/doar-pontos-grupo");
    }

    return (
        <DoarPontosAlunoStyle>
            <CardTemplate
                svg={<Pessoa/>
                }
                titulo={"DOAR PONTOS"}
                texto={"Doe pontos para grupos ou pessoal"}
                botao={"Ir para a tela de doação"}
                onClick={handleHref}
            />
        </DoarPontosAlunoStyle>
    );
}

export default DoarPontosAluno;