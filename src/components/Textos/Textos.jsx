import {Texto1, Texto2, Subtitulo, SubtituloInvertido, Texto} from "./Style";

const Textos = ({children, versao = 1, tamanho, color = "white"}) => {
  if (versao === 1) {
    return (
      <Texto1 tamanho={tamanho} cor={color}>
        {children}
      </Texto1>
    )
  }

  if (versao === 2) {
    return (
        <Texto2 tamanho={tamanho} cor={color}>
          {children}
        </Texto2>
    )
  }

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