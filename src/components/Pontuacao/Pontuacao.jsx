import {Style} from "./Style";
import Textos from "../Textos/Textos";
import React, {useEffect, useState} from "react";
import API_BASE_URL from "../../config";

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
                        try {
                                const response = await fetch(`${API_BASE_URL}/api/movimentacoes/`, {
                                        method: "GET",
                                        headers: {
                                                "Content-Type": "application/json"
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
                    <Textos
                        versao={2}
                        tamanho={"1.25rem"}
                        color={"rgba(255, 255, 255, 0.60)"}
                    >
                            Pontuação
                    </Textos>
                    <Textos
                        versao={1}
                        tamanho={"4rem"}
                        color={"white"}
                    >
                            {`${saldo}IC`}
                    </Textos>
                    <Textos
                        versao={2}
                        tamanho={"0.9375rem"}
                        color={"white"}
                    >
                            {turma}
                    </Textos>
            </Style>
        )
}

export default Pontuacao;