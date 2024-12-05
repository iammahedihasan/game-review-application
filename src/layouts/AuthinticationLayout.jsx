import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar";


const AuthinticationLayout = () => {
  return (
    <div>
      <header>
        <NavBar/>
      </header>
      <main>
        <Outlet/>
      </main>
    </div>
  );
};

export default AuthinticationLayout;