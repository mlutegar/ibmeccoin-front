import {useEffect, useState} from "react";
import API_BASE_URL from "../../../config";
import {Container, Lista, ItemLista, Mensagem, Erro, EmptyStateContainer, EmptyStateIcon, EmptyStateTitle, EmptyStateMessage, EmptyStateSubtext} from "./Style";
import Cookies from "js-cookie";
import Botao from "../../Elementos/Botoes/Botao/Botao";
import BotaoPrimario from "../../Elementos/Botoes/BotaoPrimario/BotaoPrimario";
import CardConvite from "../../Elementos/Cards/CardConvite/CardConvite";
import InlineLoading from "../../Elementos/Loading/InlineLoading";

const ConvitesLista = () => {
    const [convites, setConvites] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchConvites = async () => {
            const csrftoken = Cookies.get('csrftoken');
            const token = localStorage.getItem("token");
            const alunoId = localStorage.getItem("alunoId"); // Obtém o ID do aluno logado

            if (!token || !alunoId) {
                setError("Usuário não autenticado ou ID do aluno não encontrado.");
                setLoading(false);
                return;
            }

            try {
                const response = await fetch(`${API_BASE_URL}/api/convites/`, {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json",
                        'X-CSRFToken': csrftoken,
                    },
                });

                if (response.ok) {
                    const data = await response.json();

                    const convitesFiltrados = data.filter(convite => convite.destinatario == alunoId);
                    setConvites(convitesFiltrados);
                } else {
                    setError("Erro ao buscar convites.");
                }
            } catch (err) {
                setError("Erro ao conectar com a API.");
            } finally {
                setLoading(false);
            }
        };

        fetchConvites();
    }, []);

    const handleAceitarConvite = async (convite) => {
        const token = localStorage.getItem("token");
        const alunoId = localStorage.getItem("alunoId"); // ID do aluno logado
        const csrftoken = Cookies.get('csrftoken');

        if (!token || !alunoId) {
            alert("Usuário não autenticado ou ID do aluno não encontrado.");
            return;
        }

        try {
            // 1️⃣ Busca os dados do grupo atual
            const grupoResponse = await fetch(`${API_BASE_URL}/api/grupos/${convite.grupo}/`, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    'X-CSRFToken': csrftoken,
                },
            });

            if (!grupoResponse.ok) {
                alert("Erro ao buscar informações do grupo.");
                return;
            }

            const grupoData = await grupoResponse.json();

            // 2️⃣ Adiciona o aluno ao grupo
            const alunosAtualizados = [...grupoData.alunos, parseInt(alunoId)];

            const updateGrupoResponse = await fetch(`${API_BASE_URL}/api/grupos/${convite.grupo}/`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                    'X-CSRFToken': csrftoken,
                },
                body: JSON.stringify({...grupoData, alunos: alunosAtualizados})
            });

            if (!updateGrupoResponse.ok) {
                alert("Erro ao adicionar aluno ao grupo.");
                return;
            }

            // 3️⃣ Apaga o convite da API
            const deleteResponse = await fetch(`${API_BASE_URL}/api/convites/${convite.id}/`, {
                method: "DELETE",
                headers: {
                    "Content-Type": "application/json",
                    'X-CSRFToken': csrftoken,
                },
            });

            if (!deleteResponse.ok) {
                alert("Erro ao excluir convite.");
                return;
            }

            setConvites(prevConvites => prevConvites.filter(c => c.id !== convite.id));

            alert("Convite aceito com sucesso!");
            window.location.reload();
        } catch (error) {
            console.error("Erro ao aceitar convite:", error);
            alert("Erro ao aceitar convite. Tente novamente.");
        }
    };

    const handleRecusarConvite = async (convite) => {
        const token = localStorage.getItem("token");
        const alunoId = localStorage.getItem("alunoId"); // ID do aluno logado
        const csrftoken = Cookies.get('csrftoken');

        if (!token || !alunoId) {
            alert("Usuário não autenticado ou ID do aluno não encontrado.");
            return;
        }

        try {
            // 3️⃣ Apaga o convite da API
            const deleteResponse = await fetch(`${API_BASE_URL}/api/convites/${convite.id}/`, {
                method: "DELETE",
                headers: {
                    "Content-Type": "application/json",
                    'X-CSRFToken': csrftoken,
                },
            });

            if (!deleteResponse.ok) {
                alert("Erro ao excluir convite.");
                return;
            }

            setConvites(prevConvites => prevConvites.filter(c => c.id !== convite.id));

            alert("Convite recusado com sucesso!");
            window.location.reload();
        } catch (error) {
            console.error("Erro ao recusar convite:", error);
            alert("Erro ao recusar convite. Tente novamente.");
        }
    }

    if (loading) return <InlineLoading message="Carregando convites..." />;
    if (error) return <Erro>{error}</Erro>;

    return (
        <Container>
            {convites.length > 0 ? (
                <>
                    {convites.map((convite) => (
                        <CardConvite
                            key={convite.id}
                            titulo={`Grupo ${convite.grupo}`}
                            subtitulo={`Convite de ${convite.remetente}`}
                            onClickSim={() => handleAceitarConvite(convite)}
                            onClickNao={() => handleRecusarConvite(convite)}
                        />
                    ))}
                </>
            ) : (
                <EmptyStateContainer>
                    <EmptyStateIcon>
                        📨
                    </EmptyStateIcon>
                    <EmptyStateTitle>Nenhum convite pendente</EmptyStateTitle>
                    <EmptyStateMessage>
                        Você não possui convites de grupos no momento.
                    </EmptyStateMessage>
                    <EmptyStateSubtext>
                        Quando alguém te convidar para um grupo, o convite aparecerá aqui.
                    </EmptyStateSubtext>
                </EmptyStateContainer>
            )}
        </Container>
    );
};

export default ConvitesLista;
