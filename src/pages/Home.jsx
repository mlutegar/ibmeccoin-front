import { useEffect, useState } from "react";
import Base from "./Base";
import { useNavigate } from "react-router-dom";
import Pontuacao from "../components/Pontuacao/Pontuacao";
import GrupoMembros from "../components/GrupoMembros/GrupoMembros";
import Botao from "../components/Botao/Botao";
import {signOut} from "firebase/auth";
import {auth} from "../config/Firebase";
import Textos from "../components/Textos/Textos";
import OpcoesHome from "../components/OpcoesHome/OpcoesHome";

const Home = () => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        const token = localStorage.getItem("token");

        if (!token) {
            navigate("/login");
        } else {
            setIsAuthenticated(true);
        }
    }, [navigate]);

    const handleLogout = (e) =>{
        e.preventDefault();
        signOut(auth);
        window.localStorage.removeItem("token");
        window.localStorage.removeItem("username");
        window.localStorage.removeItem("alunoId");

        // esperar um pouco antes de redirecionar
        setTimeout(() => {
            window.location.reload();
        }, 500);
    }

    return (
        <Base>
            <Textos
                versao={3}
            >
                Atendimento e Plan.
            </Textos>
            <Pontuacao saldo={1} />
            <OpcoesHome/>
            <Botao onClick={handleLogout}>Logout</Botao>
        </Base>
    );
};

export default Home;
