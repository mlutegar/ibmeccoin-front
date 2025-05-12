import Base from "./Base";
import Titulo from "../components/Elementos/Textos/Titulo/Titulo";
import SubtituloInvertido from "../components/Elementos/Textos/SubtituloInvertido/SubtituloInvertido";
import InputPuro from "../components/Elementos/InputPuro/InputPuro";
import BotaoPrimario from "../components/Elementos/Botoes/BotaoPrimario/BotaoPrimario";
import ConvitesLista from "../components/Secoes/ConvitesLista/ConvitesLista";
import {useState} from "react";
import Cookies from "js-cookie";
import API_BASE_URL from "../config";
import {Message} from "../components/Secoes/CriarGrupo/Style";
import {useNavigate} from "react-router-dom";
import {ConvitesStyle} from "./Style";
import BotaoVoltar from "../components/Elementos/Botoes/BotaoVoltar/BotaoVoltar";
import HeaderTitulo from "../components/HeaderTitulo/HeaderTitulo";
import InputAlongado from "../components/InputAlongado/InputAlongado";

const Convites = () => {
    const [nome, setNome] = useState("");
    const alunoId = localStorage.getItem("alunoId");
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!nome) {
            setError("Preencha todos os campos.");
            return;
        }

        const payload = {
            nome,
            limite_aluno: 5,
            saldo: 0, // O saldo inicia com 0
            turma: 2, // A turma é sempre 1
            alunos: [Number(alunoId)] // Adiciona o aluno que criou o grupo
        };

        try {
            const token = localStorage.getItem("token");
            const csrftoken = Cookies.get('csrftoken');

            if (!token || !alunoId) {
                setError("Usuário não autenticado ou aluno não identificado.");
                return;
            }

            const response = await fetch(`${API_BASE_URL}/api/grupos/`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    'X-CSRFToken': csrftoken
                },
                body: JSON.stringify(payload)
            });

            if (response.ok) {
                const data = await response.json();
                setError(null);
                setNome("");
                navigate("/grupo");
            } else {
                const errorData = await response.text(); // Utilizar .text() para erros não JSON
                setError(`Erro ao criar grupo: ${response.status} - ${errorData}`);
            }
        } catch (err) {
            console.error("Erro ao conectar:", err);
            setError("Erro ao conectar com a API.");
        }
    };


    return (
        <Base>
            <HeaderTitulo>
                Convites
            </HeaderTitulo>

            <ConvitesLista/>

            <Titulo>
                CRIAR GRUPO
            </Titulo>

            <InputAlongado
                placeholder="Digite o nome do grupo"
                title={"Nome do grupo"}
                value={nome}
                type={"text"}
                onChange={(event) => setNome(event.target.value)}
            />

            <BotaoPrimario
                type={"button"}
                onClick={handleSubmit}
            >
                Criar Grupo
            </BotaoPrimario>
            {error && <Message>{error}</Message>}
        </Base>
    );
}

export default Convites;