import { Texto1, Texto2 } from "./Style";

const Textos = ({texto, versao = 1, tamanho, color = "white"}) => {
  if (versao === 1) {
    return (
      <Texto1 tamanho={tamanho} cor={color}>
        {texto}
      </Texto1>
    )
  }

  if (versao === 2) {
    return (
        <Texto2 tamanho={tamanho} cor={color}>
          {texto}
        </Texto2>
    )
  }
}
export default Textos;