import {useEffect, useState} from "react";
import Base from "./Base";
import {useNavigate} from "react-router-dom";
import Titulo from "../components/Elementos/Textos/Titulo/Titulo";
import DoarPontosAluno from "../components/Secoes/DoarPontosAluno/DoarPontosAluno";

const DoarPontosAlunoPage = () => {
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
                Doar pontos Aluno
            </Titulo>
            <DoarPontosAluno/>
        </Base>
    );
};

export default DoarPontosAlunoPage;
