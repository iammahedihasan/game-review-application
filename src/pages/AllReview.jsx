import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import ReviewCard from "../components/ReviewCard";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";


const AllReview = () => {
  const allReviews = useLoaderData()
  const [review, setReviews] = useState(allReviews)
  return (
    <div >
      <header>
        <NavBar/>
      </header>
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

