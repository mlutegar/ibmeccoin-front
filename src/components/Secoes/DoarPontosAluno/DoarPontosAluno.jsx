import { DoarPontosAlunoStyle } from "./Style";
import InputPuro from "../../Elementos/InputPuro/InputPuro";
import { useEffect, useState } from "react";
import Cookies from "js-cookie";
import API_BASE_URL from "../../../config";
import { useNavigate } from "react-router-dom";
import CardAluno from "../../Elementos/Cards/CardAluno/CardAluno";

const DoarPontosAluno = () => {
    const [alunos, setAlunos] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");
    const navigate = useNavigate();

    useEffect(() => {
        async function fetchAlunos() {
            const csrftoken = Cookies.get("csrftoken");

            try {
                const response = await fetch(`${API_BASE_URL}/api/alunos/`, {
                    method: "GET",
                    headers: {
                        accept: "application/json",
                        "X-CSRFToken": csrftoken,
                    },
                });
                if (response.ok) {
                    const data = await response.json();
                    setAlunos(data);
                } else {
                    console.error("Erro ao buscar alunos:", await response.json());
                }
            } catch (error) {
                console.error("Erro ao conectar com a API de alunos:", error);
            }
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
                texto={"pesquisar nome aluno"}
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