import Header from "../components/Header";
import { useParams } from "react-router-dom";

function ProfilePage() {
  const { name } = useParams();
  return (
    <main>
      <Header />
      <h1>Página acerca do usuário</h1>
      <p>Usuário: {name} </p>
    </main>
  );
}

export default ProfilePage;
