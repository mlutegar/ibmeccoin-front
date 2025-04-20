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

const Convites = () => {
    const [nome, setNome] = useState("");
    const alunoId = localStorage.getItem("alunoId");
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(nome)

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

        console.log("Payload:", JSON.stringify(payload));
        console.log("API Base URL:", API_BASE_URL);

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
            <ConvitesStyle>
                <div className={'header'}>
                    <Titulo className={"titulo"}>
                        Convites
                    </Titulo>

                    <BotaoVoltar onClick={() => navigate('/')}>
                        Voltar
                    </BotaoVoltar>
                </div>

                <ConvitesLista/>

                {error && <Message>{error}</Message>}

                <div style={{display: "flex", flexDirection: "column", gap: "2rem"}}>
                    <div style={{textAlign: "center"}}>
                        <SubtituloInvertido>
                            Nome Grupo
                        </SubtituloInvertido>
                        <InputPuro
                            placeholder="Digite o nome do grupo"
                            value={nome}
                            type={"text"}
                            onChange={(event) => setNome(event.target.value)}
                        />
                    </div>
                    <BotaoPrimario
                        type={"button"}
                        onClick={handleSubmit}
                    >
                        Criar Grupo
                    </BotaoPrimario>
                </div>
            </ConvitesStyle>
        </Base>
    );
}

export default Convites;