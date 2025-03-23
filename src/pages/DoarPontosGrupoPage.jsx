import { useEffect } from "react";
import Base from "./Base";
import { useNavigate } from "react-router-dom";
import Titulo from "../components/Elementos/Textos/Titulo/Titulo";

const DoarPontosGrupoPage = () => {
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
                Doar pontos para grupo
            </Titulo>
        </Base>
    );
};

export default DoarPontosGrupoPage;
