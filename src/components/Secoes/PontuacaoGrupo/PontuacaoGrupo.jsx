import {Style} from "./Style";
import React, {useEffect, useState} from "react";
import API_BASE_URL from "../../../config";
import Cookies from "js-cookie";

const PontuacaoGrupo = ({turma}) => {
    const [saldo, setSaldo] = useState(0);

    return (
        <Style>
            <div className={"texto"}>
                <div className={"texto1"}>
                    Pontuação
                </div>
                <div className={"texto2"}>
                    {`${saldo}`}
                </div>
                <div className={"texto3"}>
                    IC
                </div>
            </div>
        </Style>
    )
}

export default PontuacaoGrupo;