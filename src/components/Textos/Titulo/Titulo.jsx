import {TituloStyle} from "./Style";

const Titulo = ({children}) => {
    return (
        <TituloStyle>
            {children}
        </TituloStyle>
    )
}

export default Titulo;