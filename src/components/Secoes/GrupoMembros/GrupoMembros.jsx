import {useEffect, useState} from "react";
import API_BASE_URL from "../../../config";
import {Container, Title, List, ListItem, Message} from "./Style";
import ConviteForm from "../ConviteForm/ConviteForm";
import ConvitesLista from "../ConvitesLista/ConvitesLista";
import Cookies from "js-cookie";
import CriarGrupo from "../CriarGrupo/CriarGrupo";
import SairGrupo from "../SairGrupo/SairGrupo";

const GrupoMembros = () => {
    const [membros, setMembros] = useState([]);
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

    if (loading) return <Message>Carregando informações do grupo...</Message>;

    return (
        <Container>
            {error ? (
                <>
                    <Message>{error}</Message>
                    <CriarGrupo/>
                </>
            ) : (
                <>
                    <Title>Membros do Grupo {grupoId}</Title>
                    {membros.length > 0 ? (
                        <List>
                            {membros.map((id) => (
                                <ListItem key={id}>Aluno ID: {id}</ListItem>
                            ))}
                        </List>
                    ) : (
                        <Message>Este grupo ainda não possui membros.</Message>
                    )}
                    {/* Botão para sair do grupo */}
                    <ConviteForm/>
                    <SairGrupo grupoId={grupoId} membros={membros} onSair={setMembros} />
                </>
            )}
        </Container>
    );

};

export default GrupoMembros;
