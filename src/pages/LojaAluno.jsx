import {useEffect, useState} from "react";
import Base from "./Base";
import {useNavigate} from "react-router-dom";
import Pontuacao from "../components/Secoes/Pontuacao/Pontuacao";
import Titulo from "../components/Elementos/Textos/Titulo/Titulo";
import CardLoja from "../components/CardLoja/CardLoka";
import HeaderTitulo from "../components/HeaderTitulo/HeaderTitulo";
import Cookies from "js-cookie";

const Home = () => {
    const navigate = useNavigate();
    const [produtos, setProdutos] = useState([]);

    useEffect(() => {
        const token = localStorage.getItem("token");
        const tipo = localStorage.getItem("tipo");

        if (!token) {
            navigate("/login");
        }

        if (tipo === "professor") {
            navigate("/professor");
        }

    }, [navigate]);
    useEffect(() => {
        const getProdutos = async () => {
            const csrftoken = Cookies.get('csrftoken');
            const response = await fetch("https://gtddjango.fly.dev/api/produtos/", {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    "X-CSRFToken": csrftoken,
                }
            });

            if (!response.ok) {
                throw new Error("Erro ao buscar produtos");
            }

            const data = await response.json();
            setProdutos(data);
        }
        getProdutos().catch(error => {
            console.error("Erro ao buscar produtos:", error);
        });
    }, [produtos]);

    const efetuarCompra = async (item, preco) => {
        const saldo = localStorage.getItem("saldo");
        if (saldo < preco) {
            alert("Saldo insuficiente para realizar a compra.");
            return;
        }
        await postCompra(item, preco);

    }

    const postCompra = async (item, preco) => {
        const csrftoken = Cookies.get('csrftoken');
        const alunoId = localStorage.getItem("alunoId");
        const response = await fetch("https://gtddjango.fly.dev/api/movimentacoes/", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "X-CSRFToken": csrftoken,
            },
            body: JSON.stringify({
                valor: Number(preco),
                tipo: "D", // 'C' para crédito (doação)
                aluno: alunoId,
                turma: 2 // Ajuste conforme necessário
            })
        });

        if (response.ok) {
            alert("Compra realizada com sucesso!");
            window.location.reload(); // Recarrega a página para atualizar o saldo
        } else {
            alert("Erro ao realizar a compra.");
        }
    }

    return (
        <Base>
            <HeaderTitulo>
                LOJA
            </HeaderTitulo>
            <Pontuacao saldo={1}/>
            <Titulo>
                ITENS
            </Titulo>

            {produtos.map(produto => (
                <CardLoja
                    key={produto.id}
                    id={produto.id}
                    nome={produto.nome}
                    preco={produto.preco}
                    descricao={produto.descricao}
                    onClick={() => efetuarCompra(produto.id, produto.preco)}
                />
            ))}
        </Base>
    );
};

export default Home;
