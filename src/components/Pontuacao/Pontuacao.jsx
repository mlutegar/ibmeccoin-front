import {Style} from "./Style";
import React, {useEffect, useState} from "react";
import API_BASE_URL from "../../config";
import Cookies from "js-cookie";

const Pontuacao = ({turma}) => {
    const [saldo, setSaldo] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const token = localStorage.getItem("token");
        const alunoId = localStorage.getItem("alunoId");

        if (!token || !alunoId) {
            setError("Usuário não autenticado ou ID do aluno não encontrado.");
            setLoading(false);
            return;
        }

        const fetchMovimentacoes = async () => {
            const csrftoken = Cookies.get('csrftoken');
            try {
                const response = await fetch(`${API_BASE_URL}/api/movimentacoes/`, {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json",
                        'X-CSRFToken': csrftoken,
                    }
                });

                if (!response.ok) {
                    const errorData = await response.json();
                    throw new Error(errorData.detail || "Erro ao buscar movimentações");
                }

                const data = await response.json();

                // Filtra as movimentações do aluno com base no ID armazenado
                const movimentacoesAluno = data.filter(
                    (item) => item.aluno === parseInt(alunoId)
                );

                // Calcula o saldo: se for crédito ("C") soma o valor; se for débito ("D") subtrai o valor
                const computedSaldo = movimentacoesAluno.reduce((acc, mov) => {
                    return mov.tipo === "C" ? acc + mov.valor : acc - mov.valor;
                }, 0);

                setSaldo(computedSaldo);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchMovimentacoes();
    }, []);

    if (loading) {
        return <div>Carregando saldo...</div>;
    }

    if (error) {
        return <div>Erro: {error}</div>;
    }

    return (
        <Style>
            <div className={"texto"}>
                <div className={"texto1"}>
                    Pontuação
                </div>
                <div className={"texto2"}>
                    {`${saldo}`}
                </div>
                <div className={"texto3"}>
                    IC
                </div>
            </div>
        </Style>
    )
}

export default Pontuacao;