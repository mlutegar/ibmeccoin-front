import styled from "styled-components";

const Style = styled.div`
    width: 21.1875rem;
    height: 5.625rem;
    flex-shrink: 0;
    border-radius: 1.25rem;
    background: #FFF;
    margin-bottom: 1rem;

    .texto{
        padding: 0 1rem;
        display: flex;
        flex-direction: row;
        align-items: center;
    }
    
    .texto1 {
        color: #0935AA;
        font-family: Krub;
        font-size: 1.25rem;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
    }

    .texto2 {
        margin-left: 1rem;
        
        color: #0935AA;
        font-family: Krub;
        font-size: 4rem;
        font-style: normal;
        font-weight: 600;
        line-height: normal;
        text-transform: uppercase;
    }

    .texto3 {
        color: #0935AA;
        font-family: Krub;
        font-size: 2.25rem;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
        text-transform: uppercase;
    }
`;

const LoadingContainer = styled.div`
    width: 21.1875rem;
    height: 5.625rem;
    flex-shrink: 0;
    border-radius: 1.25rem;
    background: #FFF;
    margin-bottom: 1rem;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 12px;
`;

const LoadingSpinner = styled.div`
    width: 24px;
    height: 24px;
    border: 3px solid #E3F2FD;
    border-top: 3px solid #0935AA;
    border-radius: 50%;
    animation: spin 1s linear infinite;

    @keyframes spin {
        0% { transform: rotate(0deg); }
        100% { transform: rotate(360deg); }
    }
`;

const LoadingText = styled.div`
    color: #0935AA;
    font-family: Krub;
    font-size: 1rem;
    font-weight: 400;
`;

const ErrorContainer = styled.div`
    width: 21.1875rem;
    height: 5.625rem;
    flex-shrink: 0;
    border-radius: 1.25rem;
    background: #FFEBEE;
    border: 1px solid #FFCDD2;
    margin-bottom: 1rem;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0 1rem;
`;

const ErrorText = styled.div`
    color: #D32F2F;
    font-family: Krub;
    font-size: 0.9rem;
    font-weight: 400;
    text-align: center;
    line-height: 1.4;
`;

export {Style, LoadingContainer, LoadingSpinner, LoadingText, ErrorContainer, ErrorText};