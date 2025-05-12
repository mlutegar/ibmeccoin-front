import styled from "styled-components"

export const CardConviteStyle = styled.div`
    width: 21.125rem;
    height: 5.0625rem;
    flex-shrink: 0;
    border-radius: 1.25rem;
    background: #FFF;
    display: flex;
    align-items: center;
    justify-content: space-between;
    
    .parte1{
        margin-left: 1rem;
    }
    
    .parte2{
        margin-right: 1rem;
        display: flex;
        gap: 1rem;
    }
    
    .btn1, .btn2{
        width: 3.375rem;
        height: 2.75rem;
        flex-shrink: 0;
        border-radius: 0.625rem;
        background: #F5AC00;
        border: none;

        color: #FFF;
        font-family: Krub;
        font-size: 1rem;
        font-style: normal;
        font-weight: 600;
        line-height: normal;
    }

    .btn2{
        background: #0935AA;
    }
`
