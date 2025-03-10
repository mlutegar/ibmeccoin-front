import { StyleBotao } from "./Style";

const Botao = ({texto, versaoInvertido = false}) => (
  <StyleBotao versaoInvertido = {versaoInvertido}>
      {texto}
  </StyleBotao>
)

export default Botao;