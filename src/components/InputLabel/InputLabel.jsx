import {Container, Label} from "./Style";
import InputPuro from "../InputPuro/InputPuro";

const InputLabel = ({label, placeholder, value, type, onChange}) => (
    <Container>
        <Label>
            {label}
        </Label>
        <InputPuro texto={placeholder} value={value} type={type} onChange={onChange}/>
    </Container>
)

export default InputLabel;