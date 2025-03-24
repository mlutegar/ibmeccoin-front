import { TextoSimplesStyle } from "./Style";

const TextoSimples = ({children}) => {
    return (
        <TextoSimplesStyle>
            {children}
        </TextoSimplesStyle>
    );
}

export default TextoSimples;