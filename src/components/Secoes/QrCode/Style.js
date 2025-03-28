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
`;

export {Style};