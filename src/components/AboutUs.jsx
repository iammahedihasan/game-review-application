import { Link } from 'react-router-dom';
import bg from '../assets/img2.jpg';
import NavBar from './NavBar';
import Footer from './Footer';

const AboutUs = () => {
  return (
    <div className='font-kanit'>
      <header>
        <NavBar />
      </header>
    

<h2 className='text-4xl font-bold text-center mt-28'>About Us</h2>
      <div className=" text-white font-sans mt-20 md:mx-28">
       
        <div className="relative w-full h-64 bg-cover bg-center bg-Gaming">
          <div className="absolute inset-0 bg-black bg-opacity-60 flex flex-col items-center justify-center">
            <h1 className="md:text-4xl font-bold">GameReview Newsletter</h1>
            <p className="mt-2">FRESH UPDATES</p>
            <div className="mt-4 flex items-center gap-2 justify-center">
              <input
                type="email"
                placeholder="Your Email"
                className="px-4 py-2  focus:outline-none text-black md:w-96"
              />
              <button className="bg-[#FFC311] px-4 py-2">
                Subscribe
              </button>
            </div>
          </div>
        </div>

       
        <div className="grid md:grid-cols-4 gap-4 text-center pt-8 text-gray-900">
          <div>
            <h2 className=" text-3xl md:text-6xl font-bold">5378</h2>
            <p className="mt-2">Users</p>
          </div>
          <div>
            <h2 className="text-3xl md:text-6xl font-bold">421</h2>
            <p className="mt-2">Games</p>
          </div>
          <div>
            <h2 className="text-3xl md:text-6xl font-bold">9037</h2>
            <p className="mt-2">Likes</p>
          </div>
          <div>
            <h2 className="text-3xl md:text-6xl font-bold">407</h2>
            <p className="mt-2">Shares</p>
          </div>
        </div>
      </div>
     
      
      <div className="bg-gray-100 text-gray-800 py-16 px-4 text-center my-20">
        <div className="max-w-3xl mx-auto">
          <div className="text-2xl md:text-3xl font-light italic text-gray-600">
            <p>
              &quot;Being an experienced user, it was super fun and interesting for me to explore your website.
              Very impressed with the selection of items and topics for discussion. I will recommend
              your products to all of my friends in this area!&quot;
            </p>
          </div>
         
          <div className="mt-4">
            <h3 className="text-xl font-bold">Daniel Moore</h3>
            <p className="text-gray-500">Senior Manager</p>
          </div>
        </div>
      </div>

      <footer>
        <Footer/>
      </footer>
    </div>
  );
};

export default AboutUs;