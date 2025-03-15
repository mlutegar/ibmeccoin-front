import { QRCodeCanvas } from "qrcode.react";

const QrCode = ({ value }) => {
    return <QRCodeCanvas value={String(value)} size={200} />;
};

export default QrCode;
