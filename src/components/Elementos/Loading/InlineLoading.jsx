import styled from "styled-components";

const LoadingContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 12px;
    padding: 2rem;
    text-align: center;
`;

const LoadingSpinner = styled.div`
    width: 24px;
    height: 24px;
    border: 3px solid rgba(255, 255, 255, 0.3);
    border-top: 3px solid #F5AC00;
    border-radius: 50%;
    animation: spin 1s linear infinite;

    @keyframes spin {
        0% { transform: rotate(0deg); }
        100% { transform: rotate(360deg); }
    }
`;

const LoadingText = styled.span`
    color: white;
    font-family: 'Krub', sans-serif;
    font-size: 1rem;
    font-weight: 400;
`;

const InlineLoading = ({ message = "Carregando..." }) => {
    return (
        <LoadingContainer>
            <LoadingSpinner />
            <LoadingText>{message}</LoadingText>
        </LoadingContainer>
    );
};

export default InlineLoading;