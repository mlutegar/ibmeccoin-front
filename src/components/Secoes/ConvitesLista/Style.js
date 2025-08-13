// ConvitesListaStyles.js
import styled from "styled-components";

export const Container = styled.div`
    max-width: 800px;
    border-radius: 0.5rem;
`;

export const Lista = styled.ul`
    list-style: none;
    padding: 0;
    margin: 0;
`;

export const ItemLista = styled.li`
    background-color: #F5F5F5;
    border: 1px solid #ccc;
    border-radius: 0.5rem;
    padding: 1rem;
    margin-bottom: 1rem;
    font-family: Krub;
    font-size: 1rem;
    line-height: 1.5;
    color: black;

    & > strong {
        font-weight: 700;
    }

    hr {
        margin: 1rem 0;
        border: none;
        border-top: 1px solid #ccc;
    }

    button {
        margin-top: 1rem;
        display: block;
        width: fit-content;
    }
`;

export const Mensagem = styled.p`
    font-family: Krub;
    font-size: 1.25rem;
    text-align: center;
    color: #0935AA;
`;

export const Erro = styled.p`
    font-family: Krub;
    font-size: 1.25rem;
    text-align: center;
    color: red;
`;

export const EmptyStateContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 3rem 2rem;
    background: linear-gradient(135deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.05) 100%);
    border-radius: 20px;
    border: 1px solid rgba(255, 255, 255, 0.2);
    backdrop-filter: blur(10px);
    text-align: center;
    gap: 1.5rem;
    margin: 2rem 0;
`;

export const EmptyStateIcon = styled.div`
    width: 80px;
    height: 80px;
    background: linear-gradient(135deg, #F5AC00 0%, #FFC107 100%);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 2.5rem;
    box-shadow: 0 8px 24px rgba(245, 172, 0, 0.3);
    animation: float 3s ease-in-out infinite;

    @keyframes float {
        0%, 100% { transform: translateY(0px); }
        50% { transform: translateY(-10px); }
    }
`;

export const EmptyStateTitle = styled.h3`
    color: white;
    font-family: 'Krub', sans-serif;
    font-size: 1.5rem;
    font-weight: 600;
    margin: 0;
    line-height: 1.3;
`;

export const EmptyStateMessage = styled.p`
    color: rgba(255, 255, 255, 0.8);
    font-family: 'Krub', sans-serif;
    font-size: 1rem;
    font-weight: 400;
    margin: 0;
    line-height: 1.5;
    max-width: 300px;
`;

export const EmptyStateSubtext = styled.p`
    color: rgba(255, 255, 255, 0.6);
    font-family: 'Krub', sans-serif;
    font-size: 0.9rem;
    font-weight: 400;
    margin: 0;
    line-height: 1.4;
`;
