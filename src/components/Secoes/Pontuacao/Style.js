import styled from "styled-components";

const Style = styled.div`
    width: 21.1875rem;
    height: 5.625rem;
    flex-shrink: 0;
    border-radius: 1.25rem;
    background: #FFF;
    margin-bottom: 1rem;

    .texto{
        padding: 0 1rem;
        display: flex;
        flex-direction: row;
        align-items: center;
    }
    
    .texto1 {
        color: #0935AA;
        font-family: Krub;
        font-size: 1.25rem;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
    }

    .texto2 {
        margin-left: 1rem;
        
        color: #0935AA;
        font-family: Krub;
        font-size: 4rem;
        font-style: normal;
        font-weight: 600;
        line-height: normal;
        text-transform: uppercase;
    }

    .texto3 {
        color: #0935AA;
        font-family: Krub;
        font-size: 2.25rem;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
        text-transform: uppercase;
    }


`;

export {Style};