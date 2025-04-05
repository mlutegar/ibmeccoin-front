import {Container, Label} from "./Style";
import InputPuro from "../InputPuro/InputPuro";

const InputLabel = ({label, placeholder, value, type, onChange, disabled}) => (
    <Container>
        <Label>
            {label}
        </Label>
        <InputPuro placeholder={placeholder} value={value} type={type} onChange={onChange} disabled={disabled}/>
    </Container>
)

export default InputLabel;