import { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import API_BASE_URL from "../config";

const TokenHandler = () => {
    const { tokenId } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        const hoje = new Date().toISOString().slice(0, 10);

        const processToken = async () => {
            const csrftoken = Cookies.get('csrftoken');

            try {
                // Chama o endpoint de processamento do token
                const response = await fetch(`${API_BASE_URL}/api/processar-token/${tokenId}/`, {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                        'X-CSRFToken': csrftoken,
                    },
                    body: JSON.stringify({
                        turma_id: 1  // Você pode ajustar esse valor conforme sua lógica
                    })
                });

                if (response.ok) {
                    alert("Saldo creditado com sucesso!");
                    navigate("/");
                } else {
                    const errorData = await response.json();
                    console.error("Erro ao processar token:", errorData);
                    alert(errorData.erro || "Erro ao processar token.");
                }
            } catch (error) {
                console.error("Erro na requisição:", error);
                alert("Erro na conexão com a API.");
            }
        };

        processToken();
        localStorage.setItem("ultimoQrCode", hoje);
    }, [navigate, tokenId]);

    return <p>Processando o token...</p>;
};

export default TokenHandler;
