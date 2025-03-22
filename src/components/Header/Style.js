import styled from 'styled-components';

export const Nav = styled.nav`
    .navbar{
        background: #0934aa;
        border-radius: 0 0 20px 20px;
        padding: 25px;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        z-index: 1;
        position: absolute;
        width: 100%;
        top: 0;
        box-sizing: border-box;
        height: 84px;
        left: 0;
        transition: border-radius 0.1s ease-in-out, height 0.5s ease-in-out;
    }
    
    .open{
        border-radius: 0 !important;
    }
`;

export const HeaderContent = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`;

export const User = styled.div`
    text-align: center;
    justify-content: center;
    display: flex;
    font-weight: 600;
    align-items: center;

    &.branco {
        /* Adicione estilos específicos para a classe "branco", se necessário */
    }
`;

export const Menu = styled.div`
    cursor: pointer;
    transition: all 0.5s;

    &:hover {
        transform: scale(1.1);
    }
`;

export const MenuClose = styled.div`
    cursor: pointer;
    transition: all 0.5s;
    display: flex;

    &:hover {
        transform: scale(1.1);
    }
`;

export const Dropdown = styled.div`
    .dropdown{
        display: flex;
        flex-direction: column;
        box-sizing: border-box;
        width: 100%;
        position: absolute;
        background-color: #0934aa;
        z-index: -10;
        height: 0px;
        margin: 50px 0 0 0;
        left: 0;
        transition: height 0.5s, top 0.5s, border-top 0.5s 0.5s;
        border-radius: 0 0 20px 20px;
        border-top: 0;
        top: -30px;
    }
    
    .open{
        height: 250px;
        padding: 1rem 0 0 3rem;
        border-top: 1px solid #ffffff;
        top: 30px;
    }
    
    .close ul{
        opacity: 0;
        transition: opacity 0.1s;
        left: 3rem;
        position: relative;
        display: none;
    }

    ul {
        opacity: 1;
        list-style-type: none;
        padding: 0;
        margin: 0;

        li {
            opacity: 1;
            display: block;
            transition: opacity 0.5s;
            margin-top: 10px;
            margin-bottom: 35px;
            font-weight: 600;
            position: relative;

            &::before {
                content: '';
                position: absolute;
                left: -20px;
                width: 10px;
                height: 10px;
                background-color: #F5AC00;
                border-radius: 50%;
                top: 5px;
            }
        }
    }
`;

export const LinkItem = styled.a`
    color: white;
    text-decoration: none;
    transition: color 0.5s;

    &:hover {
        color: #F5AC00;
    }
`;
