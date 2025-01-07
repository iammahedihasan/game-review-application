import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import ReviewCard from "../components/ReviewCard";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import { Typewriter } from "react-simple-typewriter";


const AllReview = () => {
  const allReviews = useLoaderData()
  const [review, setReviews] = useState(allReviews)
  const [sort, setSort] = useState()
  const [filter, setFilter] = useState()
  

  const handleSort = sortType => {
    setSort(sortType)

    if (sortType === 'Ratings') {
      fetch('https://game-review-server-sandy.vercel.app/all-reviews?ratings="sortratings"')
        .then(res => res.json())
        .then(data => {
          setReviews(data)
        })
    }

    if (sortType === 'Years') {
      fetch('https://game-review-server-sandy.vercel.app/all-reviews?years="sortyears"')
        .then(res => res.json())
        .then(data => {
          setReviews(data)
        })
    }

  }

  const handleFilter = (filterType) => {

    setFilter(filterType)
    if (filterType === "Action") {
      fetch('https://game-review-server-sandy.vercel.app/all-reviews?action=Action')
        .then(res => res.json())
        .then(data => {
          setReviews(data)
        })
    }

    if (filterType === "RPG") {
      fetch('https://game-review-server-sandy.vercel.app/all-reviews?rpg=RPG')
        .then(res => res.json())
        .then(data => {
          setReviews(data)
        })
    }

    if (filterType === "Adventure") {
      fetch('https://game-review-server-sandy.vercel.app/all-reviews?adventure=Adventure')
        .then(res => res.json())
        .then(data => {
          setReviews(data)
        })
    }
  }

  return (
    <div >
      <header>
        <NavBar />
      </header>
      <div className="flex justify-between items-center mt-20 w-9/12 mx-auto">
        <h2 className="text-[#FFC311] font-bold md:text-3xl text-lg mt-8 mb-8  uppercase"><Typewriter
          words={['All Reviews']}
          loop={true}
          cursor
          cursorStyle='|'
          typeSpeed={100}
          deleteSpeed={50}
          delaySpeed={2000}
        /></h2>


        <div>

          <details className="dropdown ">
            <summary className="btn bg-black text-xs   md:text-base text-white hover:bg-black rounded-none m-1">{filter ? filter : "Filter By"}</summary>
            <ul className="menu dropdown-content bg-[#FFC311] text-white rounded-none z-[1] w-52 p-2 shadow">
              <li onClick={() => handleFilter('Action')}><a>Action</a></li>
              <li onClick={() => handleFilter('RPG')}><a>RPG</a></li>
              <li onClick={() => handleFilter('Adventure')}><a>Adventure</a></li>
            </ul>
          </details>

          <details className="dropdown ">
            <summary className="btn text-xs  md:text-base bg-[#FFC311] text-white hover:bg-[#FFC311] rounded-none m-1">{sort ? sort : "Sort By"}</summary>
            <ul className="menu dropdown-content bg-[#FFC311] text-white rounded-none z-[1] w-52 p-2 shadow">
              <li onClick={() => handleSort('Ratings')}><a>Ratings</a></li>
              <li onClick={() => handleSort('Years')}><a>Years</a></li>
            </ul>
          </details>
        </div>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 grid-cols-1 place-items-center  gap-10 w-11/12 xl:w-9/12 mx-auto mb-10 ">
        {
          review.map(r => <ReviewCard key={r._id} r={r}></ReviewCard>)
        }
      </div>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default AllReview;

