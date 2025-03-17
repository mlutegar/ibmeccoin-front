import { useState, useEffect, useRef } from "react";
import { QRCodeCanvas } from "qrcode.react";
import API_BASE_URL from "../../config";
import Cookies from "js-cookie";
import {Style} from "./Style";
import Botao from "../Botao/Botao";
import InputLabel from "../InputLabel/InputLabel";

const QrCode = () => {
    const [tokenId, setTokenId] = useState("");
    const [quantidade, setQuantidade] = useState("");
    const [isRunning, setIsRunning] = useState(false);
    const intervalRef = useRef(null);

    const API_URL = `${API_BASE_URL}/api/tokens/`;

    // Função para criar o token via API
    const createToken = async () => {
        const csrftoken = Cookies.get('csrftoken');

        try {
            const response = await fetch(API_URL, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    'X-CSRFToken': csrftoken,
                },
                body: JSON.stringify({ quantidade_ic: Number(quantidade) }),
            });
            if (response.ok) {
                const data = await response.json();
                console.log("Token criado:", data);
                setTokenId(`http://localhost:3005/#/token/${data.id}`);
            } else {
                const errorData = await response.json();
                console.error("Erro ao criar token:", errorData);
            }
        } catch (error) {
            console.error("Erro na requisição:", error);
        }
    };

    // Inicia a geração do QR Code, atualizando a cada 10 segundos
    const startQRCode = () => {
        if (!quantidade || Number(quantidade) <= 0) {
            alert("Por favor, insira uma quantidade válida de IC.");
            return;
        }
        setIsRunning(true);
        createToken(); // Cria o token imediatamente
        intervalRef.current = setInterval(() => {
            createToken();
        }, 10000);
    };

    // Para a atualização do QR Code
    const stopQRCode = () => {
        setIsRunning(false);
        if (intervalRef.current) {
            clearInterval(intervalRef.current);
            intervalRef.current = null;
        }
    };

    // Limpeza do intervalo caso o componente seja desmontado
    useEffect(() => {
        return () => {
            if (intervalRef.current) clearInterval(intervalRef.current);
        };
    }, []);

    return (
        <Style>
            <div className={"qrcode"}>
                {tokenId ? (
                    <QRCodeCanvas value={String(tokenId)} size={200}/>
                ) : (
                    <></>
                )}
            </div>
            <div>
                <InputLabel
                    label = "Quantidade de IC:"
                    placeholder = "Insira a quantidade de IC"
                    value = {quantidade}
                    type = "number"
                    onChange = {(e) => setQuantidade(e.target.value)}
                    disabled={isRunning}
                />
            </div>
            <div style={{marginTop: "20px"}}>
                {!isRunning ? (
                    <Botao onClick={startQRCode}>Iniciar QR Code</Botao>
                ) : (
                    <Botao onClick={stopQRCode}>Parar QR Code</Botao>
                )}
            </div>
        </Style>
    );
};

export default QrCode;
