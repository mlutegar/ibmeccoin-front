import { onAuthStateChanged } from "firebase/auth"
import Base from "./Base"
import { auth } from "../config/Firebase";
import { useEffect } from "react";
import Botao from "../components/Botao/Botao";
import InputPuro from "../components/InputPuro/InputPuro";
import InputLabel from "../components/InputLabel/InputLabel";
import {Logo} from "../svg/Logo";

const Home = () => {

  /* useEffect(()=> {
    onAuthStateChanged(auth, (user)=> {
      if (user) {
        window.sessionStorage.setItem("accessToken", user.accessToken);
      } else {
        window.sessionStorage.removeItem("accessToken");
      }
    })
  },[]) */


  return (
    <Base>
        <Logo/>
        <InputLabel label={"Matricula"} placeholder={"Digite sua matricula"} />
        <InputLabel label={"Senha"} placeholder={"Digite sua senha"} />
        <Botao texto="Entrar" />
        <Botao texto="Criar conta" versaoInvertido={true} />
    </Base>
  )
}

export default Home