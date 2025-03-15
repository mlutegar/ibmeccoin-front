import { useEffect, useState } from "react";
import Base from "./Base";
import API_BASE_URL from "../config";
import { useNavigate } from "react-router-dom";
import Pontuacao from "../components/Pontuacao/Pontuacao";
import QrCode from "../components/QrCode/QrCode";  // Importa a URL da API

const Home = () => {
    const [userData, setUserData] = useState({ nome: "", matricula: "", tipo: "" });
    const [qrcode, setQrcode] = useState(1);
    const [saldo, setSaldo] = useState(null);
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        console.log(qrcode);
    }, [qrcode]);

    useEffect(() => {
        async function fetchUserData() {
            const token = localStorage.getItem("token"); // Pega o token JWT armazenado

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

        async function fetchSaldo() {
            const token = localStorage.getItem("token");

            if (!token) {
                console.error("Usuário não autenticado");
                return;
            }

            try {
                const response = await fetch(`${API_BASE_URL}/api/saldo/${userData.matricula}/1/`, {
                    method: "GET",
                    headers: {
                        "Authorization": `Bearer ${token}`
                    }
                });

                console.log("Matrícula do aluno:", userData.matricula);

                if (response.ok) {
                    const data = await response.json();
                    setSaldo(data.saldo); // Atualiza o estado com o saldo do aluno
                    console.log("Saldo do aluno:", data.saldo);
                } else {
                    console.error("Erro ao buscar o saldo:", await response.json());
                }
            } catch (error) {
                console.error("Erro ao conectar com a API:", error);
            }
        }

        fetchUserData();

        if (userData.matricula) {
            fetchSaldo(); // Faz a busca pelo saldo assim que a matrícula for definida
        }
    }, [userData.matricula, navigate]);

    useEffect(() => {
        const token = localStorage.getItem("token");

        if (!token) {
            navigate("/login");
        } else {
            setIsAuthenticated(true);
        }
    }, [navigate]);

    if (!isAuthenticated) {
        return null;
    }



    const handleQrCode = () => {
        setQrcode(qrcode + 1);
    }



    return (
        <Base>
            <Pontuacao
                turma={"Atendimento e Planejamento"}
                saldo={saldo}
            />

            <QrCode
                value={qrcode}
            />

            <button onClick={handleQrCode}>Gerar novo QR Code</button>
            <button onClick={() => navigate("/logout")}>Sair</button>
        </Base>
    );
};

export default Home;
