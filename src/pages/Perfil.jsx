import { signOut } from "firebase/auth"
import { auth } from "../config/Firebase";
import Base from "./Base";
import { useNavigate } from "react-router-dom";
import Textos from "../components/Textos/Textos";
import BotaoPrimario from "../components/Botoes/BotaoPrimario/BotaoPrimario";

const Perfil = () => {
  const navigate = useNavigate();

  const handleLogout = (e) =>{
    e.preventDefault();
    signOut(auth);
    window.localStorage.removeItem("token");
    window.localStorage.removeItem("username");
    window.localStorage.removeItem("alunoId");
    window.localStorage.removeItem("tipo");
    window.localStorage.removeItem("alunoNome");
    navigate("/");
  }

  return (
    <Base>
      <Textos>
        PERFIL
      </Textos>
      <BotaoPrimario onClick={handleLogout}>Logout</BotaoPrimario>
    </Base>
  )
}


export default Perfil;