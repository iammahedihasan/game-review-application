
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import NavBar from "../components/NavBar";



const RootLayout = () => {
  return (
    <div className=" overflow-x-hidden">
      <header className="mb-10">
        <div>
          <Hero />
          <div className="absolute top-0 w-full">
            <NavBar/>
          </div>
       </div>
      </header>
     
      <footer>
        <Footer/>
      </footer>
    </div>
  );
};

export default RootLayout;