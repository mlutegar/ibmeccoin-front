import {OpcoesHomeProfessorStyle} from "./Style";
import CardGrupo from "../../Elementos/Cards/Aluno/CardGrupo/CardGrupo";
import CardQrCode from "../../Elementos/Cards/Aluno/CardQrCode/CardQrCode";
import CardLoja from "../../Elementos/Cards/Aluno/CardLoja/CardLoja";
import CardQrCodeProfessor from "../../Elementos/Cards/Professor/CardQrCodeProfessor/CardQrCodeProfessor";
import DoarPontosAluno from "../../Elementos/Cards/Professor/DoarPontosAluno/DoarPontosAluno";
import DoarPontosGrupo from "../../Elementos/Cards/Professor/DoarPontosGrupo/DoarPontosGrupo";

const OpcoesHomeProfessor = () => {
    return (
        <OpcoesHomeProfessorStyle>
            <CardQrCodeProfessor/>
            <DoarPontosAluno/>
            <DoarPontosGrupo/>
            <CardLoja/>
        </OpcoesHomeProfessorStyle>
    )
}

export default OpcoesHomeProfessor;