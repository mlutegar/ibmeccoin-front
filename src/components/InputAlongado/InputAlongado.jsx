import {InputAlongadoStyle} from "./Style";

const InputAlongado = ({
                           type,
                           placeholder,
                           value,
                           onChange,
                           onBlur,
                           onFocus,
                           name,
                           title
                       }) => {
    return (
        <InputAlongadoStyle>
            <label htmlFor={name}>
                {title}
            </label>
            <input
                type={type}
                placeholder={placeholder}
                value={value}
                onChange={onChange}
                onBlur={onBlur}
                onFocus={onFocus}
                name={name}
                required
                autoComplete="off"
                autoCorrect="off"
                autoCapitalize="none"
            ></input>
        </InputAlongadoStyle>
    );
}

export default InputAlongado;