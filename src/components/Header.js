import { useNavigate } from "react-router-dom";
import { goToProfile, goToHome, goToLogin } from "../routes/coordinator";

function Header() {
  const navigate = useNavigate();

  return (
    <header>
      <button onClick={() => goToHome(navigate)}>Ir para página inicial</button>
      <button onClick={() => goToProfile(navigate, "Carlos")}>
        Ir para página de perfil
      </button>
      <button onClick={() => goToLogin(navigate, "TeemoCarlos")}>
        {" "}
        Ir Para Página de Login{" "}
      </button>
    </header>
  );
}

export default Header;
