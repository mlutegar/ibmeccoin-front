import Cards from "../Cards/Cards";
import {Container} from "./Style";

const OpcoesHome = () => {
    return (
        <Container>
            <Cards
                tipo={1}
            />
            <Cards
                tipo={2}
            />
            <Cards
                tipo={3}
            />
        </Container>
    )
}

export default OpcoesHome;