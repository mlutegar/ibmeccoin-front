import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Logo } from "../components/Icones/Logo";
import InputLabel from "../components/Elementos/InputLabel/InputLabel";
import API_BASE_URL from "../config";
import { RecuperarSenhaStyle } from "./Style";
import BotaoPrimario from "../components/Elementos/Botoes/BotaoPrimario/BotaoPrimario";

const TrocarSenha = () => {
    const [email, setEmail] = useState('');
    const [token, setToken] = useState('');
    const [novaSenha, setNovaSenha] = useState('');
    const [message, setMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        // Obter o token e o e-mail da URL
        const queryParams = new URLSearchParams(location.search);
        const tokenFromUrl = queryParams.get('token');
        const emailFromUrl = queryParams.get('email');

        if (tokenFromUrl && emailFromUrl) {
            setToken(tokenFromUrl);
            setEmail(emailFromUrl);
        } else {
            setErrorMessage("Token ou e-mail não encontrados.");
        }
    }, [location]);

    const handleChangePassword = async (event) => {
        event.preventDefault();
        setErrorMessage('');
        setMessage('');

        if (!novaSenha) {
            setErrorMessage("Por favor, insira uma nova senha.");
            return;
        }

        try {
            const response = await fetch(`${API_BASE_URL}/api/alterar-senha/`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    token,
                    email,
                    nova_senha: novaSenha,
                }),
            });

            const data = await response.json();

            if (response.ok) {
                setMessage("Senha alterada com sucesso!");
                navigate("/login");
            } else {
                setErrorMessage("Erro ao alterar a senha: " + (data.detail || "Verifique o token ou e-mail fornecido."));
            }
        } catch (error) {
            setErrorMessage("Erro ao conectar com o servidor.");
            console.error(error);
        }
    };

    return (
        <RecuperarSenhaStyle>
            <Logo />
            <form onSubmit={handleChangePassword}>
                {errorMessage && (
                    <div className="error-message" style={{
                        backgroundColor: "#ffebee",
                        color: "#d32f2f",
                        padding: "10px",
                        borderRadius: "4px",
                        marginBottom: "15px",
                        border: "1px solid #f5c6cb"
                    }}>
                        {errorMessage}
                    </div>
                )}
                {message && (
                    <div className="success-message" style={{
                        backgroundColor: "#e8f5e9",
                        color: "#388e3c",
                        padding: "10px",
                        borderRadius: "4px",
                        marginBottom: "15px",
                        border: "1px solid #c8e6c9"
                    }}>
                        {message}
                    </div>
                )}
                <InputLabel
                    label={"Nova Senha"}
                    placeholder={"Digite sua nova senha"}
                    type="password"
                    value={novaSenha}
                    onChange={(e) => setNovaSenha(e.target.value)}
                />
                <BotaoPrimario type="submit">Alterar Senha</BotaoPrimario>
            </form>
        </RecuperarSenhaStyle>
    );
};

export default TrocarSenha;
