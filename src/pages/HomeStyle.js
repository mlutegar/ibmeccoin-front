import styled from "styled-components";

export const HomeContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    padding: 0 1.5rem;
    max-width: 100%;
`;

export const WelcomeSection = styled.div`
    text-align: center;
    margin-bottom: 1rem;
`;

export const WelcomeMessage = styled.h1`
    color: white;
    font-family: 'Krub', sans-serif;
    font-size: 1.5rem;
    font-weight: 600;
    margin: 0 0 0.5rem 0;
    line-height: 1.3;
`;

export const WelcomeSubtext = styled.p`
    color: rgba(255, 255, 255, 0.8);
    font-family: 'Krub', sans-serif;
    font-size: 1rem;
    font-weight: 400;
    margin: 0;
    line-height: 1.4;
`;

export const SectionTitle = styled.h2`
    color: #FFF;
    font-family: 'Krub', sans-serif;
    font-size: 1.25rem;
    font-weight: 600;
    text-transform: uppercase;  
    letter-spacing: 0.5px;
    position: relative;
    
    &::after {
        content: '';
        display: block;
        width: 40px;
        height: 3px;
        background: linear-gradient(90deg, #F5AC00 0%, #FFC107 100%);
        margin-top: 0.5rem;
        border-radius: 2px;
    }
`;

export const ScoreSection = styled.div`
    margin: 1rem 0;
    display: flex;
    flex-direction: column;
    gap: 1rem;
`;

export const OptionsSection = styled.div`
    margin-top: 1rem;
`;

export const ContentWrapper = styled.div`
    border-radius: 16px;
    padding: 1.5rem;
    backdrop-filter: blur(10px);    
    margin-bottom: 1rem;
`;