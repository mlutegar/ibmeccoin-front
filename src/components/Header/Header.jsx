import { Link } from "react-router-dom";
import { Top } from "./Style";

const Header = () => (
  <Top>
    <Link to="/">Home</Link>
    
    { window.sessionStorage.getItem('token')
    ? <Link to="/logout">Logout</Link>
    : <Link to="/login">Login</Link>
    }
    
  </Top>
)

export default Header;