import { HeaderTituloStyle } from "./Style";
import Titulo from "../Elementos/Textos/Titulo/Titulo";
import BotaoVoltar from "../Elementos/Botoes/BotaoVoltar/BotaoVoltar";
import { useNavigate } from "react-router-dom";

const HeaderTitulo = ({children}) => {
    const navigate = useNavigate();
    
    const handleVoltar = () => {
        navigate("/");
    };

    return (
        <HeaderTituloStyle>
            <Titulo>
                {children}
            </Titulo>
            <BotaoVoltar onClick={handleVoltar} />
        </HeaderTituloStyle>
    );
}

export default HeaderTitulo;