import { useContext, useEffect, useState } from "react";
import { authContext } from "../provider/AuthProvider";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import MyreviewCard from "../components/MyreviewCard";


const MyReviews = () => {
  const { user } = useContext(authContext)
  const [myReview, setReview] = useState([])
  

  useEffect(() => {
    fetch(`http://localhost:5000/all-reviews?email=${user.email}`)
    .then(res=> res.json())
      .then(data => {
        setReview(data)
        console.log(data);
    })
},[])

  return (
    <div>
      <header>
        <NavBar/>
      </header>

      <div>
        <h2 className="text-[#FFC311] font-bold text-3xl mt-8 mb-8 text-center">Your Reviews</h2>
      </div>
      <main className="mb-20">
        
        {
          myReview.map(review=> <MyreviewCard key={review._id} review={review} setReview={setReview} myReview={myReview}></MyreviewCard>)
        }
      </main>

      <footer>
        <Footer/>
      </footer>

    </div>
  );
};

export default MyReviews;