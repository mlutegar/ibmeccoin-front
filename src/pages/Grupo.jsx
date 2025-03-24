import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import GrupoMembros from "../components/Secoes/GrupoMembros/GrupoMembros";
import Base from "./Base";
import Titulo from "../components/Elementos/Textos/Titulo/Titulo";
import alunoTemGrupo from "../api/alunoTemGrupo";

const Grupo = () => {
    const navigate = useNavigate();
    const alunoId = localStorage.getItem("alunoId");
    const [temGrupo, setTemGrupo] = useState(null);

    useEffect(() => {
        async function verificaGrupo() {
            const possuiGrupo = await alunoTemGrupo(alunoId);
            setTemGrupo(possuiGrupo);
            if (!possuiGrupo) {
                // Se o aluno não tiver grupo, redireciona para a página Convites
                navigate("/convites");
            }
        }
        verificaGrupo();
    }, [alunoId, navigate]);

    if (temGrupo === null) {
        // Enquanto estiver verificando, exibe uma mensagem de carregamento
        return <div>Carregando...</div>;
    }

    return (
        <Base>
            <Titulo>Grupo</Titulo>
            <GrupoMembros />
        </Base>
    );
};

export default Grupo;
