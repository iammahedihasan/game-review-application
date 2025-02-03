import { useEffect, useState } from "react";
import SortByRatings from "../components/SortByRatings";
import img1 from "../assets/cd_5_angle-560x500.jpg"
import img2 from "../assets/product-2-560x500.jpg"
import img3 from "../assets/product-3-560x500.jpg"
import { Typewriter } from "react-simple-typewriter";
import { Fade } from "react-awesome-reveal";


const Home = () => {
  const [sort, setSort] = useState([])
 
  useEffect(() => {
    fetch('https://game-review-server-sandy.vercel.app/all-reviews?sortBy="rating"')
      .then(res => res.json())
      .then(data => {
        setSort(data)
       
      })
  }, [])


  return (
    <div className="mb-28">
      <div className="w-10/12 mx-auto mb-20 mt-20">
        <div>
          <h2 className="bg-[#FFC311] py-2 font-bold text-3xl mt-8 mb-8 text-center text-white">
            <Typewriter
              words={['Highest Rated Games']}
              loop={true}
              cursor
              cursorStyle='|'
              typeSpeed={100}
              deleteSpeed={50}
              delaySpeed={2000}
            />
          </h2>
        </div>
        
         <Fade>
            <main className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 grid-cols-1 place-items-center gap-8 md:gap-3 ">
              {
                sort.map(ratings => <SortByRatings key={ratings._id} ratings={ratings}></SortByRatings>)
              }
            </main>
         </Fade>
     
       <Fade>
          <section className="my-16">
            <div>
              <h2 className="text-4xl text-center font-bold uppercase ">Game<span className="text-[#FFC311]">Shop</span></h2>
            </div>
            {/* container */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 place-items-center  my-10 place-self-center md:gap-5 gap-8">
              <div className="card bg-base-100 w-96 rounded-none">
                <figure>
                  <img
                    src={img1}
                    alt="Shoes" />
                </figure>
                <div className="py-2 px-2">
                  <h2 className="card-title text-3xl uppercase font-bold mb-2">Game Pack DVD</h2>
                  <p className="text-[#FFC311] font-bold text-4xl">$99</p>
  
                </div>
              </div>
  
              {/* 2 */}
              <div className="card bg-base-100 w-96 rounded-none">
                <figure>
                  <img
                    src={img2}
                    alt="Shoes" />
                </figure>
                <div className="py-2 px-2">
                  <h2 className="card-title text-3xl uppercase font-bold mb-2">Office Coffee Pack</h2>
                  <p className="text-[#FFC311] font-bold text-4xl">$59</p>
  
                </div>
              </div>
  
              {/* 3 */}
              <div className="card bg-base-100 w-96 rounded-none">
                <figure>
                  <img
                    src={img3}
                    alt="Shoes" />
                </figure>
                <div className="py-2 px-2">
                  <h2 className="card-title text-3xl uppercase font-bold mb-2">Pulse Headphone</h2>
                  <p className="text-[#FFC311] font-bold text-4xl">$119</p>
  
                </div>
              </div>
            </div>
          </section>
       </Fade>


      </div>
    <Fade>
        <section>
  
          <div className="relative bg-[#D59B16] text-white py-28">
            <div className="container mx-auto flex flex-col xl:flex-row items-center justify-between px-5">
              {/* Background Image */}
              <div className="absolute inset-0 bg-cover bg-center opacity-20 bg-Gaming"></div>
              {/* Content */}
              <div className="relative z-10 w-full md:flex items-center justify-center">
                <h2 className="text-3xl font-bold mr-6"><Typewriter
                  words={['NEWSLETTER:']}
                  loop={true}
                  cursor
                  cursorStyle='|'
                  typeSpeed={100}
                  deleteSpeed={50}
                  delaySpeed={2000}
                /></h2>
                <form className="flex flex-col xl:flex-row w-full md:w-auto gap-4 text-white">
                  <input
                    type="email"
                    placeholder="Your email address"
                    className="w-full xl:w-72 px-4 py-2 outline-none  bg-transparent border-white border-2 placeholder-white"
                    required
                  />
                  <input
                    type="text"
                    placeholder="First Name"
                    className="w-full xl:w-48 px-4 py-2 bg-transparent border-white border-2 outline-none  placeholder-white"
                  />
                  <input
                    type="text"
                    placeholder="Last Name"
                    className="w-full xl:w-48 px-4 py-2 bg-transparent border-white border-2 outline-none placeholder-white"
                  />
                  <button
                    type="submit"
                    className="bg-white text-[#FFC311] font-semibold py-2 px-10  hover:bg-gray-100"
                  >
                    SUBMIT
                  </button>
                </form>
              </div>
            </div>
          </div>
  
  
        </section>
    </Fade>
    </div>
  );
};

export default Home;