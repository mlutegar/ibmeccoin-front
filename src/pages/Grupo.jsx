import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import GrupoMembros from "../components/Secoes/GrupoMembros/GrupoMembros";
import Base from "./Base";
import Titulo from "../components/Elementos/Textos/Titulo/Titulo";
import alunoTemGrupo from "../api/alunoTemGrupo";
import HeaderTitulo from "../components/HeaderTitulo/HeaderTitulo";
import PontuacaoGrupo from "../components/Secoes/PontuacaoGrupo/PontuacaoGrupo";
import pegarInformacoesGrupoPorIdUsuario from "../api/pegarInformacoesGrupoPorIdUsuario";
import pegarInformacoesUsuarioPorId from "../api/pegarInformacoesUsuarioPorId";

const Grupo = () => {
    const navigate = useNavigate();
    const alunoId = localStorage.getItem("alunoId");
    const [temGrupo, setTemGrupo] = useState(null);
    const [nomeGrupo, setNomeGrupo] = useState("");

    useEffect(() => {
        async function verificaGrupo() {
            const possuiGrupo = await alunoTemGrupo(alunoId);
            setTemGrupo(possuiGrupo);
            if (!possuiGrupo) {
                // Se o aluno não tiver grupo, redireciona para a página Convites
                navigate("/convites");
            }
        }

        async function pegarNomeGrupo() {
            let dataGrupo = await pegarInformacoesGrupoPorIdUsuario();
            if (dataGrupo && dataGrupo.nome) {
                setNomeGrupo(dataGrupo.nome);
            }
        }

        verificaGrupo();
        pegarNomeGrupo();
    }, [alunoId, navigate]);

    if (temGrupo === null) {
        // Enquanto estiver verificando, exibe uma mensagem de carregamento
        return <div>Carregando...</div>;
    }

    return (
        <Base>
            <HeaderTitulo>
                GRUPO - {nomeGrupo}
            </HeaderTitulo>
            <PontuacaoGrupo/>
            <Titulo>
                MEMBROS
            </Titulo>
            <GrupoMembros />
        </Base>
    );
};

export default Grupo;
