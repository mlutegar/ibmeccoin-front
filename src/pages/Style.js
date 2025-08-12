import styled from "styled-components";

export const LoginStyle = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 2rem;

    form {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 2rem;
        margin-top: 16px;
    }
`;

export const WelcomeContainer = styled.div`
    text-align: center;
    margin-bottom: 20px;
    margin-top: 20px;

    color: #FFF;
    font-family: Krub;
    font-size: 2.25rem;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
`;

export const WelcomeTitle = styled.h2`
    color: white;
    margin-bottom: 10px;
    font-size: 36px;
    font-weight: bold;
    margin: 0 0 10px 0;

    text-align: center;
`;

export const WelcomeSubtitle = styled.p`
    color: white;
    font-size: 16px;
    margin: 0;

    color: #FFF;
    text-align: center;
    font-family: Krub;
    font-size: 1.25rem;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    margin-top: 0.56rem;

    max-width: 18rem;
`;

export const ForgotPasswordLink = styled.a`
    color: white;
    font-size: 14px;
    text-decoration: underline;
    cursor: pointer;
    margin-top: 8px;
    align-self: center;
    text-align: center;
    
    &:hover {
        color: #ccc;
    }
`;

export const PasswordContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
`;

export const LoadingSpinner = styled.div`
    width: 40px;
    height: 40px;
    border: 4px solid rgba(255, 255, 255, 0.3);
    border-top: 4px solid white;
    border-radius: 50%;
    animation: spin 1s linear infinite;
    margin-bottom: 16px;

    @keyframes spin {
        0% { transform: rotate(0deg); }
        100% { transform: rotate(360deg); }
    }
`;

export const LoadingModal = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.7);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1000;
`;

export const LoadingContent = styled.div`
    background-color: rgba(255, 255, 255, 0.1);
    padding: 32px;
    border-radius: 12px;
    display: flex;
    flex-direction: column;
    align-items: center;
    backdrop-filter: blur(10px);
    border: 1px solid rgba(255, 255, 255, 0.2);
`;

export const LoadingText = styled.p`
    color: white;
    font-size: 18px;
    margin: 0;
    font-weight: 500;
`;

export const RecuperarSenhaStyle = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 2rem;

    form {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 2rem;
        margin-top: 16px;
    }
`;

export const ConvitesStyle = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;

    .header {
        width: 100%;
        display: flex;
        justify-content: space-between;
        box-sizing: border-box;

        .titulo {
            margin: 0;
        }
    }
`