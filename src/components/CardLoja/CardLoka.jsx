import { CardLojaStyle } from "./Style";

const CardLoja = ({nome, preco, descricao, onClick}) => {
    return (
        <CardLojaStyle>
            <div className={'info'}>
                <div className={'nome-preco'}>
                    {nome} - {preco} IC
                </div>
                <div className={'descricao'}>
                    {descricao}
                </div>
            </div>
            <div className={'botao'} onClick={onClick}>
                Comprar
            </div>
        </CardLojaStyle>
    );
}

export default CardLoja;