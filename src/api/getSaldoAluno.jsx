import Cookies from "js-cookie";
import API_BASE_URL from "../config";

async function getSaldoAluno(alunoId) {
    const csrftoken = Cookies.get('csrftoken');

    try {
        const response = await fetch(`${API_BASE_URL}/api/movimentacoes/`, {
            method: "GET",
            headers: {
                "Accept": "application/json",
                "X-CSRFToken": csrftoken,
            },
        });

        if (!response.ok) {
            const errorData = await response.json();
            console.error("Erro ao buscar movimentações:", errorData);
            return null;
        }

        const movimentacoes = await response.json();

        // Filtra as movimentações do aluno
        const movimentacoesDoAluno = movimentacoes.filter(mov => mov.aluno === alunoId);

        // Calcula o saldo: soma créditos e subtrai débitos
        const saldo = movimentacoesDoAluno.reduce((total, mov) => {
            if (mov.tipo === "C") {
                return total + Number(mov.valor);
            } else if (mov.tipo === "D") {
                return total - Number(mov.valor);
            }
            return total;
        }, 0);

        return saldo;
    } catch (error) {
        console.error("Erro ao conectar com a API de movimentações:", error);
        return null;
    }
}

export default getSaldoAluno;