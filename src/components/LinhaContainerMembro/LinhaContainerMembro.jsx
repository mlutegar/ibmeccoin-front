import { LinhaContainerMembroStyle } from "./Style";

const LinhaContainerMembro = ({children}) => {
    return (
        <LinhaContainerMembroStyle>
            {children}
            <button>
                Transferir
            </button>
        </LinhaContainerMembroStyle>
    );
}

export default LinhaContainerMembro;