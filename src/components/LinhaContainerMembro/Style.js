import styled from "styled-components"

export const LinhaContainerMembroStyle = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;

    color: #000;
    font-family: Krub;
    font-size: 1rem;
    font-style: normal;
    font-weight: 600;
    line-height: normal;

    button {
        height: 1.75rem;
        flex-shrink: 0;
        border-radius: 0.625rem;
        background: #F5AC00;
        border: none;

        color: #FFF;
        text-align: center;
        font-family: Krub;
        font-size: 1rem;
        font-style: normal;
        font-weight: 600;
        line-height: normal;

        &:hover {
            cursor: pointer;
        }

        &:active {
            background: #FFA500;
        }
    }
`
