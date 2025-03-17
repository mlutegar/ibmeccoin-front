import React, { useState } from 'react';
import {
    Nav,
    HeaderContent,
    User,
    Menu,
    MenuClose,
    Dropdown,
    LinkItem
} from './Style';
import { useNavigate } from 'react-router-dom';
import Textos from "../Textos/Textos";

const Header = () => {
    const [user] = useState(localStorage.getItem('username'));
    const [isNavOpen, setIsNavOpen] = useState(false);
    const [tipo] = useState(localStorage.getItem('tipo'));
    const navigate = useNavigate();

    const toggleNav = () => {
        setIsNavOpen(prevState => !prevState);
    };

    return (
        <Nav aberto={isNavOpen}>
            <HeaderContent>
                <Textos
                    versao={5}
                >
                    Olá, {user}
                </Textos>

                {/* Exibe o Menu ou MenuClose conforme o estado */}
                {!isNavOpen ? (
                    <Menu onClick={toggleNav}>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="39"
                            height="39"
                            viewBox="0 0 39 31"
                            fill="none"
                        >
                            <path
                                d="M1.16666 1.75H37.8333M1.16666 15.5H37.8333M1.16666 29.25H37.8333"
                                stroke="white"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                        </svg>
                    </Menu>
                ) : (
                    <MenuClose onClick={toggleNav}>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="39"
                            height="39"
                            viewBox="0 0 46 46"
                            fill="none"
                        >
                            <path
                                d="M6.44 39.2288L39.56 6.10883"
                                stroke="white"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                            <path
                                d="M6.44 6.10883L39.56 39.2288"
                                stroke="white"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                        </svg>
                    </MenuClose>
                )}
            </HeaderContent>

            {/* Renderiza o dropdown apenas se a navbar estiver aberta */}
            {isNavOpen && (
                tipo === "aluno" ? (
                    <Dropdown>
                        <ul>
                            <li>
                                <LinkItem onClick={() => { navigate('/'); toggleNav(); }}>Tela inicial</LinkItem>
                            </li>
                            <li>
                                <LinkItem onClick={() => { navigate('/grupo'); toggleNav(); }}>Grupo</LinkItem>
                            </li>
                            <li>
                                <LinkItem href="/">Loja</LinkItem>
                            </li>
                            <li>
                                <LinkItem onClick={() => { navigate('/perfil'); toggleNav(); }}>Perfil</LinkItem>
                            </li>
                        </ul>
                    </Dropdown>
                ) : (
                    <Dropdown>
                        <ul>
                            <li>
                                <LinkItem onClick={() => {
                                    navigate('/professor');
                                    toggleNav();
                                }}>Tela inicial</LinkItem>
                            </li>
                            <li>
                                <LinkItem onClick={() => {
                                    navigate('/qr-code');
                                    toggleNav();
                                }}>QrCode</LinkItem>
                            </li>
                            <li>
                                <LinkItem onClick={() => { navigate('/perfil'); toggleNav(); }}>Perfil</LinkItem>
                            </li>
                        </ul>
                    </Dropdown>
                )
            )}
        </Nav>
    );
};

export default Header;
