import {useEffect} from "react";
import Base from "./Base";
import {useNavigate} from "react-router-dom";
import Titulo from "../components/Elementos/Textos/Titulo/Titulo";
import OpcoesHomeProfessor from "../components/Secoes/OpcoesHomeProfessor/OpcoesHomeProfessor";

const HomeProfessor = () => {
    const navigate = useNavigate();

    useEffect(() => {
        const token = localStorage.getItem("token");
        if (!token) {
            navigate("/login");
        }
    }, [navigate]);


    return (
        <Base>
            <Titulo>
                Atendimento e Plan.
            </Titulo>
            <OpcoesHomeProfessor/>
        </Base>
    );
};

export default HomeProfessor;
