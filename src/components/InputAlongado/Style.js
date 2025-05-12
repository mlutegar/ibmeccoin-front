import styled from "styled-components"

export const InputAlongadoStyle = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    width: 100%;
    gap: 1rem;
    
    label {
        color: #FFF;
        text-align: center;
        font-family: Krub;
        font-size: 1rem;
        font-style: normal;
        font-weight: 700;
        line-height: normal;
    }
    
    input {
        border-radius: 1.25rem;
        background: #FFF;
        width: 21rem;
        height: 2.625rem;
        flex-shrink: 0;
        border: none;

        color: rgba(0, 0, 0, 0.70);
        font-family: Krub;
        font-size: 0.875rem;
        font-style: normal;
        font-weight: 500;
        line-height: normal;
        
        &:focus {
            outline: none;
            box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.2);
            transition: all 0.3s ease-in-out;
        }
        
        &::placeholder {
            color: rgba(0, 0, 0, 0.70);
            font-family: Krub;
            font-size: 0.875rem;
            font-style: normal;
            font-weight: 500;
            line-height: normal;
        }
    }
`
