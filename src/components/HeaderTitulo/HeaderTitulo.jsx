import { HeaderTituloStyle } from "./Style";
import Titulo from "../Elementos/Textos/Titulo/Titulo";
import BotaoVoltar from "../Elementos/Botoes/BotaoVoltar/BotaoVoltar";

const HeaderTitulo = ({children}) => {
    return (
        <HeaderTituloStyle>
            <Titulo>
                {children}
            </Titulo>
            <BotaoVoltar onClick={() => window.history.back()} />
        </HeaderTituloStyle>
    );
}

export default HeaderTitulo;