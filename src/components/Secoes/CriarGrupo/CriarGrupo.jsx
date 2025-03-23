import { useState } from "react";
import API_BASE_URL from "../../../config";
import Cookies from "js-cookie";
import { Container, Title, Form, Input, Button, Message } from "./Style"; // Ajuste os componentes de estilo conforme necessário

const CriarGrupo = () => {
    const [nome, setNome] = useState("");
    const [message, setMessage] = useState(null);
    const [error, setError] = useState(null);

    const alunoId = localStorage.getItem("alunoId");

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!nome) {
            setError("Preencha todos os campos.");
            return;
        }

        const payload = {
            nome,
            limite_aluno: 5,
            saldo: 0,     // O saldo inicia com 0
            turma: 1,     // A turma é sempre 1
            alunos: [Number(alunoId)]  // Adiciona o aluno que criou o grupo
        };

        try {
            const token = localStorage.getItem("token");
            const csrftoken = Cookies.get('csrftoken');

            if (!token || !alunoId) {
                setError("Usuário não autenticado ou aluno não identificado.");
                return;
            }

            const response = await fetch(`${API_BASE_URL}/api/grupos/`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    'X-CSRFToken': csrftoken,
                },
                body: JSON.stringify(payload)
            });

            if (response.ok) {
                const data = await response.json();
                setMessage("Grupo criado com sucesso!");
                setError(null);
                setNome("");
                window.location.reload();
            } else {
                const errorData = await response.json();
                setError("Erro ao criar grupo: " + JSON.stringify(errorData));
            }
        } catch (err) {
            setError("Erro ao conectar com a API.");
        }
    };

    return (
        <Container>
            <Title>Criar Grupo</Title>
            {error && <Message>{error}</Message>}
            {message && <Message>{message}</Message>}
            <Form onSubmit={handleSubmit}>
                <label>
                    Nome:
                    <Input
                        type="text"
                        value={nome}
                        onChange={(e) => setNome(e.target.value)}
                        required
                        minLength={1}
                        maxLength={50}
                    />
                </label>
                <Button type="submit">Criar Grupo</Button>
            </Form>
        </Container>
    );
};

export default CriarGrupo;
