// ConviteFormStyles.js
import styled from "styled-components";

// Estilização do formulário
export const StyleForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  max-width: 400px;
  margin: 1rem auto;
  padding: 1rem;
  border-radius: 0.5rem;
`;

// Estilização do input
export const StyleInput = styled.input`
  width: 100%;
  height: 2.75rem;
  padding: 0 1rem;
  border: 1px solid #ccc;
  border-radius: 2.3125rem;
  font-size: 1rem;
  font-family: Krub;
  outline: none;
  
  &:focus {
    border-color: #0935AA;
  }
`;
