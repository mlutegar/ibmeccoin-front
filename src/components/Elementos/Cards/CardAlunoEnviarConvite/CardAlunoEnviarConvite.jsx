import { CardAlunoEnviarConviteStyle } from "./Style";
import CardInfo from "../CardInfo/CardInfo";

const CardAlunoEnviarConvite = ({ aluno, onClick }) => {
    return (
        <CardAlunoEnviarConviteStyle>
            <CardInfo
                key={aluno.id}
                titulo={aluno.first_name}
                subtitulo={aluno.username}
                botaoTexto={"Convidar"}
                onClick={onClick}
                className={"card"}
            />
        </CardAlunoEnviarConviteStyle>
    );
};

export default CardAlunoEnviarConvite;