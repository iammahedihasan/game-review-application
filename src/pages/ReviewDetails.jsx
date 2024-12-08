import { useLoaderData } from "react-router-dom";
import Star from "../components/Star";
import { FaHeartCirclePlus } from "react-icons/fa6";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import Swal from "sweetalert2";
import { useContext } from "react";
import { authContext } from "../provider/AuthProvider";


const ReviewDetails = () => {
  const reviewDetails = useLoaderData()
  const { user } = useContext(authContext)
  const { email, displayName} = user
  const { _id, image, title, description, rating, year, genre, userName } = reviewDetails
  const allData = {  image, title, description, rating, year, genre, email, displayName }
  
  const watchListHandelar = () => {

    fetch('http://localhost:5000/watchlists', {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(allData)
    })
    .then(res=> res.json())
      .then(data => {
        console.log(data);
        if (data.insertedId) {
          Swal.fire({
            title: "WatchList",
            text: "WatchList ADDED Successfull",
            icon: "success"
          });
        }
        else {
          Swal.fire({
            icon: "error",
            title: "WatchList",
            text: "Already In WatchList",
          });
        }
    })
    
  }

  
  return (
    <div>
      <header>
        <NavBar/>
      </header>
      <div className="hero my-20 ">
        <div className="hero-content items-start flex-col lg:flex-row">
          <img
            src={image}
            className="h-96 rounded-lg shadow-2xl" />
          <div>
            <h1 className="text-5xl font-bold text-[#FFC311]">{title}</h1>
            <div className="flex items-center  gap-8 mb-3  px-2 my-4"><span><span className="font-bold mr-2">{genre}.</span> <span className="text-[#FFC311]">PUblish: {year}</span></span> <span><Star ratting={rating} /></span></div>
            <h3 className="bg-[#FFC311] px-3 py-2 text-white uppercase">Reviewer Name: <span className="font-bold">{userName}</span></h3>
            <p className="py-6 text-lg font-medium">
              <span className="font-bold text-[#FFC311]  mr-2">Review This Game:</span> 
              {description}
            </p>
            <div className="flex justify-center items-center">
              <button onClick={watchListHandelar} className="text-5xl text-[#FFC311] tooltip" data-tip='Add To WatchList'><FaHeartCirclePlus /></button>
            </div>
          </div>
        </div>
      </div>
      <footer>
        <Footer/>
      </footer>
    </div>
  );
};

export default ReviewDetails;