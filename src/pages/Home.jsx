import {useEffect} from "react";
import Base from "./Base";
import {useNavigate} from "react-router-dom";
import Pontuacao from "../components/Secoes/Pontuacao/Pontuacao";
import OpcoesHome from "../components/Secoes/OpcoesHome/OpcoesHome";
import Titulo from "../components/Elementos/Textos/Titulo/Titulo";

const Home = () => {
    const navigate = useNavigate();

    useEffect(() => {
        const token = localStorage.getItem("token");
        const tipo = localStorage.getItem("tipo");

        if (!token) {
            navigate("/login");
        }

        if (tipo === "professor") {
            navigate("/professor");
        }

    }, [navigate]);

    return (
        <Base>
            <Titulo>
                Atendimento e Plan.
            </Titulo>
            <div style={{marginTop: "1rem"}}>
            </div>
            <Pontuacao saldo={1}/>
            <div style={{marginTop: "1rem"}}>
            </div>
            <Titulo>
                OPÇÕES
            </Titulo>

            <OpcoesHome/>

        </Base>
    );
};

export default Home;
