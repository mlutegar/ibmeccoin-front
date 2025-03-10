import {Container, Label} from "./Style";
import InputPuro from "../InputPuro/InputPuro";

const InputLabel = ({label, placeholder}) => (
    <Container>
        <Label>
            {label}
        </Label>
        <InputPuro texto={placeholder} />
    </Container>
)

export default InputLabel;