import { StyleBotao } from "./Style";

const Botao = ({texto, versaoInvertido = false, type}) => (
  <StyleBotao versaoInvertido = {versaoInvertido} type={type}>
      {texto}
  </StyleBotao>
)

export default Botao;