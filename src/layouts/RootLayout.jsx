
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import Hero from "../components/Hero";


const RootLayout = () => {
  return (
    <div className="font-kanit overflow-x-hidden">
      <header>
        <NavBar/>
      </header>
      <main className="mb-48">
        <Hero/>
      </main>
      <footer>
        <Footer/>
      </footer>
    </div>
  );
};

export default RootLayout;