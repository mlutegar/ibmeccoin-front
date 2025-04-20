import {TituloStyle} from "./Style";

const Titulo = ({children, className}) => {
    return (
        <TituloStyle className={className}>
            {children}
        </TituloStyle>
    )
}

export default Titulo;