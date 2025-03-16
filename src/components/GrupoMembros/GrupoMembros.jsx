// GrupoMembros.jsx
import { useEffect, useState } from "react";
import API_BASE_URL from "../../config";
import { Container, Title, List, ListItem, Message } from "./Style";
import ConviteForm from "../ConviteForm/ConviteForm";
import ConvitesLista from "../ConvitesLista/ConvitesLista";

const GrupoMembros = ({ grupoId }) => {
    const [membros, setMembros] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchMembros = async () => {
            const token = localStorage.getItem("token");

            if (!token || !grupoId) {
                setError("Usuário não autenticado ou grupo não especificado.");
                setLoading(false);
                return;
            }

            try {
                const response = await fetch(`${API_BASE_URL}/api/grupos/${grupoId}/`, {
                    method: "GET",
                });

                if (response.ok) {
                    const grupoData = await response.json();
                    setMembros(grupoData.alunos); // Lista de IDs dos alunos no grupo
                } else {
                    setError("Erro ao buscar membros do grupo.");
                }
            } catch (err) {
                setError("Erro ao conectar com a API.");
            } finally {
                setLoading(false);
            }
        };

        fetchMembros();
    }, [grupoId]);

    if (loading) return <Message>Carregando membros...</Message>;
    if (error) return <Message>{error}</Message>;

    return (
        <Container>
            <Title>Membros do Grupo {grupoId}</Title>
            {membros.length > 0 ? (
                <List>
                    {membros.map((alunoId) => (
                        <ListItem key={alunoId}>Aluno ID: {alunoId}</ListItem>
                    ))}
                </List>
            ) : (
                <Message>Este grupo ainda não possui membros.</Message>
            )}

            <ConviteForm />
            <ConvitesLista />
        </Container>
    );
};

export default GrupoMembros;
