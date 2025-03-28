import { CardAlunoStyle } from "./Style";
import CardInfo from "../CardInfo/CardInfo";
import {useNavigate} from "react-router-dom";
import {useEffect, useState} from "react";
import getSaldoAluno from "../../../../api/getSaldoAluno";

const CardAluno = ({ aluno }) => {
    const [saldo, setSaldo] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        async function fetchSaldo() {
            const saldoObtido = await getSaldoAluno(aluno.id);
            setSaldo(saldoObtido);
        }
        fetchSaldo();
    }, [aluno.id]);

    return (
        <CardAlunoStyle>
            <CardInfo
                key={aluno.id}
                titulo={aluno.first_name}
                subtitulo={
                    saldo !== null ? `Saldo ${saldo} IC` : "Carregando saldo..."
                }
                botaoTexto={"DOAR PONTOS"}
                onClick={() => navigate("/doar", { state: { aluno } })}
            />
        </CardAlunoStyle>
    );
};

export default CardAluno;