import { useEffect } from "react";
import Base from "./Base";
import { useNavigate } from "react-router-dom";
import QrCode from "../components/QrCode/QrCode";
import Textos from "../components/Textos/Textos";

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
            <Textos
                versao={3}
            >
                QRCODE
            </Textos>
            <QrCode />
        </Base>
    );
};

export default HomeProfessor;
