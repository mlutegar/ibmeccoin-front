import { useState, useEffect, useRef } from "react";
import { QRCodeCanvas } from "qrcode.react";
import API_BASE_URL from "../../config";

const QrCode = () => {
    const [tokenId, setTokenId] = useState("");
    const [quantidade, setQuantidade] = useState("");
    const [isRunning, setIsRunning] = useState(false);
    const intervalRef = useRef(null);

    const API_URL = `${API_BASE_URL}/api/tokens/`;

    // Função para criar o token via API
    const createToken = async () => {
        try {
            const response = await fetch(API_URL, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
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
        <div>
            <div>
                <label>Quantidade de IC:</label>
                <input
                    type="number"
                    value={quantidade}
                    onChange={(e) => setQuantidade(e.target.value)}
                    disabled={isRunning}  // Opcional: desabilita a alteração enquanto estiver rodando
                />
            </div>
            <div style={{ marginTop: "20px" }}>
                {tokenId ? (
                    <QRCodeCanvas value={String(tokenId)} size={200} />
                ) : (
                    <p>QR Code não gerado</p>
                )}
            </div>
            <div style={{ marginTop: "20px" }}>
                {!isRunning ? (
                    <button onClick={startQRCode}>Iniciar QR Code</button>
                ) : (
                    <button onClick={stopQRCode}>Parar QR Code</button>
                )}
            </div>
        </div>
    );
};

export default QrCode;
