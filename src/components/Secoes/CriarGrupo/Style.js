// Style.js
import styled from "styled-components";

export const Container = styled.div`
    max-width: 800px;
    margin: 2rem auto;
    background-color: #fff;
    border-radius: 0.5rem;
    padding: 1.5rem;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

export const Title = styled.h1`
    font-family: Krub;
    font-size: 1.5rem;
    text-align: center;
    color: #0935AA;
    margin-bottom: 1rem;
`;

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    gap: 1rem;

    label {
        display: flex;
        flex-direction: column;
        color: black;
    }
`;

export const Input = styled.input`
    padding: 0.75rem;
    border: 1px solid #ccc;
    border-radius: 0.5rem;
    font-family: Krub;
    font-size: 1rem;
`;

export const Button = styled.button`
    padding: 0.75rem;
    background-color: #0935AA;
    color: #fff;
    border: none;
    border-radius: 0.5rem;
    font-family: Krub;
    font-size: 1rem;
    cursor: pointer;
    transition: background-color 0.3s ease;

    &:hover {
        background-color: #072e8a;
    }
`;

export const Message = styled.p`
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
