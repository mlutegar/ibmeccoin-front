import { useEffect, useState } from "react";
import Base from "./Base";
import { useNavigate } from "react-router-dom";
import Pontuacao from "../components/Secoes/Pontuacao/Pontuacao";
import {signOut} from "firebase/auth";
import {auth} from "../config/Firebase";
import OpcoesHome from "../components/Secoes/OpcoesHome/OpcoesHome";
import Titulo from "../components/Elementos/Textos/Titulo/Titulo";

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
            <Titulo>
                Atendimento e Plan.
            </Titulo>
            <Pontuacao saldo={1} />
            <OpcoesHome/>
        </Base>
    );
};

export default Home;
