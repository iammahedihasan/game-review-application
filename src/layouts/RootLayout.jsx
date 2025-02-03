
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import NavBar from "../components/NavBar";
import News from "../components/News";



const RootLayout = () => {
  return (
    <div className="overflow-x-hidden">
      <header>
          <NavBar />
      </header>
      <main className="mt-16">
        <div>
          <Hero />
        </div>
        <Outlet />
        <News/>
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default RootLayout;