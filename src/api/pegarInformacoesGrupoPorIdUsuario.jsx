import API_BASE_URL from "../config";
import Cookies from "js-cookie";
const idUsuario = localStorage.getItem('alunoId');

// {id: 5, nome: 'as', limite_aluno: 5, saldo: 0, turma: 2, …}

const pegarInformacoesGrupoPorIdUsuario = async () => {
    const token = localStorage.getItem("token");
    const csrftoken = Cookies.get("csrftoken");

    if (!token || !idUsuario) {
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

        return grupos.find(
            (grupo) =>
                grupo.alunos &&
                grupo.alunos.includes(Number(idUsuario))
        );
    } catch (error) {
        console.error("Erro ao conectar com a API:", error);
        return "";
    }
}

export default pegarInformacoesGrupoPorIdUsuario;
