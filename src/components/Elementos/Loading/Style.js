import styled from "styled-components";

export const LoadingContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    min-height: 60vh;
    gap: 2rem;
    padding: 2rem;
`;

export const LoadingSpinner = styled.div`
    width: 60px;
    height: 60px;
    border: 4px solid rgba(255, 255, 255, 0.2);
    border-top: 4px solid #F5AC00;
    border-radius: 50%;
    animation: spin 1s linear infinite;

    @keyframes spin {
        0% { transform: rotate(0deg); }
        100% { transform: rotate(360deg); }
    }
`;

export const LoadingContent = styled.div`
    background: rgba(255, 255, 255, 0.05);
    border-radius: 20px;
    padding: 3rem 2rem;
    backdrop-filter: blur(15px);
    border: 1px solid rgba(255, 255, 255, 0.1);
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1.5rem;
    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.2);
    max-width: 300px;
    text-align: center;
`;

export const LoadingTitle = styled.h2`
    color: white;
    font-family: 'Krub', sans-serif;
    font-size: 1.5rem;
    font-weight: 600;
    margin: 0;
    text-align: center;
`;

export const LoadingText = styled.p`
    color: rgba(255, 255, 255, 0.8);
    font-family: 'Krub', sans-serif;
    font-size: 1rem;
    font-weight: 400;
    margin: 0;
    line-height: 1.4;
    text-align: center;
`;

export const LoadingDots = styled.div`
    display: flex;
    gap: 8px;
    margin-top: 1rem;
`;

export const LoadingDot = styled.div`
    width: 8px;
    height: 8px;
    background: rgba(245, 172, 0, 0.8);
    border-radius: 50%;
    animation: pulse 1.5s ease-in-out infinite;
    animation-delay: ${props => props.delay || '0s'};

    @keyframes pulse {
        0%, 80%, 100% {
            opacity: 0.3;
            transform: scale(0.8);
        }
        40% {
            opacity: 1;
            transform: scale(1.2);
        }
    }
`;