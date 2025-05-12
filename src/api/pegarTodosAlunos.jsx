import Cookies from "js-cookie";
import API_BASE_URL from "../config";

const pegarTodosAlunos = async () => {
    const token = localStorage.getItem("token");
    const csrftoken = Cookies.get("csrftoken");

    if (!token) {
        return false;
    }

    try {
        const response = await fetch(`${API_BASE_URL}/api/alunos/`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "X-CSRFToken": csrftoken,
            },
        });

        if (!response.ok) {
            console.error("Erro ao buscar alunos:", await response.json());
            return false;
        }

        const alunos = await response.json();
        return await alunos;
    } catch (error) {
        console.error("Erro ao conectar com a API:", error);
        return "";
    }
}

export default pegarTodosAlunos;
