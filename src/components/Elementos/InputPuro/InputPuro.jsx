import { StyleInput } from "./Style";

const InputPuro = ({placeholder, value, type, onChange, required, className}) => (
  <StyleInput placeholder={placeholder} value={value} type={type} onChange={onChange} required={required} className={className} />
)

export default InputPuro;
