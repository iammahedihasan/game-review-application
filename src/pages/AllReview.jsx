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
      <header className="px-10">
        <NavBar/>
      </header>
      <div className="grid grid-cols-4  gap-10 w-9/12 mx-auto my-10 ">
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

