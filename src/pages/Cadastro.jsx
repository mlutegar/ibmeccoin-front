import {useState} from "react";
import {useNavigate} from "react-router-dom";
import Base from "./Base";
import {Logo} from "../svg/Logo";
import InputLabel from "../components/InputLabel/InputLabel";
import Botao from "../components/Botao/Botao";
import API_BASE_URL from "../config";
import Cookies from "js-cookie";

const Cadastro = () => {
    const [username, setUsername] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const navigate = useNavigate();

    const handleCadastro = async (event) => {
        const csrftoken = Cookies.get('csrftoken');

        event.preventDefault();
        try {
            const response = await fetch(`${API_BASE_URL}/api/cadastro/`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    'X-CSRFToken': csrftoken,
                },
                body: JSON.stringify({
                    username,
                    first_name: firstName,
                    last_name: lastName,
                    email,
                    password: senha
                })
            });

            const data = await response.json();

            if (response.ok) {
                alert("Cadastro realizado com sucesso!");
                // Após o cadastro, você pode redirecionar para a página de login ou outra rota
                navigate("/login");
            } else {
                alert("Erro no cadastro: " + (data.detail || "Verifique os dados inseridos."));
            }
        } catch (error) {
            alert("Erro ao conectar com o servidor.");
            console.error(error);
        }
    };

    return (
        <Base>
            <Logo/>
            <form onSubmit={handleCadastro}>
                <InputLabel
                    label={"Usuário"}
                    placeholder={"Digite seu usuário"}
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
                <InputLabel
                    label={"Primeiro Nome"}
                    placeholder={"Digite seu primeiro nome"}
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                />
                <InputLabel
                    label={"Último Nome"}
                    placeholder={"Digite seu último nome"}
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                />
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
                    onChange={(e) => setSenha(e.target.value)}
                />
                <Botao type="submit">Cadastrar</Botao>
            </form>
        </Base>
    );
};

export default Cadastro;
