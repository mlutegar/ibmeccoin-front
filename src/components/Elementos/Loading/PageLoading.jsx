import {
    LoadingContainer,
    LoadingSpinner,
    LoadingContent,
    LoadingTitle,
    LoadingText,
    LoadingDots,
    LoadingDot
} from "./Style";

const PageLoading = ({ 
    title = "Carregando...", 
    message = "Por favor, aguarde enquanto carregamos o conteúdo.",
    showDots = true 
}) => {
    return (
        <LoadingContainer>
            <LoadingContent>
                <LoadingSpinner />
                <LoadingTitle>{title}</LoadingTitle>
                <LoadingText>{message}</LoadingText>
                {showDots && (
                    <LoadingDots>
                        <LoadingDot delay="0s" />
                        <LoadingDot delay="0.2s" />
                        <LoadingDot delay="0.4s" />
                    </LoadingDots>
                )}
            </LoadingContent>
        </LoadingContainer>
    );
};

export default PageLoading;