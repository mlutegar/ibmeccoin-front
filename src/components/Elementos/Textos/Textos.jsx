import {Subtitulo, SubtituloInvertido, Texto} from "./Style";

const Textos = ({children, versao = 1, tamanho, color = "white"}) => {
  if (versao === 4) {
    return (
        <Subtitulo>
          {children}
        </Subtitulo>
    )
  }

  if (versao === 5) {
    return (
        <SubtituloInvertido>
          {children}
        </SubtituloInvertido>
    )
  }

  if (versao === 6) {
    return (
        <Texto>
          {children}
        </Texto>
    )
  }
}
export default Textos;