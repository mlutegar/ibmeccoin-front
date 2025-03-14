import {useState} from "react";
import {useNavigate} from "react-router-dom";
import Base from "./Base";
import {Logo} from "../svg/Logo";
import InputLabel from "../components/InputLabel/InputLabel";
import Botao from "../components/Botao/Botao";
import API_BASE_URL from "../config";
import {LoginStyle} from "./Style";

const Login = () => {
    const [email, setEmail] = useState('');
    const [senha, setPassword] = useState('');
    const navigate = useNavigate();

    const handleLogin = async (event) => {
        event.preventDefault();
        try {
            const response = await fetch(`${API_BASE_URL}/api/login/`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({email, senha})
            });

            const data = await response.json();

            if (response.ok) {
                localStorage.setItem("access_token", data.access);
                localStorage.setItem("refresh_token", data.refresh);
                console.log("Usuário autenticado:", data);

                // Redireciona o usuário após o login
                navigate("/");
            } else {
                alert("Erro no login: " + (data.detail || "Verifique suas credenciais."));
            }
        } catch (error) {
            alert("Erro ao conectar com o servidor.");
            console.error(error);
        }
    };

    return (
        <Base>
            <LoginStyle>
                <Logo/>
                <form onSubmit={handleLogin}>
                    <InputLabel
                        label={"Email"}
                        placeholder={"Digite seu email"}
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <InputLabel
                        label={"Senha"}
                        placeholder={"Digite sua senha"}
                        type="password"
                        value={senha}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <Botao texto="Entrar" type="submit"/>
                    <Botao texto="Criar conta" versaoInvertido={true}/>
                </form>
            </LoginStyle>
        </Base>
    );
}

export default Login;
