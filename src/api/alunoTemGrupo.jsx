import Cookies from "js-cookie";
import API_BASE_URL from "../config";

async function alunoTemGrupo(alunoId) {
    const token = localStorage.getItem("token");
    const csrftoken = Cookies.get("csrftoken");

    if (!token || !alunoId) {
        // Se não estiver autenticado ou não tiver id, retorna false
        return false;
    }

    try {
        const response = await fetch(`${API_BASE_URL}/api/grupos/`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "X-CSRFToken": csrftoken,
            },
        });

        if (!response.ok) {
            console.error("Erro ao buscar grupos:", await response.json());
            return false;
        }

        const grupos = await response.json();

        // Verifica se existe algum grupo que contenha o aluno
        const grupoUsuario = grupos.find(
            (grupo) =>
                grupo.alunos &&
                grupo.alunos.includes(Number(alunoId))
        );

        return Boolean(grupoUsuario);
    } catch (error) {
        console.error("Erro ao conectar com a API:", error);
        return false;
    }
}

export default alunoTemGrupo;
