import {useState, useEffect} from "react";
import {CardQrCodeStyle} from "./Style";
import CardTemplate from "../../CardTemplate/CardTemplate";
import MyQrReader from "../../../../../Secoes/MyQrReader/MyQrReader";
import {QrCode} from "../../../../../Icones/QrCode";

const CardQrCode = () => {
    const [cameraActive, setCameraActive] = useState(false);
    const [qrResult, setQrResult] = useState("");
    const [useFrontCamera, setUseFrontCamera] = useState(false); // Estado para controlar a câmera

    const handleScanSuccess = (data) => {
        setQrResult(data);
        setCameraActive(false);
    };

    const handleScanError = (err) => {
        console.error("Erro na leitura:", err);
        setCameraActive(false);
    };

    const handleCameraActive = () => {
        setCameraActive(true);
    };

    const toggleCamera = () => {
        setUseFrontCamera((prev) => !prev); // Alterna entre câmeras
    };

    return (
        <CardQrCodeStyle>
            <CardTemplate
                svg={<QrCode/>}
                titulo={"QrCode"}
                texto={"Leia o QrCode"}
                botao={"Ler QrCode"}
                onClick={handleCameraActive}
            />

            {cameraActive && (
                <div
                    style={{
                        position: "fixed",
                        top: 0,
                        left: 0,
                        width: "100%",
                        height: "100%",
                        background: "rgba(0,0,0,0.5)",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        zIndex: 1000,
                    }}
                >
                    <div
                        style={{
                            position: "relative",
                            width: "300px",
                            height: "300px",
                            background: "#fff",
                            padding: "1rem",
                            borderRadius: "8px",
                        }}
                    >
                        <button
                            onClick={() => setCameraActive(false)}
                            style={{
                                position: "absolute",
                                top: "0.5rem",
                                right: "0.5rem",
                                background: "red",
                                color: "#fff",
                                border: "none",
                                borderRadius: "50%",
                                width: "25px",
                                height: "25px",
                                cursor: "pointer",
                            }}
                        >
                            X
                        </button>

                        <button
                            onClick={toggleCamera} // Botão para alternar câmera
                            style={{
                                position: "absolute",
                                top: "0.5rem",
                                left: "0.5rem",
                                background: "blue",
                                color: "#fff",
                                border: "none",
                                borderRadius: "50%",
                                width: "25px",
                                height: "25px",
                                cursor: "pointer",
                            }}
                        >
                            ↻
                        </button>

                        <MyQrReader
                            onScanSuccess={handleScanSuccess}
                            onScanError={handleScanError}
                            facingMode={useFrontCamera ? "user" : "environment"} // Passando a câmera frontal ou traseira
                        />
                    </div>
                </div>
            )}
        </CardQrCodeStyle>
    );
};

export default CardQrCode;
