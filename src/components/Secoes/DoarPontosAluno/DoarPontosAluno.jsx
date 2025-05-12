import { DoarPontosAlunoStyle } from "./Style";
import InputPuro from "../../Elementos/InputPuro/InputPuro";
import { useEffect, useState } from "react";
import Cookies from "js-cookie";
import API_BASE_URL from "../../../config";
import { useNavigate } from "react-router-dom";
import CardAluno from "../../Elementos/Cards/CardAluno/CardAluno";
import pegarTodosAlunos from "../../../api/pegarTodosAlunos";

const DoarPontosAluno = () => {
    const [alunos, setAlunos] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");

    useEffect(() => {
        console.log("Search term:", searchTerm);

        async function fetchAlunos() {
            let alunos = await pegarTodosAlunos();

            if (!alunos) {
                return;
            }

            setAlunos(alunos);
        }

        fetchAlunos();
    }, []);

    // Filtra os alunos pelo nome
    const filteredAlunos = alunos.filter(aluno =>
        aluno.first_name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <DoarPontosAlunoStyle>
            <InputPuro
                placeholder={"pesquisar nome aluno"}
                value={searchTerm}
                type={"text"}
                onChange={(e) => setSearchTerm(e.target.value)}
            />
            {filteredAlunos.length ? (
                filteredAlunos.map(aluno => (
                    <CardAluno key={aluno.id} aluno={aluno} />
                ))
            ) : (
                <p>Nenhum aluno cadastrado.</p>
            )}
        </DoarPontosAlunoStyle>
    );
};

export default DoarPontosAluno;