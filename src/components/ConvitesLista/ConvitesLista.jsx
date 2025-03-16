import { useEffect, useState } from "react";
import API_BASE_URL from "../../config";
import { Container, Titulo, Lista, ItemLista, Mensagem, Erro } from "./Style";

const ConvitesLista = () => {
    const [convites, setConvites] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchConvites = async () => {
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
                });

                if (response.ok) {
                    const data = await response.json();
                    // Filtra apenas convites que tenham o destinatário igual ao alunoId
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

        if (!token || !alunoId) {
            alert("Usuário não autenticado ou ID do aluno não encontrado.");
            return;
        }

        try {
            // 1️⃣ Busca os dados do grupo atual
            const grupoResponse = await fetch(`${API_BASE_URL}/api/grupos/${convite.grupo}/`, {
                method: "GET"
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
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ ...grupoData, alunos: alunosAtualizados })
            });

            if (!updateGrupoResponse.ok) {
                alert("Erro ao adicionar aluno ao grupo.");
                return;
            }

            // 3️⃣ Apaga o convite da API
            const deleteResponse = await fetch(`${API_BASE_URL}/api/convites/${convite.id}/`, {
                method: "DELETE"
            });

            if (!deleteResponse.ok) {
                alert("Erro ao excluir convite.");
                return;
            }

            // 4️⃣ Atualiza a lista de convites na interface
            setConvites(prevConvites => prevConvites.filter(c => c.id !== convite.id));

            alert("Convite aceito com sucesso!");
        } catch (error) {
            console.error("Erro ao aceitar convite:", error);
            alert("Erro ao aceitar convite. Tente novamente.");
        }
    };

    if (loading) return <Mensagem>Carregando convites...</Mensagem>;
    if (error) return <Erro>{error}</Erro>;

    return (
        <Container>
            {convites.length > 0 ? (
                <Lista>
                    {convites.map((convite) => (
                        <ItemLista key={convite.id}>
                            <strong>ID:</strong> {convite.id} <br />
                            <strong>Grupo:</strong> {convite.grupo} <br />
                            <strong>Remetente:</strong> {convite.remetente} <br />
                            <strong>Expiração:</strong> {convite.expiracao} <br />
                            <strong>Válido:</strong> {convite.valido ? "Sim" : "Não"}
                            <hr />
                            <StyleBotao onClick={() => handleAceitarConvite(convite)}>
                                Aceitar
                            </StyleBotao>
                        </ItemLista>
                    ))}
                </Lista>
            ) : (
                <Mensagem>Nenhum convite pendente.</Mensagem>
            )}
        </Container>
    );
};

export default ConvitesLista;
