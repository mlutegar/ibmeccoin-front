import { SubtituloInvertidoStyle } from "./Style";

const SubtituloInvertido = ({children, onClick}) => {
    return (
        <SubtituloInvertidoStyle onClick={onClick}>
            {children}
        </SubtituloInvertidoStyle>
    );
}

export default SubtituloInvertido;