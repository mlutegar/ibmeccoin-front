import Cookies from "js-cookie";
import API_BASE_URL from "../config";

const alunoId = localStorage.getItem("alunoId");

const realizarConvite = async (destinatarioId, grupoId)=> {
    const token = localStorage.getItem("token");
    const csrftoken = Cookies.get("csrftoken");

    if (!token) {
        return false;
    }

    try {
        const response = await fetch(`${API_BASE_URL}/api/convites/`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "X-CSRFToken": csrftoken,
            },
            body: JSON.stringify({
                grupo: grupoId,
                remetente: alunoId,
                destinatario: parseInt(destinatarioId, 10)
            })
        });

        if (!response.ok) {
            console.error("Erro ao enviar convite:", await response.json());
            return false;
        }

        const data = await response.json();
        if (data.detail) {
            alert("Convite enviado com sucesso!");
        }
        return true;
    } catch (error) {
        console.error("Erro ao conectar com a API:", error);
        return "";
    }
}

export default realizarConvite;