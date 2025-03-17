import { useEffect, useState } from "react";
import Base from "./Base";
import API_BASE_URL from "../config";
import { useNavigate } from "react-router-dom";
import QrCode from "../components/QrCode/QrCode";
import Cookies from "js-cookie";

const HomeProfessor = () => {
    const navigate = useNavigate();
    const [alunos, setAlunos] = useState([]);
    const [doacoes, setDoacoes] = useState({});

    useEffect(() => {
        const token = localStorage.getItem("token");
        if (!token) {
            navigate("/login");
        }
    }, [navigate]);

    useEffect(() => {
        async function fetchAlunos() {
            const csrftoken = Cookies.get('csrftoken');

            try {
                const response = await fetch(`${API_BASE_URL}/api/alunos/`, {
                    method: "GET",
                    headers: {
                        "accept": "application/json",
                        'X-CSRFToken': csrftoken,
                    }
                });
                if (response.ok) {
                    const data = await response.json();
                    setAlunos(data);
                } else {
                    console.error("Erro ao buscar alunos:", await response.json());
                }
            } catch (error) {
                console.error("Erro ao conectar com a API de alunos:", error);
            }
        }
        fetchAlunos();
    }, []);

    const handleDoarPontos = async (alunoId) => {
        const token = localStorage.getItem("token");
        const csrftoken = Cookies.get('csrftoken');

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
                    'X-CSRFToken': csrftoken,
                },
                body: JSON.stringify({
                    valor: Number(quantidade),
                    tipo: "C",       // 'C' para crédito (doação)
                    aluno: alunoId,
                    turma: 1         // Ajuste conforme necessário
                })
            });
            if (response.ok) {
                alert("Pontos doados com sucesso!");
                setDoacoes(prev => ({ ...prev, [alunoId]: '' }));  // Limpa o input
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

    return (
        <Base>
            {/* Componente de QR Code com lógica interna */}
            <QrCode />

            {/* Lista de alunos cadastrados */}
            <section>
                <h2>Alunos Cadastrados</h2>
                {alunos.length ? alunos.map(aluno => (
                    <div key={aluno.id}>
                        <p>{aluno.first_name} {aluno.last_name}</p>
                        <p>{aluno.username}</p>
                        <input
                            type="number"
                            placeholder="Quantidade de pontos"
                            value={doacoes[aluno.id] || ''}
                            onChange={(e) => setDoacoes(prev => ({ ...prev, [aluno.id]: e.target.value }))}
                        />
                        <button onClick={() => handleDoarPontos(aluno.id)}>Doar pontos</button>
                    </div>
                )) : <p>Nenhum aluno cadastrado.</p>}
            </section>

            <button onClick={() => navigate("/logout")}>Sair</button>
        </Base>
    );
};

export default HomeProfessor;
