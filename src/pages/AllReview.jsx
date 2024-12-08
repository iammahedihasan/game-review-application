import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import ReviewCard from "../components/ReviewCard";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import { Typewriter } from "react-simple-typewriter";


const AllReview = () => {
  const allReviews = useLoaderData()
  const [review, setReviews] = useState(allReviews)
  return (
    <div >
      <header>
        <NavBar/>
      </header>
      <div>
        <h2 className="text-[#FFC311] font-bold text-3xl mt-8 mb-8 text-center uppercase"><Typewriter
          words={['All Reviews']}
          loop={true}
          cursor
          cursorStyle='|'
          typeSpeed={100}
          deleteSpeed={50}
          delaySpeed={2000}
        /></h2>
      </div>
      <div className="grid md:grid-cols-3 lg:grid-cols-4 grid-cols-1 place-items-center  gap-10 w-9/12 mx-auto my-10 ">
        {
          review.map(r=> <ReviewCard key={r._id} r={r}></ReviewCard> )
        }
      </div>
      <footer>
        <Footer/>
      </footer>
    </div>
  );
};

export default AllReview;

