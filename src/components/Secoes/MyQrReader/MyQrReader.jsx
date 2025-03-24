import React, { useState } from "react";
import QrReader from "react-qr-scanner";

const MyQrReader = ({ onScanSuccess, onScanError }) => {
    const previewStyle = {
        height: 240,
        width: 320,
    };

    const handleScan = (data) => {
        if (data) {
            onScanSuccess(data.text);
        }
    };

    const handleError = (err) => {
        console.error("Erro na leitura do QR Code:", err);
        if (onScanError) onScanError(err);
    };

    return (
        <QrReader
            delay={300}
            style={previewStyle}
            onError={handleError}
            onScan={handleScan}
        />
    );
};

export default MyQrReader;
