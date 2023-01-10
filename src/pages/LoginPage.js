import Header from "../components/Header";
import { useParams } from "react-router-dom";

function LoginPage() {
  const { userName } = useParams();
  return (
    <main>
      <Header />
      <h1>Página de Login</h1>
      <p>Login: {userName} </p>
    </main>
  );
}

export default LoginPage;
