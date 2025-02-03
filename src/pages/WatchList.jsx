
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import { useContext, useEffect, useState } from "react";
import { authContext } from "../provider/AuthProvider";
import WatchListsTable from "../components/WatchListsTable";
import { Typewriter } from "react-simple-typewriter";


const WatchList = () => {
  const { user } = useContext(authContext)
  const { email } = user
  const [watchLists, setWatchLists] = useState([])


  useEffect(() => {
    fetch(`https://game-review-server-sandy.vercel.app/watchlists/${email}`)
      .then(res => res.json())
      .then(data => {

        setWatchLists(data)
      })
  }, [email])
  return (
    <div>
      <header>
        <NavBar />
      </header>
      <div className="mt-28">
        <h2 className="text-[#FFC311] font-bold text-3xl mt-8 mb-8 text-center uppercase"><Typewriter
          words={['My WatchLists']}
          loop={true}
          cursor
          cursorStyle='|'
          typeSpeed={100}
          deleteSpeed={50}
          delaySpeed={2000}
        /></h2>
      </div>
      <main className=" min-h-[calc(100vh-388px)] mb-8">
        {
          watchLists.map(w => <WatchListsTable key={w._id} watchLists={watchLists} setWatchLists={setWatchLists} w={w} />)
        }
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default WatchList;