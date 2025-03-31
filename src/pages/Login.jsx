import {useState} from "react";
import {useNavigate} from "react-router-dom";
import {Logo} from "../components/Icones/Logo";
import InputLabel from "../components/Elementos/InputLabel/InputLabel";
import API_BASE_URL from "../config";
import {LoginStyle} from "./Style";
import Cookies from 'js-cookie';
import BotaoPrimario from "../components/Elementos/Botoes/BotaoPrimario/BotaoPrimario";
import BotaoSecundario from "../components/Elementos/Botoes/BotaoSecundario/BotaoSecundario";

const Login = () => {
    const [username, setUsername] = useState('');
    const [senha, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const navigate = useNavigate();

    const handleLogin = async (event) => {
        const csrftoken = Cookies.get('csrftoken');
        event.preventDefault();
        setErrorMessage(''); // Limpa o erro anterior ao tentar novo login

        try {
            const response = await fetch(`${API_BASE_URL}/api/login/`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    'X-CSRFToken': csrftoken,
                },
                body: JSON.stringify({username, password: senha})
            });

            const data = await response.json();

            if (response.ok) {
                localStorage.setItem("token", data.token);
                localStorage.setItem("username", username);
                console.log("Usuário autenticado:", data);

                const usuario = await fetchAlunoId(username);
                if (usuario) {
                    if (usuario.tipo === "aluno") {
                        localStorage.setItem("tipo", "aluno");
                        navigate("/");
                    } else if (usuario.tipo === "professor") {
                        localStorage.setItem("tipo", "professor");
                        navigate("/professor");
                    } else {
                        navigate("/");
                    }
                } else {
                    setErrorMessage("Usuário não encontrado.");
                }
            } else {
                setErrorMessage("Erro no login: " + (data.detail || "Verifique suas credenciais."));
            }
        } catch (error) {
            setErrorMessage("Erro ao conectar com o servidor.");
            console.error(error);
        }
    };

    const fetchAlunoId = async (username) => {
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
                const alunos = await response.json();
                const aluno = alunos.find(aluno => aluno.username === username);

                if (aluno) {
                    localStorage.setItem("alunoId", aluno.id);
                    localStorage.setItem("alunoNome", aluno.first_name);
                    console.log("ID do aluno armazenado:", aluno.id);
                    return aluno;
                } else {
                    console.warn("Aluno não encontrado.");
                    return null;
                }
            } else {
                console.error("Erro ao buscar alunos:", await response.json());
                return null;
            }
        } catch (error) {
            console.error("Erro ao conectar com a API de alunos:", error);
            return null;
        }
    };

    return (
        <LoginStyle>
            <Logo/>
            <form onSubmit={handleLogin}>
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
                <InputLabel
                    label={"Matricula"}
                    placeholder={"Digite sua Matricula"}
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
                <InputLabel
                    label={"Senha"}
                    placeholder={"Digite sua senha"}
                    type="password"
                    value={senha}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <BotaoPrimario type="submit">Entrar</BotaoPrimario>
                <BotaoSecundario
                    onClick={() => navigate("/cadastro")}
                >
                    Criar conta
                </BotaoSecundario>
            </form>
        </LoginStyle>
    );
}

export default Login;