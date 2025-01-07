import Footer from "./Footer";
import NavBar from "./NavBar";


const Support = () => {
  return (
    <div className="min-h-screen  text-gray-800">
      <header className="bg-purple-600  py-4 shadow-md">
        <NavBar/>
      </header>

      <main className="container mx-auto px-4 py-8 mt-16 min-h-[calc(100vh-300px)]">
        <section className="mb-8">
          <h2 className="text-5xl font-bold mb-4 text-[#FFC311]">How can we help you?</h2>
          <p className="text-gray-600  xl:w-[650px]">We are here to assist you with any issues or questions regarding our Game Review application. Please check out the sections below or contact us directly.</p>
        </section>

        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-bold mb-2">Account Issues</h3>
            <p className="text-gray-600">Having trouble logging in or managing your account? Click below for solutions.</p>
           
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-bold mb-2">Technical Problems</h3>
            <p className="text-gray-600">Facing bugs or glitches? Our technical support team can help you out.</p>
           
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-bold mb-2">Feedback and Suggestions</h3>
            <p className="text-gray-600">We value your feedback! Let us know how we can improve our application.</p>
       
          </div>
        </section>
      </main>

      <footer className="bg-gray-800 text-white ">
        <Footer/>
      </footer>
    </div>
  );
};

export default Support;