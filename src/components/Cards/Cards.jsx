import {Fundo} from "./Style";
import Textos from "../Textos/Textos";
import Botao from "../Botao/Botao";

const Cards = ({tipo = 1}) => {

    if (tipo === 1) {
        return (
            <Fundo>
                <div style={{display: "flex", justifyContent: "space-between"}}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="70" height="70" viewBox="0 0 70 70" fill="none">
                        <g clip-path="url(#clip0_2084_285)">
                            <path
                                d="M4.77187 4.77273V27.0455H27.0406V4.77273H4.77187ZM31.8124 38.1818V70H0V38.1818H31.8124ZM27.0406 42.9545H4.77187V65.2273H27.0406V42.9545ZM20.9783 49.5115V59.0569H11.4346V49.5115H20.9783ZM31.8124 0V31.8182H0V0H31.8124ZM20.9783 11.3297H11.4346V20.8751H20.9783V11.3297ZM69.974 59.2606V69.9961H53.8415V65.2234H65.2021V59.2606H69.974ZM48.4493 65.2167V69.9895H38.1705V65.2167H48.4493ZM42.9389 38.1604V59.1567H38.1671V38.1604H42.9389ZM54.3844 49.5096V54.2765H59.1635V59.0492H49.6126V49.5096H54.3844ZM70 48.478V53.8293H65.2281V48.478H70ZM69.965 38.3053V43.0781H53.8498V38.3053H69.965ZM69.9874 0V31.8182H38.1749V0H69.9874ZM65.2155 4.77273H42.9468V27.0455H65.2155V4.77273ZM59.1533 11.3297V20.8751H49.6095V11.3297H59.1533Z"
                                fill="black"/>
                        </g>
                        <defs>
                            <clipPath id="clip0_2084_285">
                                <rect width="70" height="70" fill="white"/>
                            </clipPath>
                        </defs>
                    </svg>

                    <div>
                        <Textos
                            versao={4}
                        >
                            QRCode
                        </Textos>
                        <Textos
                            versao={4}
                        >
                            Scaneeie o QR code do dia
                        </Textos>
                    </div>

                </div>
                <div>
                    <Botao>
                        Ir para o QRCode
                    </Botao>
                </div>
            </Fundo>
        )
    }

    if (tipo === 2) {
        return (
            <Fundo>
                <div style={{display: "flex", justifyContent: "space-between"}}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="70" height="70" viewBox="0 0 70 70" fill="none">
                        <g clip-path="url(#clip0_2084_285)">
                            <path
                                d="M4.77187 4.77273V27.0455H27.0406V4.77273H4.77187ZM31.8124 38.1818V70H0V38.1818H31.8124ZM27.0406 42.9545H4.77187V65.2273H27.0406V42.9545ZM20.9783 49.5115V59.0569H11.4346V49.5115H20.9783ZM31.8124 0V31.8182H0V0H31.8124ZM20.9783 11.3297H11.4346V20.8751H20.9783V11.3297ZM69.974 59.2606V69.9961H53.8415V65.2234H65.2021V59.2606H69.974ZM48.4493 65.2167V69.9895H38.1705V65.2167H48.4493ZM42.9389 38.1604V59.1567H38.1671V38.1604H42.9389ZM54.3844 49.5096V54.2765H59.1635V59.0492H49.6126V49.5096H54.3844ZM70 48.478V53.8293H65.2281V48.478H70ZM69.965 38.3053V43.0781H53.8498V38.3053H69.965ZM69.9874 0V31.8182H38.1749V0H69.9874ZM65.2155 4.77273H42.9468V27.0455H65.2155V4.77273ZM59.1533 11.3297V20.8751H49.6095V11.3297H59.1533Z"
                                fill="black"/>
                        </g>
                        <defs>
                            <clipPath id="clip0_2084_285">
                                <rect width="70" height="70" fill="white"/>
                            </clipPath>
                        </defs>
                    </svg>

                    <div>
                        <Textos
                            versao={4}
                        >
                            Grupos
                        </Textos>
                        <Textos
                            versao={4}
                        >
                            Veja seu grupo
                        </Textos>
                    </div>

                </div>
                <div>
                    <Botao>
                        Ir para o grupo
                    </Botao>
                </div>
            </Fundo>
        )
    }

    if (tipo === 3) {
        return (
            <Fundo>
                <div style={{display: "flex", justifyContent: "space-between"}}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="70" height="70" viewBox="0 0 70 70" fill="none">
                        <g clip-path="url(#clip0_2084_285)">
                            <path
                                d="M4.77187 4.77273V27.0455H27.0406V4.77273H4.77187ZM31.8124 38.1818V70H0V38.1818H31.8124ZM27.0406 42.9545H4.77187V65.2273H27.0406V42.9545ZM20.9783 49.5115V59.0569H11.4346V49.5115H20.9783ZM31.8124 0V31.8182H0V0H31.8124ZM20.9783 11.3297H11.4346V20.8751H20.9783V11.3297ZM69.974 59.2606V69.9961H53.8415V65.2234H65.2021V59.2606H69.974ZM48.4493 65.2167V69.9895H38.1705V65.2167H48.4493ZM42.9389 38.1604V59.1567H38.1671V38.1604H42.9389ZM54.3844 49.5096V54.2765H59.1635V59.0492H49.6126V49.5096H54.3844ZM70 48.478V53.8293H65.2281V48.478H70ZM69.965 38.3053V43.0781H53.8498V38.3053H69.965ZM69.9874 0V31.8182H38.1749V0H69.9874ZM65.2155 4.77273H42.9468V27.0455H65.2155V4.77273ZM59.1533 11.3297V20.8751H49.6095V11.3297H59.1533Z"
                                fill="black"/>
                        </g>
                        <defs>
                            <clipPath id="clip0_2084_285">
                                <rect width="70" height="70" fill="white"/>
                            </clipPath>
                        </defs>
                    </svg>

                    <div>
                        <Textos
                            versao={4}
                        >
                            Loja
                        </Textos>
                        <Textos
                            versao={4}
                        >
                            Veja a loja
                        </Textos>
                    </div>

                </div>
                <div>
                    <Botao>

                    </Botao>
                </div>
            </Fundo>
        )
    }

    if (tipo === 4) {
        return (
            <Fundo>

            </Fundo>
        )
    }

    if (tipo === 5) {
        return (
            <Fundo>

            </Fundo>
        )
    }


}

export default Cards;