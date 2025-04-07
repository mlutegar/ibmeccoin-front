import {useEffect, useState} from "react";
import Base from "./Base";
import { useLocation, useNavigate } from "react-router-dom";
import Titulo from "../components/Elementos/Textos/Titulo/Titulo";
import InputPuro from "../components/Elementos/InputPuro/InputPuro";
import BotaoPrimario from "../components/Elementos/Botoes/BotaoPrimario/BotaoPrimario";
import SubtituloInvertido from "../components/Elementos/Textos/SubtituloInvertido/SubtituloInvertido";
import Cookies from "js-cookie";
import API_BASE_URL from "../config";
import getSaldoAluno from "../api/getSaldoAluno";

const Doar = () => {
    const [doacoes, setDoacoes] = useState({});
    const [saldo, setSaldo] = useState(null);
    const location = useLocation();
    const { aluno } = location.state || {};
    const navigate = useNavigate();

    useEffect(() => {
        if (!aluno) {
            navigate("/doar-pontos-aluno"); // Redireciona se não houver aluno no state
        }
    }, [aluno, navigate]);

    // Busca o saldo (IC) do aluno
    useEffect(() => {
        if (aluno) {
            async function fetchSaldo() {
                const saldoObtido = await getSaldoAluno(aluno.id);
                setSaldo(saldoObtido);
            }
            fetchSaldo();
        }
    }, [aluno]);

    const handleDoarPontos = async (alunoId) => {
        const token = localStorage.getItem("token");
        const csrftoken = Cookies.get("csrftoken");

        if (!token) {
            alert("Usuário não autenticado.");
            return;
        }
        const quantidade = doacoes[alunoId];
        if (!quantidade || isNaN(quantidade) || Number(quantidade) <= 0) {
            alert("Insira uma quantidade válida de pontos.");
            return;
        }
        try {
            const response = await fetch(`${API_BASE_URL}/api/movimentacoes/`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "X-CSRFToken": csrftoken,
                },
                body: JSON.stringify({
                    valor: Number(quantidade),
                    tipo: "C", // 'C' para crédito (doação)
                    aluno: alunoId,
                    turma: 2 // Ajuste conforme necessário
                })
            });
            if (response.ok) {
                alert("Pontos doados com sucesso!");
                setDoacoes((prev) => ({ ...prev, [alunoId]: "" })); // Limpa o input

                // Atualiza o saldo após a doação
                const saldoAtualizado = await getSaldoAluno(aluno.id);
                setSaldo(saldoAtualizado);
            } else {
                const data = await response.json();
                console.error("Erro ao doar pontos:", data);
                alert("Erro ao doar pontos.");
            }
        } catch (error) {
            console.error("Erro de conexão:", error);
            alert("Erro ao conectar com a API.");
        }
    };

    useEffect(() => {
        const token = localStorage.getItem("token");
        if (!token) {
            navigate("/login");
        }
    }, [navigate]);

    return (
        <Base>
            <Titulo>Doar pontos</Titulo>

            <div
                style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "2rem",
                    alignItems: "center",
                    marginTop: "1rem",
                }}
            >
                <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                    <SubtituloInvertido>
                        {aluno ? aluno.first_name : "Nome do Aluno"}
                    </SubtituloInvertido>

                    <SubtituloInvertido>
                        Saldo: {saldo !== null ? `${saldo} IC` : "Carregando saldo..."}
                    </SubtituloInvertido>
                </div>

                <InputPuro
                    placeholder={"Quantidade IC"}
                    value={doacoes[aluno?.id] || ""}
                    type={"number"}
                    onChange={(e) =>
                        setDoacoes((prev) => ({ ...prev, [aluno?.id]: e.target.value }))
                    }
                />

                <BotaoPrimario type={"submit"} onClick={() => handleDoarPontos(aluno?.id)}>
                    Enviar
                </BotaoPrimario>
            </div>
        </Base>
    );
};

export default Doar;