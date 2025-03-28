import {OpcoesHomeProfessorStyle} from "./Style";
import CardLoja from "../../Elementos/Cards/Opcoes/Aluno/CardLoja/CardLoja";
import CardQrCodeProfessor from "../../Elementos/Cards/Opcoes/Professor/CardQrCodeProfessor/CardQrCodeProfessor";
import DoarPontosAluno from "../../Elementos/Cards/Opcoes/Professor/DoarPontosAluno/DoarPontosAluno";
import DoarPontosGrupo from "../../Elementos/Cards/Opcoes/Professor/DoarPontosGrupo/DoarPontosGrupo";

const OpcoesHomeProfessor = () => {
    return (
        <OpcoesHomeProfessorStyle>
            <CardQrCodeProfessor/>
            <DoarPontosAluno/>
            {/*<DoarPontosGrupo/>*/}
            <CardLoja/>
        </OpcoesHomeProfessorStyle>
    )
}

export default OpcoesHomeProfessor;