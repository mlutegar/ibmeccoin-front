import {Container} from "./Style";
import CardGrupo from "../../Elementos/Cards/Aluno/CardGrupo/CardGrupo";
import CardQrCode from "../../Elementos/Cards/Aluno/CardQrCode/CardQrCode";
import CardLoja from "../../Elementos/Cards/Aluno/CardLoja/CardLoja";

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