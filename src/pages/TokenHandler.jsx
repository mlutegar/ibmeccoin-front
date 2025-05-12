import {useState, useEffect} from "react";
import {useNavigate, useParams} from "react-router-dom";
import Cookies from "js-cookie";
import API_BASE_URL from "../config";
import Base from "./Base";
import Titulo from "../components/Elementos/Textos/Titulo/Titulo";
import BotaoPrimario from "../components/Elementos/Botoes/BotaoPrimario/BotaoPrimario";
import SubtituloInvertido from "../components/Elementos/Textos/SubtituloInvertido/SubtituloInvertido";
import InputPuro from "../components/Elementos/InputPuro/InputPuro";

const TokenHandler = () => {
    const navigate = useNavigate();
    const { tokenId } = useParams();
    const [token, setToken] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");

    useEffect(() => {
        if (tokenId) {
            setToken(tokenId);
        }
    }, [tokenId]);

    useEffect(() => {
        if (!localStorage.getItem("token")) {
            navigate("/login");
        }
    }, [navigate]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        setErrorMessage("");

        const hoje = new Date().toISOString().slice(0, 10);
        const csrftoken = Cookies.get('csrftoken');
        const alunoId = localStorage.getItem("alunoId");

        try {
            // Chama o endpoint de processamento do token
            const response = await fetch(`${API_BASE_URL}/api/processar-token/`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    'X-CSRFToken': csrftoken,
                },
                body: JSON.stringify({
                    turma_id: 2,
                    aluno_id: alunoId,
                    token_id: token,
                })
            });

            if (response.ok) {
                alert("Saldo creditado com sucesso!");
                localStorage.setItem("ultimoQrCode", hoje);
                navigate("/");
            } else {
                const errorData = await response.json();
                console.error("Erro ao processar token:", errorData);
                setErrorMessage(errorData.erro || "Erro ao processar token.");
            }
        } catch (error) {
            console.error("Erro na requisição:", error);
            setErrorMessage("Falha na conexão. Verifique sua internet e tente novamente.");
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <Base>
            <div style={{ textAlign: "center", display: "flex", gap: "2rem", flexDirection: "column", alignItems: "center" }}>
                <Titulo>
                    Validar Token
                </Titulo>

                <SubtituloInvertido>
                    {tokenId ? "Token recebido. Clique em validar para creditar seu saldo:" : "Por favor, insira o token fornecido para creditar seu saldo:"}
                </SubtituloInvertido>

                <form onSubmit={handleSubmit} style={{ gap: "2rem", display: "flex", flexDirection: "column" }}>
                    <div className="input-group">
                        <InputPuro
                            placeholder="Digite o token aqui"
                            value={token}
                            onChange={(e) => setToken(e.target.value)}
                            required
                            className="token-input"
                        />
                    </div>

                    {errorMessage && (
                        <div className="error-message">
                            {errorMessage}
                        </div>
                    )}

                    <BotaoPrimario
                        type="submit"
                        className="submit-button"
                        disabled={isLoading}
                    >
                        {isLoading ? "Processando..." : "Validar Token"}
                    </BotaoPrimario>
                </form>
            </div>
        </Base>
    );
};

export default TokenHandler;