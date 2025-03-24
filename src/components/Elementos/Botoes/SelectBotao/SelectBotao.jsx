import { SelectBotaoStyle } from "./Style";
import SubtituloInvertido from "../../Textos/SubtituloInvertido/SubtituloInvertido";

const SelectBotao = ({children, type, onClick}) => {
    return (
        <SelectBotaoStyle>
            <button type={type} onClick={onClick}>
                <SubtituloInvertido>
                    {children}
                </SubtituloInvertido>
            </button>
        </SelectBotaoStyle>
    );
}

export default SelectBotao;