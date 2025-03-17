import { useState } from "react";
import API_BASE_URL from "../../config";
import { StyleForm, StyleInput } from "./Style";
import Botao from "../Botao/Botao";
import Cookies from "js-cookie";

const ConviteForm = () => {
    const [conviteId, setConviteId] = useState("");

    const handleConvite = async (event) => {
        event.preventDefault();
        const token = localStorage.getItem("token");
        const alunoId = localStorage.getItem("alunoId");
        const csrftoken = Cookies.get('csrftoken');

        if (!token || !alunoId || !conviteId) {
            console.error("Token, ID do aluno ou ID do convidado não encontrado.");
            return;
        }

        try {
            const response = await fetch(`${API_BASE_URL}/api/convites/`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    'X-CSRFToken': csrftoken,
                },
                body: JSON.stringify({
                    grupo: 1,
                    remetente: alunoId,
                    destinatario: parseInt(conviteId, 10)
                })
            });

            if (response.ok) {
                console.log("Convite enviado com sucesso!");
                alert("Convite enviado com sucesso!");
                setConviteId(""); // Limpa o campo após o envio
            } else {
                const errorData = await response.json();
                console.error("Erro ao enviar convite:", errorData);
                alert("Erro ao enviar convite: " + (errorData.detail || "Tente novamente."));
            }
        } catch (error) {
            console.error("Erro ao conectar com a API de convites:", error);
            alert("Erro ao conectar com o servidor.");
        }
    };

    return (
        <StyleForm onSubmit={handleConvite}>
            <StyleInput
                type="number"
                placeholder="ID do usuário"
                value={conviteId}
                onChange={(e) => setConviteId(e.target.value)}
            />
            <Botao type="submit">Enviar Convite</Botao>
        </StyleForm>
    );
};

export default ConviteForm;
