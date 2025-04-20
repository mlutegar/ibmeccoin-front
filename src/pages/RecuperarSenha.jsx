import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Logo } from "../components/Icones/Logo";
import InputLabel from "../components/Elementos/InputLabel/InputLabel";
import API_BASE_URL from "../config";
import { RecuperarSenhaStyle } from "./Style";
import BotaoPrimario from "../components/Elementos/Botoes/BotaoPrimario/BotaoPrimario";

const RecuperarSenha = () => {
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const navigate = useNavigate();

    const handleRecoverPassword = async (event) => {
        event.preventDefault();
        setErrorMessage('');
        setMessage('');

        try {
            const response = await fetch(`${API_BASE_URL}/api/recuperar-senha/`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ email }),
            });

            const data = await response.json();

            if (response.ok) {
                setMessage("Instruções para recuperação de senha foram enviadas para o seu e-mail.");
            } else {
                setErrorMessage("Erro ao recuperar a senha: " + (data.detail || "Verifique o e-mail fornecido."));
            }
        } catch (error) {
            setErrorMessage("Erro ao conectar com o servidor.");
            console.error(error);
        }
    };

    return (
        <RecuperarSenhaStyle>
            <Logo />
            <form onSubmit={handleRecoverPassword}>
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
                    label={"E-mail"}
                    placeholder={"Digite seu e-mail"}
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <BotaoPrimario type="submit">Enviar Instruções</BotaoPrimario>
            </form>
        </RecuperarSenhaStyle>
    );
};

export default RecuperarSenha;
