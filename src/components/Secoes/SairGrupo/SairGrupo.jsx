import { useState } from "react";
import API_BASE_URL from "../../../config";
import Cookies from "js-cookie";
import Botao from "../../Elementos/Botoes/Botao/Botao";

const SairGrupo = ({ grupoId, membros, onSair }) => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const alunoId = localStorage.getItem("alunoId");

    const handleSair = async () => {
        if (!grupoId || !alunoId) {
            setError("Dados insuficientes para sair do grupo.");
            return;
        }

        setLoading(true);
        setError(null);

        try {
            const token = localStorage.getItem("token");
            const csrftoken = Cookies.get("csrftoken");

            if (!token) {
                setError("Usuário não autenticado.");
                setLoading(false);
                return;
            }

            // Remove o aluno atual do array de membros
            const novosMembros = membros.filter(id => id !== Number(alunoId));

            // Atualiza o grupo removendo o aluno
            const response = await fetch(`${API_BASE_URL}/api/grupos/${grupoId}/`, {
                method: "PATCH",
                headers: {
                    "Content-Type": "application/json",
                    "X-CSRFToken": csrftoken,
                },
                body: JSON.stringify({ alunos: novosMembros })
            });

            if (response.ok) {
                // Atualiza o estado no componente pai
                onSair(novosMembros);
                window.location.reload();
            } else {
                const errorData = await response.json();
                setError("Erro ao sair do grupo: " + JSON.stringify(errorData));
            }
        } catch (err) {
            setError("Erro ao conectar com a API.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <>
            {error && <div>{error}</div>}
            <Botao onClick={handleSair} disabled={loading}>
                {loading ? "Saindo..." : "Sair do Grupo"}
            </Botao>
        </>
    );
};

export default SairGrupo;
