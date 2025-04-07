import styled from "styled-components";

const Style = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 2rem;
    
    .qrcode {
        margin-top: 20px;

        canvas {
            width: 100% !important;
            height: 100% !important;
        }
    }

    .qrcode-vazio {
        width: 20.1875rem;
        height: 20.1875rem;
        flex-shrink: 0;
        aspect-ratio: 1/1;
        background-color: white;
        
        display: flex;
        justify-content: center;
        align-items: center;

        color: #000;
        text-align: center;
        font-family: Krub;
        font-size: 1rem;
        font-style: normal;
        font-weight: 600;
        line-height: normal;
    }

    .link-container {
        margin-top: 10px;
        text-align: center;
    }

    .token-link {
        word-break: break-all;
        font-size: 14px;
        margin-bottom: 8px;
    }

    .copy-button {
        background-color: #f0f0f0;
        border: 1px solid #ccc;
        border-radius: 4px;
        padding: 5px 10px;
        cursor: pointer;
        font-size: 12px;
    }

    .copy-button:hover {
        background-color: #e0e0e0;
    }
`;

export {Style};