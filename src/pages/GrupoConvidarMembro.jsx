import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Base from "./Base";
import alunoTemGrupo from "../api/alunoTemGrupo";
import HeaderTitulo from "../components/HeaderTitulo/HeaderTitulo";
import ConviteForm from "../components/Secoes/ConviteForm/ConviteForm";
import InputPuro from "../components/Elementos/InputPuro/InputPuro";
import pegarTodosAlunos from "../api/pegarTodosAlunos";
import CardAluno from "../components/Elementos/Cards/CardAluno/CardAluno";
import CardAlunoEnviarConvite from "../components/Elementos/Cards/CardAlunoEnviarConvite/CardAlunoEnviarConvite";
import realizarConvite from "../api/realizarConvite";
import pegarInformacoesGrupoPorIdUsuario from "../api/pegarInformacoesGrupoPorIdUsuario";


const GrupoConvidarMembro = () => {
    const navigate = useNavigate();
    const [alunos, setAlunos] = useState([]);
    const alunoId = localStorage.getItem("alunoId");
    const [searchTerm, setSearchTerm] = useState("");
    const [temGrupo, setTemGrupo] = useState(null);
    const [grupoId, setGrupoId] = useState(null);

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

    useEffect(() => {
        async function verificaGrupoId() {
            let grupoInfo = await pegarInformacoesGrupoPorIdUsuario(alunoId);
            if (!grupoInfo) {
                return;
            }
            setGrupoId(grupoInfo.id);
        }

        verificaGrupoId();
    }, []);

    useEffect(() => {
        async function pegarTodosAlunosAgora() {
            let alunos = await pegarTodosAlunos();
            if (!alunos) {
                return;
            }
            setAlunos(alunos);
        }

        pegarTodosAlunosAgora();
    }, []);

    const handleConvite = async (destinatarioId, grupoId) => {
        window.alert("Convite enviado com sucesso!");
        realizarConvite(destinatarioId, grupoId)
    }

    if (temGrupo === null) {
       return <div>Carregando...</div>;
    }

    const filteredAlunos = alunos.filter(aluno =>
        aluno.first_name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <Base>
            <HeaderTitulo>
                CONVIDAR MEMBRO
            </HeaderTitulo>
            <InputPuro
                placeholder={"pesquisar nome aluno"}
                value={searchTerm}
                type={"text"}
                onChange={(e) => setSearchTerm(e.target.value)}
            />
            {filteredAlunos.length ? (
                filteredAlunos.map(aluno => (
                    <CardAlunoEnviarConvite key={aluno.id} aluno={aluno} onClick={() => handleConvite(aluno.id, grupoId)} />
                ))
            ) : (
                <p>Nenhum aluno cadastrado.</p>
            )}
            <ConviteForm/>
        </Base>
    );
};

export default GrupoConvidarMembro;
