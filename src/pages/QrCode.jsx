import { useEffect } from "react";
import Base from "./Base";
import { useNavigate } from "react-router-dom";
import QrCode from "../components/QrCode/QrCode";
import Titulo from "../components/Textos/Titulo/Titulo";

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
                QRCODE
            </Titulo>
            <QrCode />
        </Base>
    );
};

export default HomeProfessor;
