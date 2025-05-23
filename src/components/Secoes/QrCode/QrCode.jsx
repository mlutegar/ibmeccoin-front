import { useState, useEffect, useRef } from "react";
import { QRCodeCanvas } from "qrcode.react";
import API_BASE_URL from "../../../config";
import Cookies from "js-cookie";
import {Style} from "./Style";
import Botao from "../../Elementos/Botoes/Botao/Botao";
import InputLabel from "../../Elementos/InputLabel/InputLabel";
import BotaoSecundario from "../../Elementos/Botoes/BotaoSecundario/BotaoSecundario";
import BotaoPrimario from "../../Elementos/Botoes/BotaoPrimario/BotaoPrimario";

const QrCode = () => {
    const [tokenId, setTokenId] = useState("");
    const [quantidade, setQuantidade] = useState("");
    const [label, setLabel] = useState("");  // Novo estado para a label
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
                // Envia a label junto com a quantidade
                body: JSON.stringify({
                    quantidade_ic: Number(quantidade),
                    label: label
                }),
            });
            if (response.ok) {
                const data = await response.json();
                setTokenId(`${API_BASE_URL}/#/token/${data.id}`);
            } else {
                const errorData = await response.json();
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
        if (!label) {
            alert("Por favor, insira uma label para o token.");
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

    // Função para copiar o link para a área de transferência
    const copyToClipboard = () => {
        if (tokenId) {
            navigator.clipboard.writeText(tokenId)
                .then(() => {
                    console.log("Link copiado para a área de transferência!");
                })
                .catch(err => {
                    console.error('Erro ao copiar: ', err);
                });
        }
    };

    const voltarHome = () => {
        window.location.href = '/';
    }

    useEffect(() => {
        return () => {
            if (intervalRef.current) clearInterval(intervalRef.current);
        };
    }, []);

    return (
        <Style>
            <div className={"qrcode"}>
                {tokenId ? (
                    <>
                        <QRCodeCanvas value={String(tokenId)} size={200}/>
                        <div className="link-container">
                            <p className="token-link">{tokenId}</p>
                            <button
                                className="copy-button"
                                onClick={copyToClipboard}
                                title="Copiar link"
                            >
                                Copiar Link
                            </button>
                        </div>
                    </>
                ) : (
                    <div className={'qrcode-vazio'}>
                        Clique para gerar qrcode
                    </div>
                )}
            </div>
            <div>
                <InputLabel
                    label="Quantidade de IC:"
                    placeholder="Insira a quantidade de IC"
                    value={quantidade}
                    type="number"
                    onChange={(e) => setQuantidade(e.target.value)}
                    disabled={isRunning}
                />
                <InputLabel
                    label="Label do Token:"  // Novo input para a label
                    placeholder="Insira uma label"
                    value={label}
                    type="text"
                    onChange={(e) => setLabel(e.target.value)}
                    disabled={isRunning}
                />
            </div>
            <div>
                {!isRunning ? (
                    <BotaoPrimario onClick={startQRCode}>Iniciar QR Code</BotaoPrimario>
                ) : (
                    <BotaoPrimario onClick={stopQRCode}>Parar QR Code</BotaoPrimario>
                )}
            </div>
            <div>
                <BotaoSecundario onClick={voltarHome}>Cancelar</BotaoSecundario>
            </div>
        </Style>
    );
};

export default QrCode;