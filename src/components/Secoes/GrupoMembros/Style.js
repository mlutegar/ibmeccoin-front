// GrupoMembrosStyles.js
import styled from "styled-components";

export const Container = styled.div`
    max-width: 600px;
    margin: 2rem auto;
    padding: 1.5rem;
    color: white !important;
    border-radius: 0.5rem;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const Title = styled.h2`
    font-family: Krub, sans-serif;
    font-size: 1.75rem;
    color: #0935AA;
    text-align: center;
    margin-bottom: 1.5rem;
`;

export const List = styled.ul`
    list-style: none;
    padding: 0;
    margin: 0;
`;

export const ListItem = styled.li`
    font-family: Krub, sans-serif;
    font-size: 1rem;
    color: #333;
    padding: 0.75rem 1rem;
    border-bottom: 1px solid #f0f0f0;

    &:last-child {
        border-bottom: none;
    }
`;

export const Message = styled.p`
    font-family: Krub, sans-serif;
    font-size: 1rem;
    color: #555;
    text-align: center;
    margin-top: 1rem;
`;
