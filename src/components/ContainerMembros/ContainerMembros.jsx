import {ContainerMembrosStyle} from "./Style";
import LinhaContainerMembro from "../LinhaContainerMembro/LinhaContainerMembro";

const ContainerMembros = ({membrosNomes}) => {

    const membrosnomes = [
        "Lucas",
        "Ana",
        "Carlos",
        "Maria",
        "João",
    ];

    return (
        <ContainerMembrosStyle>
            {membrosNomes.map((membro, index) => (
                <LinhaContainerMembro key={index}>
                    {membro}
                </LinhaContainerMembro>
            ))
            }
        </ContainerMembrosStyle>
    );
}

export default ContainerMembros;