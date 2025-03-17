import { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Cookies from "js-cookie";

const TokenHandler = () => {
    const { tokenId } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        const ultimaUtilizacao = localStorage.getItem("ultimoQrCode");
        const hoje = new Date().toISOString().slice(0, 10);

        if (ultimaUtilizacao === hoje) {
            alert("Você já utilizou um QR Code hoje.");
            navigate("/");
            return;
        }

        const processToken = async () => {
            const alunoId = localStorage.getItem("alunoId");
            const csrftoken = Cookies.get('csrftoken');

            try {
                const tokenResponse = await fetch(`${API_BASE_URL}/api/tokens/${tokenId}`, {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json",
                        'X-CSRFToken': csrftoken,
                    }
                });

                if (!tokenResponse.ok) {
                    console.error("Token inválido ou não encontrado");
                    return;
                }

                const tokenData = await tokenResponse.json();
                const valorCredito = tokenData.quantidade_ic;
                console.log("Valor de crédito:", valorCredito);

                const movimentacaoResponse = await fetch(`${API_BASE_URL}/api/movimentacoes/`, {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                        'X-CSRFToken': csrftoken,
                    },
                    body: JSON.stringify({
                        valor: valorCredito,
                        tipo: "C",          // 'C' para crédito
                        aluno: alunoId/* id do aluno autenticado */,
                        turma: 1/* id da turma correspondente */
                    })
                });

                if (movimentacaoResponse.ok) {
                    alert("Saldo creditado com sucesso!");
                    navigate("/");
                } else {
                    const errorData = await movimentacaoResponse.json();
                    console.error("Erro ao creditar saldo:", errorData);
                    alert("Erro ao creditar saldo.");
                }
            } catch (error) {
                console.error("Erro na requisição:", error);
                alert("Erro na conexão com a API.");
            }
        };

        processToken();
        localStorage.setItem("ultimoQrCode", hoje);
    }, []);

    return <p>Processando o token...</p>;
};

export default TokenHandler;
