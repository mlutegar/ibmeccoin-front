import { StyleInput } from "./Style";

const InputPuro = ({texto, value, type, onChange}) => (
  <StyleInput placeholder={texto} value={value} type={type} onChange={onChange}/>
)

export default InputPuro;