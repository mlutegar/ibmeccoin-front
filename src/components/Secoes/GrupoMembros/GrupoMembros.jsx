import {useEffect, useState} from "react";
import API_BASE_URL from "../../../config";
import {GrupoMembrosStyle, List, Message} from "./Style";
import Cookies from "js-cookie";
import CriarGrupo from "../CriarGrupo/CriarGrupo";
import SairGrupo from "../SairGrupo/SairGrupo";
import ContainerMembros from "../../ContainerMembros/ContainerMembros";
import BotaoPrimario from "../../Elementos/Botoes/BotaoPrimario/BotaoPrimario";
import pegarInformacoesUsuarioPorId from "../../../api/pegarInformacoesUsuarioPorId";
import {useNavigate} from "react-router-dom";

const GrupoMembros = () => {
    const navigate = useNavigate();

    const [membros, setMembros] = useState([]);
    const [membrosNomes, setMembrosNomes] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [grupoId, setGrupoId] = useState(null);
    const alunoId = localStorage.getItem("alunoId");

    useEffect(() => {
        const fetchGrupoDoUsuario = async () => {
            const token = localStorage.getItem("token");
            const csrftoken = Cookies.get('csrftoken');

            if (!token || !alunoId) {
                setError("Usuário não autenticado ou aluno não identificado.");
                setLoading(false);
                return;
            }

            try {
                // Busca todos os grupos
                const response = await fetch(`${API_BASE_URL}/api/grupos/`, {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json",
                        'X-CSRFToken': csrftoken,
                    },
                });

                if (response.ok) {
                    const grupos = await response.json();

                    // Procura o grupo que contenha o aluno logado (convertendo alunoId para número, se necessário)
                    const grupoUsuario = grupos.find(
                        grupo => grupo.alunos && grupo.alunos.includes(Number(alunoId))
                    );

                    if (grupoUsuario) {
                        setGrupoId(grupoUsuario.id);
                        setMembros(grupoUsuario.alunos);
                    } else {
                        setError("Usuário não possui grupo.");
                    }
                } else {
                    setError("Erro ao buscar grupos.");
                }
            } catch (err) {
                setError("Erro ao conectar com a API.");
            } finally {
                setLoading(false);
            }
        };

        fetchGrupoDoUsuario();
    }, [alunoId]);

    useEffect(() => {
        const atualizarMembrosTrocandoIdPorNome = async (membros) => {
            const membrosComNomes = await Promise.all(
                membros.map(async (id) => {
                    const aluno = await pegarInformacoesUsuarioPorId(id);
                    return aluno ? aluno.first_name : id;
                })
            );
            return membrosComNomes;
        }

        const atualizarMembros = async () => {
            if (membros.length > 0) {
                const membrosComNomes = await atualizarMembrosTrocandoIdPorNome(membros);
                setMembrosNomes(membrosComNomes);
            }
        };

        atualizarMembros();
    }, [membros]);

    const handleCliqueConvidarMembro = () => {
        if (grupoId) {
            navigate("/grupo-mandar-convite", { state: { grupoId } });
        } else {
            setError("Grupo não encontrado.");
        }
    }

    if (loading) return <Message>Carregando informações do grupo...</Message>;

    return (
        <GrupoMembrosStyle>
            {error ? (
                <>
                    <Message>{error}</Message>
                    <CriarGrupo/>
                </>
            ) : (
                <>
                    <ContainerMembros
                        membrosNomes={membrosNomes.map((id) => `${id}`)}
                    />

                    <BotaoPrimario onClick={handleCliqueConvidarMembro}>Convidar membro</BotaoPrimario>
                    <SairGrupo grupoId={grupoId} membros={membros} onSair={setMembros} />
                </>
            )}
        </GrupoMembrosStyle>
    );

};

export default GrupoMembros;
