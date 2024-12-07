
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import { useContext, useEffect, useState } from "react";
import { authContext } from "../provider/AuthProvider";
import WatchListsTable from "../components/WatchListsTable";


const WatchList = () => {
  const { user } = useContext(authContext)
  const [watchLists,setWatchLists] = useState([])


  useEffect(() => {
    fetch(`http://localhost:5000/watchlists/${user.email}`)
    .then(res=> res.json())
      .then(data => {
        console.log(data);
        setWatchLists(data)
    })
  },[user.email])
  return (
    <div>
      <header>
        <NavBar/>
      </header>
      <div>
        <h2 className="text-[#FFC311] font-bold text-3xl mt-8 mb-8 text-center">My WatchLists</h2>
      </div>
      <main className="my-10">
        {
          watchLists.map(w => <WatchListsTable key={w._id} watchLists={watchLists} setWatchLists={setWatchLists} w={w} />)
       }
      </main>
      <footer>
        <Footer/>
      </footer>
    </div>
  );
};

export default WatchList;