import styled from "styled-components";

const Style = styled.div`
    width: 100%;
    height: 5.625rem;
    flex-shrink: 0;
    border-radius: 1.25rem;
    background: linear-gradient(135deg, #FFF 0%, #F8F9FA 100%);
    margin-bottom: 1rem;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
    border: 1px solid rgba(9, 53, 170, 0.1);
    transition: all 0.3s ease;

    &:hover {
        box-shadow: 0 6px 20px rgba(0, 0, 0, 0.12);
        transform: translateY(-1px);
    }

    .texto{
        padding: 0 1.5rem;
        display: flex;
        flex-direction: row;
        align-items: center;
        height: 100%;
        gap: 1rem;
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
    width: 100%;
    height: 5.625rem;
    flex-shrink: 0;
    border-radius: 1.25rem;
    background: linear-gradient(135deg, #FFF 0%, #F8F9FA 100%);
    margin-bottom: 1rem;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
    border: 1px solid rgba(9, 53, 170, 0.1);
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
    font-family: 'Krub', sans-serif;
    font-size: 1rem;
    font-weight: 400;
`;

const ErrorContainer = styled.div`
    width: 100%;
    height: 5.625rem;
    flex-shrink: 0;
    border-radius: 1.25rem;
    background: linear-gradient(135deg, #FFEBEE 0%, #FFCDD2 100%);
    border: 1px solid #F8BBD9;
    margin-bottom: 1rem;
    box-shadow: 0 4px 12px rgba(211, 47, 47, 0.1);
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0 1.5rem;
`;

const ErrorText = styled.div`
    color: #D32F2F;
    font-family: 'Krub', sans-serif;
    font-size: 0.9rem;
    font-weight: 500;
    text-align: center;
    line-height: 1.4;
`;

export {Style, LoadingContainer, LoadingSpinner, LoadingText, ErrorContainer, ErrorText};