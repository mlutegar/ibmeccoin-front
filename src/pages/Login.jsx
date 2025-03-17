import {useState} from "react";
import {useNavigate} from "react-router-dom";
import Base from "./Base";
import {Logo} from "../svg/Logo";
import InputLabel from "../components/InputLabel/InputLabel";
import Botao from "../components/Botao/Botao";
import API_BASE_URL from "../config";
import {LoginStyle} from "./Style";
import Cookies from 'js-cookie';

const Login = () => {
    const [username, setUsername] = useState('');
    const [senha, setPassword] = useState('');
    const navigate = useNavigate();

    const handleLogin = async (event) => {
        const csrftoken = Cookies.get('csrftoken');
        event.preventDefault();
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
                        // Caso o tipo não esteja definido, redireciona para uma rota padrão
                        navigate("/");
                    }
                } else {
                    console.warn("Usuário não encontrado.");
                }
            } else {
                alert("Erro no login: " + (data.detail || "Verifique suas credenciais."));
            }
        } catch (error) {
            alert("Erro ao conectar com o servidor.");
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
                }
            } else {
                console.error("Erro ao buscar alunos:", await response.json());
            }
        } catch (error) {
            console.error("Erro ao conectar com a API de alunos:", error);
        }
    };

    return (
            <LoginStyle>
                <Logo/>
                <form onSubmit={handleLogin}>
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
                    <Botao type="submit">Entrar</Botao>
                    <Botao
                        versaoInvertido={true}
                        onClick={() => navigate("/cadastro")}
                    >
                        Criar conta
                    </Botao>
                </form>
            </LoginStyle>
    );
}

export default Login;
