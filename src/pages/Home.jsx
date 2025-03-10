import { useEffect, useState } from "react";
import Base from "./Base";
import API_BASE_URL from "../config";
import {useNavigate} from "react-router-dom";
import Pontuacao from "../components/Pontuacao/Pontuacao";  // Importa a URL da API

const Home = () => {
    const [userData, setUserData] = useState({ nome: "", matricula: "", tipo: "" });
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        async function fetchUserData() {
            const token = localStorage.getItem("access_token"); // Pega o token JWT armazenado

            if (!token) {
                console.error("Usuário não autenticado");
                return;
            }

            try {
                const response = await fetch(`${API_BASE_URL}/api/me/`, {
                    method: "GET",
                    headers: {
                        "Authorization": `Bearer ${token}`
                    }
                });

                if (response.ok) {
                    const data = await response.json();
                    setUserData(data); // Atualiza o estado com os dados do usuário
                    console.log("Dados do usuário:", data);
                } else {
                    console.error("Erro ao buscar os dados do usuário:", await response.json());
                }
            } catch (error) {
                console.error("Erro ao conectar com a API:", error);
            }
        }

        fetchUserData();
    }, []);

    useEffect(() => {
        const token = localStorage.getItem("access_token");

        if (!token) {
            navigate("/login");
        } else {
            setIsAuthenticated(true);
        }
    }, [navigate]);

    if (!isAuthenticated) {
        return null;
    }

    return (
        <Base>
            <Pontuacao/>
        </Base>
    );
};

export default Home;
