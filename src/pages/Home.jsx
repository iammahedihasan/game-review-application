import { useEffect, useState } from "react";
import SortByRatings from "../components/SortByRatings";


const Home = () => {
  const [sort,setSort] = useState([])

  useEffect(() => {
    fetch('http://localhost:5000/all-reviews?sortBy="rating"')
      .then(res => res.json())
      .then(data => {
        setSort(data)
        console.log(data);
      })
  }, [])
  
  
  return (
    <div className="w-10/12 mx-auto mb-44 mt-20">
      <div>
        <h2 className="bg-[#FFC311] py-2 font-bold text-3xl mt-8 mb-8 text-center text-white">Highest Rated Games</h2>
      </div>
      <main className="grid grid-cols-4 gap-3 ">
        {
          sort.map(ratings=> <SortByRatings key={ratings._id} ratings={ratings}></SortByRatings>)
        }
      </main>
    </div>
  );
};

export default Home;