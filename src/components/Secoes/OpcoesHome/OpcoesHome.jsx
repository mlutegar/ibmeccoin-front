import {Container} from "./Style";
import CardGrupo from "../../Elementos/Cards/Opcoes/Aluno/CardGrupo/CardGrupo";
import CardQrCode from "../../Elementos/Cards/Opcoes/Aluno/CardQrCode/CardQrCode";
import CardLoja from "../../Elementos/Cards/Opcoes/Aluno/CardLoja/CardLoja";

const OpcoesHome = () => {
    return (
        <Container>
            <CardQrCode/>
            <CardGrupo/>
            <CardLoja/>
        </Container>
    )
}

export default OpcoesHome;