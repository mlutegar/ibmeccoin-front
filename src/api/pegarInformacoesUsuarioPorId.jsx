import API_BASE_URL from "../config";
import Cookies from "js-cookie";

const alunoId = localStorage.getItem('alunoId');

const pegarInformacoesUsuarioPorId = async (id=alunoId) => {
    const token = localStorage.getItem("token");
    const csrftoken = Cookies.get("csrftoken");

    if (!token || !id) {
        return false;
    }

    try {
        const response = await fetch(`${API_BASE_URL}/api/alunos/${id}`, {
            method: 'GET',
            headers: {
                "Content-Type": "application/json",
                "X-CSRFToken": csrftoken,
            },
        });

        if (!response.ok) {
            console.error("Erro ao buscar grupos:", await response.json());
            return false;
        }

        const aluno = await response.json();
        return await aluno;
    } catch (error) {
        console.error("Erro ao conectar com a API:", error);
        return "";
    }
}

export default pegarInformacoesUsuarioPorId;