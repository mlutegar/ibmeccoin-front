import {useEffect} from "react";
import Base from "./Base";
import {useNavigate} from "react-router-dom";
import Pontuacao from "../components/Secoes/Pontuacao/Pontuacao";
import OpcoesHome from "../components/Secoes/OpcoesHome/OpcoesHome";
import {
    HomeContainer,
    WelcomeSection,
    WelcomeMessage,
    WelcomeSubtext,
    SectionTitle,
    ScoreSection,
    OptionsSection,
    ContentWrapper
} from "./HomeStyle";

const Home = () => {
    const navigate = useNavigate();

    useEffect(() => {
        const token = localStorage.getItem("token");
        const tipo = localStorage.getItem("tipo");

        if (!token) {
            navigate("/login");
        }

        if (tipo === "professor") {
            navigate("/professor");
        }

    }, [navigate]);

    const userName = localStorage.getItem("alunoNome") || "Aluno";

    return (
        <Base>
            <HomeContainer>
                <WelcomeSection>
                    <WelcomeMessage>Olá, {userName}!</WelcomeMessage>
                    <WelcomeSubtext>Bem-vindo à sua carteira digital IBMEC</WelcomeSubtext>
                </WelcomeSection>

                <ScoreSection>
                    <SectionTitle>Sua Pontuação</SectionTitle>
                    <Pontuacao/>
                </ScoreSection>

                <OptionsSection>
                    <SectionTitle>Ações Disponíveis</SectionTitle>
                    <ContentWrapper>
                        <OpcoesHome/>
                    </ContentWrapper>
                </OptionsSection>
            </HomeContainer>
        </Base>
    );
};

export default Home;
